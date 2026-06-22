import { ButtonHTMLAttributes } from "react";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PremiumButton({
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className="
      relative
      overflow-hidden

      rounded-2xl

      bg-cyan-500/10

      px-6
      py-3

      font-medium

      text-cyan-300

      transition-all
      duration-300

      hover:bg-cyan-500/20

      hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
    "
    >
      {children}
    </button>
  );
}