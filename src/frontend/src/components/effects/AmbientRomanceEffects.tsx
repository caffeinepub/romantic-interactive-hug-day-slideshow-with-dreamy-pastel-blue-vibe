import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function AmbientRomanceEffects() {
  const [hearts, setHearts] = useState<Particle[]>([]);
  const [petals, setPetals] = useState<Particle[]>([]);

  useEffect(() => {
    const heartParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 20 + Math.random() * 20,
    }));

    const petalParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 12 + Math.random() * 8,
      size: 15 + Math.random() * 15,
    }));

    setHearts(heartParticles);
    setPetals(petalParticles);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent animate-glow-pulse" />
      </div>

      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {hearts.map((heart) => (
          <div
            key={`heart-${heart.id}`}
            className="absolute bottom-0 animate-float-up opacity-60"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
          >
            <img
              src="/assets/generated/heart-particle.dim_128x128.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {petals.map((petal) => (
          <div
            key={`petal-${petal.id}`}
            className="absolute -top-20 animate-drift-down opacity-40"
            style={{
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
              width: `${petal.size}px`,
              height: `${petal.size}px`,
            }}
          >
            <img
              src="/assets/generated/petal-particle.dim_128x128.png"
              alt=""
              className="w-full h-full object-contain animate-spin-slow"
            />
          </div>
        ))}
      </div>
    </>
  );
}
