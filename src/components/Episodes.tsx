"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { siteContent } from "@/content";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

// Fallback with sample YouTube video IDs (these are real YouTube thumbnails)
const fallbackEpisodes: YouTubeVideo[] = [
  { id: "dQw4w9WgXcQ", title: "Cricket & Leadership with Aminul Islam Bulbul", thumbnail: "" },
  { id: "9bZkp7q19f0", title: "The Journey of Miles with Hamin Ahmed", thumbnail: "" },
  { id: "kJQP7kiw5Fk", title: "Behind the Music: Artcell's Story", thumbnail: "" },
  { id: "RgKAFK5djSk", title: "Sports Excellence with Khaled Mashud", thumbnail: "" },
  { id: "OPf0YbXqDm0", title: "Community Leaders Making a Difference", thumbnail: "" },
  { id: "JGwWNGJdvx8", title: "Art & Culture: Preserving Heritage", thumbnail: "" },
  { id: "hT_nvWreIhg", title: "Medical Professionals in the Diaspora", thumbnail: "" },
  { id: "CevxZvSJLk8", title: "Entrepreneurship Stories: Building Dreams", thumbnail: "" },
  { id: "fJ9rUzIMcZQ", title: "Women in Leadership: Breaking Barriers", thumbnail: "" },
  { id: "60ItHLz5WEA", title: "The Art of Bangladeshi Cinema", thumbnail: "" },
  { id: "YQHsXMglC9A", title: "Tech Innovators: South Asians in Tech", thumbnail: "" },
  { id: "09R8_2nJtjg", title: "Culinary Traditions: Food That Connects", thumbnail: "" },
  { id: "pRpeEdMmmQ0", title: "Youth Voices: The Next Generation", thumbnail: "" },
  { id: "SlPhMPnQ58k", title: "Sports Beyond Cricket", thumbnail: "" },
  { id: "PT2_F-1esPk", title: "Music Industry Insights", thumbnail: "" },
  { id: "QFs3PIZb3js", title: "Social Work Heroes", thumbnail: "" },
  { id: "lp-EO5I60KA", title: "Fashion & Identity", thumbnail: "" },
  { id: "e-ORhEE9VVg", title: "Education Excellence", thumbnail: "" },
  { id: "Zi_XLOBDo_Y", title: "Mental Health Awareness", thumbnail: "" },
  { id: "bo_efYhYU2A", title: "Artists & Painters", thumbnail: "" },
  { id: "7wtfhZwyrcc", title: "Military Veterans", thumbnail: "" },
  { id: "DyDfgMOUjCI", title: "Writers & Poets", thumbnail: "" },
  { id: "papuvlVeZg8", title: "Environmental Activists", thumbnail: "" },
  { id: "IcrbM1l_BoI", title: "Philanthropy & Giving Back", thumbnail: "" },
  { id: "L_jWHffIx5E", title: "Cultural Festivals", thumbnail: "" },
].map(ep => ({
  ...ep,
  thumbnail: `https://img.youtube.com/vi/${ep.id}/hqdefault.jpg`
}));

export default function Episodes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [episodes, setEpisodes] = useState<YouTubeVideo[]>(fallbackEpisodes);
  const [activeIndex, setActiveIndex] = useState(2);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Try to fetch real videos from API, fallback to sample data
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/youtube");
        const data = await response.json();

        if (data.videos && data.videos.length > 0) {
          setEpisodes(data.videos);
        }
      } catch (error) {
        // Keep fallback data
        console.log("Using fallback episodes");
      }
    };

    fetchVideos();
  }, []);

  return (
    <section id="episodes" className="relative py-24 md:py-32 overflow-hidden w-full" ref={ref}>
      {/* Distinct Premium Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

        {/* Radial gradient accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,6,0,0.08)_0%,_transparent_70%)]" />

        {/* Top and bottom edge gradients for separation */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080808] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />

        {/* Subtle film grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />

        {/* Animated red glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E10600]/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#E10600]/5 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle horizontal lines pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }} />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#E10600] text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Watch Now
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Featured <span className="text-[#E10600]">Videos</span>
          </h2>
        </motion.div>

        {/* Coverflow Swiper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full"
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            initialSlide={2}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 15,
                coverflowEffect: {
                  stretch: 40,
                  depth: 100,
                  modifier: 1,
                },
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 25,
                coverflowEffect: {
                  stretch: 50,
                  depth: 150,
                  modifier: 1,
                },
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 35,
                coverflowEffect: {
                  stretch: 70,
                  depth: 200,
                  modifier: 1,
                },
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 45,
                coverflowEffect: {
                  stretch: 90,
                  depth: 250,
                  modifier: 1,
                },
              },
              1536: {
                slidesPerView: 2.5,
                spaceBetween: 50,
                coverflowEffect: {
                  stretch: 100,
                  depth: 280,
                  modifier: 1,
                },
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full"
          >
            {episodes.map((episode, index) => (
              <SwiperSlide
                key={episode.id}
              >
                {({ isActive }) => (
                  <a
                    href={`https://www.youtube.com/watch?v=${episode.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block transition-all duration-500 ${
                      isActive ? "scale-100" : "scale-[0.85] opacity-50"
                    }`}
                  >
                    <div className="relative group">
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#111] border border-white/5 shadow-2xl shadow-black/50">
                        <img
                          src={episode.thumbnail}
                          alt={episode.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/logo.png";
                            target.className = "w-full h-full object-contain p-8 bg-[#111]";
                          }}
                        />

                        {/* Red glow on hover */}
                        <div className="absolute inset-0 bg-[#E10600]/0 group-hover:bg-[#E10600]/10 transition-colors duration-500" />

                        {/* Play Button */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}>
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#E10600] flex items-center justify-center shadow-[0_0_50px_rgba(225,6,0,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(225,6,0,0.7)] transition-all duration-300">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        {/* Title Overlay */}
                        <div className={`absolute bottom-0 left-0 right-0 p-5 md:p-8 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}>
                          <h3 className="text-white font-semibold text-base md:text-xl line-clamp-2 drop-shadow-lg">
                            {episode.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href={siteContent.hero.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E10600] text-white font-medium rounded-full hover:bg-[#ff1a1a] transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            View All Episodes
          </a>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        #episodes .swiper {
          padding: 60px 0;
          width: 100%;
          overflow: visible;
        }

        #episodes .swiper-wrapper {
          display: flex;
          align-items: center;
        }

        #episodes .swiper-slide {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center center;
        }

        #episodes .swiper-slide-active {
          z-index: 10;
        }

        #episodes .swiper-slide-prev,
        #episodes .swiper-slide-next {
          z-index: 5;
        }

        /* Add subtle border glow on active slide */
        #episodes .swiper-slide-active .relative.group > div {
          box-shadow: 0 0 0 1px rgba(225, 6, 0, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </section>
  );
}
