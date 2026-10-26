import { CardCarousel } from "./ui/card-carousel"

const ProductCarousel = () => {
  const productImages = [
    { src: "/poduct/New folder/BHOOMI SHAKTHI.webp", alt: "Bhoomi Shakthi", id: "bhoomi-shakthi" },
    { src: "/poduct/New folder/WIN AMINO PLUS.webp", alt: "Win Amino Plus", id: "win-amino-plus" },
    { src: "/poduct/New folder/WIN CROP DON.webp", alt: "Win Crop Don", id: "win-crop-don" },
    { src: "/poduct/New folder/WIN FLOWER.webp", alt: "Win Flower", id: "win-flower" },
    { src: "/poduct/New folder/WIN FRUITS.webp", alt: "Win Fruits", id: "win-fruits" },
    { src: "/poduct/New folder/WIN GOLD MAGIC.webp", alt: "Win Gold Magic", id: "win-gold-magic" },
    { src: "/poduct/WIN HUMIC.webp", alt: "WIN HUMIC", id: "win-humic" },
    { src: "/poduct/new Win HAP Fertilizer.webp", alt: "Win HAP Granules", id: "win-hap-granules" },
    { src: "/poduct/New folder/WIN HAP LIQUID.webp", alt: "Win HAP Liquid", id: "win-hap-liquid" },
    { src: "/poduct/new Win Hi-Growth.webp", alt: "Win Hi-Growth", id: "win-hi-growth" },
    { src: "/poduct/New folder/WIN KISSAN 100.webp", alt: "Win Kissan 100", id: "win-kissan-100" },
    { src: "/poduct/New folder/WIN MOSS.webp", alt: "Win Moss", id: "win-moss" },
    { src: "/poduct/New folder/WIN PLANT BOOST.webp", alt: "Win Plant Boost", id: "win-plant-boost" },
    { src: "/poduct/New folder/WIN PLANT CARE.webp", alt: "Win Plant Care", id: "win-plant-care" },
    { src: "/poduct/New folder/WIN PROTECT.webp", alt: "Win Protect", id: "win-protect" },
    { src: "/poduct/New folder/WIN RAKSHA.webp", alt: "Win Raksha", id: "win-raksha" },
    { src: "/poduct/New folder/WIN SPEED PRO.webp", alt: "Win Speed Pro", id: "win-speed-pro" },
    { src: "/poduct/New folder/WIN SUPER PRO.webp", alt: "Win Super Pro", id: "win-super-pro" },
    { src: "/poduct/New folder/WIN VEERA.webp", alt: "Win Veera", id: "win-veera" },
    { src: "/poduct/New folder/WIN YIELD POWER.webp", alt: "Win Yield Power", id: "win-yield-power" },
    { src: "/poduct/New folder/WINMITRA GOLD.webp", alt: "Winmitra Gold", id: "winmitra-gold" },
    { src: "/poduct/New folder/WIN 3 IN 1 NATURAL.webp", alt: "WIN 3 in 1 Natural", id: "win-3-in-1-natural" },
    { src: "/poduct/New folder/POTASH.webp", alt: "Potash", id: "potash" },
    { src: "/poduct/New folder/WIN AQUOGEL.webp", alt: "Win Aquogel", id: "win-aquogel" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        <CardCarousel images={productImages} />
        
        {/* Additional Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            25+ Premium Products Available
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