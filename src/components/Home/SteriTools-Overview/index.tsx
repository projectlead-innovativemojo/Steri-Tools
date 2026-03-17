"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Text from "@/ui/Text";

import bacteriaImg from "@/public/images/overview/bacteria.svg";
import surgicalImg from "@/public/images/overview/material-symbols_surgical.svg";
import avgTimeImg from "@/public/images/overview/material-symbols_avg-time-rounded.svg";
import batteryImg from "@/public/images/overview/entypo_battery.svg";
import personMilitaryImg from "@/public/images/overview/fa6-solid_person-military-to-person.svg";

const SEPARATOR_COLOR = "#E1B43E";

const OVERVIEW_SLIDES = [
  {
    icon: bacteriaImg,
    text: "Removes bioburden and bacteria from surgical instruments in real time during procedures",
  },
  {
    icon: surgicalImg,
    text: "Surgical instruments are maintained in prime condition on the sterile field.",
  },
  {
    icon: avgTimeImg,
    text: "Reduces the workload in sterile processing after surgery which improves tray turnover and saves valuable time.",
  },
  {
    icon: batteryImg,
    text: "Lightweight, portable and battery powered",
  },
  {
    icon: personMilitaryImg,
    text: "Designed for military and civilian use",
  },
];

const SteriToolsOverview = () => {
  return (
    <div className="w-full max-w-[1237px] px-5 lg:px-0 mx-auto  mb-[74px]  md:mb-[80px]">

      {/* Desktop - 5-feature layout */}
      <div className="w-full max-w-[1240px] mx-auto bg-white rounded-[24px] md:block hidden overflow-hidden">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-center items-stretch w-full min-w-0">
          <div className="flex flex-1 min-w-0 flex-col items-center justify-center text-center py-6 md:py-0 md:px-2">
            <div className="flex flex-col items-center gap-[15px] w-full min-w-0 max-w-[397px] pb-6 pt-3 px-2">
              <Image src={bacteriaImg} alt="" width={60} height={47} className="w-16 h-[47px] object-contain shrink-0" />
              <Text className="text-[#4A5568] md:text-[14px] md:leading-[20px] font-medium text-center min-w-0">
                Removes bioburden and bacteria from surgical instruments in real time during procedures
              </Text>
            </div>
          </div>
          {/*  line separator */}
          <div className="hidden md:flex flex-shrink-0 items-stretch px-[12.5px] py-6 md:py-0">
            <div className="w-px self-stretch shrink-0" style={{ backgroundColor: SEPARATOR_COLOR }} />
          </div>
          <div className="flex flex-1 min-w-0 flex-col items-center justify-center text-center py-6 md:py-0 md:px-2">
            <div className="flex flex-col items-center gap-[15px] w-full min-w-0 max-w-[397px] pb-6 pt-3 px-2">
              <Image src={surgicalImg} alt="" width={32} height={32} className="w-8 h-8 mt-4 object-contain shrink-0" />
              <Text className="text-[#4A5568] md:text-[14px] md:leading-[20px] font-medium text-center min-w-0">
                Surgical instruments are maintained in prime condition on the sterile field.
              </Text>
            </div>
          </div>
          {/*  line separator */}
          <div className="hidden md:flex flex-shrink-0 items-stretch px-[12.5px] py-6 md:py-0">
            <div className="w-px self-stretch shrink-0" style={{ backgroundColor: SEPARATOR_COLOR }} />
          </div>
          <div className="flex flex-1 min-w-0 flex-col items-center justify-center text-center py-6 md:py-0 md:px-2">
            <div className="flex flex-col items-center gap-[15px] w-full min-w-0 max-w-[397px] pb-6 pt-3 px-2">
              <Image src={avgTimeImg} alt="" width={32} height={32} className="w-8 h-8 mt-4 object-contain shrink-0" />
              <Text className="text-[#4A5568] md:text-[14px] md:leading-[20px] font-medium text-center min-w-0">
                Reduces the workload in sterile processing after surgery which improves tray turnover and saves valuable time.
              </Text>
            </div>
          </div>
        </div>

        {/* Horizontal separator*/}
        <div className="px-[12.5px]" style={{ borderTop: `1px solid ${SEPARATOR_COLOR}` }} />

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-[820px] mx-auto min-w-0">
          <div className="flex flex-1 min-w-0 flex-col items-center justify-center text-center py-6 md:py-0 md:px-2">
            <div className="flex flex-col items-center gap-[15px] w-full min-w-0 max-w-[397px] pt-[27px] pb-[30px] px-2">
              <Image src={batteryImg} alt="" width={32} height={32} className="w-8 h-8 object-contain shrink-0" />
              <Text className="text-[#4A5568] md:text-[14px] md:leading-[20px] font-medium text-center min-w-0">
                Lightweight, portable and battery powered
              </Text>
            </div>
          </div>
          {/*  line separator */}
          <div className="hidden md:flex flex-shrink-0 items-stretch px-[12.5px] py-6 md:py-0">
            <div className="w-px self-stretch shrink-0" style={{ backgroundColor: SEPARATOR_COLOR }} />
          </div>
          <div className="flex flex-1 min-w-0 flex-col items-center justify-center text-center py-6 md:py-0 md:px-2">
            <div className="flex flex-col items-center gap-[15px] w-full min-w-0 max-w-[397px] pt-[27px] pb-[30px] px-2">
              <Image src={personMilitaryImg} alt="" width={32} height={32} className="w-8 h-8 object-contain shrink-0" />
              <Text className="text-[#4A5568] md:text-[14px] md:leading-[20px] font-medium text-center min-w-0">
                Designed for military and civilian use
              </Text>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile - overview slider */}
      <div className="w-full md:hidden block mt-[46px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="overview-swiper "
        >
          {OVERVIEW_SLIDES.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-center bg-white rounded-[24px]  min-h-[102px]">
                <Image
                  src={slide.icon}
                  alt=""
                  width={60}
                  height={47}
                  className="w-16 h-[47px] object-contain shrink-0 mb-4"
                />
                <Text className="text-[#4A5568] text-[14px] leading-[20px] font-medium text-center max-w-[320px] mx-auto">
                  {slide.text}
                </Text>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact Us button - navigates to contact page */}
      <div className="md:mt-[70px] mt-[74px] flex justify-center px-5 md:px-0">
        <Link
          href="/contact-us"
          className="inline-flex items-center bg-brand-yellow cursor-pointer border-[#EDD98A] border-[2px] justify-center px-8 py-4 rounded-[8px] font-dmSans font-bold text-[18px] leading-[26px] text-[#14205A] h-[50px] w-full max-w-[290px]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default SteriToolsOverview;
