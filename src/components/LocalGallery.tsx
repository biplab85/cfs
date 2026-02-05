"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";

// Gallery images from local folder /public/guests/gellary
const galleryImages = [
  {
    id: "1",
    src: "/guests/gellary/1.webp",
    title: "Studio Session",
    category: "BTS",
  },
  {
    id: "2",
    src: "/guests/gellary/02.jpg",
    title: "Interview Moments",
    category: "Interview",
  },
  {
    id: "3",
    src: "/guests/gellary/03.jpg",
    title: "Behind The Camera",
    category: "BTS",
  },
  {
    id: "4",
    src: "/guests/gellary/04.jpg",
    title: "Guest Arrival",
    category: "Podcast",
  },
  {
    id: "5",
    src: "/guests/gellary/05.jpg",
    title: "Recording Session",
    category: "Studio",
  },
  {
    id: "6",
    src: "/guests/gellary/06.jpg",
    title: "Team Meeting",
    category: "Team",
  },
  {
    id: "7",
    src: "/guests/gellary/07.jpg",
    title: "Production Setup",
    category: "BTS",
  },
  {
    id: "8",
    src: "/guests/gellary/08.webp",
    title: "Live Podcast",
    category: "Podcast",
  },
  {
    id: "9",
    src: "/guests/gellary/09.webp",
    title: "Creative Discussion",
    category: "Interview",
  },
  {
    id: "10",
    src: "/guests/gellary/10.webp",
    title: "Studio Tour",
    category: "Studio",
  },
  {
    id: "11",
    src: "/guests/gellary/11.webp",
    title: "Special Episode",
    category: "Featured",
  },
  {
    id: "12",
    src: "/guests/gellary/12.webp",
    title: "Memorable Moments",
    category: "Highlights",
  },
];

export default function LocalGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    // Initialize Fancybox
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Fancybox.bind as any)("[data-fancybox='local-gallery']", {
      showClass: "f-zoomInUp",
      hideClass: "f-fadeOut",
      mainClass: "fancybox-local-gallery-popup",
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
      Fancybox.unbind("[data-fancybox='local-gallery']");
    };
  }, []);

  return (
    <section id="local-gallery" className="relative py-32 overflow-hidden" ref={ref}>
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

        {/* Responsive Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <motion.a
              key={image.id}
              href={image.src}
              data-fancybox="local-gallery"
              data-caption={`${image.title} • ${image.category}`}
              className="relative group overflow-hidden rounded-xl bg-[#111] cursor-pointer block aspect-square"
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
              {/* <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#E10600]/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {image.category}
              </div> */}

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>

              {/* Bottom Info */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h4 className="text-white font-semibold text-sm md:text-base line-clamp-1">
                  {image.title}
                </h4>
              </div> */}

              {/* Red Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E10600]/50 rounded-xl transition-colors duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>

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

      {/* Fancybox Styles */}
      <style jsx global>{`
        /* Fancybox Popup Styles for Local Gallery */
        .fancybox-local-gallery-popup {
          --fancybox-bg: rgba(0, 0, 0, 0.97);
        }

        .fancybox-local-gallery-popup .fancybox__backdrop {
          background: rgba(0, 0, 0, 0.97);
          backdrop-filter: blur(20px);
        }

        .fancybox-local-gallery-popup .fancybox__content {
          background: transparent !important;
          padding: 0 !important;
        }

        .fancybox-local-gallery-popup .fancybox__slide {
          padding: 60px 40px !important;
        }

        .fancybox-local-gallery-popup .fancybox__image {
          border-radius: 12px;
          box-shadow: 0 25px 80px -12px rgba(0, 0, 0, 0.8);
        }

        .fancybox-local-gallery-popup .fancybox__caption {
          padding: 16px 24px;
          text-align: center;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
        }

        .fancybox-local-gallery-popup .fancybox__toolbar {
          --fancybox-color: #fff;
          padding: 16px;
        }

        .fancybox-local-gallery-popup .fancybox__button {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .fancybox-local-gallery-popup .fancybox__button:hover {
          background: rgba(225, 6, 0, 0.9);
          transform: scale(1.1);
        }

        .fancybox-local-gallery-popup .fancybox__button--close {
          background: rgba(225, 6, 0, 0.8);
          box-shadow: 0 4px 20px rgba(225, 6, 0, 0.3);
        }

        .fancybox-local-gallery-popup .fancybox__button--close:hover {
          background: #E10600;
          transform: rotate(90deg) scale(1.1);
        }

        .fancybox-local-gallery-popup .fancybox__nav .fancybox__button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .fancybox-local-gallery-popup .fancybox__nav .fancybox__button:hover {
          background: rgba(225, 6, 0, 0.9);
        }

        .fancybox-local-gallery-popup .fancybox__thumbs {
          background: rgba(0, 0, 0, 0.9);
          padding: 12px;
        }

        .fancybox-local-gallery-popup .fancybox__thumb {
          border-radius: 8px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .fancybox-local-gallery-popup .fancybox__thumb:hover,
        .fancybox-local-gallery-popup .fancybox__thumb.is-current {
          opacity: 1;
          box-shadow: 0 0 0 2px #E10600;
        }

        .fancybox-local-gallery-popup .f-zoomInUp {
          animation: localGalleryPopupIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fancybox-local-gallery-popup .f-fadeOut {
          animation: localGalleryPopupOut 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes localGalleryPopupIn {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes localGalleryPopupOut {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
        }

        .fancybox-local-gallery-popup .fancybox__infobar {
          color: #fff;
          font-weight: 500;
          padding: 8px 16px;
          background: rgba(225, 6, 0, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .fancybox-local-gallery-popup .fancybox__slide {
            padding: 20px 12px !important;
          }

          .fancybox-local-gallery-popup .fancybox__button {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </section>
  );
}
