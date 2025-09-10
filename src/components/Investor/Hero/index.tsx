import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import bg from "@/public/images/investor/investory-bg.png";

const InvestorHero = () => {
  return (
    <div className="w-full max-w-[1237px] mx-auto relative mt-[73px] mb-[70px] px-5">
      <Image
        src={bg}
        alt="image"
        className="absolute w-full h-full min-h-[545px] rounded-[24px] left-0"
      />
      <div className="w-full h-full left-0 homegradient absolute rounded-[24px] "></div>
      <div className="relative flex justify-center items-center h-full min-h-[545px] w-full text-center px-6">
        <Text as="h1" className="text-[#fff]">
          Exclusive
          <span className="text-[#EDD98A]"> Investor Access </span>
        </Text>
      </div>
    </div>
  );
};

export default InvestorHero;
