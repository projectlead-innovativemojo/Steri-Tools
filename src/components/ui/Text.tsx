import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onClick?: React.MouseEventHandler<HTMLHeadingElement>;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "md:text-[48px] text-[32px] font-bold font-montserrat leading-[40px] md:leading-[56px]",
            className
          )}
          onClick={onClick}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-montserrat md:text-[36px] text-[28px] leading-[36px] font-semibold md:leading-[44px]",
            className
          )}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          "font-dmSans md:text-[18px] text-[16px] font-normal leading-[24px] md:leading-[26px]",
          className
        )}
        onClick={onClick}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
