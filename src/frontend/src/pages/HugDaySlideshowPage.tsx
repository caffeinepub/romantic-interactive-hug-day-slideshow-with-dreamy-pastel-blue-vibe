import { useState } from 'react';
import Slideshow from '../components/slideshow/Slideshow';
import HugDaySceneSlide from '../components/slideshow/slides/HugDaySceneSlide';
import IntroSlide from '../components/slideshow/slides/IntroSlide';
import AmbientRomanceEffects from '../components/effects/AmbientRomanceEffects';
import MusicToggle from '../components/music/MusicToggle';

export default function HugDaySlideshowPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <IntroSlide key="intro" />,
    <HugDaySceneSlide key="main" />,
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pastel-blue via-pastel-pink to-pastel-lavender">
      <AmbientRomanceEffects />
      
      <Slideshow
        slides={slides}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      <MusicToggle />

      <footer className="absolute bottom-4 left-0 right-0 z-20 text-center">
        <p className="text-xs text-white/60 drop-shadow-lg">
          © {new Date().getFullYear()} · Built with{' '}
          <span className="text-romantic-rose">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'hug-day-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
