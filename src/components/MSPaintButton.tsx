import React from "react";
import { cn } from "@/lib/utils";

interface MSPaintButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "pill";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const MSPaintButton = React.forwardRef<HTMLButtonElement, MSPaintButtonProps>(
  ({ className, variant = "default", size = "medium", children, ...props }, ref) => {
    const baseStyles = `
      font-body border-3 cursor-[url('/images/Hand_drawing.jpg'),_pointer] 
      transition-all duration-100 active:translate-y-1 select-none
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      default: `
        bg-fun-clear border-fun-clear text-white
        border-t-white border-l-white 
        border-r-fun-dark border-b-fun-dark
        hover:bg-fun-mid active:border-inset
      `,
      secondary: `
        bg-fun-mid border-fun-mid text-white
        border-t-white border-l-white 
        border-r-fun-dark border-b-fun-dark
        hover:bg-fun-dark active:border-inset
      `,
      pill: `
        bg-fun-clear border-fun-dark text-white rounded-full
        border-2 hover:bg-fun-mid transform hover:scale-105
        active:scale-95 shadow-lg
      `
    };

    const sizes = {
      small: "px-3 py-1 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

MSPaintButton.displayName = "MSPaintButton";