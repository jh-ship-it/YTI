import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, BrainCircuit, LineChart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

export default function Research() {
  const areas = [
    { name: 'Assessment and measurement', icon: LineChart },
    { name: 'Treatment outcomes', icon: LineChart },
    { name: 'Implementation science', icon: Microscope },
    { name: 'Access barriers', icon: Users },
    { name: 'Longitudinal data', icon: LineChart },
    { name: 'Language & cultural adaptation', icon: Users },
    { name: 'Risk and resilience', icon: BrainCircuit },
    { name: 'Comorbidity', icon: BrainCircuit },
    { name: 'Multi-site data', icon: Users },
    { name: 'Responsible AI and machine learning', icon: BrainCircuit }
  ];

  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="Research & Partnerships"
        title="Build the evidence together."
        subtitle="YTI seeks to connect clinicians, researchers, health systems, schools, public agencies, and child-serving organizations around practical questions that can improve trauma care."
        imageUrl="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-10 text-center">Areas of Interest</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm ring-1 ring-primary/5 hover:ring-secondary/30 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                  <area.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <span className="font-semibold text-text">{area.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center bg-accent/50 p-12 rounded-3xl"
          >
             <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-light transition-all hover:scale-105 group"
            >
              Explore a research partnership <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
