import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import bg from "@/public/images/story/story-bg.jpg";
const StoryHero = () => {
  return (
    <div className="w-full max-w-[1237px] mx-auto relative mt-[38px] md:mt-[60px] mb-[114px] md:mb-[70px] px-5">
      <Image
        src={bg}
        alt="image"
        className="absolute object-cover w-full h-full min-h-[538px] md:min-h-[545px] rounded-[24px] left-0"
      />
      <div className="w-full h-full left-0 homegradient absolute rounded-[24px] "></div>
      <div className="relative flex justify-center pb-[199px] md:pb-[0] items-end md:items-center h-full min-h-[538px] md:min-h-[545px] w-full text-center px-6">
        <Text as="h1" className="text-[#fff]">
          Our
          <span className="text-[#EDD98A]"> Story </span>
        </Text>
      </div>
    </div>
  );
};

export default StoryHero;
