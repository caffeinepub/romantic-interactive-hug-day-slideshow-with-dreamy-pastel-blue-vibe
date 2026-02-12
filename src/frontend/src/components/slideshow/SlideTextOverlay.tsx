interface SlideTextOverlayProps {
  headline: string;
  subtext?: string;
  headlineClassName?: string;
}

export default function SlideTextOverlay({
  headline,
  subtext,
  headlineClassName = '',
}: SlideTextOverlayProps) {
  return (
    <div className="text-center pointer-events-none px-4">
      <h1
        className={`font-romantic text-white drop-shadow-romantic animate-fade-in-up ${headlineClassName}`}
      >
        {headline}
      </h1>
      {subtext && (
        <p className="text-white/90 text-xl md:text-3xl font-light mt-6 drop-shadow-lg animate-fade-in-up animation-delay-500">
          {subtext}
        </p>
      )}
    </div>
  );
}
