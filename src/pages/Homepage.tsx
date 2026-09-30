import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Sprout, FlaskConical, Volume2, VolumeX } from 'lucide-react';
import ProductCarousel from '../components/ProductCarousel';
import { CropCareSolutions } from '../components/CropCareSolutions';

const podiumProducts = [
  {
    id: 'win-hi-growth',
    name: 'Win Hi-Growth',
    tagline: 'Bioactive Fulvic Acid, Amino Acid & Vitamins',
    image: '/poduct/WIN HI-GROWTH.webp',
  },
  {
    id: 'win-kissan-100',
    name: 'Win Kissan 100',
    tagline: 'Non-Ionic Wetter, Spreader & Penetrator',
    image: '/poduct/Win Kissan 100.webp',
  },
  {
    id: 'win-hap-granules',
    name: 'Win HAP Granules',
    tagline: 'Bioactive Humic Substances Granules',
    image: '/poduct/WIN HAP GRANULES.webp',
  },
  {
    id: 'win-hap-liquid',
    name: 'Win Humic (HAP Liquid)',
    tagline: 'Bioactive Humic Substances 6%',
    image: '/poduct/WIN HAP LIQUID.webp',
  },
  {
    id: 'bhoomi-shakthi',
    name: 'Bhoomi Shakthi (Humate)',
    tagline: 'Potassium Humate 49%',
    image: '/poduct/BHOOMI SHAKTHI.webp',
  },
  {
    id: 'winmitra-crop-care',
    name: 'Winmitra Crop Care',
    tagline: 'High Performance Crop Care Formula',
    image: '/1.png',
  },
  {
    id: 'winmitra-bio-stimulant',
    name: 'Winmitra Bio-Stimulant',
    tagline: 'Advanced Organic Bio-Stimulant',
    image: '/2.png',
  },
];

const whyChooseVideos = ['/1.mp4', '/5.mp4', '/6.mp4', '/7.mp4', '/8.mp4'];
const farmToTableVideos = ['/3.mp4', '/4.mp4'];

export function Homepage() {
  const [podiumIndex, setPodiumIndex] = useState(0);
  const [whyChooseVideoIdx, setWhyChooseVideoIdx] = useState(0);
  const [farmVideoIdx, setFarmVideoIdx] = useState(0);

  const [isWhyChooseMuted, setIsWhyChooseMuted] = useState(true);
  const [isFarmMuted, setIsFarmMuted] = useState(true);

  const whyChooseRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const farmRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleWhyChooseEnded = (endedIdx: number) => {
    const nextIdx = (endedIdx + 1) % whyChooseVideos.length;
    const nextEl = whyChooseRefs.current[nextIdx];
    if (nextEl) {
      nextEl.currentTime = 0;
      nextEl.muted = isWhyChooseMuted;
      nextEl.play().catch(() => {});
    }
    setWhyChooseVideoIdx(nextIdx);
  };

  const handleFarmEnded = (endedIdx: number) => {
    const nextIdx = (endedIdx + 1) % farmToTableVideos.length;
    const nextEl = farmRefs.current[nextIdx];
    if (nextEl) {
      nextEl.currentTime = 0;
      nextEl.muted = isFarmMuted;
      nextEl.play().catch(() => {});
    }
    setFarmVideoIdx(nextIdx);
  };

  const toggleWhyChooseMute = () => {
    const nextMuted = !isWhyChooseMuted;
    setIsWhyChooseMuted(nextMuted);
    whyChooseRefs.current.forEach((el) => {
      if (el) el.muted = nextMuted;
    });
  };

  const toggleFarmMute = () => {
    const nextMuted = !isFarmMuted;
    setIsFarmMuted(nextMuted);
    farmRefs.current.forEach((el) => {
      if (el) el.muted = nextMuted;
    });
  };

  useEffect(() => {
    const el = whyChooseRefs.current[whyChooseVideoIdx];
    if (el) {
      el.muted = isWhyChooseMuted;
      el.play().catch(() => {});
    }
  }, [whyChooseVideoIdx]);

  useEffect(() => {
    const el = farmRefs.current[farmVideoIdx];
    if (el) {
      el.muted = isFarmMuted;
      el.play().catch(() => {});
    }
  }, [farmVideoIdx]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPodiumIndex((prev) => (prev + 1) % podiumProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentPodiumProduct = podiumProducts[podiumIndex];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section - New Design */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/nb.webp')`
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[calc(100vh-120px)]">

            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Leaf className="w-4 h-4" />
                Better Growth, Better Tomorrow
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-2"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Nurturing Plants.
                </h1>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 leading-tight">
                    Enriching Lives.
                  </h1>
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-px bg-gray-400"></div>
                <span className="text-base font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  100% Organic & Effective Solutions
                </span>
                <div className="w-12 h-px bg-gray-400"></div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
              >
                WINMITRA AGRI TECH provides advanced bio-stimulants and crop care solutions that promote healthy growth, improve yield and build a sustainable future for agriculture.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Our Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Stone Base Product Showcase */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-end min-h-[440px] md:min-h-[520px]">
              <div className="relative w-full h-[400px] md:h-[460px] flex flex-col items-center justify-end pb-6 md:pb-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPodiumProduct.id}
                    initial={{ opacity: 0, y: -25, scale: 0.88 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.92 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center relative z-20"
                  >
                    {/* Floating Product Image over Stone Base */}
                    <motion.div
                      animate={{ y: [0, -7, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative flex justify-center items-center"
                    >
                      <img
                        src={currentPodiumProduct.image}
                        alt={currentPodiumProduct.name}
                        className="h-60 sm:h-72 md:h-80 w-auto object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.45)] select-none pointer-events-none"
                      />
                    </motion.div>

                    {/* Floor Shadow on Stone Base */}
                    <div className="w-48 sm:w-56 h-4 bg-black/35 rounded-full blur-md -mt-2 mb-3 pointer-events-none"></div>

                    {/* Interactive Badge & Details Link */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="flex flex-col items-center text-center"
                    >
                      <Link
                        to={['winmitra-crop-care', 'winmitra-bio-stimulant'].includes(currentPodiumProduct.id) ? '/products' : `/products/${currentPodiumProduct.id}`}
                        className="group inline-flex items-center gap-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-5 py-2 rounded-full shadow-lg border border-green-500/40 hover:border-green-500 hover:bg-green-600 hover:text-white transition-all duration-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-green-500 group-hover:bg-white animate-pulse"></span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-white tracking-wide">
                          {currentPodiumProduct.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-green-600 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Podium Indicator Dots */}
                <div className="flex items-center gap-2 mt-4 z-20">
                  {podiumProducts.map((prod, idx) => (
                    <button
                      key={prod.id}
                      onClick={() => setPodiumIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === podiumIndex ? 'w-7 bg-green-600' : 'w-2 bg-gray-400/50 hover:bg-green-400/80'
                      }`}
                      aria-label={`Show ${prod.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-8 left-4 right-4 flex justify-center"
        >
          <div className="bg-white/95 rounded-2xl p-4 md:p-6 shadow-xl border border-white/20 w-full max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center md:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-gray-900">25+</div>
                  <div className="text-xs md:text-sm text-gray-600">Premium Products</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center md:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-gray-900">100%</div>
                  <div className="text-xs md:text-sm text-gray-600">Organic & Safe</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center md:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm md:text-lg font-bold text-gray-900">Trusted by</div>
                  <div className="text-xs md:text-sm text-gray-600">Thousands</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center md:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm md:text-lg font-bold text-gray-900">Higher Yield</div>
                  <div className="text-xs md:text-sm text-gray-600">Better Growth</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Combined Section - Statistics + Why Choose Us + Farm to Table */}
      <section className="py-8 bg-white dark:bg-black">
        <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8">

          {/* Top Statistics Box - Smaller and Moved Up */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl w-full"
              style={{
                background: 'linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)',
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: `url('/nb.webp')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>

              {/* Full Width Statistics Grid */}
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 py-8 md:py-10 px-6 md:px-12 lg:px-16">
                {[
                  { number: '500+', label: 'Acres Of Farmland', icon: Leaf },
                  { number: '10+', label: 'Years Of Experience', icon: Shield },
                  { number: '25K+', label: 'Happy Customers', icon: Sprout },
                  { number: '50+', label: 'Organic Products', icon: FlaskConical }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="mb-2 flex justify-center">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
                      </div>
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-white/80 text-xs md:text-sm font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Middle Section - Why Choose Us - More Compact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

              {/* Left - Large Image with Floating Card */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-black">
                  {whyChooseVideos.map((src, idx) => (
                    <video
                      key={src}
                      ref={(el) => (whyChooseRefs.current[idx] = el)}
                      src={src}
                      autoPlay={idx === 0}
                      muted={isWhyChooseMuted}
                      playsInline
                      preload="auto"
                      aria-hidden="true"
                      onEnded={() => handleWhyChooseEnded(idx)}
                      className={`absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu transition-opacity duration-300 ${
                        idx === whyChooseVideoIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-15"></div>

                  {/* Audio Mute/Unmute Toggle Button */}
                  <button
                    onClick={toggleWhyChooseMute}
                    className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-semibold border border-white/20"
                    title={isWhyChooseMuted ? "Unmute Sound" : "Mute Sound"}
                    aria-label={isWhyChooseMuted ? "Unmute Sound" : "Mute Sound"}
                  >
                    {isWhyChooseMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-red-400" />
                        <span>Unmute</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-green-400" />
                        <span>Mute</span>
                      </>
                    )}
                  </button>

                  {/* Floating Card */}
                  <div className="absolute bottom-6 left-4 right-4 bg-gradient-to-r from-green-600/95 to-green-700/95 rounded-xl p-4 shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                        <Leaf className="w-5 h-5 text-green-800" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Sustainable Today,</div>
                        <div className="font-bold text-yellow-300 text-sm">Better Tomorrow</div>
                      </div>
                    </div>
                    <p className="text-white/90 text-xs leading-relaxed">
                      We follow eco-friendly practices that nurture the soil, protect the environment and secure a better future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle - Why Choose Us Content */}
              <div className="lg:col-span-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-medium mb-4">
                  ⭐ WHY CHOOSE US
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Rooted In Nature,<br />
                  Focused On <span className="text-yellow-500">Quality</span>
                </h2>
                <div className="w-12 h-0.5 bg-yellow-500 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  We combine traditional wisdom with modern techniques to deliver farm fresh produce that is healthy, safe and full of natural goodness.
                </p>
              </div>

              {/* Right - Feature Grid */}
              <div className="lg:col-span-1.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {[
                    {
                      icon: Leaf,
                      title: 'Farm Fresh Produce',
                      description: 'Handpicked at the right time to ensure maximum freshness and nutrition.'
                    },
                    {
                      icon: FlaskConical,
                      title: 'Chemical Free',
                      description: 'We grow naturally without harmful chemicals or synthetic pesticides.'
                    },
                    {
                      icon: Shield,
                      title: 'Safe & Healthy',
                      description: 'Every product is carefully checked to deliver safe and healthy food for you.'
                    },
                    {
                      icon: Sprout,
                      title: 'Eco Friendly',
                      description: 'Our farming methods protect nature and promote a greener and cleaner planet.'
                    }
                  ].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex gap-3 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                            <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complete Crop Care Solutions Section */}
      <CropCareSolutions />

      {/* FROM OUR FARMS TO YOUR TABLE Section */}
      <section className="py-8 bg-white dark:bg-black">
        <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-black max-w-7xl mx-auto"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-24 h-24 border-2 border-yellow-400 rounded-full"></div>
              <div className="absolute bottom-12 right-12 w-32 h-32 border-2 border-green-400 rounded-full"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">

              {/* Left - Content */}
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-yellow-300 rounded-full text-xs font-medium mb-3">
                  FROM OUR FARMS TO YOUR TABLE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Good Food, Good Health,<br />
                  <span className="text-yellow-400">Good Life.</span>
                </h2>
                <div className="w-12 h-0.5 bg-yellow-400 mb-4"></div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Experience the true taste of nature with our wide range of organic fruits, vegetables and staples.
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Our Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right - Vegetable Basket Image / Video */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full blur-xl"></div>
                <div className="relative bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-4 shadow-xl overflow-hidden h-[310px] sm:h-[350px]">
                  {farmToTableVideos.map((src, idx) => (
                    <video
                      key={src}
                      ref={(el) => (farmRefs.current[idx] = el)}
                      src={src}
                      autoPlay={idx === 0}
                      muted={isFarmMuted}
                      playsInline
                      preload="auto"
                      aria-hidden="true"
                      onEnded={() => handleFarmEnded(idx)}
                      className={`absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-xl pointer-events-none transform-gpu transition-opacity duration-300 ${
                        idx === farmVideoIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  ))}
                  {/* Audio Mute/Unmute Toggle Button */}
                  <button
                    onClick={toggleFarmMute}
                    className="absolute top-7 right-7 z-20 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-semibold border border-white/20"
                    title={isFarmMuted ? "Unmute Sound" : "Mute Sound"}
                    aria-label={isFarmMuted ? "Unmute Sound" : "Mute Sound"}
                  >
                    {isFarmMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-red-400" />
                        <span>Unmute</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-green-400" />
                        <span>Mute</span>
                      </>
                    )}
                  </button>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 pointer-events-none z-10">
                    <div className="w-full h-full border-2 border-yellow-400 rounded-full border-dashed opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <ProductCarousel />




    </div>
  );
}