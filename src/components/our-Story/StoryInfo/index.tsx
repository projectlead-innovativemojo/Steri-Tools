import React from "react";
import Image from "next/image";

import Text from "@/ui/Text";
import Button from "@/ui/Button";

import shapes from "@/public/images/story/Shapes.png";
import yellowshapes from "@/public/images/story/yellow-shapes.svg";
import info1 from "@/public/images/story/info-image-1.png";
import info2 from "@/public/images/story/info2.png";

const StoryInfo = () => {
  return (
    <div className="w-full max-w-[1237px] px-5 mx-auto ">
      <div className="w-full flex flex-col xl:flex-wrap md:flex-row md:items-center items-start gap-[30px] md:mb-[104px] mb-[70px]">
        <div>
          <Image src={shapes} alt="shapes" className="w-[135px] h-[135px]" />
          <Image
            src={info1}
            alt="info1"
            className="w-full max-w-[502px] mt-[-30px]"
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

      <div className="w-full flex xl:flex-wrap flex-col-reverse md:flex-row-reverse md:items-center items-start gap-[30px] md:mb-[104px] mb-[70px]">
        <div>
          <Image src={info2} alt="info1" className="w-full max-w-[502px] " />
          <Image
            src={yellowshapes}
            alt="shapes"
            className="w-[135px] h-[135px] mt-[-30px] relative -z-10 ml-auto"
          />
        </div>

        <div>
          <Text className="w-full max-w-[711px]">
            Our research confirmed that in first world countries, about 12% of
            surgical instruments on the back table are contaminated with
            bacteria known to cause infections. Driven by this discovery and the
            urgent need for a solution, we developed{" "}
            <span className="font-bold text-[#EDD98A]"> SteriTools</span> —a
            revolutionary technology designed to offer real-time cleaning and
            disinfection of surgical instruments, dramatically reducing the risk
            of infection.
            <br /> <br />
            Our mission at{" "}
            <span className="font-bold text-[#EDD98A]"> SteriTools </span> is to
            tackle this global challenge, which incurs billions in healthcare
            costs annually due to increased morbidity, lost productivity,
            heightened litigation, significant stress on patients and healthcare
            teams, and profound impacts on mortality rates.
            <br /> <br />
            At <span className="font-bold text-[#EDD98A]"> SteriTools,</span> we
            are dedicated to improving surgical safety and efficiency worldwide.
            Our innovative approach not only enhances the quality of care but
            also aligns with eco-friendly practices, as our devices utilize
            non-disposable elements to minimize waste.
          </Text>
        </div>
      </div>

      <Text className="font-monoserrat text-center text-[22px] leading-[28px] font-bold mb-[60px]">
        We invite you to explore our site and learn more about how SteriTools is
        setting new standards in surgical practices and offering hope and safety
        to patients worldwide. Join us in our mission to transform
        healthcare—one surgery at a time
      </Text>

      <Button className="text-white bg-[#14205A] max-w-[260px] h-[60px] border border-[#14205A] mb-[107px] mx-auto ">
        Invest in SteriTools
      </Button>
    </div>
  );
};

export default StoryInfo;
