"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Typewriter } from "./Typewriter";

const titles = ["AI Product Manager", "GenAI Builder", "Product Strategist"];

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center gap-12 px-6 pt-24 pb-16 md:flex-row md:gap-16">
      {/* Ambient gradient orbs behind hero */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[var(--accent)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[var(--accent-secondary)]/15 blur-[100px]" />

      <motion.div
        className="order-2 md:order-1 relative z-10 flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-zinc-300"
          style={{
            border: "1px solid transparent",
            backgroundImage: "linear-gradient(var(--background), var(--background)), var(--gradient-border)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {profile.availableForWork ? "Available for work" : "Open to opportunities"}
        </motion.div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="max-w-lg text-lg text-zinc-400 md:text-xl">
          <Typewriter words={titles} />
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
        <p className="max-w-xl text-base text-zinc-500">
          {profile.location} · {profile.tagline}
        </p>
      </motion.div>
      <motion.div
        className="order-1 md:order-2 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div
          className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full md:h-72 md:w-72 glow-ring"
          style={{
            padding: "3px",
            background: "var(--gradient-border)",
            boxShadow: "0 0 60px rgba(59, 130, 246, 0.2), 0 0 100px rgba(168, 85, 247, 0.1)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--background)]">
            <Image
              src="/images/prateek-saurabh.png"
              alt={profile.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, 288px"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
