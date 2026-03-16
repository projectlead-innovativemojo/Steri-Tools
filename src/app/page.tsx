import React from "react";

import HomeHero from "@/components/Home/Hero";
import SurgicalInstruments from "@/components/Home/Surgical-Instruments";
import WhyNow from "@/components/Home/Why-Now";
import SurgicalInstrumentComparison from "@/components/Home/Surgical-Instrument-Comparison";
import SteriToolsOverview from "@/components/Home/SteriTools-Overview";
import MissionVission from "@/components/Home/Mission-Vission";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <SurgicalInstruments />
      <WhyNow />
      <SurgicalInstrumentComparison />
      <SteriToolsOverview />
      <MissionVission />
    </>
  );
};

export default HomePage;
