"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/ui/Text";
import Button from "@/ui/Button";

import testlabs from "@/public/images/partners/testlabs.svg";
import northsky from "@/public/images/partners/northsky.svg";
import yellowDoubleRing from "@/public/images/partners/single-yellow-double-ring.svg";
import blueYellowRing from "@/public/images/partners/single-yellow-blue-ring.svg";

const Validation = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="w-full max-w-[1237px] mx-auto px-5">
      <Text as="h2" className="mb-[73px] text-center">
        Validation & <span className="text-[#EDD98A]"> Design Partners </span>
      </Text>

      {/* test labs */}
      <div className="relative w-full bg-[#14205A] rounded-[24px] mb-[73px] min-h-[260px] flex md:px-0 px-5">
        {/* Yellow Rings BG */}
        <Image
          src={yellowDoubleRing}
          alt="Rings Background"
          className="
           pointer-events-none object-contain
           mx-auto max-w-[60px] pt-[20px]            /* mobile: center */
           md:absolute md:left-[29px] md:top-[20px] md:max-w-[75.96px]  /* desktop: positioned */
          "
        />

        <div className="w-full max-w-[987px] mx-auto md:flex-row flex-col flex justify-between items-center">
          <div className="flex gap-[49px] md:flex-row flex-col items-center py-[30px]">
            <Image src={testlabs} alt="eee" />
            <Text className="text-[22px] font-semibold font-montserrat text-white md:text-left text-center">
              TestLabs UK <br className="md:block hidden" />
              End-to-End Validation & <br className="md:block hidden" />
              Regulatory Testing Partner
            </Text>
          </div>
          <div className="max-w-[190px] w-full pb-[30px] md:pb-0">
            <Button
              onclick={() => setShowContent(!showContent)}
              className="max-w-[190px] h-[50px]"
            >
              Read More
            </Button>
          </div>
        </div>

        {/* BlueYellow Rings BG */}
        <Image
          src={blueYellowRing}
          alt="Rings Background"
          className="
          pointer-events-none object-contain
          mx-auto max-w-[60px] pb-[22px]                   /* mobile: centered */
          md:absolute md:left-[38.37px] md:bottom-[22px] md:max-w-[56.56px]  /* desktop: positioned */
          "
        />
      </div>

      <Text className="mb-[73px] text-center font-medium font-montserrat text-[22px]">
        By providing comprehensive, regulatory-grade data packages, TestLabs
        ensures,{" "}
        <span className="text-[#EDD98A] font-bold"> {`SteriTools’`} </span>{" "}
        devices are fully validated for{" "}
        <span className="text-[#EDD98A] font-bold">
          {" "}
          FDA and CE submission,{" "}
        </span>{" "}
        de-risking approval and enhancing confidence with both regulators and
        clinical partners.
      </Text>

      {/* northsky */}

      <div className="relative w-full bg-[#14205A] rounded-[24px] mb-[73px] min-h-[260px] flex">
        {/* Yellow Rings BG */}
        <Image
          src={yellowDoubleRing}
          alt="Rings Background"
          className="
           pointer-events-none object-contain
           mx-auto max-w-[60px] pt-[20px]            /* mobile: center */
           md:absolute md:left-[29px] md:top-[20px] md:max-w-[75.96px]  /* desktop: positioned */
          "
        />

        <div className="w-full max-w-[987px] mx-auto md:flex-row flex-col flex justify-between items-center">
          <div className="flex gap-[49px] items-center py-[30px] md:flex-row flex-col">
            <Image src={northsky} alt="northsky" />
            <Text className="text-[22px] font-semibold font-montserrat text-white md:text-left text-center">
              NorthSky Design Limited <br className="md:block hidden" />
              Engineering & Manufacturing Partner
            </Text>
          </div>
          <div className="max-w-[190px] w-full pb-[30px] md:pb-0">
            <Button
              onclick={() => setShowContent(!showContent)}
              className="max-w-[190px] h-[50px]"
            >
              Read More
            </Button>
          </div>
        </div>

        {/* BlueYellow Rings BG */}
        <Image
          src={blueYellowRing}
          alt="Rings Background"
          className="
          pointer-events-none object-contain
          mx-auto max-w-[60px] pb-[22px]                   /* mobile: centered */
          md:absolute md:left-[38.37px] md:bottom-[22px] md:max-w-[56.56px]  /* desktop: positioned */
          "
        />
      </div>

      <Text className="mb-[73px] text-center font-medium font-montserrat text-[22px]">
        NorthSky ensures{" "}
        <span className="text-[#EDD98A] font-bold"> SteriBasinGOTM </span> is
        clinically effective, ergonomically optimized, and scalable for both
        defense and civilian markets
      </Text>
    </div>
  );
};

export default Validation;
