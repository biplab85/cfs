"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content";

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        {/* Top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E10600]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <motion.div
              className="mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={siteContent.brand.logo}
                alt={siteContent.brand.name}
                className="w-20 h-20 object-contain"
              />
            </motion.div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {siteContent.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.2em] text-white uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Statistics", href: "#stats" },
                { label: "About", href: "#about" },
                { label: "Guests", href: "#guests" },
                { label: "Episodes", href: "#episodes" },
                // { label: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#E10600] transition-colors font-body text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#E10600] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.2em] text-white uppercase mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {siteContent.footer.links.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.url}
                    className="text-gray-500 hover:text-[#E10600] transition-colors font-body text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#E10600] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.2em] text-white uppercase mb-6">
              Connect With Us
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Follow our journey and stay updated with the latest episodes and behind-the-scenes content.
            </p>

            {/* Social Links with Brand Colors */}
            <div className="flex gap-4">
              {siteContent.social.platforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full bg-[#111111] border flex items-center justify-center transition-all duration-300 ${
                    platform.icon === "facebook"
                      ? "text-[#1877F2] border-[#1877F2]/30 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/25"
                      : platform.icon === "youtube"
                      ? "text-[#FF0000] border-[#FF0000]/30 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-lg hover:shadow-[#FF0000]/25"
                      : platform.icon === "instagram"
                      ? "text-[#E4405F] border-[#E4405F]/30 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#FCAF45] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#E4405F]/25"
                      : "text-[#00F2EA] border-[#00F2EA]/30 hover:bg-black hover:text-white hover:border-[#EE1D52] hover:shadow-lg hover:shadow-[#EE1D52]/25"
                  }`}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {platform.icon === "facebook" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                  {platform.icon === "youtube" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )}
                  {platform.icon === "instagram" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {platform.icon === "tiktok" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E10600]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {siteContent.footer.copyright}
            </motion.p>
            <motion.p
              className="text-gray-600 text-xs font-heading tracking-wider uppercase flex items-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Made by
              <svg className="w-4 h-4 text-[#E10600]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <a
                href="https://www.sklentr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E10600] transition-colors"
              >
                Sklentr
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
