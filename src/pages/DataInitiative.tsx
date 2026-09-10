import { Database, Network, TrendingUp, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

export default function DataInitiative() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="Youth Trauma Data Initiative"
        title="Building the data infrastructure to heal."
        subtitle="The Youth Trauma Data Initiative is a planned effort intended to help child-serving programs use measurement-based care and data more effectively to understand trauma treatment, progress, and clinically meaningful outcomes."
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display">The Vision</h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Behavioral health has historically lagged other areas of medicine in routine use of evidence-based measurement, enabling technology, and systematic outcomes analysis. We are building the infrastructure to change that.
            </p>
            <div className="mt-8 p-8 bg-white rounded-3xl ring-1 ring-primary/5 shadow-sm">
              <h3 className="font-semibold text-primary text-lg mb-6">What participating programs may receive:</h3>
              <motion.ul 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4 text-text-muted list-none"
              >
                {[
                  'Funding for data-analysis capacity',
                  'Instructional resources and technical consultation',
                  'Research support and training',
                  'Authorized access to relevant assessment or measurement tools',
                  'Digital infrastructure',
                  'Help structuring repeated measurement and outcomes tracking'
                ].map((item, idx) => (
                  <motion.li variants={itemAnim} key={idx} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display">Shared Data Concept</h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Where ethically and legally appropriate, participating institutions may contribute data to a shared multi-site research resource. This responsibly governed resource will support global research into trauma and treatment.
            </p>
            
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
               <div className="bg-accent/50 p-8 rounded-3xl ring-1 ring-primary/5">
                  <Network className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Potential Data Domains</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Demographics, trauma history, type, timing of exposure, PTSD symptom profiles, severity, functional impairment, treatment course, repeated assessments, outcomes, and comorbidity.
                  </p>
               </div>
               <div className="bg-accent/50 p-8 rounded-3xl ring-1 ring-primary/5">
                  <ShieldAlert className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Governance & Privacy</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Rigorous controls including de-identification where appropriate, IRB/ethics review, consent/waiver management, data-use agreements, role-based access, security, and scientific access review.
                  </p>
               </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display">AI and Advanced Analytics</h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              YTI may eventually use artificial intelligence, machine learning, statistical modeling, temporal analysis, and related methods to study large, complex trauma datasets. 
            </p>
            <div className="mt-6 bg-white p-6 rounded-2xl ring-1 ring-primary/5 border-l-4 border-secondary shadow-sm">
              <p className="text-text-muted italic">
                Note: AI and machine learning are used solely as research and analytical tools. AI does not diagnose children or prescribe treatment. Clinical diagnosis and treatment remain the responsibility of appropriately qualified human professionals.
              </p>
            </div>
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 space-y-4"
            >
              {[
                'Identify predictive markers of PTSD risk',
                'Identify patterns associated with treatment response',
                'Study possible moderators and mediators',
                'Examine symptom trajectories over time',
                'Improve understanding of comorbidity',
                'Support research into case conceptualization and treatment planning'
              ].map((item, idx) => (
                <motion.li variants={itemAnim} key={idx} className="flex gap-4 items-center bg-white p-4 rounded-xl ring-1 ring-primary/5 shadow-sm">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-secondary shrink-0" />
                  </div>
                  <span className="text-text-muted font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
