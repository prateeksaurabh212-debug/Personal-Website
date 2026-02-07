"use client";

import { motion } from "framer-motion";

const GRADIO_SPACE_URL = "https://huggingface.co/spaces/Prateek212/career-conversations-manual";

export function GradioChatSection() {
  return (
    <section className="relative px-6 py-20 md:py-28" id="chat">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text">Career Chat</span>
      </motion.h2>
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass-gradient-border overflow-hidden rounded-2xl">
          {/* @ts-expect-error gradio-app is a custom element from Gradio JS */}
          <gradio-app
            src={GRADIO_SPACE_URL}
            className="block w-full min-h-[500px]"
            style={{ minHeight: "500px" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
