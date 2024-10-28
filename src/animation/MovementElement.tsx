"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TProsType = {
  children: ReactNode;
  duration: number;
  className?: string;
  x?: string;
  y?: string;
};

const MovementElement = ({
  children,
  duration,
  className,
  x,
  y,
}: TProsType) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: x, y: y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: x, y: y }}
      transition={{ duration: duration, ease: "easeIn" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default MovementElement;
