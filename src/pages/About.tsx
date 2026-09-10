import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

export default function About() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="About Youth Trauma Institute"
        title="Built to close the gap between evidence and access."
        subtitle="Youth Trauma Institute is being developed to expand access to the clinical tools, knowledge, data, training, and implementation support needed to improve childhood-trauma care."
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-8">Our Intersection</h2>
            <div className="flex flex-wrap gap-4">
              {['Clinical Science', 'Public Health', 'Implementation', 'Technology', 'Philanthropy', 'Research', 'Global Access'].map((area, index) => (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={area} 
                  className="px-5 py-2.5 bg-white rounded-full text-primary font-semibold shadow-sm ring-1 ring-primary/10 hover:ring-secondary/50 transition-colors cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm ring-1 ring-primary/5"
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-6">Leadership & Governance</h2>
            <p className="text-text-muted mb-8 leading-relaxed text-lg">
              Youth Trauma Institute is currently in development. Our initial board and leadership planning includes:
            </p>
            <div className="bg-accent/30 p-8 rounded-2xl mb-8">
              <ul className="space-y-4 text-primary font-bold text-xl font-display">
                <li>Jeffery Yard</li>
                <li>Jonathan Howell</li>
                <li>Kipling Macartney</li>
              </ul>
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              Clinical and scientific contributors associated with the development of the broader initiative include recognized experts in childhood trauma assessment and research.
            </p>
            <div className="mt-8 pt-8 border-t border-primary/10 text-sm text-text-muted font-medium bg-accent/10 rounded-xl p-4">
              Note: Official titles, institutional affiliations, and formal governance roles will be published upon final organization formation.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
