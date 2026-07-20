"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const easeEntrance: [number, number, number, number] = [0.16, 1, 0.3, 1];

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function StaggerGroup({ children, className, delay = 0 }: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      transition={{ delay }}
      viewport={{ once: true, margin: "-40px" }}
      variants={{ visible: { transition: { staggerChildren: 0.065 } } }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = { children: ReactNode; className?: string };

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: easeEntrance } } }}>
      {children}
    </motion.div>
  );
}
