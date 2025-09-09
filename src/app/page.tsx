import React from "react";

import HomeHero from "@/components/Home/Hero";
import SurgicalInstruments from "@/components/Home/Surgical-Instruments";
import WhyNow from "@/components/Home/Why-Now";
import SteriToolsOverview from "@/components/Home/SteriTools-Overview";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <SurgicalInstruments />
      <WhyNow />
      <SteriToolsOverview />
    </>
  );
};

export default HomePage;
