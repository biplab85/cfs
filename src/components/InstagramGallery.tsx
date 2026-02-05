"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import Masonry from "react-masonry-css";
import { Fancybox } from "@fancyapps/ui";

interface InstagramPost {
  id: string;
  src: string;
  title: string;
  category: string;
  permalink: string;
  timestamp?: string;
}

// Breakpoints for masonry columns - fewer columns for bigger images
const breakpointColumns = {
  default: 3,
  1280: 3,
  1024: 2,
  768: 2,
  640: 1,
};

// Polling interval: check for new posts every 5 minutes (300000ms)
const POLLING_INTERVAL = 5 * 60 * 1000;

export default function InstagramGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<string>("loading");

  // Fetch Instagram posts function
  const fetchPosts = useCallback(async (showLoading = false) => {
    if (showLoading) setIsLoading(true);

    try {
      // Add cache-busting parameter for fresh data
      const response = await fetch(`/api/instagram?t=${Date.now()}`, {
        cache: 'no-store',
      });
      const data = await response.json();

      if (data.posts && data.posts.length > 0) {
        // Sort by timestamp to ensure latest-first order
        const sortedPosts = [...data.posts].sort((a, b) => {
          if (a.timestamp && b.timestamp) {
            return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
          }
          return 0;
        });

        setPosts(sortedPosts);
        setDataSource(data.source || "unknown");
        setLastUpdated(data.lastUpdated || new Date().toISOString());
      }
    } catch (error) {
      console.log("Error fetching Instagram posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch and polling setup
  useEffect(() => {
    setLoaded(true);

    // Initial fetch
    fetchPosts(true);

    // Set up polling for automatic updates
    const pollInterval = setInterval(() => {
      fetchPosts(false); // Don't show loading state for background updates
    }, POLLING_INTERVAL);

    // Cleanup on unmount
    return () => {
      clearInterval(pollInterval);
    };
  }, [fetchPosts]);

  // Initialize Fancybox when posts are loaded
  useEffect(() => {
    if (posts.length > 0) {
      // Unbind first to prevent duplicate bindings
      Fancybox.unbind("[data-fancybox='instagram-gallery']");

      // Small delay to ensure DOM is updated
      const timer = setTimeout(() => {
        // Initialize Fancybox for instagram gallery images
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (Fancybox.bind as any)("[data-fancybox='instagram-gallery']", {
          showClass: "f-zoomInUp",
          hideClass: "f-fadeOut",
          mainClass: "fancybox-instagram-popup",
          groupAll: true,
          Toolbar: {
            display: {
              left: ["infobar"],
              middle: [],
              right: ["slideshow", "fullscreen", "thumbs", "close"],
            },
          },
          Thumbs: {
            type: "classic",
          },
          Images: {
            zoom: true,
          },
          Carousel: {
            infinite: true,
            transition: "slide",
          },
        });
      }, 200);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [posts]);

  // Cleanup Fancybox on unmount
  useEffect(() => {
    return () => {
      Fancybox.unbind("[data-fancybox='instagram-gallery']");
    };
  }, []);

  return (
    <section id="instagram-gallery" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Premium Cinematic Background */}
      <div className="absolute inset-0">
        {/* Base gradient - black to deep red */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0808] to-[#120808]" />

        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[#E10600]/8 via-transparent to-transparent" />

        {/* Radial spotlight effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E10600]/5 rounded-full blur-[150px] transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E10600]/4 rounded-full blur-[130px] transform translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[400px] bg-[#E10600]/3 rounded-full blur-[100px] transform -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[400px] bg-[#E10600]/3 rounded-full blur-[100px] transform translate-x-1/2" />

        {/* Film grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_transparent_50%,_rgba(0,0,0,0.4)_100%)]" />

        {/* Top and bottom edge gradients */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#080606] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080606] to-transparent" />

        {/* Bokeh light effects */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-[#E10600]/[0.03] blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[60%] right-[8%] w-24 h-24 rounded-full bg-[#E10600]/[0.04] blur-xl"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#E10600]/30 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#E10600]/30 to-transparent" />
        </div>
        <div className="absolute top-8 right-8 w-20 h-20">
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#E10600]/30 to-transparent" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#E10600]/30 to-transparent" />
        </div>
        <div className="absolute bottom-8 left-8 w-20 h-20">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#E10600]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-[#E10600]/30 to-transparent" />
        </div>
        <div className="absolute bottom-8 right-8 w-20 h-20">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#E10600]/30 to-transparent" />
          <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[#E10600]/30 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-heading text-sm tracking-[0.3em] text-[#E10600] uppercase mb-4">
            @chilliflakesstudio
          </span>
          <h2 className="font-display text-section text-white mb-4">
            Instagram <span className="text-[#E10600]">Feed</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow our journey on Instagram for the latest updates and behind-the-scenes content
          </p>
          {/* Source indicator */}
          {dataSource === "instagram_api" && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live from Instagram API
            </div>
          )}
          {dataSource === "static" && posts.length > 0 && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              From @chilliflakesstudio
            </div>
          )}
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#E10600]/20 border-t-[#E10600] rounded-full animate-spin" />
          </div>
        )}

        {/* Empty State - No Instagram Token */}
        {!isLoading && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Instagram Feed Coming Soon</h3>
            <p className="text-gray-400 max-w-md mb-6">
              Connect your Instagram account to display the latest posts from @chilliflakesstudio
            </p>
            <a
              href="https://www.instagram.com/chilliflakesstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] text-white font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Visit Instagram
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}

        {/* Masonry Gallery Grid */}
        {!isLoading && posts.length > 0 && (
          <Masonry
            breakpointCols={breakpointColumns}
            className="instagram-masonry-grid"
            columnClassName="instagram-masonry-grid-column"
          >
            {posts.map((post, index) => {
              return (
                <motion.a
                  key={post.id}
                  href={post.src}
                  data-fancybox="instagram-gallery"
                  data-caption={`${post.title} • ${post.category}`}
                  className="relative group overflow-hidden rounded-2xl bg-[#111] mb-5 cursor-pointer block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView && loaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  {/* Image - Natural size, zero cropping */}
                  <img
                    src={post.src}
                    alt={post.title}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/logo.png";
                      target.className = "w-full h-auto block p-8 bg-[#111]";
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#E10600]/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {post.category}
                  </div>

                  {/* NEW Badge for recent posts (within 24 hours) */}
                  {post.timestamp && isRecentPost(post.timestamp) && (
                    <div className="absolute top-3 right-12 px-2 py-0.5 bg-green-500 text-white text-[9px] font-bold uppercase tracking-wider rounded-full animate-pulse">
                      NEW
                    </div>
                  )}

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <h4 className="text-white font-semibold text-sm md:text-base line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-[#E10600] text-xs font-medium mt-1 inline-block">
                      #{post.category}
                    </span>
                  </div>

                  {/* Red Border on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E10600]/50 rounded-xl transition-colors duration-300 pointer-events-none" />
                </motion.a>
              );
            })}
          </Masonry>
        )}

        {/* Follow Us CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://www.instagram.com/chilliflakesstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#E4405F]/40 hover:scale-[1.02] transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="drop-shadow-sm">Follow Us on Instagram</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Masonry Grid & Fancybox Styles */}
      <style jsx global>{`
        .instagram-masonry-grid {
          display: flex;
          margin-left: -20px;
          width: auto;
        }

        .instagram-masonry-grid-column {
          padding-left: 20px;
          background-clip: padding-box;
        }

        .instagram-masonry-grid-column > a {
          margin-bottom: 20px !important;
        }

        @media (max-width: 768px) {
          .instagram-masonry-grid {
            margin-left: -16px;
          }

          .instagram-masonry-grid-column {
            padding-left: 16px;
          }

          .instagram-masonry-grid-column > a {
            margin-bottom: 16px !important;
          }
        }

        @media (max-width: 640px) {
          .instagram-masonry-grid {
            margin-left: -12px;
          }

          .instagram-masonry-grid-column {
            padding-left: 12px;
          }

          .instagram-masonry-grid-column > a {
            margin-bottom: 12px !important;
          }
        }

        /* Fancybox Popup Styles */
        .fancybox-instagram-popup {
          --fancybox-bg: rgba(0, 0, 0, 0.97);
        }

        .fancybox-instagram-popup .fancybox__backdrop {
          background: rgba(0, 0, 0, 0.97);
          backdrop-filter: blur(20px);
        }

        .fancybox-instagram-popup .fancybox__content {
          background: transparent !important;
          padding: 0 !important;
        }

        .fancybox-instagram-popup .fancybox__slide {
          padding: 60px 40px !important;
        }

        .fancybox-instagram-popup .fancybox__image {
          border-radius: 12px;
          box-shadow: 0 25px 80px -12px rgba(0, 0, 0, 0.8);
        }

        .fancybox-instagram-popup .fancybox__caption {
          padding: 16px 24px;
          text-align: center;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
        }

        .fancybox-instagram-popup .fancybox__toolbar {
          --fancybox-color: #fff;
          padding: 16px;
        }

        .fancybox-instagram-popup .fancybox__button {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .fancybox-instagram-popup .fancybox__button:hover {
          background: rgba(225, 6, 0, 0.9);
          transform: scale(1.1);
        }

        .fancybox-instagram-popup .fancybox__button--close {
          background: rgba(225, 6, 0, 0.8);
          box-shadow: 0 4px 20px rgba(225, 6, 0, 0.3);
        }

        .fancybox-instagram-popup .fancybox__button--close:hover {
          background: #E10600;
          transform: rotate(90deg) scale(1.1);
        }

        .fancybox-instagram-popup .fancybox__nav .fancybox__button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .fancybox-instagram-popup .fancybox__nav .fancybox__button:hover {
          background: rgba(225, 6, 0, 0.9);
        }

        .fancybox-instagram-popup .fancybox__thumbs {
          background: rgba(0, 0, 0, 0.9);
          padding: 12px;
        }

        .fancybox-instagram-popup .fancybox__thumb {
          border-radius: 8px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .fancybox-instagram-popup .fancybox__thumb:hover,
        .fancybox-instagram-popup .fancybox__thumb.is-current {
          opacity: 1;
          box-shadow: 0 0 0 2px #E10600;
        }

        .fancybox-instagram-popup .f-zoomInUp {
          animation: instagramPopupIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fancybox-instagram-popup .f-fadeOut {
          animation: instagramPopupOut 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes instagramPopupIn {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes instagramPopupOut {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
        }

        .fancybox-instagram-popup .fancybox__infobar {
          color: #fff;
          font-weight: 500;
          padding: 8px 16px;
          background: rgba(225, 6, 0, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .fancybox-instagram-popup .fancybox__slide {
            padding: 20px 12px !important;
          }

          .fancybox-instagram-popup .fancybox__button {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </section>
  );
}

// Helper function to check if post is recent (within 24 hours)
function isRecentPost(timestamp: string): boolean {
  const postDate = new Date(timestamp);
  const now = new Date();
  const hoursDiff = (now.getTime() - postDate.getTime()) / (1000 * 60 * 60);
  return hoursDiff <= 24;
}
