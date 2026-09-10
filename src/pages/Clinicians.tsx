import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Stethoscope, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

export default function Clinicians() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="For Clinicians & Organizations"
        title="Bring stronger assessment to your organization."
        subtitle="YTI aims to work with eligible organizations facing financial, implementation, language, geographic, technology, or capacity barriers to measurement-based care."
        imageUrl="https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display">How We Support You</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-primary/5 hover:shadow-md transition-shadow">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-6 font-display">Clinical Resources</h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Sponsored or subsidized access to evidence-based tools</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Clinical training on assessment instruments</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Implementation support and technical assistance</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-primary/5 hover:shadow-md transition-shadow">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-6 font-display">Organizational Capacity</h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Measurement-based-care programs</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Pilot funding for clinical implementation</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Research collaboration and data-analysis support</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 bg-accent/50 p-8 sm:p-12 rounded-3xl ring-1 ring-primary/5"
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-6">Who is eligible?</h2>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Potential eligible recipients include public, charter, private, nonprofit, or comparable schools; behavioral-health and medical providers; hospitals and health systems; licensed clinicians and clinical organizations; government agencies; child advocacy centers; and qualified international organizations.
            </p>
            <p className="text-lg text-text-muted leading-relaxed font-medium">
              YTI may prioritize programs serving underserved children, low-income or rural communities, high-trauma populations, and locations with limited trauma-specialty resources.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-primary rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-primary/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-light"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white font-display mb-4">Tell us about your organization</h2>
              <p className="text-primary-light/50 text-gray-200 mb-8 max-w-xl mx-auto">
                If your organization is interested in partnering with YTI or seeking support for clinical resources, please reach out.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary-light transition-all hover:scale-105 group"
              >
                Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
