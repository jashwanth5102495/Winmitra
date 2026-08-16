import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Leaf, TrendingUp, Shield,
  Flower, Apple, Beaker, Sprout, Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Solution category data with associated products ──────────────── */
const solutionsData = [
  {
    id: 'plant-growth',
    title: 'Plant Growth & Nutrition',
    description:
      'Provide essential nutrition and bio-stimulants that promote vigorous growth and strong plant development.',
    icon: Leaf,
    products: [
      { name: 'WIN HI-GROWTH', image: '/poduct/WIN HI-GROWTH.webp' },
      { name: 'WIN AMINO PLUS', image: '/poduct/WIN AMINO PLUS.webp' },
      { name: 'WIN PLANT BOOST', image: '/poduct/WIN PLANT BOOST.webp' },
      { name: 'WINMITRA GOLD', image: '/poduct/WINMITRA GOLD.webp' },
    ],
  },
  {
    id: 'yield-enhancement',
    title: 'Crop Yield Enhancement',
    description:
      'Solutions that improve flowering, fruiting and overall yield.',
    icon: TrendingUp,
    products: [
      { name: 'WIN YIELD POWER', image: '/poduct/WIN YIELD POWER.webp' },
      { name: 'WIN SUPER PRO', image: '/poduct/WIN SUPER PRO.webp' },
      { name: 'WIN SPEED PRO', image: '/poduct/WIN SPEED PRO.webp' },
      { name: 'Win Kissan 100', image: '/poduct/Win Kissan 100.webp' },
    ],
  },
  {
    id: 'crop-protection',
    title: 'Crop Protection',
    description:
      'Protect crops from stress, pests and environmental challenges.',
    icon: Shield,
    products: [
      { name: 'WIN PROTECT', image: '/poduct/WIN PROTECT.webp' },
      { name: 'WIN RAKSHA', image: '/poduct/WIN RAKSHA.webp' },
      { name: 'WIN CROP DON', image: '/poduct/WIN CROP DON.webp' },
      { name: 'WIN VEERA', image: '/poduct/WIN VEERA.webp' },
    ],
  },
  {
    id: 'flowering-fruiting',
    title: 'Flowering & Fruiting',
    description:
      'Specialized products to enhance flowering, fruit development and quality.',
    icon: Flower,
    products: [
      { name: 'WIN FLOWER', image: '/poduct/WIN FLOWER.webp' },
      { name: 'WIN FRUITS', image: '/poduct/WIN FRUITS.webp' },
      { name: 'WIN GOLD MAGIC', image: '/poduct/WIN GOLD MAGIC.webp' },
      { name: 'WIN PLANT CARE', image: '/poduct/WIN PLANT CARE.webp' },
    ],
  },
  {
    id: 'fruit-vegetable-care',
    title: 'Fruit & Vegetable Care',
    description:
      'Targeted nutrition for fruits, vegetables and horticultural crops.',
    icon: Apple,
    products: [
      { name: 'WIN FRUITS', image: '/poduct/WIN FRUITS.webp' },
      { name: 'WIN PLANT CARE', image: '/poduct/WIN PLANT CARE.webp' },
      { name: 'WIN MOSS', image: '/poduct/WIN MOSS.webp' },
      { name: 'BHOOMI SHAKTHI', image: '/poduct/BHOOMI SHAKTHI.webp' },
    ],
  },
  {
    id: 'soil-health',
    title: 'Soil Health & Root Growth',
    description:
      'Improve soil health, root development and nutrient uptake.',
    icon: Beaker,
    products: [
      { name: 'BHOOMI SHAKTHI', image: '/poduct/BHOOMI SHAKTHI.webp' },
      { name: 'WIN HAP GRANULES', image: '/poduct/WIN HAP GRANULES.webp' },
      { name: 'WIN HAP LIQUID', image: '/poduct/WIN HAP LIQUID.webp' },
      { name: 'WIN MOSS', image: '/poduct/WIN MOSS.webp' },
    ],
  },
];

/* ─── Component ────────────────────────────────────────────────────── */
export function CropCareSolutions() {
  const [activeId, setActiveId] = useState('plant-growth');

  /* Find last inactive item index for border logic */
  const lastInactiveIdx = (() => {
    for (let i = solutionsData.length - 1; i >= 0; i--) {
      if (solutionsData[i].id !== activeId) return i;
    }
    return -1;
  })();

  return (
    <section
      id="crop-care-solutions"
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/bbbb.webp)',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 md:w-14 h-px bg-green-700" />
            <span className="text-green-700 dark:text-green-400 font-semibold text-xs md:text-sm uppercase tracking-[0.15em]">
              OUR SOLUTIONS
            </span>
            <span className="w-10 md:w-14 h-px bg-green-700" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Complete Crop Care Solutions
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Advanced bio-stimulants and crop-care products designed to support healthier plants,
            <br className="hidden md:inline" /> stronger growth, and better agricultural productivity.
          </p>
        </motion.div>

        {/* ── Main Accordion Container ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-[24px] md:rounded-[28px] border border-gray-200/50 dark:border-gray-700/40 p-3 sm:p-4 md:p-5"
          style={{
            background:
              'linear-gradient(135deg, rgba(240,253,244,0.35) 0%, rgba(255,255,255,0.88) 50%, rgba(240,253,244,0.25) 100%)',
            boxShadow: '0 4px 32px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)',
          }}
        >
          {solutionsData.map((solution, index) => {
            const isActive = solution.id === activeId;
            const Icon = solution.icon;

            /* ── ACTIVE / EXPANDED CARD ──────────────────────── */
            if (isActive) {
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0.85, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 mb-1"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(220,252,231,0.55) 0%, rgba(240,253,244,0.7) 50%, rgba(236,253,245,0.45) 100%)',
                    border: '1px solid rgba(187,247,208,0.4)',
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-5 md:gap-6">
                    {/* ── Left: Icon + Text + Button ───────────── */}
                    <div className="lg:w-[33%] xl:w-[30%] flex-shrink-0">
                      <div className="w-11 h-11 md:w-[52px] md:h-[52px] bg-green-600 rounded-full flex items-center justify-center mb-3 shadow-sm">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-base md:text-lg text-gray-800 dark:text-white mb-1.5 leading-snug">
                        {solution.title}
                      </h3>
                      <p className="text-[13px] md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        View Products
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </Link>
                    </div>

                    {/* ── Center: Product Images ───────────────── */}
                    <div className="flex-1 min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeId}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="flex items-end justify-center gap-1 sm:gap-2 md:gap-3 py-2"
                        >
                          {solution.products.map((product, pIdx) => (
                            <motion.img
                              key={product.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.45,
                                delay: 0.06 + pIdx * 0.08,
                                ease: 'easeOut',
                              }}
                              src={product.image}
                              alt={product.name}
                              className="max-h-[110px] sm:max-h-[150px] md:max-h-[190px] lg:max-h-[220px] w-auto object-contain product-float-item"
                              style={{ animationDelay: `${pIdx * 0.8}s` }}
                              loading="lazy"
                              width="180"
                              height="260"
                            />
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* ── Right: Arrow Circle ──────────────────── */}
                    <div className="hidden lg:flex w-11 h-11 md:w-[52px] md:h-[52px] bg-green-600 rounded-full items-center justify-center flex-shrink-0 self-start mt-1 shadow-sm">
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            }

            /* ── INACTIVE / COLLAPSED ROW ────────────────────── */
            return (
              <div
                key={solution.id}
                onClick={() => setActiveId(solution.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveId(solution.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${solution.title} products`}
                className={`
                  flex items-center gap-3 md:gap-4 py-3.5 md:py-4 px-2 sm:px-3 md:px-5
                  cursor-pointer transition-colors duration-200
                  hover:bg-green-50/40 dark:hover:bg-gray-800/30
                  outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-xl
                  ${index !== lastInactiveIdx ? 'border-b border-gray-100 dark:border-gray-800' : ''}
                `}
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 dark:text-white leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-snug mt-0.5">
                    {solution.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-green-300">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}