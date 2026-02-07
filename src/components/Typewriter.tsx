"use client";

import { motion } from "framer-motion";

type Props = {
  words: string[];
  className?: string;
};

export function Typewriter({ words, className = "" }: Props) {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: i * 0.15 }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? " · " : ""}
        </motion.span>
      ))}
    </span>
  );
}
