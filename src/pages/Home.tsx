import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, BookOpen, Activity, Users2, Database, ShieldCheck, Heart, Users, LineChart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-background pt-24 pb-12 sm:pt-32 sm:pb-24 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[85vh]">
        {/* Right side image background */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=2000" 
            alt="Child looking at mountains"
            className="absolute inset-0 w-full h-full object-cover object-right"
          />
          {/* Gradient to blend left side to white */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent w-full"></div>
          {/* Subtle bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="max-w-xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-primary font-display leading-[1.1]"
              >
                A more resilient tomorrow for every young person.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg sm:text-xl leading-relaxed text-text-muted max-w-md"
              >
                We expand access to knowledge, healing, and real-world solutions so all children can thrive — stronger, safer, and surrounded by brighter futures.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/programs"
                  className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold tracking-wider text-white shadow-sm hover:bg-primary-light transition-all flex items-center gap-2 uppercase"
                >
                  Our Impact <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/get-involved" 
                  className="rounded-full border border-primary px-8 py-3.5 text-sm font-bold tracking-wider text-primary hover:bg-primary hover:text-white transition-all flex items-center gap-2 uppercase"
                >
                  Get Involved <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Decorative Text */}
            <div className="hidden lg:flex flex-col items-end justify-start h-full pt-12 pr-12">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-right"
              >
                <p className="text-primary font-sans font-bold tracking-[0.2em] text-sm leading-loose uppercase">
                  Braver Kids.<br/>Brighter<br/>Tomorrows.
                </p>
                <div className="w-8 h-1 bg-sun mt-4 ml-auto"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Features Section */}
      <section className="py-12 bg-white relative z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
              <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary text-xl">Knowledge</h4>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">Evidence-based resources for real change.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <Heart className="w-7 h-7 text-secondary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary text-xl">Healing</h4>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">Support for children and the people who care for them.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
              <div className="w-16 h-16 rounded-full bg-sun/10 flex items-center justify-center shrink-0">
                <Users className="w-7 h-7 text-sun" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary text-xl">Access</h4>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">High-quality trauma care for every child, everywhere.</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
              <div className="w-16 h-16 rounded-full border-2 border-sky flex items-center justify-center shrink-0">
                <Globe2 className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary text-xl">Global Impact</h4>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">A kinder, safer world for every child.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Breadcrumb Bar */}
          <div className="mt-16 pt-8 border-t border-accent flex justify-center text-xs sm:text-sm font-bold tracking-[0.15em] text-text-muted uppercase flex-wrap gap-4 items-center">
            <span>Access</span>
            <span className="w-1 h-1 rounded-full bg-primary/30"></span>
            <span>Knowledge</span>
            <span className="w-1 h-1 rounded-full bg-primary/30"></span>
            <span>Healing</span>
            <span className="w-1 h-1 rounded-full bg-primary/30"></span>
            <span>Global Impact</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 sm:py-32 bg-background px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base font-semibold leading-7 text-secondary uppercase tracking-wider">The Problem</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
                The science exists.<br/>Access is uneven.
              </p>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                Recognizing trauma is only the beginning. Clinicians and child-serving systems need appropriate tools to assess symptoms, guide treatment, monitor progress, and understand outcomes. 
              </p>
              <p className="mt-4 text-lg leading-8 text-text-muted">
                Yet cost, language, geography, workforce limitations, and fragmented systems can put those resources out of reach. <span className="font-semibold text-primary">YTI exists to help close that gap.</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl ring-1 ring-primary/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1200" 
                alt="Clinician reviewing documents" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 sm:py-32 bg-white px-6 lg:px-8 border-y border-accent">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4"
          >
            {[
              {
                title: 'Clinical Access',
                description: 'Help organizations obtain and implement appropriate evidence-based resources.',
                icon: ShieldCheck,
              },
              {
                title: 'Education & Awareness',
                description: 'Improve understanding, recognition, and pathways to qualified trauma care.',
                icon: BookOpen,
              },
              {
                title: 'Research & Data',
                description: 'Strengthen measurement-based care, outcomes research, and shared learning.',
                icon: Activity,
              },
              {
                title: 'Global Capacity',
                description: 'Bring tools, training, research, and implementation support to high-need settings.',
                icon: Globe2,
              }
            ].map((pillar) => (
              <motion.div variants={itemVariants} key={pillar.title} className="flex flex-col items-start group hover:-translate-y-1 transition-transform duration-300">
                <div className="rounded-2xl bg-accent/50 p-4 ring-1 ring-primary/10 group-hover:bg-secondary/10 group-hover:ring-secondary/30 transition-colors">
                  <pillar.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-semibold text-primary font-display text-xl">{pillar.title}</h3>
                <p className="mt-2 text-base leading-7 text-text-muted flex-auto">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Initiative Feature */}
      <section className="py-24 sm:py-32 bg-background px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
                From individual assessments to shared learning.
              </h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                The Youth Trauma Data Initiative is being developed to help organizations use repeated clinical measurement and outcomes data to better understand trauma treatment and recovery.
              </p>
              <p className="mt-4 text-lg leading-8 text-text-muted">
                Over time, responsibly governed multi-site research data and advanced analytics may help researchers identify risk patterns, understand treatment response, study symptom trajectories, and improve the evidence available to clinicians.
              </p>
              <div className="mt-10 flex">
                <Link
                  to="/data-initiative"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-light transition-all flex items-center gap-2 group"
                >
                  Explore the Data Initiative <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 ring-1 ring-primary/10 relative"
            >
              <div className="flex flex-col gap-6">
                 {/* Process Flow */}
                 <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">1</div>
                    <span>Screen & Assess</span>
                 </motion.div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">2</div>
                    <span>Treat & Re-measure</span>
                 </motion.div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">3</div>
                    <span>Analyze Outcomes</span>
                 </motion.div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex items-center gap-4 text-secondary font-semibold bg-secondary/5 p-3 pr-6 rounded-full w-fit">
                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                      <Database className="w-5 h-5" />
                    </div>
                    <span>Improve Care Globally</span>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funding Flow Explainer */}
      <section className="py-24 sm:py-32 bg-white px-6 lg:px-8 border-t border-accent">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
              Your support becomes clinical capacity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted max-w-2xl mx-auto">
              Funders support Youth Trauma Institute. YTI then independently directs resources toward programs that expand clinical access, research, education, implementation, training, and global capacity.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-background rounded-3xl p-8 sm:p-12 ring-1 ring-primary/10 max-w-4xl mx-auto relative overflow-hidden shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="bg-white p-6 rounded-2xl shadow-md shadow-primary/5 text-center flex-1 w-full border border-primary/5">
                <Users2 className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold text-primary">Funders</h4>
                <p className="text-xs text-text-muted mt-2">Foundations, Government, Companies, Individuals</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary/30 hidden md:block shrink-0" />
              
              <div className="bg-primary p-6 rounded-2xl shadow-lg shadow-primary/20 text-center flex-1 w-full transform hover:scale-105 transition-transform duration-300">
                <div className="text-white font-display font-bold text-2xl mb-2">YTI</div>
                <p className="text-xs text-gray-300">Independent charitable control</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary/30 hidden md:block shrink-0" />
              
              <div className="bg-white p-6 rounded-2xl shadow-md shadow-primary/5 text-center flex-1 w-full border border-primary/5">
                <ShieldCheck className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold text-primary">Programs & Partners</h4>
                <p className="text-xs text-text-muted mt-2">Clinicians, Schools, Hospitals, Universities</p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-primary/10 relative z-10">
              <h3 className="text-xl font-bold text-primary font-display">
                Earlier identification • Better measurement • Better-informed care
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 sm:py-32 bg-primary px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/80"></div>
        <div className="mx-auto max-w-3xl relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display"
          >
            Help more children get the right care, sooner.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            Whether you fund programs, provide clinical expertise, contribute research capacity, or lead a child-serving organization, there is a role for you in building better trauma-care systems.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              to="/get-involved"
              className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary-light hover:scale-105 transition-all"
            >
              Get Involved
            </Link>
            <Link to="/contact" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors flex items-center gap-2 group">
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
