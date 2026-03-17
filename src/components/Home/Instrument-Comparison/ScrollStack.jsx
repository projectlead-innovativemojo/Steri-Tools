import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

const isSafariBrowser = () => {
  if (typeof navigator === "undefined") return false;

  const ua = navigator.userAgent;
  return /Safari/i.test(ua) && !/Chrome|Chromium|CriOS|Android/i.test(ua);
};

const isMobileSafari = () => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return (
    /iPhone|iPad|iPod/i.test(ua) &&
    /Safari/i.test(ua) &&
    !/Chrome|CriOS/i.test(ua)
  );
};

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "12%",
  scaleEndPosition = "0%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
  /** 0–1: when stack releases (1 = release when end is at bottom). Lower = release earlier, less scroll. */
  pinEndMultiplier = 0.96,
}) => {
  const isSafari = isSafariBrowser();
  const isMobile = isMobileSafari();
  const scrollerRef = useRef(null);
  const innerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const isUpdatingRef = useRef(false);
  const transformRafRef = useRef(null);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element) => {
      if (useWindowScroll) {
        const inner =
          innerRef.current ||
          scrollerRef.current?.querySelector(".scroll-stack-inner");
        if (!inner) {
          const rect = element.getBoundingClientRect();
          return rect.top + window.scrollY;
        }
        let offsetFromInner = 0;
        let el = element;
        while (el && el !== inner) {
          offsetFromInner += el.offsetTop;
          el = el.offsetParent;
        }
        const innerTop = inner.getBoundingClientRect().top + window.scrollY;
        return innerTop + offsetFromInner;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll],
  );

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    /* Phase 1: all layout reads (avoid read-write interleaving / layout thrash) */
    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight,
    );

    const endElement = useWindowScroll
      ? document.querySelector(".scroll-stack-end")
      : scrollerRef.current?.querySelector(".scroll-stack-end");

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    /* On narrow viewport, release stack earlier so section height feels shorter and next section starts sooner */
    const isNarrow =
      useWindowScroll &&
      typeof window !== "undefined" &&
      window.innerWidth <= 768;
    const effectivePinEndMultiplier = isNarrow ? 0.7 : pinEndMultiplier;

    const cardTops = [];
    for (let i = 0; i < cards.length; i++) {
      if (cards[i]) cardTops[i] = getElementOffset(cards[i]);
    }

    /* Phase 2: all writes (transforms) — no layout reads in this loop */
    let topCardIndex = 0;
    if (blurAmount) {
      for (let j = 0; j < cards.length; j++) {
        const jCardTop = cardTops[j];
        if (jCardTop == null) continue;
        const jTriggerStart =
          jCardTop - stackPositionPx - itemStackDistance * j;
        if (scrollTop >= jTriggerStart) topCardIndex = j;
      }
    }

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (!card) continue;

      const cardTop = cardTops[i];
      if (cardTop == null) continue;

      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd =
        endElementTop - containerHeight * effectivePinEndMultiplier;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd,
      );
      const targetScale = baseScale + i * itemScale;
      const easedScaleProgress =
        scaleProgress * scaleProgress * (3 - 2 * scaleProgress);
      const scale = 1 - easedScaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount && i < topCardIndex) {
        const depthInStack = topCardIndex - i;
        blur = Math.max(0, depthInStack * blurAmount);
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      const filter = blur > 0 ? `blur(${blur}px)` : "";

      card.style.transform = transform;
      card.style.filter = filter;
      card.style.zIndex = i;

      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    }

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    pinEndMultiplier,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ]);

  const handleScroll = useCallback(() => {
    /* On mobile Safari, run transform updates in next frame to avoid scroll jank */
    if (isMobile) {
      if (transformRafRef.current != null) return;
      transformRafRef.current = requestAnimationFrame(() => {
        transformRafRef.current = null;
        updateCardTransforms();
      });
    } else {
      updateCardTransforms();
    }
  }, [updateCardTransforms, isMobile]);

  const setupLenis = useCallback(() => {
    const safariLenisOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.06,
      syncTouch: false,
    };

    if (useWindowScroll) {
      const lenis = new Lenis(
        isSafari
          ? safariLenisOptions
          : {
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              smoothWheel: true,
              touchMultiplier: 2,
              infinite: false,
              wheelMultiplier: 1,
              lerp: 0.1,
              syncTouch: true,
              syncTouchLerp: 0.075,
            },
      );

      lenis.on("scroll", handleScroll);

      const raf = (time) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis(
        isSafari
          ? {
              wrapper: scroller,
              content: scroller.querySelector(".scroll-stack-inner"),
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              smoothWheel: true,
              touchMultiplier: 1,
              infinite: false,
              gestureOrientationHandler: true,
              normalizeWheel: true,
              wheelMultiplier: 1,
              lerp: 0.06,
              syncTouch: false,
            }
          : {
              wrapper: scroller,
              content: scroller.querySelector(".scroll-stack-inner"),
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              smoothWheel: true,
              touchMultiplier: 2,
              infinite: false,
              gestureOrientationHandler: true,
              normalizeWheel: true,
              wheelMultiplier: 1,
              touchInertiaMultiplier: 35,
              lerp: 0.1,
              syncTouch: true,
              syncTouchLerp: 0.075,
              touchInertia: 0.6,
            },
      );

      lenis.on("scroll", handleScroll);

      const raf = (time) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scroller.querySelectorAll(".scroll-stack-card"),
    );

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.zIndex = i;
      /* Mobile Safari: only promote transform to reduce layer cost and jank */
      card.style.willChange =
        isMobile && !blurAmount ? "transform" : "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      card.style.webkitTransform = "translateZ(0)";
      card.style.perspective = "1000px";
      card.style.webkitPerspective = "1000px";
    });

    setupLenis();

    updateCardTransforms();

    return () => {
      if (transformRafRef.current) {
        cancelAnimationFrame(transformRafRef.current);
        transformRafRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
  ]);

  const scrollerClassName = [
    "scroll-stack-scroller",
    !useWindowScroll && "scroll-stack-scroller--container",
    isSafari && "scroll-stack-scroller--safari",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={scrollerClassName} ref={scrollerRef}>
      <div className="scroll-stack-inner" ref={innerRef}>
        {children}
        {/* Marks pin end for release */}
        <div className="scroll-stack-end" />
        {/* Spacer so next section doesn't overlap stacked cards */}
        <div className="scroll-stack-spacer" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ScrollStack;
