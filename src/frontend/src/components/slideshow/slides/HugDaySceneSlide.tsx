import SlideTextOverlay from '../SlideTextOverlay';

export default function HugDaySceneSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/hug-day-scene.dim_1920x1080.png)',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-12 md:py-20 px-4">
        <SlideTextOverlay
          headline="HAPPY HUG DAY"
          headlineClassName="text-5xl md:text-7xl lg:text-8xl pt-8"
        />

        <div className="pb-8 max-w-2xl text-center">
          <p className="text-white text-lg md:text-2xl font-light tracking-wide drop-shadow-romantic animate-fade-in-up animation-delay-1000 leading-relaxed px-4">
            Can't hug u physically right now so sending u the virtual ones
          </p>
        </div>
      </div>
    </div>
  );
}
