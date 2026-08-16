import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Bhoomi Shakthi', image: '/poduct/BHOOMI SHAKTHI.webp' },
  { id: 2, name: 'Win Amino Plus', image: '/poduct/WIN AMINO PLUS.webp' },
  { id: 3, name: 'Win Crop Don', image: '/poduct/WIN CROP DON.webp' },
  { id: 4, name: 'Win Flower', image: '/poduct/WIN FLOWER.webp' },
  { id: 5, name: 'Win Fruits', image: '/poduct/WIN FRUITS.webp' },
  { id: 6, name: 'Win Gold Magic', image: '/poduct/WIN GOLD MAGIC.webp' },
  { id: 7, name: 'Win HAP Granules', image: '/poduct/WIN HAP GRANULES.webp' },
  { id: 8, name: 'Win HAP Liquid', image: '/poduct/WIN HAP LIQUID.webp' },
  { id: 9, name: 'Win Hi-Growth', image: '/poduct/WIN HI-GROWTH.webp' },
  { id: 10, name: 'Win Kissan 100', image: '/poduct/Win Kissan 100.webp' },
  { id: 11, name: 'Win Moss', image: '/poduct/WIN MOSS.webp' },
  { id: 12, name: 'Win Plant Boost', image: '/poduct/WIN PLANT BOOST.webp' },
  { id: 13, name: 'Win Plant Care', image: '/poduct/WIN PLANT CARE.webp' },
  { id: 14, name: 'Win Protect', image: '/poduct/WIN PROTECT.webp' },
  { id: 15, name: 'Win Raksha', image: '/poduct/WIN RAKSHA.webp' },
  { id: 16, name: 'Win Speed Pro', image: '/poduct/WIN SPEED PRO.webp' },
  { id: 17, name: 'Win Super Pro', image: '/poduct/WIN SUPER PRO.webp' },
  { id: 18, name: 'Win Veera', image: '/poduct/WIN VEERA.webp' },
  { id: 19, name: 'Win Yield Power', image: '/poduct/WIN YIELD POWER.webp' },
  { id: 20, name: 'Winmitra Gold', image: '/poduct/WINMITRA GOLD.webp' },
];

// Create URL-friendly slug from product name
const createSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

export function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const total = products.length;
  
  // Number of visible cards at once
  const visibleCards = 5;
  
  // Card width + gap - Making cards much larger like original
  const cardWidth = 320; // Increased from 280 to match original size
  const cardGap = 40; // Increased gap for better spacing
  const totalCardWidth = cardWidth + cardGap;

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next >= total ? 0 : next;
    });
    setTimeout(() => setIsTransitioning(false), 800);
  }, [total, isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? total - 1 : next;
    });
    setTimeout(() => setIsTransitioning(false), 800);
  }, [total, isTransitioning]);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (isPaused || isTransitioning) return;
    const id = setInterval(goNext, 4000);
    return () => clearInterval(id);
  }, [isPaused, goNext, isTransitioning]);

  // Get the center index for highlighting
  const centerIndex = Math.floor(visibleCards / 2);
  
  // Calculate transform to center the current card
  const containerWidth = visibleCards * totalCardWidth - cardGap;
  const translateX = -currentIndex * totalCardWidth + (containerWidth / 2) - (cardWidth / 2);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black py-20 md:py-28 select-none">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Our{' '}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Products
          </span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
          Premium agricultural solutions crafted for maximum yield
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{ width: containerWidth, height: 500 }} // Increased height for larger cards
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Cards Container */}
        <div
          className="flex transition-transform duration-[800ms] ease-in-out"
          style={{
            transform: `translateX(${translateX}px)`,
            width: `${total * totalCardWidth}px`,
            willChange: 'transform',
          }}
        >
          {products.map((product, index) => {
            // Calculate distance from center
            const distanceFromCenter = Math.abs(index - currentIndex);
            const isCenter = index === currentIndex;
            
            // Scale and opacity based on position - More subtle scaling to match original
            const scale = isCenter ? 1.05 : distanceFromCenter <= 1 ? 0.95 : distanceFromCenter <= 2 ? 0.85 : 0.75;
            const opacity = isCenter ? 1 : distanceFromCenter <= 1 ? 0.9 : distanceFromCenter <= 2 ? 0.7 : 0.5;
            
            return (
              <Link
                key={product.id}
                to={`/products/${createSlug(product.name)}`}
                className="flex-shrink-0 block transition-all duration-800 ease-in-out hover:scale-105"
                style={{
                  width: cardWidth,
                  marginRight: index < total - 1 ? cardGap : 0,
                  transform: `scale(${scale})`,
                  opacity,
                }}
              >
                <div
                  className={`
                    w-full h-[460px] rounded-2xl overflow-hidden
                    bg-gradient-to-b from-gray-800/80 to-gray-900/90
                    border border-white/10
                    shadow-2xl transition-all duration-800
                    ${isCenter ? 'ring-2 ring-green-400/60 shadow-green-500/30' : ''}
                  `}
                >
                  {/* Image area */}
                  <div className="h-[80%] flex items-center justify-center p-8 bg-white/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain drop-shadow-lg transition-transform duration-300"
                      draggable={false}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/250x250/10b981/ffffff?text=Product';
                      }}
                    />
                  </div>

                  {/* Name strip - Matching original green design */}
                  <div className="h-[20%] flex items-center justify-center bg-gradient-to-t from-green-700 to-green-600 backdrop-blur-sm">
                    <span className="text-white font-semibold text-xl tracking-wide text-center px-3">
                      {product.name}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          disabled={isTransitioning}
          aria-label="Previous product"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30
                     w-14 h-14 rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     flex items-center justify-center
                     hover:bg-white/25 active:scale-90
                     transition-all duration-300 cursor-pointer
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-7 h-7 text-white" />
        </button>
        <button
          onClick={goNext}
          disabled={isTransitioning}
          aria-label="Next product"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30
                     w-14 h-14 rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     flex items-center justify-center
                     hover:bg-white/25 active:scale-90
                     transition-all duration-300 cursor-pointer
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* Active Product Label */}
      <div className="text-center mt-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide transition-all duration-500 ease-in-out">
          {products[currentIndex].name}
        </h3>
        <p className="mt-2 text-gray-400 text-sm uppercase tracking-[0.25em]">
          Agricultural Excellence
        </p>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 800);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-green-400 w-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Edge Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />
    </section>
  );
}