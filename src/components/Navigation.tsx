"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { siteContent } from "@/content";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false); // Hidden by default
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(true); // Default to mobile
  const { scrollY } = useScroll();

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track active section on scroll
  const updateActiveSection = useCallback(() => {
    const sections = ["stats", "guests", "playlist-episodes", "reach", "about", "local-gallery", "contact"];
    const scrollPosition = window.scrollY + 150; // Offset for header height

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          return;
        }
      }
    }

    // If at the top of the page, no section is active
    if (window.scrollY < 100) {
      setActiveSection("");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection(); // Initial check

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [updateActiveSection]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show header after scrolling 100px on both mobile and desktop
    if (latest > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setIsMobileMenuOpen(false);
    }
  });

  const navLinks = [
    { label: "Statistics", href: "#stats" },
    { label: "Guests", href: "#guests" },
    { label: "Episodes", href: "#playlist-episodes" },
    { label: "Global Reach", href: "#reach" },
    { label: "Our Story", href: "#about" },
    { label: "Gallery", href: "#local-gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        mass: 1,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        type: "tween" as const,
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const mobileLinkVariants = {
    closed: { x: 50, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Gradient line accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E10600]/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                {/* Logo */}
                <motion.a
                  href="#"
                  className="flex items-center group"
                  variants={linkVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex-shrink-0 overflow-hidden rounded-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-[#E10600]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <img
                      src={siteContent.brand.logo}
                      alt={siteContent.brand.name}
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                  {navLinks.map((link) => {
                    const sectionId = link.href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    };

                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick}
                        className={`relative px-4 py-2 font-medium text-sm tracking-wide transition-colors duration-300 group ${isActive ? "text-white" : "text-gray-300 hover:text-white"
                          }`}
                        variants={linkVariants}
                        whileHover={{ y: -2 }}
                      >
                        <span className="relative z-10">{link.label}</span>
                        <motion.span
                          className={`absolute inset-0 bg-white/5 rounded-lg transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            }`}
                        />
                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#E10600] to-[#ff4d4d] transition-all duration-300 rounded-full ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                          }`} />
                      </motion.a>
                    );
                  })}

                  {/* CTA Button */}
                  <motion.a
                    href={siteContent.hero.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-[#E10600] to-[#ff1a1a] text-white text-sm font-semibold rounded-lg shadow-lg shadow-[#E10600]/25 hover:shadow-[#E10600]/40 transition-shadow duration-300"
                    variants={linkVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Watch Now
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#ff1a1a] to-[#E10600]"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  variants={linkVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 6, width: 20 } : { rotate: 0, y: 0, width: 24 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-0.5 bg-white rounded-full"
                    style={{ width: 24 }}
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-0.5 bg-white rounded-full"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -6, width: 20 } : { rotate: 0, y: 0, width: 24 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-0.5 bg-white rounded-full"
                    style={{ width: 24 }}
                  />
                </motion.button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-[#0B0B0B]/95 backdrop-blur-xl border-l border-white/10 md:hidden"
            >
              {/* Close button */}
              <div className="flex justify-end p-4 items-center">
                {/* Logo in drawer */}
                {/* <motion.div
                  className=""
                  variants={mobileLinkVariants}
                >
                  <img
                    src={siteContent.brand.logo}
                    alt={siteContent.brand.name}
                    className="w-20 h-20 object-contain"
                  />
                </motion.div> */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>



              {/* Navigation Links */}
              <div className="px-6 space-y-2">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 300); // Wait for menu close animation
                  };

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={handleMobileNavClick}
                      className={`block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300 ${isActive
                          ? "text-white bg-white/5 border-l-2 border-[#E10600]"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      variants={mobileLinkVariants}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>

              {/* Social links */}
              <motion.div
                className="absolute bottom-8 left-6 right-6"
                variants={mobileLinkVariants}
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {siteContent.social.platforms.slice(0, 4).map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      {platform.icon === "facebook" && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      )}
                      {platform.icon === "youtube" && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      )}
                      {platform.icon === "instagram" && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
                      {platform.icon === "tiktok" && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
