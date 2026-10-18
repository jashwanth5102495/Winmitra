import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Youtube, ExternalLink, ChevronLeft, ChevronRight, Leaf, Eye, RotateCcw } from 'lucide-react';

export interface ShortItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

export const WHY_CHOOSE_SHORTS: ShortItem[] = [
  {
    id: 'Pea61En4SkA',
    title: 'Crop Protection & Yield Performance',
    subtitle: 'Advanced bio-organic protection shielding crops from stress and boosting harvest vigor.',
    url: 'https://www.youtube.com/shorts/Pea61En4SkA',
  },
  {
    id: 'UVuphOvb6fY',
    title: 'Field Demonstration & Real Farm Results',
    subtitle: 'Witness explosive root development, lush foliage, and enhanced flowering in the field.',
    url: 'https://www.youtube.com/shorts/UVuphOvb6fY',
  },
  {
    id: 'FLkkFP0CaUE',
    title: 'Precision Bio-Fertilizer Formulation',
    subtitle: 'High potency nutrient synthesis engineered for sustainable Indian agriculture.',
    url: 'https://www.youtube.com/shorts/FLkkFP0CaUE',
  },
];

interface WhyChooseShortsPlayerProps {
  className?: string;
}

export const WhyChooseShortsPlayer: React.FC<WhyChooseShortsPlayerProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCard, setShowCard] = useState(true);

  const currentShort = WHY_CHOOSE_SHORTS[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? WHY_CHOOSE_SHORTS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % WHY_CHOOSE_SHORTS.length);
  };

  const selectShort = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* 9:16 Vertical Video Container */}
      <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/15 group">
        <AnimatePresence mode="wait">
          {isPlaying ? (
            /* Embedded YouTube Shorts Player */
            <motion.div
              key={`player-${currentShort.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full bg-black"
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${currentShort.id}?autoplay=1&rel=0&loop=1&playlist=${currentShort.id}`}
                title={currentShort.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />

              {/* Top Controls Overlay when playing */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-20 pointer-events-auto">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-md rounded-full text-white text-[11px] font-semibold border border-white/20">
                  <Youtube className="w-3.5 h-3.5 text-red-500 fill-current" />
                  <span>Shorts #{currentIndex + 1}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsPlaying(false)}
                    title="Return to preview"
                    className="p-1.5 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md text-white text-xs border border-white/20 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={currentShort.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in YouTube"
                    className="p-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs transition-colors shadow"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Preview Card with Thumbnail and Play Button */
            <motion.div
              key={`preview-${currentShort.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer overflow-hidden"
            >
              {/* High-res YouTube Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${currentShort.id}/hqdefault.jpg`}
                alt={currentShort.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60 pointer-events-none" />

              {/* Top YouTube Shorts Badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/90 backdrop-blur-md text-white text-xs font-semibold rounded-full shadow-lg">
                  <Youtube className="w-4 h-4 fill-current" />
                  <span>YouTube Shorts</span>
                </div>
                <div className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-yellow-300 text-xs font-medium rounded-full border border-white/10">
                  {currentIndex + 1} of {WHY_CHOOSE_SHORTS.length}
                </div>
              </div>

              {/* Centered Big Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-red-600/40 animate-ping opacity-75 group-hover:bg-red-500/50" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(239,68,68,0.9)] transition-all duration-300">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Bottom Video Info */}
              <div className="absolute bottom-24 left-4 right-4 z-10 text-white">
                <div className="inline-block px-2 py-0.5 mb-1.5 bg-yellow-400/20 text-yellow-300 text-[10px] font-bold rounded uppercase tracking-wider">
                  Featured Short
                </div>
                <h4 className="font-bold text-sm sm:text-base leading-snug line-clamp-2 drop-shadow">
                  {currentShort.title}
                </h4>
                <div className="mt-1 flex items-center gap-1 text-xs text-yellow-300 font-medium">
                  <Play className="w-3 h-3 fill-current" /> Click to play video
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Card: "Sustainable Today, Better Tomorrow" */}
        {showCard && !isPlaying && (
          <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-green-600/95 to-green-700/95 rounded-xl p-3.5 shadow-xl z-20 pointer-events-auto backdrop-blur-sm border border-white/15">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 shadow">
                <Leaf className="w-4 h-4 text-green-800" />
              </div>
              <div>
                <div className="font-bold text-white text-xs sm:text-sm leading-tight">Sustainable Today,</div>
                <div className="font-bold text-yellow-300 text-xs sm:text-sm leading-tight">Better Tomorrow</div>
              </div>
            </div>
            <p className="text-white/90 text-[11px] leading-relaxed">
              We follow eco-friendly practices that nurture the soil, protect the environment and secure a better future.
            </p>
          </div>
        )}

        {/* Prev / Next Nav Arrows on Hover */}
        <button
          onClick={handlePrev}
          aria-label="Previous Short"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white flex items-center justify-center z-20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-white/20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Short"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white flex items-center justify-center z-20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-white/20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Selector Pills & External Link Below Card */}
      <div className="mt-3.5 w-full max-w-[320px] sm:max-w-[360px] flex items-center justify-between gap-2 px-1">
        {/* Pills */}
        <div className="flex items-center gap-1.5">
          {WHY_CHOOSE_SHORTS.map((short, idx) => (
            <button
              key={short.id}
              onClick={(e) => selectShort(idx, e)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'bg-yellow-400 text-black shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Short {idx + 1}
            </button>
          ))}
        </div>

        {/* Direct Link to YouTube Shorts */}
        <a
          href={currentShort.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 dark:text-red-400 transition-colors"
        >
          <Youtube className="w-3.5 h-3.5 fill-current" />
          <span>YouTube</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default WhyChooseShortsPlayer;
