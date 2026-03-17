'use client';

import Image from 'next/image';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import Text from '@/ui/Text';
import beforesoak from '@/public/images/home/Before_After SteriBasin Go 1.jpg';
import aftersoak from '@/public/images/home/Before_After SteriBasin Go 2.jpg';
import nailbeforesoak from '@/public/images/home/nail-before.png';
import nailafteresoak from '@/public/images/home/nail-after.png';
import scissorbeforesoak from '@/public/images/home/siccossr-before.png';
import scissoraftersoak from '@/public/images/home/siccossr-after.png';
import toolsbeforesoak from '@/public/images/home/tool-before.png';
import toolsafteresoak from '@/public/images/home/tool-after.png';
import SteriToolsOverview from '../SteriTools-Overview';

type ComparisonCardProps = {
  beforeImage: import('next/image').StaticImageData;
  afterImage: import('next/image').StaticImageData;
};

const ComparisonCardContent = ({ beforeImage, afterImage }: ComparisonCardProps) => (
  <div className="w-full max-w-[1240px] mx-auto">
    <div className="flex flex-row gap-[14px] md:gap-[24px] w-full">
      <div className="flex flex-1 min-w-0 flex-col items-center">
        <div className="relative w-full overflow-hidden aspect-[608/307] bg-white max-h-[307px]">
          <Image
            src={beforeImage}
            alt="Before soaking in basin with water"
            width={608}
            height={307}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 50vw, 608px"
          />
        </div>
        <div className="flex w-full min-h-[90px] items-center justify-center bg-[#EEF5FF] px-2 py-3 md:py-4">
          <Text className="text-center md:text-[18px]  text-[12px] leading-[20px] md:leading-[26px]">
            Before:
            <br />
            Instrument soaked in water
          </Text>
        </div>
      </div>
      <div className="flex flex-1 min-w-0 flex-col items-center">
        <div className="relative w-full overflow-hidden aspect-[608/307] bg-white max-h-[307px]">
          <Image
            src={afterImage}
            alt="After SteriBasin Go"
            width={608}
            height={307}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 50vw, 608px"
          />
        </div>
        <div className="flex w-full min-h-[90px] items-center justify-center bg-[#EEF5FF] px-2 py-3 md:py-4">
          <Text className="text-center md:text-[18px]  text-[12px] leading-[20px] md:leading-[26px]">
            After: <br />
            Cleaned and desinfected in SteriBasin Go
          </Text>
        </div>
      </div>
    </div>
  </div>
);

export default function InstrumentComparison() {
  return (
    <section
      className="instrument-comparison-section h-auto min-h-0"
      aria-label="Instrument comparison"
    >
      <ScrollStack useWindowScroll itemDistance={48} onStackComplete={() => { }}>
        <ScrollStackItem itemClassName="scroll-stack-card--auto-height">
          <ComparisonCardContent beforeImage={beforesoak} afterImage={aftersoak} />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="scroll-stack-card--auto-height">
          <ComparisonCardContent beforeImage={nailbeforesoak} afterImage={nailafteresoak} />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="scroll-stack-card--auto-height">
          <ComparisonCardContent beforeImage={scissorbeforesoak} afterImage={scissoraftersoak} />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="scroll-stack-card--auto-height">
          <ComparisonCardContent beforeImage={toolsbeforesoak} afterImage={toolsafteresoak} />
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
}
