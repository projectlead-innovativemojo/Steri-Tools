"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/ui/Text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

import InvestPopupForm from "@/components/Invest-Pop-Up";

import shapes from "@/public/images/story/Shapes.png";
import yellowshapes from "@/public/images/story/yellow-shapes.svg";
import info1 from "@/public/images/story/info-image-1.png";
import info2 from "@/public/images/story/info2.jpg";

const StoryInfo = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);

  return (
    <div className="w-full max-w-[1237px] px-5 mx-auto ">
      <div className="w-full flex flex-col md:flex-row md:items-center items-start gap-[37px] md:gap-[30px] md:mb-[104px] mb-[47px]">
        <div className="relative w-full max-w-[502px] md:mt-10">
          <Image src={info1} alt="info1" className="w-full" />
          <Image
            src={shapes}
            alt="shapes"
            className="absolute -z-1 top-[-60px] md:top-[-60px] left-0 md:w-[135px] md:h-[135px] w-[102px]"
          />
        </div>

        <div>
          <Text className="w-full max-w-[711px]">
            We are a seasoned team comprising a surgeon, a surgical nurse, and a
            surgical technologist. Our collaboration began in a remote{" "}
            <span className="font-bold"> hospital in Eastern California, </span>{" "}
            but it was a single, devastating incident that inspired the creation
            of SteriTools.
            <br /> <br />
            Our story revolves around a woman from a remote mining town in
            Eastern California who underwent a revision total knee arthroplasty
            by our team. Tragically, she developed a postoperative infection
            that led to the amputation of her leg above the knee. This
            heart-wrenching outcome prompted us to critically examine our
            surgical environment. We uncovered a widespread issue ubiquitous
            among all operating rooms around the globe: surgical instruments,
            although sterilized initially, become contaminated by coliform
            bacteria present in the air over time. When reintroduced into the
            surgical site, these instruments significantly elevate the risk of
            infection. This phenomenon occurs in every operating theater across
            the globe with higher rates in third world countries and austere
            environments such as combat or disaster scenarios.
            <br /> <br />
            One of our surgeons, who had volunteered for{" "}
            <span className="font-bold">
              {" "}
              combat operations in Northern Iraq and disaster zones globally,{" "}
            </span>{" "}
            recognized the potential of a device that could ensure sterility in
            austere environments.
          </Text>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row-reverse md:items-center items-start gap-[132px] md:gap-[30px] md:mb-[175px] mb-[70px]">
        <div className="relative w-full max-w-[502px]">
          <Image src={info2} alt="info2" className="w-full relative md:rounded-none rounded-b-[12px]" />
          <div className="bg-[#101F5D] absolute bottom-0 md:bottom-[-25px] text-[14px] md:-right-[40px] text-white w-full max-w-[490px] px-5 py-2 rounded-[12px]">
            <Text className="text-[14px] md:text-[14px] font-bold text-white ">
              About 12% of surgical instruments on the back <br />
              table are contaminated with bacteria known to cause infections
            </Text>
          </div>
          <Image
            src={yellowshapes}
            alt="shapes"
            className="absolute -z-1 bottom-[-65px] md:bottom-[-75px] right-[17px] md:w-[135px] md:h-[135px] w-[107px]"
          />
        </div>

        <div>
          <Text className="w-full max-w-[711px]">
            Our research confirmed that in first world countries, about 12% of
            surgical instruments on the back table are contaminated with
            bacteria known to cause infections. Driven by this discovery and the
            urgent need for a solution, we developed{" "}
            <span className="font-bold text-brand-yellow"> SteriTools</span> —a
            revolutionary technology designed to offer real-time cleaning and
            disinfection of surgical instruments, dramatically reducing the risk
            of infection.
            <br /> <br />
            Our mission at{" "}
            <span className="font-bold text-brand-yellow"> SteriTools </span> is to
            tackle this global challenge, which incurs billions in healthcare
            costs annually due to increased morbidity, lost productivity,
            heightened litigation, significant stress on patients and healthcare
            teams, and profound impacts on mortality rates.
            <br /> <br />
            At <span className="font-bold text-brand-yellow"> SteriTools,</span> we
            are dedicated to improving surgical safety and efficiency worldwide.
            Our innovative approach not only enhances the quality of care but
            also aligns with eco-friendly practices, as our devices utilize
            non-disposable elements to minimize waste.
          </Text>
        </div>
      </div>

      <Text className="font-montserrat md:tracking-[-0.2%] mx-auto w-full md:max-w-[1030px] text-center text-[18px] md:text-[22px] md:leading-[28px] mb-[72px] md:mb-[64px]">
        We invite you to explore our site and learn more about how{" "}
        <span className="text-brand-yellow font-bold">SteriTools </span> is setting
        new standards in surgical practices and offering hope and safety to
        patients worldwide. Join us in our mission to transform healthcare—one
        surgery at a time
      </Text>

      {/* <ShimmerButton className="w-full max-w-[290px] mx-auto text-[18px] font-dmSans font-bold rounded-[8px] mb-[101px]">
        Invest in SteriTools
      </ShimmerButton> */}

      <div className="w-[183px] md:w-[290px]  mx-auto">
        <ShimmerButton
          onClick={() => setOpenModal(true)}
          className="w-full  max-w-[183px] md:max-w-[290px]  mx-auto text-[16px] md:text-[18px] font-dmSans font-bold rounded-[8px]  mb-[101px]"
        >
          Invest in SteriTools
        </ShimmerButton>
      </div>

      {/* Invest Form Popup Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/50">
          {/* <InvestPopupForm closeModal={closeModal} /> */}
          <div className="w-full max-h-[90vh] md:max-h-[100vh] overflow-y-auto hide-scrollbar flex py-5 items-start md:justify-center md:items-center">
            <InvestPopupForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryInfo;
