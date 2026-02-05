"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { siteContent } from "@/content";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const handleSubscribe = () => {
    window.open("https://www.youtube.com/@ChilliFlakesStudio", "_blank", "noopener,noreferrer");
    setShowSubscribeModal(false);
  };

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

              {/* Contact Email */}
              <a
                href="mailto:hello@chilliflakesstudio.com"
                className="inline-flex items-center gap-3 text-white hover:text-[#E10600] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center group-hover:bg-[#E10600]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#E10600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Contact us</p>
                  <p className="text-lg font-medium">hello@chilliflakesstudio.com</p>
                </div>
              </a>

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

              {/* Button - Direct redirect to YouTube */}
              <motion.button
                onClick={handleSubscribe}
                className="relative inline-block bg-white text-[#E10600] font-heading font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-sm w-full sm:w-auto hover:bg-gray-100 transition-colors cursor-pointer"
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

      {/* Subscribe Confirmation Modal */}
      <AnimatePresence>
        {showSubscribeModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl"
              onClick={() => setShowSubscribeModal(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              onClick={() => setShowSubscribeModal(false)}
            >
              <div
                className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#E10600]/20 rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl shadow-black/50"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowSubscribeModal(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-[#E10600] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* YouTube Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-[#E10600]/10 rounded-full flex items-center justify-center border border-[#E10600]/30">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-[#E10600]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
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
                    Subscribe to Our Channel
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-2">
                    Do you want to subscribe to
                  </p>
                  <p className="text-[#E10600] font-semibold text-lg md:text-xl">
                    Chilli Flakes Studio?
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 mt-8"
                >
                  <button
                    onClick={() => setShowSubscribeModal(false)}
                    className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubscribe}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E10600] to-[#ff1a1a] text-white font-semibold rounded-xl shadow-lg shadow-[#E10600]/25 hover:shadow-[#E10600]/40 hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Subscribe
                  </button>
                </motion.div>

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
