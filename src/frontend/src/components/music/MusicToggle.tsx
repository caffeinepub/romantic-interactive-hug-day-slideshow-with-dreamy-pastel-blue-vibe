import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/audio/romantic-instrumental.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-30">
      <Button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        size="lg"
        variant="ghost"
        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/40 rounded-full h-14 w-14 p-0 transition-all duration-300 hover:scale-110 shadow-romantic"
      >
        {isPlaying ? (
          <Volume2 className="h-6 w-6" />
        ) : (
          <VolumeX className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
