import React from "react"
import { CardCarousel } from "./ui/card-carousel"

const ProductCarousel = () => {
  // Using your existing product data but adapted for the carousel
  const productImages = [
    { src: "/poduct/BHOOMI SHAKTHI.webp", alt: "Bhoomi Shakthi - Premium Agricultural Solution" },
    { src: "/poduct/WIN AMINO PLUS.webp", alt: "Win Amino Plus - Growth Enhancement" },
    { src: "/poduct/WIN CROP DON.webp", alt: "Win Crop Don - Crop Protection" },
    { src: "/poduct/WIN FLOWER.webp", alt: "Win Flower - Flowering Booster" },
    { src: "/poduct/WIN FRUITS.webp", alt: "Win Fruits - Fruit Development" },
    { src: "/poduct/WIN GOLD MAGIC.webp", alt: "Win Gold Magic - Premium Formula" },
    { src: "/poduct/WIN HAP GRANULES.webp", alt: "Win HAP Granules - Soil Enhancement" },
    { src: "/poduct/WIN HAP LIQUID.webp", alt: "Win HAP Liquid - Liquid Nutrition" },
    { src: "/poduct/WIN HI-GROWTH.webp", alt: "Win Hi-Growth - Growth Accelerator" },
    { src: "/poduct/Win Kissan 100.webp", alt: "Win Kissan 100 - Complete Solution" },
    { src: "/poduct/WIN MOSS.webp", alt: "Win Moss - Natural Enhancement" },
    { src: "/poduct/WIN PLANT BOOST.webp", alt: "Win Plant Boost - Plant Energizer" },
    { src: "/poduct/WIN PLANT CARE.webp", alt: "Win Plant Care - Complete Care" },
    { src: "/poduct/WIN PROTECT.webp", alt: "Win Protect - Plant Protection" },
    { src: "/poduct/WIN RAKSHA.webp", alt: "Win Raksha - Defense System" },
    { src: "/poduct/WIN SPEED PRO.webp", alt: "Win Speed Pro - Quick Results" },
    { src: "/poduct/WIN SUPER PRO.webp", alt: "Win Super Pro - Advanced Formula" },
    { src: "/poduct/WIN VEERA.webp", alt: "Win Veera - Strength Builder" },
    { src: "/poduct/WIN YIELD POWER.webp", alt: "Win Yield Power - Yield Maximizer" },
    { src: "/poduct/WINMITRA GOLD.webp", alt: "Winmitra Gold - Premium Gold Standard" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        <CardCarousel
          images={productImages}
          autoplayDelay={4000}
          showPagination={true}
          showNavigation={true}
        />
        
        {/* Additional Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            20+ Premium Products Available
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our complete range of bio-stimulants and crop care solutions designed to maximize your agricultural success.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductCarousel