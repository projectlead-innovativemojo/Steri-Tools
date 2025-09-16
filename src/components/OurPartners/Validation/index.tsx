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
  const [showNorthsky, setShowNorthsky] = useState(false);

  return (
    <div className="w-full max-w-[1237px] mx-auto px-5">
      <Text as="h2" className="mb-[57px] md:mb-[85px] text-center">
        Validation & <span className="text-[#EDD98A]"> Design Partners </span>
      </Text>

      {/* test labs */}
      <div className="relative w-full bg-[#14205A] rounded-[24px] mb-[108px] md:mb-[146px]  px-4">
        {/* Yellow Rings BG */}
        <Image
          src={yellowDoubleRing}
          alt="Rings Background"
          className="
          mb-[49px] md:mb-[0]
           pointer-events-none object-contain
           mx-auto max-w-[60px] pt-[20px]            /* mobile: center */
           md:absolute md:left-[29px] md:top-[20px] md:max-w-[75.96px]  /* desktop: positioned */
          "
        />

        <div className="w-full md:max-w-[987px] mx-auto flex justify-center md:justify-between items-center min-h-[260px] z-10">
          <div className="flex gap-[49px] items-center py-[30px] md:flex-row flex-col z-10">
            <Image
              src={testlabs}
              alt="eee"
              className="max-w-[213px] md:max-w-[240px]"
            />
            <Text className="max-w-[213px] md:max-w-full text-[18px] md:text-[22px] md:leading-[28px] font-semibold font-montserrat text-white md:text-left text-center">
              TestLabs UK <br className="md:block hidden" />
              End-to-End Validation & <br className="md:block hidden" />
              Regulatory Testing Partner
            </Text>
          </div>
          <Button
            onclick={() => setShowContent(!showContent)}
            className="w-[190px] h-[50px]  md:flex hidden  pb-[30px] md:pb-0"
          >
            {showContent ? "Read Less" : "Read More"}
          </Button>
        </div>
        {showContent && (
          <>
            <hr className="border-[0.5px] border-[#EDD98A] mb-[33px] w-full max-w-[987px] mx-auto hidden md:block" />
            <Text className="pb-[51px] text-[#FFFFFF] w-full max-w-[264px] md:max-w-[987px] mx-auto ">
              TestLabs UK is a GLP-certified, ISO 17025-accredited medical
              device laboratory that specializes in delivering complete
              validation services for international regulatory approvals. With
              expertise spanning microbiology, materials science, and electrical
              safety, TestLabs provides the full suite of testing required for
              FDA 510(k) and CE Mark submissions.
              <br />
              <br />
              Role in SteriTools:
              <br />
              TestLabs serves as SteriTools’ end-to-end validation partner,
              responsible for:
              <br />
              ● Antimicrobial efficacy testing – validating SteriBasinGOTM’s
              7-log reduction performance against FDA identified SSI-related
              pathogens. <br />
              ● Aerosolization testing – assessing airborne particle dispersion
              and contamination control in surgical settings. <br />
              ● Sterilization and disinfection validation – verifying repeatable
              effectiveness across diverse surgical instruments and use cycles.
              <br />
              ● Electronics and safety testing – evaluating electrical safety,
              EMC, and compliance with IEC standards. <br />● Material
              compatibility and durability studies – confirming device integrity
              under repeated sterilization and real-world use conditions.
              <br />
              <br />
              By providing comprehensive, regulatory-grade data packages,
              TestLabs ensures, SteriTools’ devices are fully validated for FDA
              and CE submission, de-risking approval and enhancing confidence
              with both regulators and clinical partners.
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
           mt-[50px] md:mt-[0]
          pointer-events-none object-contain
          mx-auto max-w-[60px] pb-[22px]                   /* mobile: centered */
          md:absolute md:left-[38.37px] md:bottom-[22px] md:max-w-[56.56px]  /* desktop: positioned */
          "
        />
      </div>

      {/* northsky */}
      <div className="relative w-full bg-[#14205A] rounded-[24px] mb-[159px] md:mb-[153px]  px-4">
        {/* Yellow Rings BG */}
        <Image
          src={yellowDoubleRing}
          alt="Rings Background"
          className="
          mb-[75px] md:mb-[0] 
           pointer-events-none object-contain
           mx-auto max-w-[60px] pt-[20px]            /* mobile: center */
           md:absolute md:left-[29px] md:top-[20px] md:max-w-[75.96px]  /* desktop: positioned */
          "
        />

        <div className="w-full md:max-w-[987px] mx-auto flex justify-center md:justify-between items-center min-h-[260px] z-10">
          <div className="flex gap-[49px] items-center py-[30px] md:flex-row flex-col z-10">
            <Image
              src={northsky}
              alt="northsky"
              className="max-w-[213px] md:max-w-[232px]"
            />
            <Text className="text-[18px] max-w-[253px] md:max-w-full md:text-[22px] md:leading-[28px] font-semibold font-montserrat text-white md:text-left text-center">
              NorthSky Design Limited <br className="md:block hidden" />
              Engineering & Manufacturing Partner
            </Text>
          </div>
          <Button
            onclick={() => setShowNorthsky(!showNorthsky)}
            className="w-[190px] h-[50px]  md:flex hidden pb-[30px] md:pb-0"
          >
            {showNorthsky ? "Read Less" : "Read More"}
          </Button>
        </div>

        {showNorthsky && (
          <>
            <hr className="border-[0.5px] border-[#EDD98A] mb-[33px] w-full max-w-[987px] mx-auto hidden md:block" />
            <Text className="pb-[51px] text-[#FFFFFF] w-full max-w-[264px] md:max-w-[987px] mx-auto ">
              NorthSky Design Limited, based in Sheffield, UK, is a
              healthcare-focused product design and engineering firm with deep
              expertise in design-for-manufacturing (DFM) and commercialization.
              <br />
              <br />
              Role in SteriTools: <br />
              NorthSky is SteriTools’ integrated design and engineering partner,
              overseeing: <br />
              ● MVP product engineering – turning SteriBasinGOTM from concept
              into functional, regulatory-ready prototypes. <br />
              ● Design for manufacturability (DFM) – ensuring SteriTools
              products are scalable, cost-efficient, and production-ready from
              day one. <br />
              ● Prototype-to-production scaling – managing the handoff from
              pilot runs to volume manufacturing. <br />● Supply chain
              integration – leveraging international manufacturing networks
              across the UK, Europe, Asia, and North America.
              <br />
              <br />
              NorthSky ensures SteriBasinGOTM is clinically effective,
              ergonomically optimized, and scalable for both defense and
              civilian markets.
            </Text>
          </>
        )}
        <div className="">
          <Button
            onclick={() => setShowNorthsky(!showNorthsky)}
            className="w-[190px]  h-[50px] md:hidden flex mx-auto "
          >
            {showNorthsky ? "Read Less" : "Read More"}
          </Button>
        </div>

        {/* BlueYellow Rings BG */}
        <Image
          src={blueYellowRing}
          alt="Rings Background"
          className="
          mt-[76px] md:mt-[0]
          pointer-events-none object-contain
          mx-auto max-w-[60px] pb-[22px]                   /* mobile: centered */
          md:absolute md:left-[38.37px] md:bottom-[22px] md:max-w-[56.56px]  /* desktop: positioned */
          "
        />
      </div>
    </div>
  );
};

export default Validation;
