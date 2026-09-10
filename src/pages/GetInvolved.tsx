import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Lightbulb, Landmark, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

export default function GetInvolved() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="Get Involved"
        title="Help put better trauma care within reach."
        subtitle="Funding for Youth Trauma Institute can help expand access to evidence-based clinical resources, strengthen measurement-based care, support research, and bring proven approaches to communities."
        imageUrl="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-5xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm ring-1 ring-primary/5 flex flex-col items-start hover:shadow-md transition-shadow group">
              <div className="p-4 bg-secondary/10 rounded-2xl mb-6 group-hover:bg-secondary/20 transition-colors">
                <HeartHandshake className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary font-display mb-3">Fund a Program</h3>
              <p className="text-text-muted mb-8 flex-grow leading-relaxed">
                Support clinical access, global capacity building, or public education initiatives to ensure child-serving organizations have the resources they need.
              </p>
              <Link to="/contact" className="text-secondary font-semibold hover:text-secondary-light flex items-center gap-1 group/link">
                Discuss funding opportunities <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm ring-1 ring-primary/5 flex flex-col items-start hover:shadow-md transition-shadow group">
              <div className="p-4 bg-secondary/10 rounded-2xl mb-6 group-hover:bg-secondary/20 transition-colors">
                <Landmark className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary font-display mb-3">Institutional Partnership</h3>
              <p className="text-text-muted mb-8 flex-grow leading-relaxed">
                Foundations, government agencies, and corporate philanthropy can partner with YTI to drive systemic change in trauma measurement and care.
              </p>
              <Link to="/contact" className="text-secondary font-semibold hover:text-secondary-light flex items-center gap-1 group/link">
                Talk with our team <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm ring-1 ring-primary/5 flex flex-col items-start hover:shadow-md transition-shadow group">
              <div className="p-4 bg-secondary/10 rounded-2xl mb-6 group-hover:bg-secondary/20 transition-colors">
                <Lightbulb className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary font-display mb-3">Research Collaboration</h3>
              <p className="text-text-muted mb-8 flex-grow leading-relaxed">
                Universities, hospitals, and clinical experts can contribute research capacity and scientific insight to the Youth Trauma Data Initiative.
              </p>
              <Link to="/contact" className="text-secondary font-semibold hover:text-secondary-light flex items-center gap-1 group/link">
                Explore collaboration <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm ring-1 ring-primary/5 flex flex-col items-start hover:shadow-md transition-shadow group">
              <div className="p-4 bg-secondary/10 rounded-2xl mb-6 group-hover:bg-secondary/20 transition-colors">
                <UserPlus className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary font-display mb-3">Individual Support</h3>
              <p className="text-text-muted mb-6 flex-grow leading-relaxed">
                Every contribution helps expand clinical access and awareness. Join our community of supporters committed to better care for children.
              </p>
              <div className="text-sm font-medium text-secondary bg-secondary/10 p-4 rounded-xl w-full border border-secondary/20">
                Donation processing is coming soon. Please contact us to express interest.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
