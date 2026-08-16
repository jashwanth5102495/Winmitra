import React, { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 0,
  showPagination = false,
  showNavigation = true,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollability()
    window.addEventListener('resize', checkScrollability)
    return () => window.removeEventListener('resize', checkScrollability)
  }, [images])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-7xl px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
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
        
        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          {showNavigation && (
            <>
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
                  canScrollLeft 
                    ? 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 hover:shadow-xl' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
                  canScrollRight 
                    ? 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 hover:shadow-xl' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Products Tray */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
            }}
            onScroll={checkScrollability}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-64 h-80 bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center group-hover:border-green-200 group-hover:-translate-y-1">
                  <div className="w-full h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl group-hover:bg-green-50 transition-colors duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain p-3"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIGR5PSIuM2VtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qcm9kdWN0PC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
                      {image.alt}
                    </h4>
                    <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      <Sparkles className="w-3 h-3" />
                      Premium Quality
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-1">
              <div className={`h-1 w-8 rounded-full transition-colors ${canScrollLeft ? 'bg-green-600' : 'bg-gray-300'}`} />
              <div className={`h-1 w-8 rounded-full transition-colors ${canScrollRight ? 'bg-green-600' : 'bg-gray-300'}`} />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}