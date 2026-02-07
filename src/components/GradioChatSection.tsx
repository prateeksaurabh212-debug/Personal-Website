"use client";

import { motion } from "framer-motion";

// Hugging Face Space embed URL (required for iframe/gradio-app), not the hub page URL
const HF_SPACE_EMBED_URL = "https://prateek212-career-conversations-manual.hf.space";

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
        <span className="gradient-text">Virtual me: Ask me anything about my career</span>
      </motion.h2>
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="overflow-hidden bg-[var(--glass-bg)]"
          style={{
            borderRadius: "15px",
            boxShadow: "0 0 30px -8px rgba(59, 130, 246, 0.25), 0 0 50px -12px rgba(168, 85, 247, 0.15)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <iframe
            src={HF_SPACE_EMBED_URL}
            title="Career Conversations Chat"
            className="block w-full min-h-[550px] border-0 outline-none"
            allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr; web-share; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
          />
        </div>
      </motion.div>
    </section>
  );
}
