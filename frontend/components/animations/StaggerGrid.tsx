"use client";

import { motion } from "framer-motion";

import {
  staggerContainer,
} from "@/lib/animations";

interface Props {
  children: React.ReactNode;
}

export default function StaggerGrid({
  children,
}: Props) {
  return (
    <motion.div
      variants={
        staggerContainer
      }
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}