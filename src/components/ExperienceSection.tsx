"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { profile } from "@/data/profile";
import { ChevronDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(profile.experience[0]?.id ?? null);

  return (
    <section className="relative px-6 py-20 md:py-28" id="experience">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text">Experience</span>
      </motion.h2>
      <motion.div
        className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {profile.experience.map((job) => {
          const isExpanded = expandedId === job.id;
          return (
            <motion.div
              key={job.id}
              variants={item}
              className="glass-gradient-border shine-hover p-6 transition-all duration-300 hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.2)]"
              onMouseEnter={() => setExpandedId(job.id)}
              onMouseLeave={() => setExpandedId(null)}
            >
              <div className="flex cursor-default items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-white">{job.role}</h3>
                  <p
                    className="text-sm font-medium"
                    style={{
                      background: "var(--gradient-accent)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {job.company}
                  </p>
                  <p className="text-xs text-zinc-500">{job.period}</p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                />
              </div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-2 overflow-hidden border-t border-[var(--glass-border)] pt-4"
                  >
                    {job.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-sm text-zinc-400"
                      >
                        <span className="mr-2 text-[var(--accent)]">•</span>
                        {bullet}
                      </motion.li>
                    ))}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-gradient-to-r from-[var(--accent)]/15 to-[var(--accent-secondary)]/15 px-2.5 py-0.5 text-xs text-[var(--accent)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
