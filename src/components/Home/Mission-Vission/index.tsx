import React from "react";
import Image from "next/image";

import Text from "@/ui/Text";

import missionBg from "@/public/images/home/mission-vission-bg.png";
import deviceImg from "@/public/images/home/sterlitool-misson.png";
import blueRingBg from "@/public/images/home/blue-double-ring.svg";
import yellowRingBg from "@/public/images/home/yellow-double-ring.svg";
import blueYellowRing from "@/public/images/home/blue-yellow-ring.svg";

const MissionVision = () => {
  return (
    <div className="relative w-full bg-[#14205A] mx-auto">
      {/* Background */}
      <Image
        src={missionBg}
        alt="Operating room background"
        fill
        priority
        className="object-cover"
      />
      <div className="w-full h-full homegradient-0deg absolute"></div>

      {/* Content */}
      <div className="relative w-full max-w-[1240px] mx-auto z-10 flex flex-col lg:flex-row items-center gap-[21px] md:gap-[23px] pt-[55px] pb-[79px] md:py-[183px] justify-center px-5 ">
        {/* Double Yelllow Rings BG */}
        <Image
          src={yellowRingBg}
          alt="Rings Background"
          className="absolute z-0 object-contain pointer-events-none max-w-[94px] md:max-w-[127px] left-[30px] md:left-[0] top-[30px] md:top-[89px] "
        />

        {/* Blue Yellow Rings BG */}
        <Image
          src={blueYellowRing}
          alt="Rings Background"
          className="absolute object-contain pointer-events-none  max-w-[85px] md:max-w-[132px]  right-[10px] md:right-[0] bottom-[30px] md:bottom-[21px] "
        />

        {/* Double Blue Rings BG */}
        <Image
          src={blueRingBg}
          alt="Rings Background"
          className="absolute object-contain pointer-events-none left-[373px]  bottom-[120px] hidden lg:block"
        />

        {/* Left: device image */}
        <div className="flex-1 z-10  w-full  max-w-[382px] md:max-w-[592px] flex justify-center">
          <Image
            src={deviceImg}
            alt="SteriTools device"
            className="w-full max-w-[592px]"
          />
        </div>

        {/* Right: cards */}
        <div className="flex-1 z-10 w-full max-w-[502px] text-white space-y-[50px] md:space-y-[95px]">
          {/* Mission */}
          <div className="px-[30px] py-[15px] bg-[#14205A]">
            <Text className="font-montserrat text-[#fff] text-center font-bold text-[28px] md:text-[28px] leading-[34px] md:leading-[34px] tracking-[-0.25%] mb-[30px]">
              Mission Statement
            </Text>
            <Text className="text-[18px] leading-[26px] text-center md:text-left">
              SteriTools, LLC is dedicated to reducing the global incidence of
              surgical site infections (SSI) by creating and developing
              innovative intraoperative disinfection technologies in order to
              improve the safety and lives of surgical patients around the
              world.
            </Text>
          </div>

          {/* Vision */}
          <div className="px-[30px] py-[15px] bg-[#14205A]">
            <Text className="font-montserrat text-[#fff] text-center font-bold text-[28px] md:text-[28px] leading-[34px] md:leading-[34px] tracking-[-0.25%] mb-[30px]">
              Vision Statement
            </Text>
            <Text className="text-[18px] leading-[26px] text-center md:text-left">
              Mitigate the problems associated with Surgical Site Infections
              across the globe. Using innovation to force multiply simple,
              inexpensive intraoperative disinfection devices in order to save
              lives, improve outcomes and save health care dollars.
              <br />
              <br />
              In collaboration with: EEE Corp Group, TestLabs, Northsky Design
              Limited, Henry Jackson Foundation for the Advancement of Military
              Medicine.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
