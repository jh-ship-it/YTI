import FadeIn from './FadeIn';

export default function PageHero({ 
  title, 
  subtitle, 
  imageUrl,
  label,
  layout = "split"
}: { 
  title: string; 
  subtitle?: string; 
  imageUrl?: string;
  label?: string;
  layout?: "split" | "centered-image" | "text-only";
}) {
  if (layout === "text-only" || !imageUrl) {
    return (
      <section className="bg-background pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn className="max-w-3xl mx-auto">
            {label && (
              <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
                {label}
              </p>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-display">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-xl leading-8 text-text-muted">
                {subtitle}
              </p>
            )}
          </FadeIn>
        </div>
      </section>
    );
  }

  if (layout === "centered-image") {
    return (
      <section className="bg-background pt-16 pb-12 sm:pt-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn className="max-w-3xl mx-auto mb-12">
            {label && (
              <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
                {label}
              </p>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-display">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-xl leading-8 text-text-muted">
                {subtitle}
              </p>
            )}
          </FadeIn>
          <FadeIn delay={0.2} className="relative h-64 sm:h-96 lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/5">
            <img src={imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto">
          <FadeIn>
            {label && (
              <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
                {label}
              </p>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-display">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-xl leading-8 text-text-muted">
                {subtitle}
              </p>
            )}
          </FadeIn>
          <FadeIn delay={0.2} className="relative h-64 sm:h-80 lg:h-96 w-full rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/5">
            <img src={imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
