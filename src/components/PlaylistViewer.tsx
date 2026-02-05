"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface PlaylistVideo {
  id: string;
  title: string;
  thumbnail: string;
}

const PLAYLIST_ID = "PLBxZq9sogFVVjfeKvXd51MLW3FiKPZz_K";

// Animated Equalizer Component
function AudioEqualizer() {
  return (
    <div className="flex items-end gap-[2px] h-3 md:h-4">
      {[1, 2, 3, 4].map((bar) => (
        <motion.div
          key={bar}
          className="w-[3px] bg-[#E10600] rounded-full"
          animate={{
            height: ["40%", "100%", "60%", "90%", "40%"],
          }}
          transition={{
            duration: 0.8 + bar * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export default function PlaylistViewer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [videos, setVideos] = useState<PlaylistVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<PlaylistVideo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch playlist videos
    const fetchPlaylist = async () => {
      try {
        // Fetch from YouTube's playlist page and extract video IDs
        const response = await fetch(`/api/youtube/playlist?id=${PLAYLIST_ID}`);
        if (response.ok) {
          const data = await response.json();
          if (data.videos && data.videos.length > 0) {
            setVideos(data.videos);
            setSelectedVideo(data.videos[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching playlist:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  return (
    <section id="playlist" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0a0a0a] to-[#0B0B0B]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(225,6,0,0.1) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E10600]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#E10600]/5 rounded-full blur-[120px]" />
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
            Watch Our Episodes
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Full <span className="bg-gradient-to-r from-[#E10600] to-[#ff4d4d] bg-clip-text text-transparent">Playlist</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore all our episodes featuring extraordinary conversations with inspiring personalities
          </p>
        </motion.div>

        {/* Playlist Layout */}
        <motion.div
          className="grid lg:grid-cols-5 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Video Player - Right on Desktop, Top on Mobile */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="sticky top-24">
              {/* Player Container */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
                {/* Video Embed */}
                <div className="relative aspect-video bg-black">
                  {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-[#E10600]/30 border-t-[#E10600] rounded-full animate-spin" />
                        <span className="text-gray-400 text-sm">Loading playlist...</span>
                      </div>
                    </div>
                  ) : selectedVideo ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo.id}?rel=0&modestbranding=1&autoplay=0`}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <p className="text-gray-500">Select a video to play</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                {selectedVideo && !isLoading && (
                  <div className="p-5 md:p-6 border-t border-white/5">
                    <h3 className="text-white font-semibold text-lg md:text-xl line-clamp-2 mb-2">
                      {selectedVideo.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-[#E10600]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>Chilli Flakes Studio</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Playlist List - Left on Desktop, Bottom on Mobile */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
              {/* Playlist Header */}
              <div className="p-4 md:p-5 border-b border-white/5 bg-black/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#E10600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Episode Playlist</h4>
                    <p className="text-gray-500 text-sm">{videos.length} videos</p>
                  </div>
                </div>
              </div>

              {/* Video List */}
              <div className="max-h-[500px] lg:max-h-[600px] overflow-y-auto custom-scrollbar">
                {isLoading ? (
                  <div className="p-8 text-center">
                    <div className="w-8 h-8 border-3 border-[#E10600]/30 border-t-[#E10600] rounded-full animate-spin mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">Loading videos...</p>
                  </div>
                ) : videos.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-gray-500">No videos found</p>
                  </div>
                ) : (
                  <div className="divide-y divide-white/5">
                    {videos.map((video, index) => (
                      <motion.button
                        key={video.id}
                        onClick={() => setSelectedVideo(video)}
                        className={`relative w-full p-3 md:p-4 flex gap-3 md:gap-4 text-left transition-all duration-300 group ${
                          selectedVideo?.id === video.id
                            ? "bg-gradient-to-r from-[#E10600]/15 via-[#E10600]/10 to-transparent border-l-4 border-[#E10600] shadow-[inset_0_0_20px_rgba(225,6,0,0.1)]"
                            : "hover:bg-white/5 border-l-4 border-transparent"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {/* Thumbnail */}
                        <div className="relative flex-shrink-0 w-28 md:w-32 aspect-video rounded-lg overflow-hidden bg-[#222]">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                            }}
                          />
                          {/* Play Overlay */}
                          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                            selectedVideo?.id === video.id ? "opacity-100 bg-black/50" : "opacity-0 group-hover:opacity-100 bg-black/40"
                          }`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              selectedVideo?.id === video.id ? "bg-[#E10600]" : "bg-white/90"
                            }`}>
                              {selectedVideo?.id === video.id ? (
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                </svg>
                              ) : (
                                <svg className="w-3 h-3 text-[#E10600] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              )}
                            </div>
                          </div>
                          {/* Now Playing Badge */}
                          {selectedVideo?.id === video.id && (
                            <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-[#E10600] rounded text-[10px] font-semibold text-white">
                              NOW PLAYING
                            </div>
                          )}
                        </div>

                        {/* Video Info */}
                        <div className="flex-1 min-w-0 py-0.5">
                          <div className="flex items-start gap-2">
                            <h5 className={`flex-1 font-medium text-sm md:text-base line-clamp-2 transition-colors duration-300 ${
                              selectedVideo?.id === video.id ? "text-[#E10600]" : "text-white group-hover:text-[#ff4d4d]"
                            }`}>
                              {video.title}
                            </h5>
                            {/* Animated Equalizer for Playing Video */}
                            {selectedVideo?.id === video.id && (
                              <div className="flex-shrink-0 mt-0.5">
                                <AudioEqualizer />
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-gray-500 text-xs md:text-sm">
                              Episode {index + 1}
                            </p>
                            {selectedVideo?.id === video.id && (
                              <span className="text-[#E10600] text-[10px] md:text-xs font-medium animate-pulse">
                                Playing
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* View All on YouTube */}
              <div className="p-4 border-t border-white/5 bg-black/20">
                <a
                  href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#E10600]/10 hover:bg-[#E10600]/20 text-[#E10600] font-semibold text-sm rounded-lg transition-all duration-300 border border-[#E10600]/20 hover:border-[#E10600]/40"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  View Full Playlist on YouTube
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(225, 6, 0, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(225, 6, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
