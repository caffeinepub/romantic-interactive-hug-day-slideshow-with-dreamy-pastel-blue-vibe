import { ReactElement } from 'react';
import SlideshowControls from './SlideshowControls';
import { useSlideshowNavigation } from './useSlideshowNavigation';

interface SlideshowProps {
  slides: ReactElement[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export default function Slideshow({ slides, currentSlide, onSlideChange }: SlideshowProps) {
  const { goToNext, goToPrevious } = useSlideshowNavigation({
    currentSlide,
    totalSlides: slides.length,
    onSlideChange,
  });

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 z-10'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full z-0'
                : 'opacity-0 translate-x-full z-0'
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      <SlideshowControls
        onPrevious={goToPrevious}
        onNext={goToNext}
        canGoPrevious={currentSlide > 0}
        canGoNext={currentSlide < slides.length - 1}
      />
    </div>
  );
}
