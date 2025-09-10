import React from "react";
import Image from "next/image";

import Button from "@/ui/Button";
import Text from "@/ui/Text";

import deviceImg from "@/public/images/investor/invester-portal-device.png";
import yellowRing from "@/public/images/investor/yellow-double-ring.svg";

const PartnerAccess = () => {
  return (
    <div className="relative w-full max-w-[1237px] mx-auto px-5 mb-[53px] md:mb-[83px] ">
      {/* Welcome Text */}
      <Text className="font-montserrat tracking-[-0.2%] text-[22px] md:text-[28px] leading-[28px] md:leading-[34px] font-medium text-center md:mb-[66px] mb-[69px]">
        Welcome to the private page intended only for our investors and
        strategic partners.
        <br className="block md:hidden" />
        <br className="block md:hidden" />
        Here you will find key information, documents, and valuable materials
        related to the project.
      </Text>

      {/* Text */}
      <Text className="font-montserrat text-[18px] md:text-[22px] leading-[24px] md:leading-[28px] font-medium text-center md:mb-[19px] mb-[53px]">
        Access is restricted to individuals who have signed a{" "}
        <span className="text-[#EDD98A] font-semibold">
          Non-Disclosure Agreement (NDA)
        </span>{" "}
        with our team.
      </Text>

      {/* Text */}
      <Text className="font-montserrat text-[#EDD98A] md:text-[22px] md:leading-[28px] font-medium text-center mb-[74px] md:mb-[60px]">
        Click the button below to access the protected Google Drive folder
      </Text>

      <Image
        src={deviceImg}
        alt="image"
        className="w-full max-w-[382px] mx-auto"
      />

      <Button className="text-white bg-[#14205A] max-w-[260px] h-[60px] border-2 border-[#EDD98A] mt-[90px] mx-auto cursor-pointer">
        Access the Folder
      </Button>

      <div className="flex items-center justify-between max-w-[751px] w-full mx-auto mt-[28px] md:mt-[0]">
        <Image
          src={yellowRing}
          alt="image"
          width={115}
          height={115}
          className="w-full max-w-[115px] "
        />
        <Image
          src={yellowRing}
          alt="image"
          width={115}
          height={115}
          className="w-full max-w-[115px] "
        />
      </div>
    </div>
  );
};

export default PartnerAccess;
