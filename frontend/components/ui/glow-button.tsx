"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function GlowButton({
  children,
  disabled,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      disabled={disabled}
      onClick={onClick}
      className="
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-violet-600
        px-6
        py-4
        font-semibold
        text-white
        shadow-lg
        shadow-cyan-500/20
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {children}
    </motion.button>
  );
}