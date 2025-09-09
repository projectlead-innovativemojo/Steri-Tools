import React from "react";

import HomeHero from "@/components/Home/Hero";
import SurgicalInstruments from "@/components/Home/Surgical-Instruments";
import WhyNow from "@/components/Home/Why-Now";
import SteriToolsOverview from "@/components/Home/SteriTools-Overview";
import MissionVission from "@/components/Home/Mission-Vission";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <SurgicalInstruments />
      <WhyNow />
      <SteriToolsOverview />
      <MissionVission />
    </>
  );
};

export default HomePage;
