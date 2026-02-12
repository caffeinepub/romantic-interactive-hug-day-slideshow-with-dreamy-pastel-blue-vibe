import SlideTextOverlay from '../SlideTextOverlay';

export default function IntroSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-pastel-blue/50 via-pastel-pink/30 to-pastel-lavender/50">
      <SlideTextOverlay
        headline="Welcome"
        subtext="A special message for you..."
        headlineClassName="text-6xl md:text-8xl"
      />
    </div>
  );
}
