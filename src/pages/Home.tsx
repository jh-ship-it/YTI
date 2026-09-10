import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, BookOpen, Activity, Users2, Database, ShieldCheck, Heart, Users, LineChart } from 'lucide-react';
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
      <SEO title="Better tools, data, and trauma care for children" description="Better tools, data, and trauma care for children" />
      {/* Hero Section */}
      <section className="relative bg-background pt-24 pb-12 sm:pt-32 sm:pb-24 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[85vh]">
        {/* Right side image background */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Clinician reviewing notes"
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
              <h1 
                className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-primary font-display leading-[1.1]"
              >
                Better tools.<br/>Better data.<br/>Better trauma care for children.
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-text-muted max-w-md">
                Youth Trauma Institute expands access to the clinical tools, training, research, and data clinicians need to identify and treat childhood trauma and PTSD.
              </p>
              
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/programs"
                  className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold tracking-wider text-white shadow-sm hover:bg-primary-light transition-all flex items-center gap-2 uppercase"
                >
                  Our Work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/get-involved" 
                  className="rounded-full border border-primary px-8 py-3.5 text-sm font-bold tracking-wider text-primary hover:bg-primary hover:text-white transition-all flex items-center gap-2 uppercase"
                >
                  Get Involved <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column - Decorative Text */}
            <div className="hidden lg:flex flex-col items-end justify-start h-full pt-12 pr-12">
              <div className="text-right">
                <p className="text-primary font-sans font-bold tracking-[0.2em] text-sm leading-loose uppercase">
                  Braver Kids.<br/>Brighter<br/>Tomorrows.
                </p>
                <div className="w-8 h-1 bg-sun mt-4 ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Features Section */}
      <section className="py-12 bg-white relative z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
              <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center shrink-0">
                <Heart className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary text-xl">Clinical Access</h4>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">Tools for assessment and care.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7 text-secondary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary text-xl">Awareness</h4>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">Education and advocacy for trauma care.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
              <div className="w-16 h-16 rounded-full bg-sun/10 flex items-center justify-center shrink-0">
                <LineChart className="w-7 h-7 text-sun" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary text-xl">Research & Data</h4>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">Building the infrastructure for better care.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
              <div className="w-16 h-16 rounded-full border-2 border-sky flex items-center justify-center shrink-0">
                <Globe2 className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary text-xl">Global Capacity</h4>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">Scaling resources internationally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Evidence / Problem Section */}
      <section className="py-24 sm:py-32 bg-primary text-white px-6 lg:px-8 border-y border-primary-light/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-6">The Clinical Gap</h2>
            <p className="text-4xl sm:text-5xl font-bold tracking-tight font-display leading-tight mb-8">
              The science exists. Access is uneven.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
              Recognizing trauma is only the beginning. Clinicians and child-serving systems need appropriate tools to assess symptoms, guide treatment, monitor progress, and understand outcomes. Yet cost, language, geography, and fragmented systems put those resources out of reach. <span className="font-semibold text-white">YTI exists to help close that gap.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div>
              <div className="text-4xl font-display font-bold text-sun mb-2">2/3</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                of children report at least one traumatic event by age 16. Early identification is critical to preventing long-term outcomes.
                <span className="block text-xs mt-2 text-white/50">(SAMHSA)</span>
              </p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-sun mb-2">40%</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                of youth do not receive adequate follow-up care or measurement-based tracking during trauma treatment.
                <span className="block text-xs mt-2 text-white/50">(NCTSN)</span>
              </p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-sun mb-2">90+</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                countries face severe shortages of validated, translated pediatric trauma assessment instruments.
                <span className="block text-xs mt-2 text-white/50">(Global Health Estimates)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Initiative Feature */}
      <section className="py-24 sm:py-32 bg-white px-6 lg:px-8 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10 border-t border-primary/10 pt-16">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Planned Initiative</p>
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
                  className="group flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors"
                >
                  Explore the Data Initiative <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-background border-l-4 border-primary p-8 sm:p-12 h-full">
              <div className="flex flex-col gap-6">
                 {/* Process Flow */}
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border-2 border-primary/20 flex items-center justify-center shrink-0 rounded-full font-bold">1</div>
                    <span>Screen & Assess</span>
                 </div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border-2 border-primary/20 flex items-center justify-center shrink-0 rounded-full font-bold">2</div>
                    <span>Treat & Re-measure</span>
                 </div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border-2 border-primary/20 flex items-center justify-center shrink-0 rounded-full font-bold">3</div>
                    <span>Analyze Outcomes</span>
                 </div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-secondary font-semibold">
                    <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center shrink-0 rounded-full">
                      <Database className="w-5 h-5" />
                    </div>
                    <span>Improve Care Globally</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Funding Flow Explainer */}
      <section className="py-24 sm:py-32 bg-white px-6 lg:px-8 border-t border-accent">
        <div className="mx-auto max-w-7xl text-center">
          <div
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
              Your support becomes clinical capacity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted max-w-2xl mx-auto">
              Funders support Youth Trauma Institute. YTI then independently directs resources toward programs that expand clinical access, research, education, implementation, training, and global capacity.
            </p>
          </div>
          
          <div
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
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 sm:py-32 bg-primary px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/80"></div>
        <div className="mx-auto max-w-3xl relative z-10">
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display"
          >
            Help more children get the right care, sooner.
          </h2>
          <p
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            Whether you fund programs, provide clinical expertise, contribute research capacity, or lead a child-serving organization, there is a role for you in building better trauma-care systems.
          </p>
          <div
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
          </div>
        </div>
      </section>
    </div>
  );
}
