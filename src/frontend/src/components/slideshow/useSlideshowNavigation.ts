import { useEffect, useCallback } from 'react';

interface UseSlideshowNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

export function useSlideshowNavigation({
  currentSlide,
  totalSlides,
  onSlideChange,
}: UseSlideshowNavigationProps) {
  const goToNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      onSlideChange(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, onSlideChange]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      onSlideChange(currentSlide - 1);
    }
  }, [currentSlide, onSlideChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  return { goToNext, goToPrevious };
}
