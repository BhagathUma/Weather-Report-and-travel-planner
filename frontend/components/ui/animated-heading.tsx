"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface Props {
  title: string;
  subtitle?: string;
}

export default function AnimatedHeading({
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="space-y-4 text-center"
    >
      <h2 className="text-4xl font-bold glow-text">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto max-w-2xl text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}