import React from "react";

import Text from "@/ui/Text";

const Footer = () => {
  return (
    <footer className="w-full bg-[#14205A] text-white pt-[103px] pb-[135px] px-5">
      <div className="max-w-[1237px] mx-auto flex flex-col md:flex-row justify-between">
        {/* About */}
        <div className="flex-1 max-w-[397px] w-full mr-[105px]">
          <Text className="font-montserrat md:text-[28px] md:leading-[34px] tracking-[-0.25%] font-medium mb-[20px]">
            About
          </Text>
          <Text>
            SteriBasin Go, an innovative solution engineered to enhance surgical
            protocols by removing bioburden, including bacteria, from surgical
            instruments in real time during procedures.
          </Text>
        </div>

        {/* Contact */}
        <div className="flex-1 max-w-[316px] w-full mr-[26px]">
          <Text className="font-montserrat md:text-[28px] md:leading-[34px] tracking-[-0.25%] font-medium mb-[20px]">
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
          <Text className="font-montserrat md:text-[28px] md:leading-[34px] tracking-[-0.25%] font-medium mb-[20px]">
            Newsletter
          </Text>
          <Text className="mb-[39px]">
            Stay in the loop with the latest updates!
          </Text>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-[14px] py-[10px] border-1 border-[#D5D7DA] rounded-[8px] bg-white text-[#717680] text-[18px] leading-[24px] focus:outline-none"
            />
            <button
              type="submit"
              className="max-w-[126px] px-[18px] py-[10px] bg-none text-white border-1 border-[#EDD98A] font-bold rounded-[8px] hover:bg-[#EDD98A] transition"
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
