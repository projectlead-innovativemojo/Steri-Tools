import React from "react";

import HomeHero from "@/components/Home/Hero";
import SurgicalInstruments from "@/components/Home/Surgical-Instruments";
import WhyNow from "@/components/Home/Why-Now";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <SurgicalInstruments />
      <WhyNow />
    </>
  );
};

export default HomePage;
