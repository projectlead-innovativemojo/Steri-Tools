import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import missionBg from "@/public/images/home/mission-vission-bg.png";
import deviceImg from "@/public/images/home/sterlitool-misson.png";

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
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#14205A]/85 via-[#14205A]/60 to-[#14205A]/90" /> */}
      <div className="w-full h-full homegradient-0deg absolute"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-[23px] py-[183px] justify-center ">
        {/* Left: device image */}
        <div className="flex-1  w-full max-w-[592px] flex justify-center">
          <Image
            src={deviceImg}
            alt="SteriTools device"
            className="w-full max-w-[592px]"
          />
        </div>

        {/* Right: cards */}
        <div className="flex-1 w-full max-w-[502px] text-white space-y-[95px]">
          {/* Mission */}
          <div className="px-[30px] py-[15px] bg-[#14205A]">
            <Text className="font-montserrat text-[#fff] text-center font-bold md:text-[28px] md:leading-[34px] tracking-[-0.25%] mb-[30px]">
              Mission Statement
            </Text>
            <Text>
              SteriTools, LLC is dedicated to reducing the global incidence of
              surgical site infections (SSI) by creating and developing
              innovative intraoperative disinfection technologies in order to
              improve the safety and lives of surgical patients around the
              world.
            </Text>
          </div>

          {/* Vision */}
          <div className="px-[30px] py-[15px] bg-[#14205A]">
            <Text className="font-montserrat text-[#fff] text-center font-bold md:text-[28px] md:leading-[34px] tracking-[-0.25%] mb-[30px]">
              Vision Statement
            </Text>
            <Text>
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
