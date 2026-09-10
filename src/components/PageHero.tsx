import { motion } from 'motion/react';

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
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-bold tracking-widest text-secondary uppercase mb-4"
              >
                {label}
              </motion.p>
            )}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-display"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-xl leading-8 text-text-muted"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
          {imageUrl && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 sm:h-80 lg:h-96 w-full rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/5"
            >
              <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
