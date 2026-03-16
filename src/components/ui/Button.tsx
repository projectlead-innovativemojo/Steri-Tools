import React from "react";

import { cn } from "@/lib/utils";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode; // Add children prop
  className?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  onclick?: () => void;
  shimmerBorder?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text = "Explore Music",
  children,
  className,
  type = "button",
  loading = false,
  onclick,
  shimmerBorder = false,
}) => {
  const innerButton = (
    <button
      type={type}
      disabled={loading}
      onClick={onclick}
      className={cn(
        "flex justify-center cursor-pointer items-center text-[#14205A] bg-brand-yellow rounded-[8px] text-[18px] font-dmSans font-bold leading-[19.36px] h-[49px]",
        className
      )}
    >
      {children || text}
    </button>
  );

  if (!shimmerBorder) {
    return innerButton;
  }

  return (
    <div className="inline-block p-[2px] rounded-[10px] shimmer-border-gradient animate-border-move">
      {innerButton}
    </div>
  );
};

export default Button;
