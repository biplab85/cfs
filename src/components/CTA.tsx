"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/content";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#111111] to-[#0B0B0B]" />

        {/* Red Glow Effects */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#E10600]/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E10600]/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Be Our Guest Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
           
            <div className="relative bg-[#111111] border border-[#E10600]/20 rounded-lg p-10 h-full group-hover:border-[#E10600]/40 transition-colors">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-[#E10600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="font-display text-4xl text-white mb-4">
                {siteContent.cta.guestTitle}
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {siteContent.cta.guestDescription}
              </p>

              {/* Button */}
              <motion.button
                className="btn-primary rounded-sm w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {siteContent.cta.guestButton}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#E10600]/10 rounded-tr-lg" />
            </div>
          </motion.div>

          {/* Subscribe Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF1E1E] to-[#E10600] rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-[#E10600] to-[#B80500] rounded-lg p-10 h-full overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 grid-pattern" />
              </div>

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="relative font-display text-4xl text-white mb-4">
                {siteContent.cta.subscribeTitle}
              </h3>
              <p className="relative text-white/80 text-lg mb-8 leading-relaxed">
                {siteContent.cta.subscribeDescription}
              </p>

              {/* Button */}
              <motion.button
                className="relative bg-white text-[#E10600] font-heading font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-sm w-full sm:w-auto hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-3">
                  {siteContent.cta.subscribeButton}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
              </motion.button>

              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 border border-white/10 rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/10 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
