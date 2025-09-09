import React from "react";
import Image from "next/image";

import Text from "@/ui/Text";

import surgicalinstruments from "@/public/images/home/instruments.png";
import dotbg from "@/public/images/home/Dot Grid.svg";
import surgical2 from "@/public/images/home/surgical2.png";
import data from "@/public/images/home/data.png";

const SurgicalInstruments = () => {
  return (
    <div className="w-full max-w-[1237px] px-5 mx-auto ">
      <div className="w-full flex justify-center md:flex-row flex-col md:gap-[55px] gap-[20px] items-start mb-[37px]">
        <div className="w-full max-w-[789px]">
          <Text as="h2" className="mb-[64px]">
            Surgical instruments get dirty, SteriBasin Go{" "}
            <span className="text-[#EDD98A]">
              {" "}
              cleans and disinfects surgical instruments{" "}
            </span>{" "}
            in real time during surgery.
          </Text>
          <Text>
            <span className="text-[#EDD98A]"> SteriBasin Go: </span> Built
            Rugged for Combat. Scales for Civilian Use.
          </Text>
        </div>
        <Image
          src={surgicalinstruments}
          alt="image"
          className="w-full max-w-[356px]"
        />
      </div>

      {/* 2 */}

      <div className="flex relative items-center gap-[10px] md:flex-now-wrap flex-col md:flex-row">
        <div className="relative h-full  flex justify-center items-center">
          <Image src={dotbg} alt="dotbg" className="absolute w-full h-full " />
          <Image
            src={surgical2}
            alt=""
            className="w-full max-w-[590px] relative z-10"
          />
        </div>
        <Text className="w-full max-w-[615px]">
          Every surgeon knows the pattern: blood-stained instruments set on the
          back table, dropped into splash basins, reused mid-case without
          real-time disinfection.
          <br /> <br />
          The tech wipes the instruments…. but is that enough?
          <br />
          <br />
          We trust the field is sterile. It’s not. And surgical site infections
          (SSIs) remain a major driver of preventable harm.
          <br />
          <br />
          SSI bacteria are found on up to 44% of instruments left in splash
          basins for just 30 minutes. 12% of unused backtable instruments are
          contaminated - even in controlled ORs. (Oslo 2024; Najafi & Parvizi,
          2023)
          <br />
          <br />
          We keep using them anyway. Why hasn’t someone fixed this?
        </Text>
      </div>

      {/* 3 */}
      <div className="flex relative items-center flex-col gap-[10px]  md:flex-row-reverse">
        <div className="relative h-full min-h-[407px] w-full max-w-[590px] flex justify-center items-center">
          <Image
            src={dotbg}
            alt="dotbg"
            className="absolute inset-0 w-full h-full -z-10"
          />
          <Image
            src={data}
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[530px] h-[210px] z-10"
          />
        </div>
        <Text className="w-full max-w-[608px] mt-[-30px] md:mt-0">
          SteriBasin Go is a compact, table-based disinfection device delivering{" "}
          {`>6-log`} bacterial reduction in under 15 seconds—without disrupting
          surgical flow.
          <br /> <br />
          To put that in perspective: if an instrument is contaminated with 1
          million bacteria, SteriTools would reduce that to just 1 viable
          bacterium—on a single tool. Count to 15… that’s how fast.
          <br /> <br />
          Now we can trust that our instruments are clean again - and safe for
          our patients
          <br /> <br />
          It was originally built for combat environments, where sterilization
          is limited and infection is life-threatening. But SteriBasin Go scales
          to all open cases greater than 30 minutes. 
        </Text>
      </div>
    </div>
  );
};

export default SurgicalInstruments;
