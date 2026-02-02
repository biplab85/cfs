"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/content";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0B0B]">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#E10600]/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block font-heading text-sm tracking-[0.3em] text-[#E10600] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Who We Are
            </motion.span>
            <h2 className="font-display text-section text-white mb-8">
              <span className="block">{siteContent.about.title.split(" ")[0]}</span>
              <span className="text-[#E10600]">{siteContent.about.title.split(" ")[1]}</span>
            </h2>

            {/* Decorative Line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#E10600] to-[#FF1E1E] mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ originX: 0 }}
            />

            <p className="font-body text-lg text-gray-400 leading-relaxed">
              {siteContent.about.content}
            </p>
          </motion.div>

          {/* Right Column - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Mission Card */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-[#E10600]/10 blur-2xl rounded-lg" />

              <div className="relative bg-gradient-to-br from-[#111111] to-[#0B0B0B] border border-[#E10600]/20 rounded-lg p-8 md:p-12">
                {/* Quote Mark */}
                <svg
                  className="absolute top-4 left-4 w-16 h-16 text-[#E10600]/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <div className="relative z-10">
                  <span className="inline-block font-heading text-xs tracking-[0.3em] text-[#E10600] uppercase mb-6">
                    Mission Statement
                  </span>
                  <p className="font-heading text-2xl md:text-3xl text-white leading-relaxed mb-6">
                    {siteContent.about.mission}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#E10600] flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#E10600]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block font-display text-xl text-white">Chilli Flakes</span>
                      <span className="text-sm text-gray-500 font-heading tracking-widest uppercase">Studio</span>
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#E10600]/30 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#E10600]/30 rounded-bl-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
