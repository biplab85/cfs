"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/content";

// Pre-calculated dot positions to avoid hydration mismatch from Math.sin/cos precision
const dotPositions = [
  { top: "50%", left: "95%" },      // 0°
  { top: "88.97%", left: "72.5%" }, // 60°
  { top: "88.97%", left: "27.5%" }, // 120°
  { top: "50%", left: "5%" },       // 180°
  { top: "11.03%", left: "27.5%" }, // 240°
  { top: "11.03%", left: "72.5%" }, // 300°
];

export default function GlobalReach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="reach" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0B0B0B] to-[#0a0a0a]" />

      {/* Subtle world map pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cellipse cx='500' cy='250' rx='450' ry='200' fill='none' stroke='%23E10600' stroke-width='0.5'/%3E%3Cellipse cx='500' cy='250' rx='300' ry='200' fill='none' stroke='%23E10600' stroke-width='0.5'/%3E%3Cellipse cx='500' cy='250' rx='150' ry='200' fill='none' stroke='%23E10600' stroke-width='0.5'/%3E%3Cline x1='50' y1='250' x2='950' y2='250' stroke='%23E10600' stroke-width='0.5'/%3E%3Cline x1='500' y1='50' x2='500' y2='450' stroke='%23E10600' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
      </div>

      {/* Red glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E10600]/5 blur-[120px] rounded-full"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-[#E10600]/10 border border-[#E10600]/20 text-[#E10600] text-xs font-semibold tracking-wider uppercase mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Worldwide Audience
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            {siteContent.audience.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our voices resonate across continents, connecting South Asian communities worldwide
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats bars */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {siteContent.audience.regions.map((region, index) => (
              <motion.div key={region.country} variants={itemVariants}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{region.country}</span>
                  <span className="text-[#E10600] font-bold">{region.percentage}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#E10600] to-[#ff4d4d] rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${region.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual globe representation */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#E10600]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle ring */}
              <motion.div
                className="absolute inset-4 rounded-full border border-[#E10600]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-[#E10600]/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-5xl sm:text-6xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                  >
                    6+
                  </motion.div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Countries</div>
                </div>
              </div>

              {/* Floating dots representing countries */}
              {dotPositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-[#E10600] rounded-full"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#E10600] mb-1">1.5M+</div>
            <div className="text-sm text-gray-400">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#E10600] mb-1">13K+</div>
            <div className="text-sm text-gray-400">Facebook Followers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#E10600] mb-1">24/7</div>
            <div className="text-sm text-gray-400">Global Access</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#E10600] mb-1">5+</div>
            <div className="text-sm text-gray-400">Languages</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
