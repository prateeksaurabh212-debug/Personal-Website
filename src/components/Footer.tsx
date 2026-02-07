"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--glass-border)] bg-[var(--background)] px-6 py-16 md:py-20" id="footer">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[auto_1fr] md:gap-16">
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="relative mb-6 h-28 w-28 overflow-hidden rounded-full md:h-32 md:w-32"
            style={{
              padding: "2px",
              background: "var(--gradient-border)",
              boxShadow: "0 0 30px -8px rgba(59, 130, 246, 0.2)",
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--background)]">
              <Image
                src="/images/prateek-saurabh.png"
                alt={profile.name}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white">{profile.name}</h3>
          <p
            className="mb-2 text-sm font-medium"
            style={{
              background: "var(--gradient-accent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {profile.title}
          </p>
          <p className="max-w-xs text-sm text-zinc-500">{profile.tagline}</p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5 shrink-0 text-[var(--accent)]" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5 shrink-0 text-[var(--accent)]" />
              {profile.phone}
            </a>
            <p className="flex items-center gap-3 text-sm text-zinc-400">
              <MapPin className="h-5 w-5 shrink-0 text-[var(--accent)]" />
              {profile.location}
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-strong flex h-11 w-11 items-center justify-center rounded-full text-zinc-400 transition-all hover:border-[var(--accent)]/30 hover:text-white hover:shadow-[0_0_20px_-6px_rgba(59,130,246,0.3)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-strong flex h-11 w-11 items-center justify-center rounded-full text-zinc-400 transition-all hover:border-[var(--accent-secondary)]/30 hover:text-white hover:shadow-[0_0_20px_-6px_rgba(168,85,247,0.25)]"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <div className="border-t border-[var(--glass-border)] pt-6">
            <p className="text-xs text-zinc-600">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
