"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/ui/Text";
import Image from "next/image";

import beforesoak from "@/public/images/home/Before_After SteriBasin Go 1.jpg";
import aftersoak from "@/public/images/home/Before_After SteriBasin Go 2.jpg";
import nailbeforesoak from "@/public/images/home/nail-before.png";
import nailafteresoak from "@/public/images/home/nail-after.png";
import scissorbeforesoak from "@/public/images/home/siccossr-before.png";
import scissoraftersoak from "@/public/images/home/siccossr-after.png";
import toolsbeforesoak from "@/public/images/home/tool-before.png";
import toolsafteresoak from "@/public/images/home/tool-after.png";

import type { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cardBaseClass =
  "absolute left-1/2 -translate-x-1/2 w-[100vw] max-w-none flex justify-center md:flex-row flex-col items-center px-5 md:py-[73px] py-[108px] gap-0 bg-[#14205A] md:min-h-[544px] rounded-[24px] shadow-[0_0_30px_rgba(0,0,0,0.1)] origin-top will-change-transform box-border";

type CardContentProps = {
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
};

const CardContent = ({ beforeImage, afterImage }: CardContentProps) => (
  <>
    <div className="w-full max-w-[1240px] mx-auto">
      <div className="flex flex-row gap-[14px] md:gap-[24px] w-full">
        <div className="flex flex-1 min-w-0 flex-col items-center">
          <div className="relative w-full overflow-hidden aspect-[608/307] max-h-[307px] bg-white">
            <Image
              src={beforeImage}
              alt="Before soaking in basin with water"
              width={608}
              height={307}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 50vw, 608px"
            />
          </div>
          <div className="flex w-full min-h-[90px] md:min-h-[110px] items-center justify-center bg-[#EEF5FF] px-2 py-4 md:py-5">
            <Text className="text-center md:text-[18px] text-[12px] leading-[20px] md:leading-[26px]">
              Before:
              <br />
              Instrument soaked in water
            </Text>
          </div>
        </div>
        <div className="flex flex-1 min-w-0 flex-col items-center">
          <div className="relative w-full overflow-hidden aspect-[608/307] max-h-[307px] bg-white">
            <Image
              src={afterImage}
              alt="After SteriBasin Go"
              width={608}
              height={307}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 50vw, 608px"
            />
          </div>
          <div className="flex w-full min-h-[90px] md:min-h-[110px] items-center justify-center bg-[#EEF5FF] px-2 py-4 md:py-5">
            <Text className="text-center md:text-[18px] text-[12px] leading-[20px] md:leading-[26px]">
              After: <br />
              Cleaned and desinfected in SteriBasin Go
            </Text>
          </div>
        </div>
      </div>
    </div>
  </>
);

const CARD_IMAGES: CardContentProps[] = [
  { beforeImage: beforesoak, afterImage: aftersoak },
  { beforeImage: nailbeforesoak, afterImage: nailafteresoak },
  { beforeImage: scissorbeforesoak, afterImage: scissoraftersoak },
  { beforeImage: toolsbeforesoak, afterImage: toolsafteresoak },
];

/** Viewport height ratio for the stacking "stage" (70% = leaves context above/below, avoids full-screen takeover) */
const SECTION_VIEWPORT_RATIO = 0.7;
/** Mobile: tighter ratio so section height matches card size and next section follows immediately */
const SECTION_VIEWPORT_RATIO_MOBILE = 0.6;

const GAP_TO_NEXT_SECTION = 64;
const GAP_TO_NEXT_SECTION_MOBILE = 46;
const SECTION_BUFFER = 120;
const SECTION_BUFFER_MOBILE = 0;
const SECTION_HEIGHT_MIN_DESKTOP = 680;
const SECTION_HEIGHT_MIN_MOBILE = 390;
const SCRUB_SMOOTH = 1.5;
const TWEEN_EASE = "power2.inOut";

const SurgicalInstrumentComparison = () => {
  const sectionWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionWrapper = sectionWrapperRef.current;
    const cards = cardsRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    if (!sectionWrapper || !cards || !card1 || !card2 || !card3 || !card4)
      return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const vh70 = window.innerHeight * SECTION_VIEWPORT_RATIO;
      const sectionHeight = Math.max(
        vh70 + GAP_TO_NEXT_SECTION + SECTION_BUFFER,
        SECTION_HEIGHT_MIN_DESKTOP
      );
      sectionWrapper.style.height = `${sectionHeight}px`;
      sectionWrapper.style.overflow = "hidden";

      gsap.set([card1, card2, card3, card4], { transformOrigin: "top center" });
      gsap.set(card1, { yPercent: 0, opacity: 1, scale: 1 });
      gsap.set(card2, { yPercent: 0, opacity: 1, scale: 1 });
      gsap.set(card3, { yPercent: 0, opacity: 1, scale: 1 });
      gsap.set(card4, { yPercent: 0, opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionWrapper,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: `+=${sectionHeight}`,
          scrub: SCRUB_SMOOTH,
          invalidateOnRefresh: true,

        },
      });

      const t = (vars: gsap.TweenVars) => ({ ease: TWEEN_EASE, ...vars });

      // Card 1 visible
      tl.addLabel("card1");
      tl.to(card1, t({ yPercent: 0, opacity: 1 }));

      // Card 2 enters from below; card 1 scales down and moves up
      tl.from(card2, t({ yPercent: 75, opacity: 0 }));
      tl.addLabel("card2");
      tl.to(card1, t({ scale: 0.925, yPercent: -0.75, opacity: 1 }), "-=0.3");
      tl.to(card2, t({ yPercent: 0, opacity: 1 }));

      // Card 3 enters; card 2 scales down and moves up
      tl.from(card3, t({ yPercent: 75, opacity: 0 }));
      tl.addLabel("card3");
      tl.to(card2, t({ scale: 0.95, yPercent: -0.5, opacity: 1 }), "-=0.3");
      tl.to(card3, t({ yPercent: 0, opacity: 1 }));

      // Card 4 enters; card 3 scales down and moves up
      tl.from(card4, t({ yPercent: 75, opacity: 0 }));
      tl.addLabel("card4");
      tl.to(card3, t({ scale: 0.98, yPercent: -0.4, opacity: 1 }), "-=0.3");
      tl.to(card4, t({ yPercent: 0, opacity: 1 }));

      // Final stacked state: all back cards scaled and shifted up
      tl.to(card1, t({ scale: 0.925, yPercent: -1.5, opacity: 0.9 }), "-=0.3");
      tl.to(card2, t({ scale: 0.95, yPercent: -1.125, opacity: 0.9 }), "-=0.3");
      tl.to(card3, t({ scale: 0.98, yPercent: -0.85, opacity: 0.9 }), "-=0.3");

      const st = tl.scrollTrigger;
      let resizeTicker: ReturnType<typeof setTimeout> | null = null;
      const onResize = () => {
        if (resizeTicker) return;
        resizeTicker = setTimeout(() => {
          resizeTicker = null;
          const vh = window.innerHeight * SECTION_VIEWPORT_RATIO;
          const newHeight = Math.max(
            vh + GAP_TO_NEXT_SECTION + SECTION_BUFFER,
            SECTION_HEIGHT_MIN_DESKTOP
          );
          sectionWrapper.style.height = `${newHeight}px`;
          if (st?.vars) st.vars.end = `+=${newHeight}`;
          ScrollTrigger.refresh();
        }, 150);
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        if (resizeTicker) clearTimeout(resizeTicker);
      };
    });

    mm.add("(max-width: 767px)", () => {
      const vhMobile = window.innerHeight * SECTION_VIEWPORT_RATIO_MOBILE;
      const sectionHeight = Math.max(
        vhMobile + GAP_TO_NEXT_SECTION_MOBILE + SECTION_BUFFER_MOBILE,
        SECTION_HEIGHT_MIN_MOBILE
      );
      sectionWrapper.style.height = `${sectionHeight}px`;
      sectionWrapper.style.overflow = "hidden";

      gsap.set([card1, card2, card3, card4], { transformOrigin: "top center" });
      gsap.set(card1, { yPercent: 0, opacity: 1, scale: 1 });
      gsap.set(card2, { yPercent: 0, opacity: 1, scale: 1 });
      gsap.set(card3, { yPercent: 0, opacity: 1, scale: 1 });
      gsap.set(card4, { yPercent: 0, opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionWrapper,
          pin: true,
          pinSpacing: true,
          start: "top 10%",
          end: `+=${sectionHeight}`,
          scrub: SCRUB_SMOOTH,
          invalidateOnRefresh: true,

        },
      });

      const t = (vars: gsap.TweenVars) => ({ ease: TWEEN_EASE, ...vars });

      tl.addLabel("card1");
      tl.to(card1, t({ yPercent: 0, opacity: 1 }));

      tl.from(card2, t({ yPercent: 75, opacity: 0 }));
      tl.addLabel("card2");
      tl.to(card1, t({ scale: 0.925, yPercent: -0.75, opacity: 1 }), "-=0.3");
      tl.to(card2, t({ yPercent: 0, opacity: 1 }));

      tl.from(card3, t({ yPercent: 75, opacity: 0 }));
      tl.addLabel("card3");
      tl.to(card2, t({ scale: 0.95, yPercent: -0.5, opacity: 1 }), "-=0.3");
      tl.to(card3, t({ yPercent: 0, opacity: 1 }));

      tl.from(card4, t({ yPercent: 75, opacity: 0 }));
      tl.addLabel("card4");
      tl.to(card3, t({ scale: 0.98, yPercent: -0.4, opacity: 1 }), "-=0.3");
      tl.to(card4, t({ yPercent: 0, opacity: 1 }));

      tl.to(card1, t({ scale: 0.925, yPercent: -1.5, opacity: 0.9 }), "-=0.3");
      tl.to(card2, t({ scale: 0.95, yPercent: -1.125, opacity: 0.9 }), "-=0.3");
      tl.to(card3, t({ scale: 0.98, yPercent: -0.85, opacity: 0.9 }), "-=0.3");

      const st = tl.scrollTrigger;
      let resizeTicker: ReturnType<typeof setTimeout> | null = null;
      const onResize = () => {
        if (resizeTicker) return;
        resizeTicker = setTimeout(() => {
          resizeTicker = null;
          const vh = window.innerHeight * SECTION_VIEWPORT_RATIO_MOBILE;
          const newHeight = Math.max(
            vh + GAP_TO_NEXT_SECTION_MOBILE + SECTION_BUFFER_MOBILE,
            SECTION_HEIGHT_MIN_MOBILE
          );
          sectionWrapper.style.height = `${newHeight}px`;
          if (st?.vars) st.vars.end = `+=${newHeight}`;
          ScrollTrigger.refresh();
        }, 150);
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        if (resizeTicker) clearTimeout(resizeTicker);
      };
    });

    return () => {
      if (sectionWrapperRef.current) {
        sectionWrapperRef.current.style.height = "";
        sectionWrapperRef.current.style.overflow = "";
      }
      mm.revert();
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden pt-0 md:pt-[70px]">
      <div
        ref={sectionWrapperRef}
        className="relative w-full mb-[60px] pt-[70px] md:pt-0 overflow-hidden min-h-[55vh] md:min-h-[70vh]"
      >
        <div
          ref={cardsRef}
          className="cards relative flex justify-center items-center w-full overflow-visible pb-6 min-h-[55vh] md:min-h-[70vh]"
        >
          <div
            ref={card1Ref}
            className={`${cardBaseClass} card1 top-0 z-[2]`}
            style={{ maxWidth: "none" }}
          >
            <CardContent {...CARD_IMAGES[0]} />
          </div>
          <div
            ref={card2Ref}
            className={`${cardBaseClass} card2 top-[30px] z-[3]`}
            style={{ maxWidth: "none" }}
          >
            <CardContent {...CARD_IMAGES[1]} />
          </div>
          <div
            ref={card3Ref}
            className={`${cardBaseClass} card3 top-[60px] z-[4]`}
            style={{ maxWidth: "none" }}
          >
            <CardContent {...CARD_IMAGES[2]} />
          </div>
          <div
            ref={card4Ref}
            className={`${cardBaseClass} card4 top-[90px] z-[5]`}
            style={{ maxWidth: "none" }}
          >
            <CardContent {...CARD_IMAGES[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgicalInstrumentComparison;
