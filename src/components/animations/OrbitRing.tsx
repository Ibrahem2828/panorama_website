"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type OrbitRingProps = {
  className?: string;
  size?: number;
  borderColor?: string;
  speed?: string;
};

export function OrbitRing({
  className,
  size = 280,
  borderColor = "border-panorama-purple/20",
  speed = "animate-orbit",
}: OrbitRingProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full border",
        prefersReduced ? "" : speed,
        borderColor,
        className,
      )}
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        marginTop: -(size / 2),
        marginLeft: -(size / 2),
      }}
    />
  );
}
