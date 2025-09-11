import React from "react";
import Image from "next/image";

import Text from "@/ui/Text";
import bg from "@/public/images/home/herobg.png";
const HomeHero = () => {
  return (
    <div className="w-full max-w-[1237px] mx-auto relative mt-[41px] md:mt-[57px] mb-[27px] md:mb-[50px] px-5">
      <Image
        src={bg}
        alt="image"
        className="absolute object-cover w-full h-full min-h-[506px] md:min-h-[655px] rounded-[24px] left-0"
      />
      <div className="w-full h-full homegradient absolute rounded-[24px] left-0"></div>
      <div className="relative pb-[23px] flex justify-center items-end md:items-center h-full min-h-[506px] md:min-h-[655px] w-full max-w-[805px]">
        <Text as="h1" className="text-[#fff] md:text-left text-center">
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
