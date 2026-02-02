"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Fancybox } from "@fancyapps/ui";

// Gallery images - Behind the scenes content
const galleryImages = [
  {
    id: "1",
    src: "https://img.youtube.com/vi/4gJz7TtLWKs/maxresdefault.jpg",
    title: "Interview with BCB President",
    category: "Interview",
    likes: "2.4K",
    height: "tall",
  },
  {
    id: "2",
    src: "https://img.youtube.com/vi/y7B1_N6NB0s/maxresdefault.jpg",
    title: "Cricket Legend Special",
    category: "Sports",
    likes: "1.8K",
    height: "normal",
  },
  {
    id: "3",
    src: "https://img.youtube.com/vi/oWwvR9G4QIc/maxresdefault.jpg",
    title: "Habibul Bashar Episode",
    category: "Interview",
    likes: "3.1K",
    height: "short",
  },
  {
    id: "4",
    src: "https://img.youtube.com/vi/yQJrKS3d4bI/maxresdefault.jpg",
    title: "Miles Founder - Hamin Ahmed",
    category: "Music",
    likes: "4.2K",
    height: "tall",
  },
  {
    id: "5",
    src: "https://img.youtube.com/vi/1u9pzpplWe4/maxresdefault.jpg",
    title: "Health & Wellness Talk",
    category: "Lifestyle",
    likes: "1.5K",
    height: "normal",
  },
  {
    id: "6",
    src: "https://img.youtube.com/vi/CSoTkrbgKWU/maxresdefault.jpg",
    title: "Community Stories",
    category: "Community",
    likes: "2.1K",
    height: "short",
  },
  {
    id: "7",
    src: "https://img.youtube.com/vi/fJBPbK38zms/maxresdefault.jpg",
    title: "Inspiring Journey",
    category: "Documentary",
    likes: "1.9K",
    height: "normal",
  },
  {
    id: "8",
    src: "https://img.youtube.com/vi/cwrlxWBGuEs/maxresdefault.jpg",
    title: "Creative Conversations",
    category: "Talk Show",
    likes: "2.7K",
    height: "tall",
  },
  {
    id: "9",
    src: "https://img.youtube.com/vi/4gJz7TtLWKs/maxresdefault.jpg",
    title: "Studio Behind the Scenes",
    category: "BTS",
    likes: "5.6K",
    height: "short",
  },
  {
    id: "10",
    src: "https://img.youtube.com/vi/yQJrKS3d4bI/maxresdefault.jpg",
    title: "Live Music Session",
    category: "Music",
    likes: "3.8K",
    height: "normal",
  },
  {
    id: "11",
    src: "https://img.youtube.com/vi/oWwvR9G4QIc/maxresdefault.jpg",
    title: "Legends Reunion",
    category: "Special",
    likes: "4.5K",
    height: "tall",
  },
  {
    id: "12",
    src: "https://img.youtube.com/vi/CSoTkrbgKWU/maxresdefault.jpg",
    title: "Special Edition Episode",
    category: "Featured",
    likes: "3.3K",
    height: "normal",
  },
];

// Breakpoints for masonry columns
const breakpointColumns = {
  default: 4,
  1280: 4,
  1024: 3,
  768: 2,
  640: 2,
};

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    // Initialize Fancybox
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Fancybox.bind as any)("[data-fancybox='gallery']", {
      showClass: "f-zoomInUp",
      hideClass: "f-fadeOut",
      mainClass: "fancybox-gallery-popup",
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

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <section id="gallery" className="relative py-32 overflow-hidden" ref={ref}>
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
            Behind The Scenes
          </span>
          <h2 className="font-display text-section text-white mb-4">
            Media <span className="text-[#E10600]">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our exclusive behind-the-scenes moments and memorable highlights
          </p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {galleryImages.map((image, index) => {
            // Determine height class based on image height property
            const heightClass =
              image.height === "tall" ? "h-[380px] md:h-[420px]" :
              image.height === "short" ? "h-[200px] md:h-[240px]" :
              "h-[280px] md:h-[320px]";

            return (
              <motion.a
                key={image.id}
                href={image.src}
                data-fancybox="gallery"
                data-caption={`${image.title} • ${image.category}`}
                className={`relative group overflow-hidden rounded-xl bg-[#111] mb-4 cursor-pointer block ${heightClass}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView && loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/logo.png";
                    target.className = "w-full h-full object-contain p-8 bg-[#111]";
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#E10600]/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {image.category}
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h4 className="text-white font-semibold text-sm md:text-base line-clamp-1 mb-1">
                    {image.title}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-300 text-xs">
                    <svg className="w-4 h-4 text-[#E10600]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>{image.likes}</span>
                  </div>
                </div>

                {/* Red Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E10600]/50 rounded-xl transition-colors duration-300 pointer-events-none" />
              </motion.a>
            );
          })}
        </Masonry>

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
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#E4405F]/25 transition-all duration-300 group"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
            <span>Follow Us on Instagram</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Masonry Grid & Fancybox Styles */}
      <style jsx global>{`
        .masonry-grid {
          display: flex;
          margin-left: -16px;
          width: auto;
        }

        .masonry-grid-column {
          padding-left: 16px;
          background-clip: padding-box;
        }

        @media (max-width: 768px) {
          .masonry-grid {
            margin-left: -12px;
          }

          .masonry-grid-column {
            padding-left: 12px;
          }

          .masonry-grid-column > a {
            margin-bottom: 12px !important;
          }
        }

        @media (max-width: 640px) {
          .masonry-grid {
            margin-left: -8px;
          }

          .masonry-grid-column {
            padding-left: 8px;
          }

          .masonry-grid-column > a {
            margin-bottom: 8px !important;
          }
        }

        /* Fancybox Popup Styles */
        .fancybox-gallery-popup {
          --fancybox-bg: rgba(0, 0, 0, 0.97);
        }

        .fancybox-gallery-popup .fancybox__backdrop {
          background: rgba(0, 0, 0, 0.97);
          backdrop-filter: blur(20px);
        }

        .fancybox-gallery-popup .fancybox__content {
          background: transparent !important;
          padding: 0 !important;
        }

        .fancybox-gallery-popup .fancybox__slide {
          padding: 60px 40px !important;
        }

        .fancybox-gallery-popup .fancybox__image {
          border-radius: 12px;
          box-shadow: 0 25px 80px -12px rgba(0, 0, 0, 0.8);
        }

        .fancybox-gallery-popup .fancybox__caption {
          padding: 16px 24px;
          text-align: center;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
        }

        .fancybox-gallery-popup .fancybox__toolbar {
          --fancybox-color: #fff;
          padding: 16px;
        }

        .fancybox-gallery-popup .fancybox__button {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .fancybox-gallery-popup .fancybox__button:hover {
          background: rgba(225, 6, 0, 0.9);
          transform: scale(1.1);
        }

        .fancybox-gallery-popup .fancybox__button--close {
          background: rgba(225, 6, 0, 0.8);
          box-shadow: 0 4px 20px rgba(225, 6, 0, 0.3);
        }

        .fancybox-gallery-popup .fancybox__button--close:hover {
          background: #E10600;
          transform: rotate(90deg) scale(1.1);
        }

        .fancybox-gallery-popup .fancybox__nav .fancybox__button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .fancybox-gallery-popup .fancybox__nav .fancybox__button:hover {
          background: rgba(225, 6, 0, 0.9);
        }

        .fancybox-gallery-popup .fancybox__thumbs {
          background: rgba(0, 0, 0, 0.9);
          padding: 12px;
        }

        .fancybox-gallery-popup .fancybox__thumb {
          border-radius: 8px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .fancybox-gallery-popup .fancybox__thumb:hover,
        .fancybox-gallery-popup .fancybox__thumb.is-current {
          opacity: 1;
          box-shadow: 0 0 0 2px #E10600;
        }

        .fancybox-gallery-popup .f-zoomInUp {
          animation: galleryPopupIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fancybox-gallery-popup .f-fadeOut {
          animation: galleryPopupOut 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes galleryPopupIn {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes galleryPopupOut {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
        }

        .fancybox-gallery-popup .fancybox__infobar {
          color: #fff;
          font-weight: 500;
          padding: 8px 16px;
          background: rgba(225, 6, 0, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .fancybox-gallery-popup .fancybox__slide {
            padding: 20px 12px !important;
          }

          .fancybox-gallery-popup .fancybox__button {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </section>
  );
}
