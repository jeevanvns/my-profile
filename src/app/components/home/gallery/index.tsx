"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Gallery images from gallery folder
  const galleryImages = [
    "/images/gallery/IMG-20221210-WA0023.jpg",
    "/images/gallery/IMG-20250616-WA0000.jpg",
    "/images/gallery/IMG-20250616-WA0012.jpg",
    "/images/gallery/IMG-20250616-WA0013.jpg",
    "/images/gallery/IMG-20250616-WA0015.jpg",
    "/images/gallery/IMG-20250616-WA0016.jpg",
    "/images/gallery/trunkie-certificate.png",
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % galleryImages.length;
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const innerContainer = container.firstElementChild as HTMLElement;
          if (innerContainer) {
            const firstItem = innerContainer.firstElementChild as HTMLElement;
            if (firstItem) {
              const itemWidth = firstItem.offsetWidth + 24; // width + gap (16px = 1rem = 24px on md)
              const scrollAmount = nextIndex * itemWidth;
              container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
              });
            }
          }
        }
        return nextIndex;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const innerContainer = container.firstElementChild as HTMLElement;
      if (innerContainer) {
        const firstItem = innerContainer.firstElementChild as HTMLElement;
        if (firstItem) {
          const itemWidth = firstItem.offsetWidth + 24; // width + gap
          const scrollAmount = index * itemWidth;
          container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <section id="gallery">
      <div className="border-t border-softGray">
        <div className="container">
          <div className="py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Gallery</h2>
              <p className="text-xl text-primary">( 06 )</p>
            </div>
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide scroll-smooth"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const innerContainer = e.currentTarget.firstElementChild as HTMLElement;
                  if (innerContainer) {
                    const firstItem = innerContainer.firstElementChild as HTMLElement;
                    if (firstItem) {
                      const itemWidth = firstItem.offsetWidth + 24; // width + gap
                      const newIndex = Math.round(scrollLeft / itemWidth);
                      setCurrentIndex(Math.min(newIndex, galleryImages.length - 1));
                    }
                  }
                }}
              >
                <div className="flex gap-4 md:gap-6 pb-4" style={{ width: 'max-content' }}>
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-64 md:w-80 h-64 md:h-80 overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={getImgPath(image)}
                        alt={`Gallery image ${index + 1}`}
                        width={320}
                        height={320}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Indicators */}
              <div className="flex justify-center items-center gap-2 mt-6">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-8 h-2 bg-primary'
                        : 'w-2 h-2 bg-gray hover:bg-primary/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-primary transition-colors"
            >
              ×
            </button>
            <Image
              src={getImgPath(selectedImage)}
              alt="Selected image"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

