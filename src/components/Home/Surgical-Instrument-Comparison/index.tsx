"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/ui/Text";
import Image from "next/image";

import beforesoak from "@/public/images/home/Before_After SteriBasin Go 1.jpg";
import aftersoak from "@/public/images/home/Before_After SteriBasin Go 2.jpg";

gsap.registerPlugin(ScrollTrigger);

const STACK_GAP_DESKTOP = 24;
const STACK_GAP_MOBILE = 12;
const cardClass =
  "relative flex justify-center md:flex-row flex-col items-center px-5 md:py-[73px] py-[108px] gap-0 bg-[#14205A] w-full md:min-h-[544px] rounded-[24px] mx-auto shadow-lg";

const CardContent = () => (
  <>
    <div className="w-full max-w-[1240px] mx-auto">
      <div className="flex flex-row gap-[14px] md:gap-[24px] w-full">
        <div className="flex flex-1 min-w-0 flex-col items-center">
          <div className="relative w-full overflow-hidden aspect-[608/307] max-h-[307px]">
            <Image
              src={beforesoak}
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
          <div className="relative w-full overflow-hidden aspect-[608/307] max-h-[307px]">
            <Image
              src={aftersoak}
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

const SurgicalInstrumentComparison = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pinWrapper = pinWrapperRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    if (!section || !pinWrapper || !card1 || !card2 || !card3 || !card4) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const stackGap = isMobile ? STACK_GAP_MOBILE : STACK_GAP_DESKTOP;

    // Stacking cards start below; final y = gap each (0, -gap, -2*gap, -3*gap)
    gsap.set([card2, card3, card4], { yPercent: 100, opacity: 0.7 });

    // Section height = only scroll needed to center card1 then run stack
    const topSpacerVh = 20;
    const scrollToCenterVh = 35;
    const pinScrollDistance = isMobile ? 55 : 70; // slightly less scroll on mobile (smaller cards)
    const sectionHeightVh = topSpacerVh + scrollToCenterVh + pinScrollDistance;
    gsap.set(section, { height: `${sectionHeightVh}vh` });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card1,
        start: "center center",
        end: `+=${pinScrollDistance}vh`,
        scrub: 1.2,
        pin: pinWrapper,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        pinSpacing: false,
      },
    });

    // One card stacks fully before the next starts (sequential); tighter gap on mobile
    tl.to(card2, {
      yPercent: 0,
      y: -stackGap * 1,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    })
      .to(
        card3,
        {
          yPercent: 0,
          y: -stackGap * 2,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        ">"
      )
      .to(
        card4,
        {
          yPercent: 0,
          y: -stackGap * 3,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        ">"
      );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      {/* Spacer so card 1 can scroll up to center before sticking */}
      <div className="h-[20vh] shrink-0" aria-hidden />
      <div
        ref={pinWrapperRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-8"
      >
        <div className="relative w-full max-w-[1240px] mx-auto min-h-[400px] flex flex-col items-center justify-center gap-0">
          {/* Card 1 - sticks in center, back of stack */}
          <div
            ref={card1Ref}
            className={`${cardClass} z-[1] md:mb-0 mb-4`}
            style={{ maxWidth: "1240px" }}
          >
            <CardContent />
          </div>

          {/* Cards 2–4 - scroll up and stack with 24px gap */}
          <div
            ref={card2Ref}
            className={`${cardClass} z-[2] absolute left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-full`}
            style={{ maxWidth: "1240px", top: "50%", marginTop: "-520px" }}
          >
            <CardContent />
          </div>
          <div
            ref={card3Ref}
            className={`${cardClass} z-[3] absolute left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-full`}
            style={{ maxWidth: "1240px", top: "50%", marginTop: "-520px" }}
          >
            <CardContent />
          </div>
          <div
            ref={card4Ref}
            className={`${cardClass} z-[4] absolute left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-full`}
            style={{ maxWidth: "1240px", top: "50%", marginTop: "-520px" }}
          >
            <CardContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgicalInstrumentComparison;
