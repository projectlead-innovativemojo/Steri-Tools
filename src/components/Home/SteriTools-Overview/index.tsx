import React from "react";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const SteriToolsOverview = () => {
  return (
    <div className="w-full max-w-[1237px] px-5 lg:px-0 mx-auto mb-[55px]">
      <div className="">
        <Text className="w-full mb-[56px]">
          Introducing <span className="text-[#EDD98A]">SteriBasin Go</span>, an
          innovative solution engineered to enhance surgical protocols by
          removing bioburden, including bacteria, from surgical instruments in
          real time during procedures. As the first product of its kind,
          SteriBasin Go empowers operative personnel to automatically clean
          instruments while the surgeries are underway and also keeps the
          instruments readily available throughout the procedure.
          <br />
          This technology minimizes bioburden left on instruments and reduces
          the workload in sterile processing departments, improving tray
          turnover and saving valuable time.
          <br /> <br />
          This innovative device boasts a military spec rugged and lightweight
          design, making it easily portable for forward surgical teams in
          austere environments. Its battery powered operation, supported by
          rechargeable batteries, ensures flexibility and convenience,
          eliminating the reliance on fixed power sources. Additionally,
          SteriBasin Go is designed to work seamlessly with a consumable kit
          that is replaced for each patient, reinforcing optimal aseptic
          technique.
          <br />
          <br />
          Tailored for military applications, SteriBasin Go technology is also
          scalable for civilian hospital use, positioning it as a versatile
          solution for enhancing surgical efficiency and safety across various
          settings.
        </Text>

        <Button className="px-6 py-3 max-w-[290px] h-15 mx-auto text-[#fff] bg-[#14205A] border-2 border-[#EDD98A]">
          Invest in SteriTools
        </Button>
      </div>
    </div>
  );
};

export default SteriToolsOverview;
