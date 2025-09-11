"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

import nailbeforesoak from "@/public/images/home/nail-before-soak.svg";
import nailafteresoak from "@/public/images/home/nail-after-soak.svg";
import scissorbeforesoak from "@/public/images/home/scissor-before.svg";
import scissoraftersoak from "@/public/images/home/scissor-after.svg";
import microbialbeforesoak from "@/public/images/home/micobial-before.svg";
import microbialaftersoak from "@/public/images/home/micorbial-after.svg";
import scisso2beforesoak from "@/public/images/home/scissor-2-before.svg";
import scisso2aftersoak from "@/public/images/home/scissor-2-after.svg";
import navLeft from "@/public/images/team/ArrowCircleLeft.svg";
import navRight from "@/public/images/team/ArrowCircleRight.svg";
import ringsOverlay from "@/public/images/home/circle-rings.svg";

const slides = [
  { before: nailbeforesoak, after: nailafteresoak },
  { before: scissorbeforesoak, after: scissoraftersoak },
  { before: microbialbeforesoak, after: microbialaftersoak },
  { before: scisso2beforesoak, after: scisso2aftersoak },
];

const SurgicalInstrumentsSlider = () => {
  return (
    <div className="w-full max-w-[525px]">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".nav-team-right",
          prevEl: ".nav-team-left",
        }}
        loop={true}
        spaceBetween={16}
        slidesPerView={1}
      >
        {slides.map((tool, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-[#14205A] text-white md:p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={tool.before}
                    alt="Before soaking in basin with water"
                    width={240}
                    height={240}
                    className="w-full h-[286px]"
                  />
                  <p className="text-center text-xs mt-2">
                    Before soaking in basin with water
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={tool.after}
                    alt="After SteriBasin Go"
                    width={240}
                    height={240}
                    className="w-full h-[286px] "
                  />
                  <p className="text-center text-xs mt-2">
                    After SteriBasin Go
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation buttons below slider */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <button aria-label="Previous" className="nav-team-left p-1">
          <Image src={navLeft} alt="Previous slide" width={32} height={32} />
        </button>
        <button aria-label="Next" className="nav-team-right p-1">
          <Image src={navRight} alt="Next slide" width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default SurgicalInstrumentsSlider;
