"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/images/prateek-saurabh.png", alt: "Prateek Saurabh - Professional headshot" },
];

export function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-20 md:py-28" id="gallery">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text">Gallery</span>
      </motion.h2>
      <motion.div
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {galleryImages.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            style={{
              padding: "2px",
              background: "var(--gradient-border)",
              boxShadow: "0 0 30px -8px rgba(59, 130, 246, 0.15)",
            }}
            onClick={() => setLightboxIndex(i)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-2px)] glass">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "linear-gradient(180deg, rgba(5,5,5,0.97) 0%, rgba(15,15,25,0.98) 100%)",
              backdropFilter: "blur(20px)",
            }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full p-2 text-white transition-colors hover:bg-white/10"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[90vh] max-w-4xl rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 80px -20px rgba(59, 130, 246, 0.3), 0 0 120px -30px rgba(168, 85, 247, 0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                width={1200}
                height={900}
                className="max-h-[90vh] w-auto rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
