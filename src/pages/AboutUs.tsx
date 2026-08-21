import { motion } from 'framer-motion';
import { Users, Target, Globe, Leaf, Heart, Droplets, Shield, Sprout, Zap, FlaskConical } from 'lucide-react';

export function AboutUs() {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to developing products that support sustainable agricultural practices while protecting our planet for future generations.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuous research and development drive our mission to create cutting-edge solutions that meet the evolving needs of modern agriculture.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Every product undergoes rigorous testing to ensure the highest quality standards, providing farmers with reliable and effective solutions.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with farmers, distributors, and agricultural professionals to ensure mutual growth and success.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">About Winmitra Agri Tech</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Leading the way in sustainable agriculture with innovative bio-stimulants and crop care solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Solutions Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our <span className="text-green-600">Solutions?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              We provide cutting-edge agricultural solutions that help farmers achieve better yields while maintaining environmental sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organic Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Leaf className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-green-600">
                Organic Solutions
              </h3>
              <p className="leading-relaxed text-gray-600 group-hover:text-gray-700">
                Natural fertilizers that enhance soil health and promote sustainable growth.
              </p>
            </motion.div>

            {/* Water Efficient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Droplets className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-green-600">
                Water Efficient
              </h3>
              <p className="leading-relaxed text-gray-600 group-hover:text-gray-700">
                Advanced formulations that reduce water usage while maximizing nutrient uptake.
              </p>
            </motion.div>

            {/* Eco-Friendly */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-green-600">
                Eco-Friendly
              </h3>
              <p className="leading-relaxed text-gray-600 group-hover:text-gray-700">
                Environmentally safe products that protect ecosystems and biodiversity.
              </p>
            </motion.div>

            {/* High Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-green-600">
                High Performance
              </h3>
              <p className="leading-relaxed text-gray-600 group-hover:text-gray-700">
                Proven formulations that deliver consistent results and improved crop yields.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              These core values guide every decision we make and every product we develop
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 shadow-lg"
          >
            <Globe className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              "To revolutionize agriculture through innovative, sustainable solutions that enhance crop productivity, 
              improve farmer livelihoods, and protect our planet's natural resources for future generations."
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Farmers Served</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Products Available</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}