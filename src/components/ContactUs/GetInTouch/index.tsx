// "use client";

import Image from "next/image";
import ContactForm from "./ContactForm";

import Text from "@/ui/Text";

// adjust paths
import stars from "@/public/images/contact/stars.png";
import bottomBg from "@/public/images/contact/bottombg.png";

export default function GetInTouch() {
  return (
    <section className="relative w-full  mx-auto">
      {/* Top grid: left text + right form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10 w-full max-w-[1237px] mx-auto px-5">
        <div className=" lg:pt-12 lg:pl-[99px]">
          {/* Stars */}
          <div className="mb-[64px] md:mb-[75px]">
            <Image src={stars} alt="stars" className="  " />
          </div>

          {/* Title */}
          <Text
            as="h1"
            className="text-[32px] leading-[40px] md:text-[48px] text-[#292929] mb-[31px] md:mb-[39px] md:text-left text-center"
          >
            Contact <span className="text-[#EDD98A]">Us</span>
          </Text>

          {/* Contact info */}
          <address className="not-italic text-[18px] leading-[24px] md:text-[22px] md:leading-[28px] font-medium text-[#000000]  md:text-left text-center mb-[66px] md:mb-[115px]">
            <div>
              <a className="block" href="mailto:mlbierdeman@gmail.com">
                mlbierdeman@gmail.com
              </a>
              <a className="block" href="mailto:mkarchmanmothortho@gmail.com">
                mkarchmanmothortho@gmail.com
              </a>
              <a className="block" href="mailto:chrisgt2001@hotmail.com">
                chrisgt2001@hotmail.com
              </a>
            </div>
          </address>
        </div>

        {/* RIGHT FORM */}
        <div className="md:absolute md:right-5 lg:right-0 md:bottom-[-380px] w-full md:w-[607px] z-30 relative top-0 flex justify-center items-center mx-auto">
          <div className="bg-white shadow-xl border border-gray-100 py-[25px] px-[50px] mx-auto w-full">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="relative md:mt-10 overflow-hidden h-[446px] mt-[-200px]">
        <Image
          src={bottomBg}
          alt="contact bottom background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 homegradient-0deg"></div>
      </div>

      {/* Pull form down slightly to overlap bottom image */}
    </section>
  );
}
