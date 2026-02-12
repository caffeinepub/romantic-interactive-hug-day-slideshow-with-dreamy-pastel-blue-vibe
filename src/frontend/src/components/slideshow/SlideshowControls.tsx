import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlideshowControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export default function SlideshowControls({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}: SlideshowControlsProps) {
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-between px-4 md:px-8 pointer-events-none">
      <Button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous slide"
        size="lg"
        variant="ghost"
        className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/40 rounded-full h-14 w-14 p-0 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 shadow-romantic"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next slide"
        size="lg"
        variant="ghost"
        className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/40 rounded-full h-14 w-14 p-0 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 shadow-romantic"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
}
