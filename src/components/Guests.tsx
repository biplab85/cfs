"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import { siteContent } from "@/content";

interface Guest {
  id: string;
  name: string;
  role: string;
  category: string;
  image: string;
  videoUrl: string;
  videoId: string;
  upcoming?: boolean;
}

// Get guest data and categories from content.tsx
const guestsData: Guest[] = siteContent.guests.data;
const categories = siteContent.guests.categories;

export default function Guests() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  // Handle "View More" click - show 12 guests
  const handleViewMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(12);
      setIsLoading(false);
    }, 800);
  };

  // Initialize Fancybox for YouTube videos
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Fancybox.bind as any)("[data-fancybox='guest-video']", {
      mainClass: "fancybox-video-popup",
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Filter guests by category and limit visible count
  const allFilteredGuests = activeCategory === "All"
    ? guestsData
    : guestsData.filter(guest => guest.category === activeCategory);

  const filteredGuests = allFilteredGuests.slice(0, visibleCount);
  const hasMoreGuests = visibleCount < 12 && visibleCount < allFilteredGuests.length;
  // Show YouTube button after expanding to 12 guests (or if all guests are already shown)
  const showYouTubeButton = visibleCount >= 12 || visibleCount >= allFilteredGuests.length;

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section id="guests" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0B0B0B] to-[#0a0a0a]">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(225,6,0,0.1) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E10600]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E10600]/5 rounded-full blur-[120px]" />
      </div>

      {/* Decorative Animated Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Side Elements */}
        {/* Floating Circle - Left Top */}
        <motion.div
          className="absolute left-[5%] top-[15%] w-16 h-16 rounded-full border border-[#E10600]/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Dot - Left */}
        <motion.div
          className="absolute left-[8%] top-[35%] w-2 h-2 bg-[#E10600]/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Square - Left Middle */}
        <motion.div
          className="absolute left-[3%] top-[55%] w-8 h-8 border border-[#E10600]/15 rotate-45"
          animate={{
            y: [0, 25, 0],
            rotate: [45, 90, 45],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Angled Line - Left Bottom */}
        <motion.div
          className="absolute left-[6%] bottom-[25%] w-12 h-px bg-gradient-to-r from-[#E10600]/30 to-transparent"
          animate={{
            x: [0, 10, 0],
            rotate: [-30, -25, -30],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot Group - Left Bottom */}
        <motion.div
          className="absolute left-[10%] bottom-[15%] flex gap-1.5"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 bg-[#E10600]/30 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#E10600]/20 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#E10600]/10 rounded-full" />
        </motion.div>

        {/* Right Side Elements */}
        {/* Floating Ring - Right Top */}
        <motion.div
          className="absolute right-[6%] top-[20%] w-20 h-20 rounded-full border-2 border-[#E10600]/10"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.95, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner Dot in Ring */}
        <motion.div
          className="absolute right-[6%] top-[20%] w-20 h-20 flex items-center justify-center"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-2 h-2 bg-[#E10600]/30 rounded-full" />
        </motion.div>

        {/* Diamond - Right Middle */}
        <motion.div
          className="absolute right-[4%] top-[45%] w-6 h-6 border border-[#E10600]/20 rotate-45"
          animate={{
            y: [0, -20, 0],
            rotate: [45, 135, 45],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Dots - Right */}
        <motion.div
          className="absolute right-[8%] top-[60%] w-1.5 h-1.5 bg-[#E10600]/40 rounded-full"
          animate={{
            y: [0, 12, 0],
            x: [0, -5, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cross Shape - Right Bottom */}
        <motion.div
          className="absolute right-[5%] bottom-[30%]"
          animate={{
            rotate: [0, 90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-px bg-[#E10600]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-px h-8 bg-[#E10600]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Floating Circle - Right Bottom */}
        <motion.div
          className="absolute right-[10%] bottom-[12%] w-10 h-10 rounded-full border border-[#E10600]/15"
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top Elements */}
        {/* Horizontal Line - Top */}
        <motion.div
          className="absolute left-[25%] top-[8%] w-20 h-px bg-gradient-to-r from-transparent via-[#E10600]/25 to-transparent"
          animate={{
            x: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Square - Top */}
        <motion.div
          className="absolute right-[30%] top-[5%] w-4 h-4 border border-[#E10600]/15"
          animate={{
            rotate: [0, 180, 360],
            y: [0, 10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dots - Top Right */}
        <motion.div
          className="absolute right-[20%] top-[10%] flex gap-2"
          animate={{
            x: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-1 bg-[#E10600]/30 rounded-full" />
          <div className="w-1 h-1 bg-[#E10600]/40 rounded-full" />
          <div className="w-1 h-1 bg-[#E10600]/30 rounded-full" />
        </motion.div>

        {/* Bottom Elements */}
        {/* Angled Line - Bottom Left */}
        <motion.div
          className="absolute left-[20%] bottom-[8%] w-16 h-px bg-gradient-to-r from-[#E10600]/20 to-transparent rotate-12"
          animate={{
            x: [0, 20, 0],
            rotate: [12, 18, 12],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Circle - Bottom Center */}
        <motion.div
          className="absolute left-[45%] bottom-[5%] w-12 h-12 rounded-full border border-[#E10600]/10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Dots - Bottom Right */}
        <motion.div
          className="absolute right-[25%] bottom-[6%] flex flex-col gap-1"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-1 bg-[#E10600]/20 rounded-full" />
          <div className="w-1 h-1 bg-[#E10600]/30 rounded-full" />
        </motion.div>

        {/* Large Ambient Rings - Very Subtle */}
        <motion.div
          className="absolute -left-20 top-1/3 w-40 h-40 rounded-full border border-[#E10600]/5"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-16 bottom-1/3 w-32 h-32 rounded-full border border-[#E10600]/5"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-[#E10600]/10 border border-[#E10600]/20 text-[#E10600] text-xs font-semibold tracking-wider uppercase mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Our Conversations
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-[#E10600] to-[#ff4d4d] bg-clip-text text-transparent">Guests</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {siteContent.guests.subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#E10600] to-[#ff1a1a] cursor-pointer text-white shadow-lg shadow-[#E10600]/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 cursor-pointer hover:text-white border border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Guests Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredGuests.map((guest, index) => (
              <motion.div
                key={guest.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group"
              >
                {/* Card Container */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#111] shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#E10600]/10 transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    {/* Guest Image */}
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/logo.png";
                        target.className = "w-full h-full object-contain p-12 bg-gradient-to-b from-[#1a1a1a] to-[#111]";
                      }}
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <motion.div
                      className="absolute top-3 left-3 md:top-4 md:left-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className={`px-2.5 py-1 md:px-3 md:py-1.5 text-white text-[10px] md:text-xs font-semibold tracking-wider uppercase rounded-lg shadow-lg ${
                        guest.category === "Up Coming"
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 shadow-amber-500/30"
                          : "bg-[#E10600] shadow-[#E10600]/30"
                      }`}>
                        {guest.category}
                      </span>
                    </motion.div>

                    {/* Play/View Button - Opens YouTube Video or Coming Soon Modal (Mobile only) */}
                    {guest.upcoming ? (
                      <button
                        onClick={() => setShowComingSoon(true)}
                        className="playBtn absolute top-3 right-3 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex md:hidden items-center justify-center text-white border border-white/20 transition-all duration-300 hover:bg-[#E10600] hover:border-[#E10600] hover:scale-110 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    ) : (
                      <a
                        href={`https://www.youtube.com/embed/${guest.videoId}?autoplay=1&rel=0`}
                        data-fancybox="guest-video"
                        data-caption={`${guest.name} - ${guest.role}`}
                        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex md:hidden items-center justify-center text-white border border-white/20 transition-all duration-300 hover:bg-[#E10600] hover:border-[#E10600] hover:scale-110 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </a>
                    )}

                    {/* Guest Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transform transition-transform duration-300">
                      <h3 className="text-white font-bold text-base md:text-xl leading-tight mb-1 group-hover:text-[#ff4d4d] transition-colors duration-300">
                        {guest.name}
                      </h3>
                      <p className="text-gray-300 text-xs md:text-sm line-clamp-1 opacity-80">
                        {guest.role}
                      </p>
                    </div>

                    {/* Center Play Button (visible on hover) */}
                    {guest.upcoming ? (
                      <button
                        onClick={() => setShowComingSoon(true)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E10600]/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-[#E10600]/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    ) : (
                      <a
                        href={`https://www.youtube.com/embed/${guest.videoId}?autoplay=1&rel=0`}
                        data-fancybox="guest-video"
                        data-caption={`${guest.name} - ${guest.role}`}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E10600]/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-[#E10600]/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </a>
                    )}

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#E10600]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More / View All Button */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {showYouTubeButton ? (
            // All guests shown - Show "View all on YouTube" button
            <motion.a
              href="https://www.youtube.com/@ChilliFlakesStudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E10600] to-[#ff1a1a] text-white font-semibold rounded-xl shadow-lg shadow-[#E10600]/25 hover:shadow-[#E10600]/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              View all on YouTube
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          ) : (
            // More guests to show - Show "View more" button with loading state
            <motion.button
              onClick={handleViewMore}
              disabled={isLoading}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E10600] to-[#ff1a1a] text-white font-semibold rounded-xl shadow-lg shadow-[#E10600]/25 hover:shadow-[#E10600]/40 transition-all duration-300 disabled:opacity-80"
              whileHover={isLoading ? {} : { scale: 1.05, y: -2 }}
              whileTap={isLoading ? {} : { scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  View more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Custom Fancybox Styles for Video Popup */}
      <style jsx global>{`
        .fancybox-video-popup {
          --fancybox-bg: rgba(0, 0, 0, 0.97);
        }

        .fancybox-video-popup .fancybox__backdrop {
          background: rgba(0, 0, 0, 0.97);
          backdrop-filter: blur(20px);
        }

        .fancybox-video-popup .fancybox__content {
          background: transparent !important;
          padding: 0 !important;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
        }

        .fancybox-video-popup .fancybox__slide {
          padding: 40px !important;
        }

        .fancybox-video-popup .fancybox__iframe {
          border-radius: 16px;
          background: #000;
        }

        .fancybox-video-popup .fancybox__caption {
          padding: 20px;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        }

        .fancybox-video-popup .fancybox__toolbar {
          --fancybox-color: #fff;
          padding: 16px;
        }

        .fancybox-video-popup .fancybox__button--close {
          background: rgba(225, 6, 0, 0.9);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(225, 6, 0, 0.4);
        }

        .fancybox-video-popup .fancybox__button--close:hover {
          background: #E10600;
          transform: rotate(90deg) scale(1.1);
        }

        .fancybox-video-popup .f-fadeIn {
          animation: videoPopupIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fancybox-video-popup .f-fadeOut {
          animation: videoPopupOut 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes videoPopupIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes videoPopupOut {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
        }

        /* Video container aspect ratio */
        .fancybox-video-popup .fancybox__content iframe {
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16/9;
          border: none;
        }

        @media (max-width: 768px) {
          .fancybox-video-popup .fancybox__slide {
            padding: 16px !important;
          }

          .fancybox-video-popup .fancybox__button--close {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl"
              onClick={() => setShowComingSoon(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              onClick={() => setShowComingSoon(false)}
            >
              <div
                className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#E10600]/20 rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl shadow-black/50"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-[#E10600] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <img
                    src="/logo.png"
                    alt="Chilli Flakes Studio"
                    className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain"
                  />
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-16 h-1 bg-gradient-to-r from-[#E10600] to-[#ff4d4d] mx-auto mb-6 rounded-full"
                />

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Episode Recorded
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    Coming soon on{" "}
                    <span className="text-[#E10600] font-semibold">Chilli Flakes Studio</span>
                  </p>
                </motion.div>

                {/* Subscribe Button */}
                <motion.a
                  href="https://www.youtube.com/@ChilliFlakesStudio?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-[#E10600] to-[#ff1a1a] text-white font-semibold rounded-xl shadow-lg shadow-[#E10600]/25 hover:shadow-[#E10600]/40 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe for Updates
                </motion.a>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#E10600]/30 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#E10600]/30 rounded-br-2xl" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}


