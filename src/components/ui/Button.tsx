import React from "react";

import { cn } from "@/lib/utils";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode; // Add children prop
  className?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text = "Explore Music",
  children,
  className,
  type = "button",
  loading = false,
}) => {
  return (
    <>
      <button
        type={type}
        disabled={loading}
        className={cn(
          "w-full flex justify-center items-center text-[#14205A] bg-[#EDD98A] rounded-[8px] text-[18px] font-dmSans font-bold leading-[19.36px] h-[49px] max-w-[193px]",
          className
        )}
      >
        {children || text} {/* Use children if available, otherwise use text */}
      </button>
    </>
  );
};

export default Button;
