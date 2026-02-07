"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
  as?: "a" | "button";
};

export function MagneticButton({
  children,
  className = "",
  style: userStyle,
  href,
  onClick,
  as = "button",
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { type: "spring" as const, stiffness: 300, damping: 20 };
  const xSpring = useSpring(x, spring);
  const ySpring = useSpring(y, spring);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.2;
    const deltaY = (e.clientY - centerY) * 0.2;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const common = {
    style: { ...userStyle, x: xSpring, y: ySpring },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className,
  };

  if (as === "a" && href) {
    return (
      <motion.a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} target="_blank" rel="noopener noreferrer" {...common}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref as React.RefObject<HTMLButtonElement>} type="button" onClick={onClick} {...common}>
      {children}
    </motion.button>
  );
}
