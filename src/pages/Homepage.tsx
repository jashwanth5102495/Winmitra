import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Sprout, FlaskConical, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductShowcase } from '../components/ProductShowcase';
import { CropCareSolutions } from '../components/CropCareSolutions';

export function Homepage() {

  const highlights = [
    '100% Organic',
    'Chemical Free Solutions',
    'Quality Control',
    'Trusted by Farmers',
    'Premium Quality',
    'Eco-Friendly'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/wb.webp')`
          }}
        />
        {/* Light Gradient Overlay - Reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

        {/* Centered Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-28 pb-32">


          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-sm md:text-base tracking-wide mb-4 font-medium"
            style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
          >
            India's Trusted Agricultural Solutions Company
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-4xl"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              textShadow: '0 4px 20px rgba(0,0,0,0.4)'
            }}
          >
            Sustainable Growth For A Better Tomorrow
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/75 text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
            style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
          >
            High-Quality Agricultural Products Using Modern And Eco-Friendly Practices.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
            >
              Explore Our Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-7 py-3.5 rounded-lg text-base font-medium transition-all duration-300 border border-white/20"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Bottom Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">
            {/* Label */}
            <div className="flex-shrink-0 hidden sm:block">
              <h3 className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
                What Makes Us Different
              </h3>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-white/20 flex-shrink-0"></div>

            {/* Scrolling Highlights */}
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center gap-6 marquee-features">
                {[...highlights, ...highlights].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
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
                style={{ backgroundImage: `url('/wb.webp')` }}
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
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/wb.webp"
                    alt="Fresh Organic Produce"
                    className="w-full h-[400px] lg:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Floating Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-green-600/95 to-green-700/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
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

              {/* Right - Vegetable Basket Image */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full blur-xl"></div>
                <div className="relative bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-4 shadow-xl">
                  <img
                    src="/wb.webp"
                    alt="Fresh Vegetable Basket"
                    className="w-full h-[280px] object-cover rounded-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20">
                    <div className="w-full h-full border-2 border-yellow-400 rounded-full border-dashed opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <ProductShowcase />




    </div>
  );
}