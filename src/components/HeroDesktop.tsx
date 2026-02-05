"use client";

import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { siteContent } from "@/content";

export default function HeroDesktop() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        {/* Subtle red accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,6,0,0.08)_0%,_transparent_60%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Logo - Prominently displayed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 md:mb-4"
          >
            <img
              src="/logo.png"
              alt="Chilli Flakes Studio"
              className="w-[60%] sm:w-[50%] md:w-30 h-auto mx-auto drop-shadow-[0_0_30px_rgba(225,6,0,0.3)]"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 md:mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs md:text-sm text-gray-300 font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
              New Episodes Every Week
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="font-display text-[50px] sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-4 md:mb-4 tracking-tight leading-[0.9]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block">{siteContent.hero.headline.split(" ")[0]}</span>
            <span className="block mt-1 md:mt-2 bg-gradient-to-r from-[#E10600] via-[#ff4d4d] to-[#E10600] bg-clip-text text-transparent">
              {siteContent.hero.headline.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="font-body text-base sm:text-lg md:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 md:mb-8 leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {siteContent.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href={siteContent.hero.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-7 py-2 sm:py-3 bg-[#E10600] text-white font-semibold text-base sm:text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(225,6,0,0.5)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff1a1a] to-[#E10600] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="relative z-10">{siteContent.hero.ctaYoutube}</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-7 py-2 sm:py-3 bg-white/5 backdrop-blur-md text-white font-semibold text-base sm:text-lg rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <span>{siteContent.hero.ctaFacebook}</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Large Brand Watermark */}
      <motion.div
        className="absolute left-0 right-0 z-0 overflow-hidden pointer-events-none hidden sm:block"
        style={{ bottom: "-50px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <h2
          className="font-display font-bold text-center whitespace-nowrap"
          style={{
            fontSize: "clamp(60px, 15vw, 280px)",
            letterSpacing: "2px",
            color: "rgba(20, 20, 20, 0.8)",
          }}
        >
          CHILLI FLAKES Studio
        </h2>
      </motion.div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            className="absolute bottom-4 md:bottom-[25px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="flex flex-col items-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-3">Scroll to explore</span>
              <motion.div
                className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2"
                whileHover={{ borderColor: "rgba(225, 6, 0, 0.5)" }}
              >
                <motion.div
                  className="w-1 h-2 bg-gradient-to-b from-[#E10600] to-[#E10600]/50 rounded-full"
                  animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent pointer-events-none" />
    </section>
  );
}
