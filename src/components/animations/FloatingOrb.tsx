"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type FloatingOrbProps = {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
};

export function FloatingOrb({
  className,
  size = 12,
  color = "bg-panorama-purple/20",
  delay = 0,
  duration = 4,
}: FloatingOrbProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div
        aria-hidden="true"
        className={cn("absolute rounded-full", color, className)}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      className={cn("absolute rounded-full", color, className)}
      style={{ width: size, height: size }}
      animate={{
        y: [0, -8, 0],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
