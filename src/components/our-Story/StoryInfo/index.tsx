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
      <div className="w-full flex flex-col md:flex-row md:items-center items-start gap-[37px] md:gap-[30px] md:mb-[104px] mb-[47px]">
        <div className="relative w-full max-w-[502px]">
          <Image src={info1} alt="info1" className="w-full" />
          <Image
            src={shapes}
            alt="shapes"
            className="absolute -z-1 top-[-60px] md:top-[-80px] left-0 md:w-[135px] md:h-[135px] w-[102px]"
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
          <Image src={info2} alt="info2" className="w-full" />
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

      <Text className="font-montserrat md:tracking-[-0.2%] mx-auto w-full md:max-w-[1030px] text-center text-[18px] md:text-[22px] md:leading-[28px] mb-[72px] md:mb-[64px]">
        We invite you to explore our site and learn more about how{" "}
        <span className="text-[#EDD98A] font-bold">SteriTools </span> is setting
        new standards in surgical practices and offering hope and safety to
        patients worldwide. Join us in our mission to transform healthcare—one
        surgery at a time
      </Text>

      <Button className="text-white bg-[#076F26] max-w-[290px] h-[60px] border-2 border-[#EDD98A] mb-[101px] md:mb-[107px] mx-auto ">
        Invest in SteriTools
      </Button>
    </div>
  );
};

export default StoryInfo;
