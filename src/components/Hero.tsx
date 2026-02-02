"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/content";

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled more than 50px, show when at top
      setShowScrollIndicator(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Mobile Logo - only visible on mobile */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 md:hidden w-[80%]">
        <img src="/logo.png" alt="Chilli Flakes Studio" className="w-[75px] m-auto h-auto" />
      </div>

      {/* Mobile Gradient Background - only visible on mobile */}
      <div className="absolute inset-0 md:hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0B0B0B]" />
        {/* Subtle red radial glow from top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(225,6,0,0.15)_0%,_transparent_50%)]" />
        {/* Subtle red radial glow from bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(225,6,0,0.1)_0%,_transparent_40%)]" />
        {/* Corner accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(225,6,0,0.08)_0%,_transparent_30%)]" />
      </div>

      {/* Video Background - hidden on mobile */}
      <div className="hidden md:flex absolute inset-0 top-0 md:top-[-150px] justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mx-auto md:mx-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-[#00000085]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Badge - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 hidden md:block"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
            Live Episodes Every Week
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="font-display text-[70px] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[0.9]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">{siteContent.hero.headline.split(" ")[0]}</span>
          <span className="block mt-2 bg-gradient-to-r from-[#E10600] via-[#ff4d4d] to-[#E10600] bg-clip-text text-transparent">
            {siteContent.hero.headline.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-body text-xl sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {siteContent.hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href={siteContent.hero.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#E10600] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff1a1a] to-[#E10600] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span className="relative z-10">{siteContent.hero.ctaYoutube}</span>
          </motion.a>

          <motion.a
            href={siteContent.hero.facebookUrl}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <span>{siteContent.hero.ctaFacebook}</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-[50px] md:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
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

      {/* Large Brand Watermark */}
      <motion.div
        className="absolute left-0 right-0 z-10 overflow-hidden pointer-events-none"
        style={{ bottom: "-81px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <h2
          className="font-display font-bold text-center whitespace-nowrap"
          style={{
            fontSize: "clamp(60px, 15vw, 200px)",
            letterSpacing: "3.6px",
            color: "rgba(20, 20, 20, 0.5)",
          }}
        >
          CHILLI FLAKES Studio
        </h2>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent pointer-events-none" />
    </section>
  );
}
