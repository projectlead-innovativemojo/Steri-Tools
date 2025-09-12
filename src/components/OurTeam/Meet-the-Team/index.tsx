"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import Text from "@/ui/Text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

import "swiper/css";
import "swiper/css/navigation";

import michaelTeamMember from "@/public/images/team/Michael Karch.png";
import leighTeamMember from "@/public/images/team/Leigh Bierdeman.png";
import chrisTeamMember from "@/public/images/team/Chris Wylie.png";
import navLeft from "@/public/images/team/ArrowCircleLeft.svg";
import navRight from "@/public/images/team/ArrowCircleRight.svg";
import ringsBg from "@/public/images/team/cirular-rings.svg";

const teamMembers = [
  {
    name: "Michael Karch, MD",
    image: michaelTeamMember,
    fullBio: `Board‐certified orthopedic surgeon with over 30 years of clinical expertise in
trauma, robotic, and navigated hip and knee replacement, and an Adjunct
Associate Clinical Professor at Georgetown University School of Medicine.

A prolific medical innovator and entrepreneur, Dr. Karch holds multiple patents
and is the co‐inventor of the Smart Drill and SteriTools technologies. He is a
co-founder at Brava.Health and is the original architect in the S2X-UX Project
of next-gen surgical robotics. Currently, he is advancing his expertise through
executive programs in Artificial Intelligence and data analytics at the Harvard
Business School Business Analytics Program as well as an Executive Degree in
the Machine Learning Program at MIT.

An internationally recognized educator and author, Dr. Karch has published
works on AI ethics and healthcare innovation and delivers thought leadership on
AI’s role in medicine His contributions extend to global disaster medicine—having
served at Ground Zero after 9/11 and leading medical missions
worldwide—earning him commendations from U.S. Presidents, the United
Nations, and multiple foreign governments`,
  },
  {
    name: "Leigh Bierdeman Moss, MS, BSN, RN",
    image: leighTeamMember,
    fullBio: `Medical device inventor with over 15 years of frontline and tactical healthcare
experience. A recognized specialist in infection control, Leigh brings deep
operational insight into clinical environments, bridging field realities with scalable
innovation.`,
  },
  {
    name: "Chris Wylie, CST",
    image: chrisTeamMember,
    fullBio: `Surgical instrumentation expert and medical device inventor with 25 years of
experience. Widely regarded as a key opinion leader in aseptic technique, Chris
combines hands-on clinical mastery with a proven track record in research,
product design, and procedural innovation.`,
  },
];

export default function TeamSlider() {
  return (
    <div className="relative w-full max-w-[1237px] mx-auto px-5">
      {/* Title */}
      <Text as="h2" className="text-center mb-[73px]">
        Meet The <span className="text-[#EDD98A]">Team</span>
      </Text>

      {/* Swiper Container */}
      <div className="relative mb-[78px] ">
        {/* Navigation Buttons */}
        <div className="hidden md:absolute right-[80px] bottom-[29px] z-10 md:flex gap-[33px]">
          <div className="nav-team-left cursor-pointer">
            <Image src={navLeft} alt="Previous" width={42} height={42} />
          </div>
          <div className="nav-team-right cursor-pointer">
            <Image src={navRight} alt="Next" width={42} height={42} />
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".nav-team-right",
            prevEl: ".nav-team-left",
          }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {/* Team slides */}
          {teamMembers.map((member, index) => (
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
                  <Text className="text-center mt-[26px] font-bold max-w-[222px] w-full mx-auto">
                    {member.name}
                  </Text>
                </div>
                <div className="text-white text-sm leading-relaxed px-4 max-w-[711px] w-full ">
                  <Text className="whitespace-pre-line">{member.fullBio}</Text>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Buttons - Mobile */}
        <div className="flex justify-center items-center mt-5 z-10 md:hidden gap-[33px]">
          <div className="nav-team-left cursor-pointer">
            <Image src={navLeft} alt="Previous" width={42} height={42} />
          </div>
          <div className="nav-team-right cursor-pointer">
            <Image src={navRight} alt="Next" width={42} height={42} />
          </div>
        </div>
      </div>

      {/* Partner Button */}
      {/* <Button className="text-white bg-[#14205A] max-w-[290px] h-[60px] border-2 border-[#EDD98A] mb-[67px] mx-auto ">
        Partner with Us
      </Button> */}
      <ShimmerButton className="w-full max-w-[290px] mx-auto text-[18px] font-dmSans font-bold rounded-[8px] mb-[67px]">
        Partner with Us
      </ShimmerButton>
    </div>
  );
}
