import React from "react";
import Image from "next/image";

import Text from "@/ui/Text";

import dotbg from "@/public/images/home/Dot Grid.png";
import surgical2 from "@/public/images/home/surgical2.png";
import germsBg from "@/public/images/home/germs-icon-bg.png";
import reduceSsi from "@/public/images/home/reduce-ssi.svg";
import cuttingMortality from "@/public/images/home/cutting-mortality.svg";
import lowerAmputations from "@/public/images/home/lowering-amputations.svg";
import savingTimeMoneyLitigation from "@/public/images/home/Saving-time-money-litigation.svg";
import yellowDotSquare from "@/public/images/home/yellow-dot-square.svg";
import yellowSmallDotsGrids from "@/public/images/home/yellow-small-dots-grids.svg";
import yellowBg from "@/public/images/home/yellow-bg.png";
import blueDotGrid from "@/public/images/home/blue-dots-grid.svg";
import germsMobileBg from "@/public/images/home/germs-icon-mobile-bg.png";
// import germsBg from "@/public/images/home/germs-desktop.png";
const SurgicalInstruments = () => {
  return (
    <>
      <div className="relative w-full pt-[104px] md:pt-[93px]  mx-auto">

        {/* Desktop: yellow bg image */}
        <div
          className="absolute z-0 top-[0] left-0 right-0 w-full h-[900px] pointer-events-none hidden md:block"
          style={{
            backgroundImage: `url(${yellowBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}
          aria-hidden
        />

        {/* Mobile: yellow bg image */}
        <div
          className="absolute z-0 top-[200] left-0 right-0 w-full h-[900px] pointer-events-none block md:hidden"
          style={{
            backgroundImage: `url(${yellowBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}
          aria-hidden
        />
        <div className="w-full relative z-20 max-w-[1240px] mx-auto px-5 flex justify-center flex-col-reverse  md:flex-row  md:gap-[20px] gap-[0] items-center md:items-start md:mb-[37px]">
          <div className="z-10 relative w-full max-w-[789px] text-center md:text-left">
            <Text
              as="h2"
              className="md:mb-[64px] pt-[115px] md:pt-[98px] text-[28px] leading-[34px] md:text-[28px] md:leading-[34px]"
            >
              Surgical instruments become contaminated, SteriBasin Go{" "}
              <span className="text-brand-yellow">
                {" "}
                cleans and disinfects surgical instruments{" "}
              </span>{" "}
              in real time during surgery.
            </Text>
            {/* <Text className="font-montserrat tracking-[-0.2%] text-[18px] md:text-[22px] leading-[24px] md:leading-[28px] font-semibold">
            <span className="text-brand-yellow"> SteriBasin Go: </span> Built
            Rugged for Combat. Scales for Civilian Use.
          </Text> */}
            {/* Mobile: Germs BG - centered horizontally */}
            <Image
              src={germsMobileBg}
              alt="image"
              className="absolute z-10 object-contain pointer-events-none left-1/2 -translate-x-1/2 top-[60px] md:hidden block"
            />
          </div>
          {/* Video card: golden border, white bg, video only */}
          <div className="w-full relative z-20 max-w-[480px] rounded-[12px] border-[3px] border-brand-yellow bg-white shadow-sm">
            <div className="relative w-full aspect-video min-h-[180px] flex justify-center items-center overflow-hidden rounded-lg">
              <video
                className="w-full h-full max-h-[285px] object-contain"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Desktop: Germs BG */}
          <Image
            src={germsBg}
            alt="image"
            className="absolute z-10 object-contain pointer-events-none left-0 md:left-[45px] top-[375px] md:top-[0] hidden md:block"
          />


        </div>


      </div>

      {/* 2 - Surgical benefits */}
      <div className="relative mt-0 pt-[199px] md:pt-[56px] pb-[64px] md:pb-[125px] md:mt-[76px] overflow-hidden min-h-[320px]">
        {/* Background - desktop only */}
        <div
          className="absolute inset-0 -z-10 hidden md:block"
          style={{
            backgroundImage: `url(${yellowSmallDotsGrids.src})`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
          aria-hidden
        />
        <div className=" relative w-full max-w-[1237px] mx-auto md:px-5">

          <div className=" flex flex-col md:flex-row items-center gap-[64px] md:gap-[28px] justify-between">
            {/* Image */}
            <div className="w-full relative max-w-[709px] shrink-0 flex justify-center items-center px-[24px] md:px-0">
              <Image
                src={surgical2}
                alt="Surgical operation - SteriBasin Go sterile field"
                className="w-full h-auto z-10 object-cover aspect-[709/473]"
              />

              <Image
                src={yellowDotSquare}
                alt=""
                className="absolute md:left-[-44px] md:top-[-38px] top-[-19px] left-[0] h-[73px] w-[73px] md:w-[135px] md:h-[135px] opacity-60 pointer-events-none "
              />
              <Image
                src={yellowDotSquare}
                alt=""
                className="absolute md:right-[-48px] md:bottom-[-34px] right-[0] bottom-[-28px]  h-[73px] w-[73px] md:w-[135px] md:h-[135px] opacity-60 pointer-events-none "
              />
            </div>

            {/* Right Side */}
            <div className="w-full max-w-[520px] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: reduceSsi, label: "Reduce SSIs" },
                { icon: cuttingMortality, label: "Cutting mortality rates" },
                { icon: lowerAmputations, label: "Lowering amputations" },
                { icon: savingTimeMoneyLitigation, label: "Saving time, money and litigation" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col w-full md:max-w-[186px] items-center gap-[20px]  text-gray-800 font-medium text-center"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <Image src={icon} alt="" width={32} height={32} className="w-[32px] h-[32px] object-contain" />
                  </div>
                  <span className="text-[18px] leading-[24px] md:text-[18px] line-height-[26px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurgicalInstruments;
