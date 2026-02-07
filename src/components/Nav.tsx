"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "AI Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "#footer", label: "Footer" },
];

export function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 glass-strong border-b border-[var(--glass-border)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold gradient-text-accent transition-opacity hover:opacity-90"
        >
          PS
        </a>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className="gradient-underline text-sm text-zinc-400 hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
