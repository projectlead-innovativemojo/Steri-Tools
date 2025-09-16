import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/ui/Text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import SurgicalInstrumentsSlider from "./Slider";

import ringsOverlay from "@/public/images/home/circle-rings.svg";
import yellowDoubleRing from "@/public/images/home/yellow-double-ring.svg";
import yellowBlueRing from "@/public/images/home/blue-yellow-ring.svg";

const SteriToolsOverview = () => {
  return (
    <div className="w-full max-w-[1237px] px-5 lg:px-0 mx-auto mb-[90px] md:mb-[55px]">
      <div className="relative flex justify-center md:flex-row flex-col items-center px-5 md: md:py-0 pt-[120px] pb-[80px] gap-0 mt-[91px] md:mt-[79px] mb-[52px] md:mb-[60px] bg-[#14205A] w-full max-w-[1240px] min-h-[554px] rounded-[24px]">
        {/* Desktop Screen Cirular Rings */}
        <Image
          src={ringsOverlay}
          alt="Rings Background"
          className="absolute object-cover pointer-events-none left-[80px] top-[27px] hidden lg:block"
        />

        {/* Mobile Screen Yellow Cirular Ring */}
        <Image
          src={yellowDoubleRing}
          alt="Ring Bg"
          className="z-0 absolute object-cover pointer-events-none max-w-[60px] left-[32px] top-[23px] block lg:hidden"
        />

        {/* Mobile Screen Yellow Blue Cirular Ring */}
        <Image
          src={yellowBlueRing}
          alt="Ring Bg"
          className="z-0 absolute object-cover pointer-events-none max-w-[58px] right-[28px] bottom-[24px] block lg:hidden"
        />

        <Text className="z-10 text-white w-full max-w-[503px] text-[18px] text-center md:text-left font-medium md:font-bold mb-[43px] md:mb-[0]">
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
      <div className="px-5 md:px-0">
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

        <div className="w-[183px] md:w-[290px]  mx-auto">
          <Link href="/contact-us">
            <ShimmerButton className="w-full  max-w-[183px] md:max-w-[290px]  mx-auto text-[16px] md:text-[18px] font-dmSans font-bold rounded-[8px]">
              Invest in SteriTools
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SteriToolsOverview;
