import React from "react";
import Image from "next/image";

import Text from "@/ui/Text";
import SurgicalInstrumentsSlider from "./Slider";

import ringsOverlay from "@/public/images/home/circle-rings.svg";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const SteriToolsOverview = () => {
  return (
    <div className="w-full max-w-[1237px] px-5 lg:px-0 mx-auto mb-[90px] md:mb-[55px]">
      <div className="relative flex justify-center md:flex-row flex-col items-center px-5 md: md:py-0 py-5 gap-0 mt-[91px] md:mt-[79px] mb-[52px] md:mb-[60px] bg-[#14205A] w-full max-w-[1240px] min-h-[554px] rounded-[24px]">
        <Image
          src={ringsOverlay}
          alt="Rings Background"
          className="absolute object-cover pointer-events-none left-[80px] top-[27px] hidden lg:block"
        />
        <Text className="text-white w-full max-w-[503px] font-bold">
          <span className="text-[#EDD98A]"> SteriBasin Go: </span> A simple
          solution that solves a complex problem. <br />
          If {`you're`} a surgeon, veteran, OR staff, or forward surgical team,
          how have you deal with this problem—and would a device like SteriTools
          change your workflow?
          <br /> <br />
          Welcome to the SteriTools conversation.
        </Text>
        <SurgicalInstrumentsSlider />
      </div>
      <div>
        <Text className="w-full mb-[59px] md:mb-[56px]">
          Introducing <span className="text-[#EDD98A]">SteriBasin Go</span>, an
          innovative solution engineered to enhance surgical protocols by
          removing bioburden, including bacteria, from surgical instruments in
          real time during procedures. As the first product of its kind,
          SteriBasin Go empowers operative personnel to automatically clean
          instruments while the surgeries are underway and also keeps the
          instruments readily available throughout the procedure.
          <br />
          This technology minimizes bioburden left on instruments and reduces
          the workload in sterile processing departments, improving tray
          turnover and saving valuable time.
          <br /> <br />
          This innovative device boasts a military spec rugged and lightweight
          design, making it easily portable for forward surgical teams in
          austere environments. Its battery powered operation, supported by
          rechargeable batteries, ensures flexibility and convenience,
          eliminating the reliance on fixed power sources. Additionally,
          SteriBasin Go is designed to work seamlessly with a consumable kit
          that is replaced for each patient, reinforcing optimal aseptic
          technique.
          <br />
          <br />
          Tailored for military applications, SteriBasin Go technology is also
          scalable for civilian hospital use, positioning it as a versatile
          solution for enhancing surgical efficiency and safety across various
          settings.
        </Text>
        {/* 
        <div className="flex justify-center items-center w-full">
          <Button
            shimmerBorder
            className="px-[18px] py-[15px] w-[290px] text-[16px] h-15 mx-auto text-[#fff] bg-[#076F26]"
          >
            Invest in SteriTools
          </Button>
        </div> */}
        <ShimmerButton className="w-full max-w-[290px] mx-auto text-[18px] font-dmSans font-bold rounded-[8px]">
          Invest in SteriTools
        </ShimmerButton>
      </div>
    </div>
  );
};

export default SteriToolsOverview;
