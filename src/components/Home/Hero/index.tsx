import React from "react";
import Image from "next/image";

import Text from "@/ui/Text";
import bg from "@/public/images/home/herobg.png";
const HomeHero = () => {
  return (
    <div className="w-full max-w-[1237px] mx-auto relative mt-[73px] mb-[50px] px-5">
      <Image
        src={bg}
        alt="image"
        className="absolute w-full h-full min-h-[655px] rounded-[24px] left-0"
      />
      <div className="w-full h-full homegradient absolute rounded-[24px] left-0"></div>
      <div className="relative flex justify-center items-center h-full min-h-[655px] w-full max-w-[854px] px-6">
        <Text as="h1" className="text-[#fff]">
          Designed to{" "}
          <span className="text-[#EDD98A]">
            {" "}
            Reduce Bioburden, Microbial Load and Surgical Site Infections{" "}
          </span>{" "}
          — Without Impeding Surgical Flow
        </Text>
      </div>
    </div>
  );
};

export default HomeHero;
