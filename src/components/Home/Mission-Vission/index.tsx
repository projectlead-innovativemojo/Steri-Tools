import React from "react";
import Image from "next/image";

import Text from "@/ui/Text";

import missionBg from "@/public/images/home/mission-vission-bg.png";
import blueYellowCircleMission from "@/public/images/home/blue-yellow-circle-mission.svg";
import yellowDoubleRingMission from "@/public/images/home/double-yellow-circle-mission.svg";

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
      <div className="relative w-full max-w-[1240px] mx-auto z-10 flex flex-col lg:flex-row items-center gap-[21px] md:gap-[23px] py-[97px] md:py-[104px] justify-center px-5 ">

        {/* Double Yelllow Rings BG */}
        <Image
          src={blueYellowCircleMission}
          alt="Rings Background"
          className="absolute z-0 object-contain pointer-events-none max-w-[94px] md:max-w-[127px] left-[30px] md:left-[0] top-[30px] md:top-[35px] md:block hidden"
        />

        {/* Double Yelllow Rings BG */}
        <Image
          src={blueYellowCircleMission}
          alt="Rings Background"
          className="absolute z-0 object-contain pointer-events-none max-w-[94px] md:max-w-[127px] right-[30px] md:right-[0] top-[30px] md:top-[35px] md:block hidden"
        />

        {/* Blue Yellow Rings BG */}
        <Image
          src={yellowDoubleRingMission}
          alt="Rings Background"
          className="absolute object-contain pointer-events-none  max-w-[85px] md:max-w-[132px]  right-[10px] md:right-[167px] bottom-[30px] md:bottom-[0px] md:block hidden"
        />

        {/* Blue Yellow Rings BG */}
        <Image
          src={yellowDoubleRingMission}
          alt="Rings Background"
          className="absolute object-contain pointer-events-none  max-w-[85px] md:max-w-[132px]  left-[10px] md:left-[167px] bottom-[30px] md:bottom-[0px] md:block hidden"
        />




        <div className=" text-center relative max-w-[1240px] mx-auto z-20 ">
          <Text className="font-montserrat text-white font-semibold text-[22px] md:text-[36px] leading-[28px] md:leading-[40px] tracking-[-0.25%] md:mb-[53px] mb-[30px]">
            Reducing SSI rates
          </Text>
          <Text className="text-white font-montserrat font-medium text-[16px] md:text-[22px] leading-[28px] ">
            SteriTools, LLC is dedicated to reducing the global incidence of
            surgical site infections (SSI) by creating and developing innovative
            intraoperative disinfection technologies in order to improve the
            safety and lives of surgical patients around the world.
          </Text>
        </div>


      </div>
    </div >
  );
};

export default MissionVision;
