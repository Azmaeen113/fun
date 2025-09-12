import React from "react";
import { cn } from "@/lib/utils";

interface TiltedBackgroundProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  tilt?: "left" | "right" | "none";
  className?: string;
}

export const TiltedBackground = ({ 
  children, 
  variant = "primary", 
  tilt = "left",
  className 
}: TiltedBackgroundProps) => {
  const variants = {
    primary: "bg-fun-clear border-fun-dark text-white",
    secondary: "bg-fun-mid border-fun-dark text-white", 
    accent: "bg-fun-dark border-fun-clear text-white"
  };

  const tilts = {
    left: "skew-x-[-5deg]",
    right: "skew-x-[5deg]",
    none: "skew-x-0"
  };

  return (
    <span className={cn(
      "inline-block px-3 py-1 border-2 font-title",
      variants[variant],
      tilts[tilt],
      className
    )}>
      <span className={cn(
        tilt !== "none" && "inline-block skew-x-[5deg]" // Counter-skew the text
      )}>
        {children}
      </span>
    </span>
  );
};

// Preset components for common use cases
export const FunTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <TiltedBackground variant="secondary" tilt="left" className={className}>
    {children}
  </TiltedBackground>
);

export const PumpTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <TiltedBackground variant="primary" tilt="right" className={className}>
    {children}
  </TiltedBackground>
);

export const WelcomeTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <TiltedBackground variant="primary" tilt="left" className={cn("text-xl md:text-3xl", className)}>
    {children}
  </TiltedBackground>
);