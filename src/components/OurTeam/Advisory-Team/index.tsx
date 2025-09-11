"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import Text from "@/ui/Text";

import "swiper/css";
import "swiper/css/navigation";

import CharlesAdvisoryMember from "@/public/images/team/Charles-Brooks-advisor.png";
import johnAdvisoryMember from "@/public/images/team/John-Dvor-advisor.png";
import ArashAdvisoryMember from "@/public/images/team/Arash-Samimi-advisor.png";
import NigelAdvisoryMember from "@/public/images/team/Nigel-H-advisor.png";
import navLeft from "@/public/images/team/ArrowCircleLeft.svg";
import navRight from "@/public/images/team/ArrowCircleRight.svg";
import ringsBg from "@/public/images/team/cirular-rings.svg";

const advisoryMembers = [
  {
    name: "Charles Brooks, MBA – Henley School of Business trained EEE Senior Partner.",
    image: CharlesAdvisoryMember,
    fullBio: `Mechanical engineer and medical device industry veteran with multiple
successful exits, serving as Project Manager for the SteriTools project.
 
Negin Bemanzadeh, MD, MBA, Harvard Business School trained founder of
EEE Corp and World Economic Forum contributor, serves as lead strategic
advisor to SteriTools. She built EEE into the only private entity mandated to
catalyze cross-border healthcare innovation, overseeing a $22B device launch
portfolio spanning the U.S. and UK. Through her leadership and EEE’s formal
MoU with the Henry M. Jackson Foundation (HJF), SteriTools gains a direct
pathway to world-class lab validation, clinical testing, and accelerated integration
into military and civilian health systems.`,
  },
  {
    name: "John Dvor",
    image: johnAdvisoryMember,
    fullBio: `Harvard‐trained senior staff at EEE Corp and seasoned international
commercialization strategist. With over two decades of leadership across
medtech and biotech—including roles as EVP North America at Pluri and
Managing Director at Miraki Innovation—John has driven global market entry and
M&A for transformative ventures such as Auris Health’s $5.75B acquisition by
J&J. As Managing Partner at EEE, he brings deep VC and investor relations
acumen to steer SteriTools toward global scale.`,
  },
  {
    name: "Arash Samimi, PhD",
    image: ArashAdvisoryMember,
    fullBio: `FDA regulatory and systems‐engineering advisor at EEE, expertly guiding
SteriTools’ 510(k) pathway. With a PhD in applied physics from Queen’s
University, Dr. Samimi is a highly cited physicist and medical device innovator
who has led regulatory clearance for pioneering technologies—from MR to
AI-powered diagnostics—across markets and industries. He brings cross-sector
engineering leadership, from defense to robotics, with a proven track record in
FDA communications and scalable commercialization`,
  },
  {
    name: "Nigel H. Worth, LLB, MPhil",
    image: NigelAdvisoryMember,
    fullBio: `Senior Staff at EEE Corp. Chair of the Institute of International Licensing
Practitioners (IILP) and Director & Convenor of the UK Parliamentary Group
on Licensing. A recognized authority on global intellectual property strategy and
licensing frameworks, Nigel brings high-level policy insight and international
licensing governance expertise to EEE.`,
  },
];

const AdvisorySlider = () => {
  return (
    <div className="relative w-full max-w-[1237px] mx-auto px-5 mb-[115px] ">
      {/* Title */}
      <Text as="h2" className="text-center mb-[85px]">
        Advisory <span className="text-[#EDD98A]">Team</span>
      </Text>

      {/* Swiper Container */}
      <div className="relative ">
        {/* Navigation Buttons */}
        <div className="hidden md:absolute right-[80px] bottom-[29px] z-10 md:flex gap-[33px]">
          <div className="nav-advisory-left cursor-pointer">
            <Image src={navLeft} alt="Previous" width={42} height={42} />
          </div>
          <div className="nav-advisory-right cursor-pointer">
            <Image src={navRight} alt="Next" width={42} height={42} />
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".nav-advisory-right",
            prevEl: ".nav-advisory-left",
          }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {/* Advsiory slides */}
          {advisoryMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative md:min-h-[554px] py-5 md:py-0 bg-[#14205A] text-white rounded-3xl md:p-[21px] md:pr-0 flex flex-col md:flex-row justify-end items-center gap-10 md:gap-[110px] border-t-[3px] border-t-[#EDD98A]">
                {/* Rings BG */}
                <Image
                  src={ringsBg}
                  alt="Rings Background"
                  className="absolute object-contain pointer-events-none left-[45px] top-[24px] hidden lg:block"
                />
                <div className="flex-shrink-0 w-full max-w-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                  <Text className="text-center mt-[26px] font-bold max-w-[278px] w-full mx-auto">
                    {member.name}
                  </Text>
                </div>
                <div className="text-white px-4 max-w-[711px] w-full ">
                  <Text className="whitespace-pre-line">{member.fullBio}</Text>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Buttons - Mobile */}
        <div className="md:hidden md:absolute right-[80px] bottom-[29px] z-10 justify-center items-center mt-5 flex gap-[33px]">
          <div className="nav-advisory-left cursor-pointer">
            <Image src={navLeft} alt="Previous" width={42} height={42} />
          </div>
          <div className="nav-advisory-right cursor-pointer">
            <Image src={navRight} alt="Next" width={42} height={42} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorySlider;
