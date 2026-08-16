import { CardCarousel } from "./ui/card-carousel"

const ProductCarousel = () => {
  const productImages = [
    { src: "/poduct/BHOOMI SHAKTHI.webp", alt: "Bhoomi Shakthi", id: "bhoomi-shakthi" },
    { src: "/poduct/WIN AMINO PLUS.webp", alt: "Win Amino Plus", id: "win-amino-plus" },
    { src: "/poduct/WIN CROP DON.webp", alt: "Win Crop Don", id: "win-crop-don" },
    { src: "/poduct/WIN FLOWER.webp", alt: "Win Flower", id: "win-flower" },
    { src: "/poduct/WIN FRUITS.webp", alt: "Win Fruits", id: "win-fruits" },
    { src: "/poduct/WIN GOLD MAGIC.webp", alt: "Win Gold Magic", id: "win-gold-magic" },
    { src: "/poduct/WIN HAP GRANULES.webp", alt: "Win HAP Granules", id: "win-hap-granules" },
    { src: "/poduct/WIN HAP LIQUID.webp", alt: "Win HAP Liquid", id: "win-hap-liquid" },
    { src: "/poduct/WIN HI-GROWTH.webp", alt: "Win Hi-Growth", id: "win-hi-growth" },
    { src: "/poduct/Win Kissan 100.webp", alt: "Win Kissan 100", id: "win-kissan-100" },
    { src: "/poduct/WIN MOSS.webp", alt: "Win Moss", id: "win-moss" },
    { src: "/poduct/WIN PLANT BOOST.webp", alt: "Win Plant Boost", id: "win-plant-boost" },
    { src: "/poduct/WIN PLANT CARE.webp", alt: "Win Plant Care", id: "win-plant-care" },
    { src: "/poduct/WIN PROTECT.webp", alt: "Win Protect", id: "win-protect" },
    { src: "/poduct/WIN RAKSHA.webp", alt: "Win Raksha", id: "win-raksha" },
    { src: "/poduct/WIN SPEED PRO.webp", alt: "Win Speed Pro", id: "win-speed-pro" },
    { src: "/poduct/WIN SUPER PRO.webp", alt: "Win Super Pro", id: "win-super-pro" },
    { src: "/poduct/WIN VEERA.webp", alt: "Win Veera", id: "win-veera" },
    { src: "/poduct/WIN YIELD POWER.webp", alt: "Win Yield Power", id: "win-yield-power" },
    { src: "/poduct/WINMITRA GOLD.webp", alt: "Winmitra Gold", id: "winmitra-gold" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        <CardCarousel images={productImages} />
        
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