import React from "react";
import Image from "next/image";

import Text from "@/ui/Text";

import bg from "@/public/images/investor/thanks-bg.png";

const ThanksSection = () => {
  return (
    <div className="relative w-full bg-[#14205A] mx-auto min-h-[338px] md:min-h-[446px] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="bg"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 homegradient-0deg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <Text className="font-montserrat text-white text-[22px] md:text-[28px] leading-[28px] md:leading-[34px] font-medium text-center max-w-[382px] md:max-w-[869px] w-full">
          Thank you for your trust and for being part of this initiative.
        </Text>
      </div>
    </div>
  );
};

export default ThanksSection;
