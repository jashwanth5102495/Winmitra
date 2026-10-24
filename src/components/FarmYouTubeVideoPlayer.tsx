import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink, Youtube, Film, CheckCircle2 } from 'lucide-react';

export interface YouTubeVideoItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  thumbnailUrl?: string;
  youtubeUrl: string;
}

export const CHANNEL_URL = 'https://www.youtube.com/@winmitraagritech';
export const CHANNEL_HANDLE = '@winmitraagritech';
export const CHANNEL_NAME = 'Winmitra Agri Tech';

export const CHANNEL_VIDEOS: YouTubeVideoItem[] = [
  {
    id: 'AEouYUUhAVM',
    title: 'Manufacturing of All Types of Agriculture Fertilizer, Bio-Stimulant & Bio-Chemical Products',
    subtitle: 'Official facility walkthrough showcasing high-grade production, formulation, and quality testing standards.',
    category: 'Facility Tour & Manufacturing',
    thumbnailUrl: 'https://img.youtube.com/vi/AEouYUUhAVM/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=AEouYUUhAVM',
  },
  {
    id: 'FLkkFP0CaUE',
    title: 'Precision Agricultural Fertilizer & Bio-Stimulant Formulations',
    subtitle: 'Advanced bio-organic compounding for healthy plant vigor, high yield, and sustainable farming.',
    category: 'Formulation Science',
    thumbnailUrl: 'https://img.youtube.com/vi/FLkkFP0CaUE/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=FLkkFP0CaUE',
  },
  {
    id: 'UVuphOvb6fY',
    title: 'Field Demonstration & Crop Growth Results',
    subtitle: 'Real farm observations demonstrating rapid vegetative growth, healthy leaf canopy, and enhanced flowering.',
    category: 'Field Results',
    thumbnailUrl: 'https://img.youtube.com/vi/UVuphOvb6fY/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=UVuphOvb6fY',
  },
  {
    id: '1U4Uuuev6Cs',
    title: 'Soil Nutrition & Active Root System Enhancement',
    subtitle: 'Improving nutrient uptake efficiency, microbial activity, and moisture retention in the rhizosphere.',
    category: 'Soil Health',
    thumbnailUrl: 'https://img.youtube.com/vi/1U4Uuuev6Cs/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=1U4Uuuev6Cs',
  },
  {
    id: 'Pea61En4SkA',
    title: 'Eco-Friendly Crop Protection & Stress Resistance',
    subtitle: 'Natural formulations that defend against environmental abiotic stress and biotic challenges.',
    category: 'Crop Protection',
    thumbnailUrl: 'https://img.youtube.com/vi/Pea61En4SkA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=Pea61En4SkA',
  },
];

interface FarmYouTubeVideoPlayerProps {
  className?: string;
}

export const FarmYouTubeVideoPlayer: React.FC<FarmYouTubeVideoPlayerProps> = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideoItem>(CHANNEL_VIDEOS[0]);
  const [isPlayingInModal, setIsPlayingInModal] = useState(true);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModalWithVideo = (video: YouTubeVideoItem) => {
    setSelectedVideo(video);
    setIsPlayingInModal(true);
    setIsModalOpen(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Video Preview Card in the Section */}
      <div
        onClick={() => openModalWithVideo(selectedVideo)}
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-950 border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-yellow-500/10"
      >
        {/* Aspect Ratio Container */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-900">
          {/* High-res YouTube Thumbnail */}
          <img
            src={selectedVideo.thumbnailUrl || `https://img.youtube.com/vi/${selectedVideo.id}/hqdefault.jpg`}
            alt={selectedVideo.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />

          {/* Dark Cinematic Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 group-hover:via-black/30 transition-all duration-300" />

          {/* Top Info Bar */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/90 backdrop-blur-md text-white text-xs font-semibold rounded-full shadow-lg">
              <Youtube className="w-4 h-4 fill-current" />
              <span>YouTube Channel</span>
            </div>
            <div className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-yellow-300 text-xs font-medium rounded-full border border-white/10">
              {CHANNEL_VIDEOS.length} Videos Available
            </div>
          </div>

          {/* Centered Big Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative">
              {/* Outer pulsing ring */}
              <div className="absolute -inset-3 rounded-full bg-red-600/40 animate-ping opacity-75 group-hover:bg-red-500/50" />
              {/* Inner glowing circle */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(239,68,68,0.9)] transition-all duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
              </div>
            </div>
          </div>

          {/* Bottom Card Title & Click Indicator */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
            <div className="inline-block px-2 py-0.5 mb-1.5 bg-yellow-400/20 text-yellow-300 text-[11px] font-semibold rounded uppercase tracking-wider">
              {selectedVideo.category}
            </div>
            <h4 className="text-white text-sm sm:text-base font-bold line-clamp-2 leading-snug group-hover:text-yellow-300 transition-colors">
              {selectedVideo.title}
            </h4>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-xs text-white/70">
              <span className="flex items-center gap-1.5 text-yellow-400 font-medium">
                <Play className="w-3.5 h-3.5 fill-current" /> Click to Play & View All Videos
              </span>
              <span className="hidden sm:inline-block text-white/50">{CHANNEL_HANDLE}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Selector Pills Below Preview */}
      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[70%] scrollbar-none">
          {CHANNEL_VIDEOS.map((video, idx) => (
            <button
              key={video.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(video);
              }}
              title={video.title}
              className={`px-2.5 py-1 text-xs rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedVideo.id === video.id
                  ? 'bg-yellow-400 text-black font-semibold shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white/80'
              }`}
            >
              Video {idx + 1}
            </button>
          ))}
        </div>

        {/* Channel Link */}
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-xs font-medium text-yellow-300 hover:text-yellow-200 transition-colors whitespace-nowrap"
        >
          <Youtube className="w-3.5 h-3.5 text-red-500 fill-current" />
          <span>Visit Channel</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* ─── POPUP MODAL ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col rounded-2xl sm:rounded-3xl bg-zinc-950 border border-white/15 shadow-2xl z-10 text-white"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-zinc-900/90">
                {/* Channel Identity */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center shadow-md">
                    <Youtube className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm sm:text-base leading-none">
                        {CHANNEL_NAME}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-xs text-white/60">{CHANNEL_HANDLE}</span>
                  </div>
                </div>

                {/* Right Actions: Visit Channel & Close Button */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href={CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow transition-colors"
                  >
                    <Youtube className="w-3.5 h-3.5 fill-current" />
                    <span className="hidden sm:inline">Subscribe on</span> YouTube
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close modal"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body - Scrollable Content */}
              <div className="overflow-y-auto p-4 sm:p-6 space-y-5">
                {/* Embedded Active Video Player */}
                <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=${isPlayingInModal ? 1 : 0}&rel=0`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Active Video Info Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="space-y-1">
                    <span className="inline-block px-2 py-0.5 bg-yellow-400 text-black text-[11px] font-bold rounded">
                      {selectedVideo.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-xs text-white/70">{selectedVideo.subtitle}</p>
                  </div>
                  <a
                    href={selectedVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors shrink-0"
                  >
                    <Youtube className="w-4 h-4 text-red-500 fill-current" />
                    Open in YouTube
                    <ExternalLink className="w-3 h-3 text-white/60" />
                  </a>
                </div>

                {/* Video Playlist Section */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Film className="w-4 h-4 text-yellow-400" />
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                        All Channel Videos ({CHANNEL_VIDEOS.length})
                      </h4>
                    </div>
                    <span className="text-xs text-white/50">Click any video to play</span>
                  </div>

                  {/* Video Grid / Cards List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {CHANNEL_VIDEOS.map((video, idx) => {
                      const isActive = selectedVideo.id === video.id;
                      return (
                        <div
                          key={video.id}
                          onClick={() => {
                            setSelectedVideo(video);
                            setIsPlayingInModal(true);
                          }}
                          className={`group cursor-pointer rounded-xl p-2.5 transition-all duration-200 border text-left ${
                            isActive
                              ? 'bg-yellow-400/10 border-yellow-400/80 shadow-md ring-1 ring-yellow-400/50'
                              : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25'
                          }`}
                        >
                          <div className="relative aspect-video rounded-lg overflow-hidden bg-black mb-2">
                            <img
                              src={video.thumbnailUrl || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                              alt={video.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            {isActive ? (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full shadow">
                                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                                  Now Playing
                                </span>
                              </div>
                            ) : (
                              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                                <div className="w-8 h-8 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                                </div>
                              </div>
                            )}
                            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-black/70 text-[10px] text-white font-medium rounded">
                              #{idx + 1}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[10px] uppercase font-semibold text-yellow-400/90">
                              {video.category}
                            </div>
                            <h5
                              className={`text-xs font-semibold line-clamp-2 leading-snug ${
                                isActive ? 'text-yellow-300' : 'text-white group-hover:text-yellow-200'
                              }`}
                            >
                              {video.title}
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Channel Promo Banner */}
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-gradient-to-r from-green-900/60 via-zinc-900 to-green-900/60 border border-green-500/20">
                    <div className="flex items-center gap-3 text-center sm:text-left">
                      <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0">
                        <Youtube className="w-6 h-6 text-red-500 fill-current" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white">
                          Subscribe to Winmitra Agri Tech on YouTube
                        </div>
                        <div className="text-xs text-white/70">
                          Watch field demos, expert application guides, and farmer success stories.
                        </div>
                      </div>
                    </div>
                    <a
                      href={CHANNEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition-all shadow-lg shrink-0"
                    >
                      <Youtube className="w-4 h-4 text-red-600 fill-current" />
                      Visit {CHANNEL_HANDLE}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FarmYouTubeVideoPlayer;
