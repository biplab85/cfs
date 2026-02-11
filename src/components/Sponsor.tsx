"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sponsors = [
  {
    id: "platinum-grand",
    name: "Platinum Grand",
    logo: "/sponsor/PLATINUM-GRAND-LOGO.png",
  },
  {
    id: "waasey",
    name: "Waasey",
    logo: "/sponsor/waasey.png",
  },
  {
    id: "hirae-co",
    name: "Hirae & Co",
    logo: "/sponsor/hirae&co.png",
  },
  {
    id: "younus-group",
    name: "Younus Group",
    logo: "/sponsor/younus-group.png",
  },
  {
    id: "jago-corporation",
    name: "Jago Corporation",
    logo: "/sponsor/jago-corporation.png",
  },
  {
    id: "manola",
    name: "Manola",
    logo: "/sponsor/manola.png",
  },
  {
    id: "osmo",
    name: "Osmo",
    logo: "/sponsor/osmo.png",
  },

];

export default function Sponsor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#100a0a] via-[#1a0808] to-[#0d0505]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E10600]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E10600]/20 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#E10600]/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#E10600]/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Side */}
        {/* Circle - Left Top */}
        <motion.div
          className="absolute left-[4%] top-[12%] w-14 h-14 rounded-full border border-[#E10600]/20"
          animate={{ y: [0, -18, 0], rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Dot - Left */}
        <motion.div
          className="absolute left-[7%] top-[30%] w-2 h-2 bg-[#E10600]/40 rounded-full"
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Square - Left Middle */}
        <motion.div
          className="absolute left-[3%] top-[50%] w-7 h-7 border border-[#E10600]/15 rotate-45"
          animate={{ y: [0, 20, 0], rotate: [45, 90, 45], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Triangle - Left Bottom */}
        <motion.div
          className="absolute left-[6%] bottom-[28%]"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#E10600]/25" />
        </motion.div>

        {/* Dot Group - Left Bottom */}
        <motion.div
          className="absolute left-[9%] bottom-[14%] flex gap-1.5"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 bg-[#E10600]/30 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#E10600]/20 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#E10600]/10 rounded-full" />
        </motion.div>

        {/* Right Side */}
        {/* Ring - Right Top */}
        <motion.div
          className="absolute right-[5%] top-[15%] w-18 h-18 rounded-full border-2 border-[#E10600]/10"
          animate={{ y: [0, 14, 0], rotate: [0, -180, -360], scale: [1, 0.95, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner Dot in Ring */}
        <motion.div
          className="absolute right-[5%] top-[15%] w-18 h-18 flex items-center justify-center"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-2 h-2 bg-[#E10600]/30 rounded-full" />
        </motion.div>

        {/* Diamond - Right Middle */}
        <motion.div
          className="absolute right-[4%] top-[42%] w-5 h-5 border border-[#E10600]/20 rotate-45"
          animate={{ y: [0, -18, 0], rotate: [45, 135, 45], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Triangle - Right */}
        <motion.div
          className="absolute right-[7%] top-[58%]"
          animate={{ y: [0, 12, 0], rotate: [180, 195, 180], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#E10600]/20" />
        </motion.div>

        {/* Cross Shape - Right Bottom */}
        <motion.div
          className="absolute right-[5%] bottom-[25%]"
          animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-px bg-[#E10600]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-px h-8 bg-[#E10600]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Small Circle - Right Bottom */}
        <motion.div
          className="absolute right-[9%] bottom-[10%] w-10 h-10 rounded-full border border-[#E10600]/15"
          animate={{ y: [0, -16, 0], x: [0, 7, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top Elements */}
        {/* Horizontal Line - Top */}
        <motion.div
          className="absolute left-[22%] top-[6%] w-16 h-px bg-gradient-to-r from-transparent via-[#E10600]/25 to-transparent"
          animate={{ x: [0, 25, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Square - Top Right */}
        <motion.div
          className="absolute right-[28%] top-[4%] w-4 h-4 border border-[#E10600]/15"
          animate={{ rotate: [0, 180, 360], y: [0, 8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dots - Top */}
        <motion.div
          className="absolute right-[18%] top-[8%] flex gap-2"
          animate={{ x: [0, -12, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-1 bg-[#E10600]/30 rounded-full" />
          <div className="w-1 h-1 bg-[#E10600]/40 rounded-full" />
          <div className="w-1 h-1 bg-[#E10600]/30 rounded-full" />
        </motion.div>

        {/* Bottom Elements */}
        {/* Triangle - Bottom Left */}
        <motion.div
          className="absolute left-[18%] bottom-[6%]"
          animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[9px] border-l-transparent border-r-transparent border-b-[#E10600]/20" />
        </motion.div>

        {/* Circle - Bottom Center */}
        <motion.div
          className="absolute left-[42%] bottom-[4%] w-11 h-11 rounded-full border border-[#E10600]/10"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Dots - Bottom Right */}
        <motion.div
          className="absolute right-[22%] bottom-[5%] flex flex-col gap-1"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-1 bg-[#E10600]/20 rounded-full" />
          <div className="w-1 h-1 bg-[#E10600]/30 rounded-full" />
        </motion.div>

        {/* Large Ambient Rings */}
        <motion.div
          className="absolute -left-16 top-1/3 w-36 h-36 rounded-full border border-[#E10600]/5"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-14 bottom-1/3 w-28 h-28 rounded-full border border-[#E10600]/5"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -30, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-heading text-sm tracking-[0.3em] text-[#E10600] uppercase mb-4">
            Our Partners
          </span>
          <h2 className="font-display text-section text-white">
            Proud <span className="text-[#E10600]">Sponsors</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Backed by amazing brands who believe in amplifying South Asian voices
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="hidden flex flex-wrap justify-center gap-4 md:gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-18px)]"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-[#111111] border border-[#E10600]/10 rounded-lg p-6 md:p-8 flex items-center justify-center group-hover:bg-white group-hover:border-white/50 transition-all duration-500 aspect-[4/3] overflow-hidden">
                {/* Sponsor Logo */}
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`relative z-10 object-contain grayscale invert opacity-60 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 ${sponsor.id === "jago-corporation" ? "max-w-[95%] max-h-[95%]" : "max-w-[80%] max-h-[80%]"
                    }`}
                />

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#E10600]/0 group-hover:border-[#E10600]/30 transition-colors duration-300 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#E10600]/0 group-hover:border-[#E10600]/30 transition-colors duration-300 rounded-bl-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Sponsors Grid - White cards with colored logos */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={`white-${sponsor.id}`}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group relative w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-18px)]"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white border border-white/20 rounded-lg p-6 md:p-8 flex items-center justify-center group-hover:border-[#E10600]/40 transition-all duration-500 aspect-[4/3] overflow-hidden group-hover:shadow-[0_10px_40px_rgba(225,6,0,0.15)]">
                {/* Sponsor Logo */}
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`relative z-10 object-contain transition-all duration-500 group-hover:scale-110 ${sponsor.id === "jago-corporation" ? "max-w-[95%] max-h-[95%]" : "max-w-[80%] max-h-[80%]"
                    }`}
                />

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#E10600]/0 group-hover:border-[#E10600]/30 transition-colors duration-300 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#E10600]/0 group-hover:border-[#E10600]/30 transition-colors duration-300 rounded-bl-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
