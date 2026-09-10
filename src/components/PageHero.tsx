export default function PageHero({ 
  title, 
  subtitle, 
  imageUrl,
  label
}: { 
  title: string; 
  subtitle?: string; 
  imageUrl?: string;
  label?: string;
}) {
  return (
    <section className="bg-background pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto ${imageUrl ? 'grid lg:grid-cols-2 gap-12 items-center' : 'max-w-3xl text-center'}`}>
          <div>
            {label && (
              <p
                className="text-sm font-bold tracking-widest text-secondary uppercase mb-4"
              >
                {label}
              </p>
            )}
            <h1
              className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-display"
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="mt-6 text-xl leading-8 text-text-muted"
              >
                {subtitle}
              </p>
            )}
          </div>
          {imageUrl && (
            <div
              className="relative h-64 sm:h-80 lg:h-96 w-full rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/5"
            >
              <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
