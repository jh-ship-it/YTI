import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

export default function GlobalAccess() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="Global Access"
        title="Care should not stop at a border."
        subtitle="Youth Trauma Institute's mission is global. We work to reduce financial, geographic, language, technology, and capacity barriers to evidence-based childhood trauma care."
        imageUrl="https://images.unsplash.com/photo-1526778548025-fa2fbf8b1bb3?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm ring-1 ring-primary/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary/10 rounded-2xl">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-primary font-display">International Programs</h2>
            </div>
            
            <p className="text-text-muted leading-7 mb-10 text-lg">
              YTI develops international programs with qualified local partners, ensuring adherence to local clinical law, ethics, research requirements, privacy, child safeguarding, and cultural context.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              <ul className="space-y-4 text-text-muted">
                {[
                  'Subsidized clinical resources',
                  'Translation and cultural adaptation',
                  'Clinical training',
                  'Implementation support'
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-3 items-center bg-accent/30 p-3 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                    <span className="font-medium text-primary">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-4 text-text-muted">
                {[
                  'Program grants',
                  'Research collaboration',
                  'Measurement-based-care infrastructure',
                  'Data and outcomes projects'
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (i + 4) }}
                    className="flex gap-3 items-center bg-accent/30 p-3 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                    <span className="font-medium text-primary">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-bold text-primary font-display mb-4">Partner with us globally</h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              We are actively looking for international partners to help expand access to evidence-based care in underserved regions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-light transition-all group"
            >
              Contact our international team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
