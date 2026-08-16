import React from "react"
import { Link } from "react-router-dom"
import { Sparkles } from "lucide-react"

interface CarouselProps {
  images: { src: string; alt: string; id: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({ images }) => {
  // Duplicate the list so the marquee loops seamlessly
  const doubled = [...images, ...images]

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-7xl px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Premium Products
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Complete Agricultural Solutions
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of bio-stimulants and crop care products designed for maximum yield.
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Product carousel"
        >
          {/* Edge fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling track */}
          <div
            className="flex gap-6 product-marquee-track"
            style={{ width: 'max-content' }}
          >
            {doubled.map((image, index) => (
              <Link
                key={`${image.id}-${index}`}
                to={`/products/${image.id}`}
                className="flex-shrink-0 group"
              >
                <div className="w-56 md:w-64 bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-5 md:p-6 flex flex-col items-center group-hover:border-green-200">
                  <div className="w-full h-40 md:h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl group-hover:bg-green-50 transition-colors duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain p-3"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
                      {image.alt}
                    </h4>
                    <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      <Sparkles className="w-3 h-3" />
                      Premium Quality
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-1">
            <div className="h-1 w-8 rounded-full bg-green-600" />
            <div className="h-1 w-8 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  )
}