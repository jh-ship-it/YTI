import FadeIn from './FadeIn';

export default function PageHero({ 
  title, 
  subtitle, 
  imageUrl,
  imageAlt = "",
  imageCaption,
  label,
  layout = "split"
}: { 
  title: string; 
  subtitle?: string; 
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  label?: string;
  layout?: "split" | "centered-image" | "text-only";
}) {
  if (layout === "text-only" || !imageUrl) {
    return (
      <section className="page-hero page-hero--text bg-background pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn className="page-hero-copy max-w-3xl mx-auto">
            {label && (
              <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
                {label}
              </p>
            )}
            <h1 className="page-hero-title text-4xl font-bold tracking-tight text-primary sm:text-5xl font-display">
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
      <section className="page-hero page-hero--centered bg-background pt-16 pb-12 sm:pt-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn className="page-hero-copy max-w-3xl mx-auto mb-12">
            {label && (
              <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
                {label}
              </p>
            )}
            <h1 className="page-hero-title text-4xl font-bold tracking-tight text-primary sm:text-5xl font-display">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-xl leading-8 text-text-muted">
                {subtitle}
              </p>
            )}
          </FadeIn>
          <FadeIn delay={0.2} className="page-hero-visual-motion">
            <figure className="page-hero-visual page-hero-visual-centered">
              <img src={imageUrl} alt={imageAlt} decoding="async" fetchPriority="high" />
              {imageCaption && <figcaption>{imageCaption}</figcaption>}
            </figure>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero page-hero--split bg-background pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto">
          <FadeIn className="page-hero-copy">
            {label && (
              <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
                {label}
              </p>
            )}
            <h1 className="page-hero-title text-4xl font-bold tracking-tight text-primary sm:text-5xl font-display">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-xl leading-8 text-text-muted">
                {subtitle}
              </p>
            )}
          </FadeIn>
          <FadeIn delay={0.2} className="page-hero-visual-motion">
            <figure className="page-hero-visual">
              <img src={imageUrl} alt={imageAlt} decoding="async" fetchPriority="high" />
              {imageCaption && <figcaption>{imageCaption}</figcaption>}
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

