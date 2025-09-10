import React from "react";
import Image from "next/image";

import Button from "@/ui/Button";
import Text from "@/ui/Text";

import deviceImg from "@/public/images/investor/invester-portal-device.png";

const PartnerAccess = () => {
  return (
    <div className="relative w-full max-w-[1237px] mx-auto px-5 mb-[224px] ">
      {/* Welcome Text */}
      <Text className="font-montserrat md:text-[28px] md:leading-[34px] font-medium text-center mb-[66px]">
        Welcome to the private page intended only for our investors and
        strategic partners. Here you will find key information, documents, and
        valuable materials related to the project.
      </Text>

      {/* Text */}
      <Text className="font-montserrat md:text-[22px] md:leading-[28px] font-medium text-center mb-[19px]">
        Access is restricted to individuals who have signed a{" "}
        <span className="text-[#EDD98A] font-semibold">
          Non-Disclosure Agreement (NDA)
        </span>{" "}
        with our team.
      </Text>

      {/* Text */}
      <Text className="font-montserrat text-[#EDD98A] md:text-[22px] md:leading-[28px] font-medium text-center mb-[60px]">
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
    </div>
  );
};

export default PartnerAccess;
