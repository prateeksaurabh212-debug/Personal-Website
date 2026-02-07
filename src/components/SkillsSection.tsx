"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const SKILL_GROUPS: { head: string; keys: (keyof typeof profile.skills)[] }[] = [
  { head: "Product", keys: ["Product Management"] },
  { head: "Tech", keys: ["Technical"] },
  { head: "Data / Analytics", keys: ["Data & Analytics"] },
  { head: "AI", keys: ["AI/ML Product"] },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1 },
};

export function SkillsSection() {
  return (
    <section className="relative px-6 py-20 md:py-28" id="skills">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text">Skills</span>
      </motion.h2>
      <motion.div
        className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {SKILL_GROUPS.map(({ head, keys }) => {
          const skills = keys.flatMap((k) => profile.skills[k] ?? []);
          return (
            <motion.div key={head} variants={item} className="glass-gradient-border shine-hover rounded-2xl p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                <span
                  className="bg-clip-text font-medium"
                  style={{
                    background: "var(--gradient-accent)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {head}
                </span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((name) => (
                  <span
                    key={name}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border hover:border-[var(--accent)]/20 hover:text-white"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
