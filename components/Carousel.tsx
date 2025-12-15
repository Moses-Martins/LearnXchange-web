'use client';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

interface CarouselProps {
  items: ReactNode[];
}

export default function Carousel({ items }: CarouselProps) {
  const total = items.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4); // default desktop

  // Adjust visible slides based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setVisibleSlides(1);
      } else if (window.innerWidth < 768) {
        
        setVisibleSlides(2);
      } else if (window.innerWidth < 1280) {
        
        setVisibleSlides(3);
      } else {
        // Desktop
        setVisibleSlides(4);
      }
    };

    handleResize(); // set initially
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideWidth = 100 / visibleSlides;

  // Normalize index for infinite behavior
  const normalizedIndex = ((currentIndex % total) + total) % total;

  const nextSlide = () => setCurrentIndex(prev => prev + 1);
  const prevSlide = () => setCurrentIndex(prev => prev - 1);

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-gray-100">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${slideWidth}%)`,
          }}
        >
          {Array.from({ length: visibleSlides + 2 }).map((_, i) => {
            const itemIndex = (normalizedIndex + i - 1 + total) % total;

            return (
              <div
                key={i}
                className="flex-shrink-0 p-2"
                style={{ width: `${slideWidth}%` }}
              >
                {items[itemIndex]}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[-10] -translate-y-1/2 text-white p-2 rounded-full bg-black/5"
      >
        <Image
          src="/carousel-backward-button.png"
          alt="backward"
          width={500}
          height={500}
          priority
          className="w-12 h-12"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-[-10] -translate-y-1/2 text-white p-2 rounded-full bg-black/5"
      >
        <Image
          src="/carousel-forward-button.png"
          alt="forward"
          width={500}
          height={500}
          priority
          className="w-12 h-12"
        />
      </button>
    </div>
  );
}
