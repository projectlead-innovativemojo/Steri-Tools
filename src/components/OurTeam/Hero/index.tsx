import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import bg from "@/public/images/team/teambg.png";
const TeamHero = () => {
  return (
    <div className="w-full max-w-[1237px] mx-auto relative mt-[73px] mb-[70px] px-5">
      <Image
        src={bg}
        alt="image"
        className="absolute w-full h-full min-h-[545px] rounded-[24px]"
      />
      <div className="w-full h-full homegradient absolute rounded-[24px]"></div>
      <div className="relative flex justify-center items-center h-full min-h-[545px] w-full text-center px-6">
        <Text as="h1" className="text-[#fff]">
          Our
          <span className="text-[#EDD98A]"> Team </span>
        </Text>
      </div>
    </div>
  );
};

export default TeamHero;
