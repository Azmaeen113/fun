import { useEffect, useState } from "react";

interface AnimatedCharacterProps {
  src: string;
  alt: string;
  className?: string;
  animationType: "flying" | "floating" | "hanging" | "content";
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export const AnimatedCharacter = ({ 
  src, 
  alt, 
  className = "", 
  animationType,
  position 
}: AnimatedCharacterProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // Add random delay for more chaotic feel
  useEffect(() => {
    const randomDelay = Math.random() * 2000;
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, randomDelay);

    return () => clearTimeout(timeout);
  }, []);

  const getAnimationClass = () => {
    switch (animationType) {
      case "flying":
        return "flying-animation";
      case "floating":
        return "floating-animation";
      case "hanging":
        return "menu-hanger";
      case "content":
        return "content-character";
      default:
        return "";
    }
  };

  const positionStyles = position ? {
    top: position.top,
    left: position.left,
    right: position.right,
    bottom: position.bottom,
  } : {};

  if (!isVisible) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={`${getAnimationClass()} ${className}`}
      style={positionStyles}
      loading="lazy"
    />
  );
};

// Specialized components for different character types
export const FlyingCharacter = ({ src, alt, direction, speed = "normal" }: {
  src: string;
  alt: string;
  direction: "right-to-left" | "left-to-right" | "diagonal";
  speed?: "slow" | "normal" | "fast";
}) => {
  const speedClass = speed === "slow" ? "animate-duration-20000" : 
                   speed === "fast" ? "animate-duration-10000" : "";

  return (
    <AnimatedCharacter
      src={src}
      alt={alt}
      className={`${direction} ${speedClass} w-16 md:w-20 h-auto`}
      animationType="flying"
    />
  );
};

export const MenuHanger = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <AnimatedCharacter
      src={src}
      alt={alt}
      className="w-10 md:w-12 h-auto"
      animationType="hanging"
    />
  );
};

export const ContentCharacter = ({ 
  src, 
  alt, 
  position,
  size = "medium" 
}: { 
  src: string; 
  alt: string; 
  position: "shocked" | "rainbow" | "statue";
  size?: "small" | "medium" | "large";
}) => {
  const sizeClass = size === "small" ? "w-12" : 
                   size === "large" ? "w-24" : "w-16";

  return (
    <AnimatedCharacter
      src={src}
      alt={alt}
      className={`${position} ${sizeClass} h-auto`}
      animationType="content"
    />
  );
};

// Background animation controller
export const FunAnimationLayer = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Only Roller Coaster FUN flying in background */}
      <FlyingCharacter
        src="/images/Another Roller Coaster FUN Completed NO BG.png"
        alt="Roller Coaster FUN"
        direction="diagonal"
        speed="normal"
      />
    </div>
  );
};