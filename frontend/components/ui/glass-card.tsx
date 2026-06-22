import { cn } from "@/lib/utils";
import {
  motion
} from "framer-motion";
interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <motion.div
  whileHover={{
    y: -4,
    scale: 1.01,
  }}
      className={cn(
        `
        relative
        overflow-hidden
        rounded-3xl
        glass-card

        transition-all
        duration-300

        hover:border-cyan-500/20
        hover:bg-white/[0.06]
        hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
        `,
        className
      )}
    >
      {children}
    </motion.div>
  );
}