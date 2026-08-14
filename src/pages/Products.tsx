import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Mouse } from 'lucide-react';
import { products } from '../data/products';

export function Products() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get('filter');
  const progressRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const ROTATE_INTERVAL = 5000; // 5 seconds

  const filteredProducts = filterType 
    ? products.filter(product => {
        switch (filterType) {
          case 'biostimulants':
            return product.shortDescription.toLowerCase().includes('nature biostimulants');
          case 'adjuvants':
            return product.shortDescription.toLowerCase().includes('nonionic spray adjuvants');
          case 'micronutrients':
            return product.shortDescription.toLowerCase().includes('micronutrients') || 
                   product.shortDescription.toLowerCase().includes('micronutrient mixture fertilizers');
          default:
            return true;
        }
      })
    : products;

  const currentProduct = filteredProducts[currentProductIndex] || products[0];

  // Get next products for the scrolling cards (exclude current)
  const getNextProducts = useCallback(() => {
    const nextProducts = [];
    for (let i = 1; i <= Math.min(5, filteredProducts.length - 1); i++) {
      const idx = (currentProductIndex + i) % filteredProducts.length;
      nextProducts.push({ ...filteredProducts[idx], originalIndex: idx });
    }
    return nextProducts;
  }, [currentProductIndex, filteredProducts]);

  const nextProducts = getNextProducts();

  // Auto-rotate with progress bar using requestAnimationFrame
  useEffect(() => {
    if (isHovered) {
      cancelAnimationFrame(animFrameRef.current);
      return;
    }

    lastTimeRef.current = performance.now();
    progressRef.current = 0;
    setProgress(0);

    const tick = (now: number) => {
      const delta = now - lastTimeRef.current;
      progressRef.current += delta;
      lastTimeRef.current = now;

      const pct = Math.min((progressRef.current / ROTATE_INTERVAL) * 100, 100);
      setProgress(pct);

      if (progressRef.current >= ROTATE_INTERVAL) {
        setCurrentProductIndex((prev) => (prev + 1) % filteredProducts.length);
        return; // useEffect will re-run and restart
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animFrameRef.current);
  }, [currentProductIndex, isHovered, filteredProducts.length]);


  const selectProduct = (index: number) => {
    setCurrentProductIndex(index);
    progressRef.current = 0;
    setProgress(0);
  };

  return (
    <div 
      className="min-h-screen pt-32 bg-gradient-to-br from-black via-gray-900 to-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.93), rgba(0, 0, 0, 0.93)), url('/uploads/product%20back%20(2).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">

        {/* Hero Section */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start min-h-[650px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* ===== LEFT SIDE — Large Product Image ===== */}
          <div className="flex items-center justify-center relative lg:sticky lg:top-32 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${currentProduct.id}`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                {/* Ambient Glow */}
                <div className="absolute inset-0 translate-y-8">
                  <div className="w-[420px] h-[420px] mx-auto bg-gradient-to-b from-green-400/20 via-emerald-300/10 to-transparent rounded-full blur-[80px]"></div>
                </div>

                {/* Product Image */}
                <div className="relative w-[340px] h-[440px] md:w-[400px] md:h-[500px] flex items-center justify-center mx-auto">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  />
                </div>

                {/* Reflection */}
                <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[300px] h-[100px] opacity-15 pointer-events-none">
                  <img
                    src={currentProduct.image}
                    alt=""
                    className="w-full h-full object-contain"
                    style={{ transform: 'scaleY(-1)', filter: 'blur(6px)' }}
                  />
                </div>

                {/* Subtle floor shadow */}
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[280px] h-[30px] bg-white/5 rounded-full blur-xl"></div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===== RIGHT SIDE — Product Details + Scrolling Cards ===== */}
          <div className="flex flex-col min-h-[600px]">

            {/* Current Product Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`details-${currentProduct.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1.5 bg-white/8 backdrop-blur-sm rounded-full border border-white/15 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
                  <span className="text-white/70 text-xs font-medium tracking-wider uppercase">{currentProduct.shortDescription}</span>
                </div>

                {/* Product Name */}
                <h1 className="text-4xl md:text-5xl font-light text-white leading-[1.1] mb-3 tracking-tight">
                  {currentProduct.name}
                </h1>

                {/* Product Description */}
                <div className="text-white/55 text-sm leading-relaxed mb-5 max-w-md max-h-[160px] overflow-y-auto pr-2 scrollbar-thin">
                  {currentProduct.fullDescription.split('\n').filter(line => line.trim()).slice(0, 6).map((line, i) => (
                    <p key={i} className="mb-1">{line.trim()}</p>
                  ))}
                </div>

                {/* Product Attributes Row */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-5">
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-wider block mb-0.5">Category</span>
                    <span className="text-white text-sm font-medium capitalize">{currentProduct.category}</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-wider block mb-0.5">Application</span>
                    <span className="text-white text-sm font-medium">{currentProduct.application}</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-wider block mb-0.5">Price</span>
                    <span className="text-white text-sm font-medium">{currentProduct.price}</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-wider block mb-0.5">Status</span>
                    <span className={`text-sm font-medium ${currentProduct.inStock ? 'text-green-400' : 'text-red-400'}`}>
                      {currentProduct.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Link
                    to={`/products/${currentProduct.id}`}
                    className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm font-semibold"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('all-products')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-5 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    All Products
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full mb-5 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-1.5 mb-5">
              {filteredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectProduct(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentProductIndex 
                      ? 'bg-green-400 w-6' 
                      : 'bg-white/20 w-1.5 hover:bg-white/40'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>

            {/* Scrolling Product Cards — Right to Left Loop */}
            <div className="overflow-hidden relative rounded-xl">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none"></div>

              <div className="marquee-track flex gap-3 w-max">
                {/* First set */}
                {filteredProducts.map((product, i) => (
                  <button
                    key={`a-${product.id}`}
                    onClick={() => selectProduct(i)}
                    className={`group flex flex-col flex-shrink-0 w-[130px] h-[130px] rounded-xl border transition-all duration-300 text-left cursor-pointer overflow-hidden ${
                      i === currentProductIndex
                        ? 'bg-white/[0.12] border-green-400/40 scale-105'
                        : 'bg-white/[0.04] border-white/[0.06] hover:bg-white/[0.08] hover:border-white/15'
                    }`}
                  >
                    <div className="flex-1 flex items-center justify-center p-2">
                      <img src={product.image} alt={product.name} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="px-2.5 pb-2.5">
                      <h4 className="text-white text-[11px] font-medium truncate">{product.name}</h4>
                      <p className="text-white/35 text-[9px] truncate mt-0.5">{product.shortDescription}</p>
                    </div>
                  </button>
                ))}
                {/* Duplicate for seamless loop */}
                {filteredProducts.map((product, i) => (
                  <button
                    key={`b-${product.id}`}
                    onClick={() => selectProduct(i)}
                    className={`group flex flex-col flex-shrink-0 w-[130px] h-[130px] rounded-xl border transition-all duration-300 text-left cursor-pointer overflow-hidden ${
                      i === currentProductIndex
                        ? 'bg-white/[0.12] border-green-400/40 scale-105'
                        : 'bg-white/[0.04] border-white/[0.06] hover:bg-white/[0.08] hover:border-white/15'
                    }`}
                  >
                    <div className="flex-1 flex items-center justify-center p-2">
                      <img src={product.image} alt={product.name} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="px-2.5 pb-2.5">
                      <h4 className="text-white text-[11px] font-medium truncate">{product.name}</h4>
                      <p className="text-white/35 text-[9px] truncate mt-0.5">{product.shortDescription}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="flex flex-col items-center pb-12 pt-4">
        <button
          onClick={() => document.getElementById('all-products')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll down to explore all products</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-white/40 transition-colors">
            <Mouse className="w-3 h-3 animate-bounce text-white/50 group-hover:text-green-400 transition-colors" />
          </div>
          <ChevronDown className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.15s' }} />
        </button>
      </div>

      {/* All Products Section - Changed from white to gradient */}
      <section id="all-products" className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent mb-4">All Products</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Explore our complete range of agricultural solutions</p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-green-200/50 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-600"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain bg-gradient-to-br from-green-50 to-emerald-50 group-hover:scale-105 transition-transform duration-300 p-4"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                    {product.shortDescription}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-2 px-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium text-sm block shadow-md hover:shadow-lg"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}