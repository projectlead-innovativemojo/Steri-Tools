"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/ui/Text";
import Button from "@/ui/Button";

import eee from "@/public/images/partners/eee.svg";
import hjf from "@/public/images/partners/hjf.svg";
import yellowDoubleRing from "@/public/images/partners/single-yellow-double-ring.svg";
import blueYellowRing from "@/public/images/partners/single-yellow-blue-ring.svg";

const MeetPatrtners = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="w-full max-w-[1237px] mx-auto px-5">
      <Text as="h2" className="mb-[57px] md:mb-[85px] text-center">
        Meet Our <span className="text-[#EDD98A]"> Partners </span>
      </Text>
      <div className="relative w-full bg-[#14205A] rounded-[24px] mb-[57px] md:mb-[103px] px-4">
        {/* Yellow Rings BG */}
        <Image
          src={yellowDoubleRing}
          alt="Rings Background"
          className="
          mb-[13px] md:mb-[0]
           pointer-events-none object-contain
           mx-auto max-w-[60px] pt-[20px]            /* mobile: center */
           md:absolute md:left-[29px] md:top-[20px] md:max-w-[75.96px]  /* desktop: positioned */
          "
        />
        <div className="w-full md:max-w-[987px] mx-auto flex justify-center md:justify-between items-center z-10">
          <div className="flex gap-[49px] items-center py-[30px] md:flex-row flex-col">
            <Image
              src={eee}
              alt="eee"
              className="max-w-[100px] md:max-w-[202px]"
            />
            <Image
              src={hjf}
              alt="hjf"
              className="max-w-[81px] md:max-w-[123px]"
            />
            <Text className="max-w-[213px] md:max-w-full text-[18px] md:text-[22px] md:leading-[28px] font-semibold font-montserrat text-white md:text-left text-center">
              Strategic Ecosystem <br className="md:block hidden" />
              EEE Corporation & HJF
            </Text>
          </div>
          <Button
            onclick={() => setShowContent(!showContent)}
            className="w-[190px] h-[50px] md:flex hidden"
          >
            {showContent ? "Read Less" : "Read More"}
          </Button>
        </div>
        {showContent && (
          <>
            <hr className="border-[0.5px] border-[#EDD98A] mb-[33px] w-full max-w-[987px] mx-auto hidden md:block" />
            <Text className="pb-[51px] text-[#FFFFFF] w-full max-w-[264px] md:max-w-[987px] mx-auto ">
              SteriTools operates within the advisory and incubation platform of
              EEE Corporation, a McKinsey-like corporate advisory and private
              equity house with offices in London, Washington, D.C., and Los
              Angeles. EEE specializes in the end-to-end acceleration of health
              technology—from concept to commercialization—and has a
              long-standing history of successfully launching medical devices.
              Its D.C. office, located adjacent to the NIH campus, serves as a
              strategic bridge between civilian innovation and the U.S.
              Department of Defense (DoD) through its relationship with the
              Henry M. Jackson Foundation for the Advancement of Military
              Medicine (HJF), a 501(c)(3) nonprofit conducting high-impact R&D
              for U.S. armed forces and NATO. <br />
              Dr. Negin Bemanzadeh, MD, MBA, CEO of EEE Corporation and Advisory
              Board Member at HJF, is the key decision-maker for accepting
              medical device projects into HJF’s portfolio, ensuring
              SteriBasinGO is positioned for both military deployment and
              high-impact civilian adoption.
            </Text>
          </>
        )}
        <div className="">
          <Button
            onclick={() => setShowContent(!showContent)}
            className="w-[190px]  h-[50px] md:hidden flex mx-auto "
          >
            {showContent ? "Read Less" : "Read More"}
          </Button>
        </div>
        {/* BlueYellow Rings BG */}
        <Image
          src={blueYellowRing}
          alt="Rings Background"
          className="
          mt-[43px] md:mt-[0]
          pointer-events-none object-contain
          mx-auto max-w-[60px] pb-[22px]                   /* mobile: centered */
          md:absolute md:left-[38.37px] md:bottom-[22px] md:max-w-[56.56px]  /* desktop: positioned */
          "
        />
      </div>
    </div>
  );
};

export default MeetPatrtners;
