"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/content";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quote = siteContent.mission.quote;
  const words = quote.split(" ");

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#111111] to-[#0B0B0B]" />

        {/* Dramatic Red Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-[#E10600]/10 blur-[100px] rounded-full" />
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10" />

        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-radial-gradient" style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #0B0B0B 70%)"
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Element */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-[#E10600] rounded-full blur-2xl opacity-30"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative w-20 h-20 border-2 border-[#E10600] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-[#E10600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Quote Marks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.2, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <svg className="w-16 h-16 text-[#E10600] mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </motion.div>

        {/* Animated Quote */}
        <div className="mb-8">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  ease: "easeOut"
                }}
                className={`inline-block mr-4 ${
                  word.toLowerCase() === "bold" || word.toLowerCase() === "change."
                    ? "text-[#E10600] text-glow"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Section Divider */}
        <motion.div
          className="section-divider mb-8"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        />

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#E10600]" />
          <span className="font-heading text-sm tracking-[0.3em] text-gray-400 uppercase">
            {siteContent.mission.author}
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#E10600]" />
        </motion.div>
      </div>
    </section>
  );
}
