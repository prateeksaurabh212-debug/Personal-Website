"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/profile";
import { MagneticButton } from "./MagneticButton";

export function ContactSection() {
  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
  };

  return (
    <section className="relative px-6 py-20 md:py-28" id="contact">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text">Get in touch</span>
      </motion.h2>
      <motion.div
        className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <MagneticButton
          as="button"
          onClick={copyEmail}
          className="relative flex items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-3 text-white transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
          style={{
            background: "var(--gradient-accent)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Mail className="h-5 w-5" />
          Copy Email
        </MagneticButton>
        <MagneticButton
          as="a"
          href={profile.socials.linkedin}
          className="glass-strong flex items-center gap-3 rounded-full border border-[var(--glass-border)] px-6 py-3 text-white transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.3)]"
        >
          <Linkedin className="h-5 w-5" />
          LinkedIn
        </MagneticButton>
        <MagneticButton
          as="a"
          href={profile.socials.github}
          className="glass-strong flex items-center gap-3 rounded-full border border-[var(--glass-border)] px-6 py-3 text-white transition-all duration-300 hover:border-[var(--accent-secondary)]/40 hover:shadow-[0_0_30px_-8px_rgba(168,85,247,0.25)]"
        >
          <Github className="h-5 w-5" />
          GitHub
        </MagneticButton>
      </motion.div>
    </section>
  );
}
