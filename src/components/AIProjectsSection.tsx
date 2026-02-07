"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function AIProjectsSection() {
  return (
    <section className="relative px-6 py-20 md:py-28" id="projects">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text">AI Projects</span>
      </motion.h2>
      <motion.div
        className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {profile.aiProjects.map((project, i) => (
          <motion.article
            key={project.id}
            className="glass-gradient-border shine-hover p-6 transition-all duration-300 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              borderImage: undefined,
            }}
          >
            <h3 className="mb-2 font-semibold text-white">{project.name}</h3>
            <p className="mb-4 text-sm text-zinc-400">{project.description}</p>
            <ul className="mb-4 space-y-1 text-sm text-zinc-500">
              {project.highlights.map((h, j) => (
                <li key={j}>
                  <span
                    className="mr-1 font-medium"
                    style={{
                      background: "var(--gradient-accent)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    →
                  </span>{" "}
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gradient-to-r from-[var(--accent-secondary)]/20 to-[var(--accent)]/20 px-2.5 py-0.5 text-xs text-[var(--accent-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
