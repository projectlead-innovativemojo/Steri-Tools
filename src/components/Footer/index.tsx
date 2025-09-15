import React from "react";

import Text from "@/ui/Text";

const Footer = () => {
  return (
    <footer className="w-full bg-[#14205A] text-white pt-[94px] md:pt-[103px] pb-[115px] md:pb-[135px] px-5">
      <div className="max-w-[1237px] mx-auto flex flex-col md:flex-row justify-between md:px-5 text-center md:text-left gap-[45px] md:gap-[0]">
        {/* About */}
        <div className="flex-1 max-w-[373px] md:max-w-[397px] w-full md:mr-[105px] mx-auto ">
          <Text className="font-montserrat text-[22px] md:text-[28px] leading-[28px] md:leading-[34px] tracking-[-0.25%] font-medium mb-[20px]">
            About
          </Text>
          <Text>
            SteriBasin Go, an innovative solution engineered to enhance surgical
            protocols by removing bioburden, including bacteria, from surgical
            instruments in real time during procedures.
          </Text>
        </div>

        {/* Contact */}
        <div className="flex-1  max-w-[382px] md:max-w-[316px] w-full md:mr-[26px] mx-auto">
          <Text className="font-montserrat text-[22px] md:text-[28px] leading-[28px] md:leading-[34px] tracking-[-0.25%] font-medium mb-[20px]">
            Contact
          </Text>
          <Text className="mb-[32px]">
            Reach out to learn more and schedule a free consultation
          </Text>
          <ul>
            <li>
              <Text>Austin, TX</Text>
            </li>
            <li>
              <Text>+1 512 924 8193</Text>
            </li>
            <li>
              <Text>contact@steritools.com</Text>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1  max-w-[420px] w-full">
          <Text className="font-montserrat text-[22px] md:text-[28px] leading-[28px] md:leading-[34px] tracking-[-0.25%] font-medium mb-[20px]">
            Newsletter
          </Text>
          <Text className="mb-[45px] md:mb-[39px]">
            Stay in the loop with the latest updates!
          </Text>
          <form className="flex flex-col md:flex-row items-center gap-[15px] md:gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full px-[14px] py-[10px] border-1 border-[#D5D7DA] rounded-[8px] bg-white text-[#717680] text-[18px] leading-[24px] focus:outline-none text-center md:text-left"
            />
            <button
              type="submit"
              className="w-full max-w-full md:max-w-[126px] px-[18px] py-[10px] bg-none text-white border-1 border-[#EDD98A] font-bold rounded-[8px] hover:bg-[#EDD98A] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
