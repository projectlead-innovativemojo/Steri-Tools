// "use client";

import Image from "next/image";
import ContactForm from "./ContactForm";

import Text from "@/ui/Text";

// adjust paths
import stars from "@/public/images/contact/stars.png";
import bottomBg from "@/public/images/contact/bottombg.png";

export default function GetInTouch() {
  return (
    <section className="relative w-full  mx-auto mt-[40px]">
      {/* Top grid: left text + right form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10 w-full max-w-[1237px] mx-auto px-5">
        <div className="pt-6 lg:pt-12">
          {/* Stars */}
          <div className="mb-6">
            <Image src={stars} alt="stars" className="  " />
          </div>

          {/* Title */}
          <Text
            as="h1"
            className="text-[48px] text-[#111] mb-4 md:text-left text-center"
          >
            Contact <span className="text-[#EDD98A]">Us</span>
          </Text>

          {/* Contact info */}
          <address className="not-italic text-sm text-gray-700 space-y-2 md:text-left text-center">
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

        <div className="md:absolute md:right-5 lg:right-0 md:bottom-[-380px] w-full md:w-[520px] z-30 relative top-0 flex justify-center items-center mx-auto">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6 lg:p-8 mx-auto w-full">
            <ContactForm />
          </div>
        </div>

        {/* RIGHT FORM */}
        {/* <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6 lg:p-8 relative z-20">
          <ContactForm />
        </div> */}
      </div>

      <div className="relative md:mt-10 overflow-hidden h-[446px] mt-[-200px]">
        <Image
          src={bottomBg}
          alt="contact bottom background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 homegradient" />
      </div>

      {/* Pull form down slightly to overlap bottom image */}
    </section>
  );
}
