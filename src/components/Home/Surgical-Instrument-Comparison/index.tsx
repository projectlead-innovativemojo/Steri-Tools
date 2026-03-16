"use client";

import React from "react";

import Text from "@/ui/Text";
import Image from "next/image";

import beforesoak from "@/public/images/home/Before_After SteriBasin Go 1.jpg";
import aftersoak from "@/public/images/home/Before_After SteriBasin Go 2.jpg";


const SurgicalInstrumentComparison = () => {
  return (
    <>

      {/*  Card 1 */}
      <div className="relative flex justify-center md:flex-row flex-col items-center px-5 md:py-[73px] py-[108px] gap-0 mt-[64px]  mb-[46px] md:mb-[46px] bg-[#14205A] w-full md:min-h-[544px] rounded-[24px] mx-auto">
        <div className="w-full max-w-[1240px] mx-auto">

          <div className="flex flex-row gap-[14px] md:gap-[24px] w-full">
            {/* Before Card */}
            <div className="flex flex-1 min-w-0 flex-col items-center">
              <div className="relative w-full overflow-hidden  aspect-[608/307] max-h-[307px]">
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
            {/* After Card */}
            <div className="flex flex-1 min-w-0 flex-col items-center">
              <div className="relative w-full overflow-hidden  aspect-[608/307] max-h-[307px]">
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
      </div>


    </>
  );
};

export default SurgicalInstrumentComparison;
