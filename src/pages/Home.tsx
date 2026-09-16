import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, BookOpen, Activity, Users2, Database, ShieldCheck, Heart, Users, LineChart } from 'lucide-react';
export default function Home() {
  
  return (
    <div className="flex flex-col">
      <SEO title="Better tools, data, and trauma care for children" description="Youth Trauma Initiative works to expand global access to evidence-based tools, training, data, research, and implementation support for childhood trauma and PTSD care." />
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
                Youth Trauma Initiative helps children around the world receive better trauma and PTSD care by expanding access to the tools, training, data, research, and implementation support clinicians and child-serving systems need.
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
              Recognizing trauma is only the beginning. Clinicians and child-serving systems need appropriate tools to assess symptoms, guide treatment, monitor progress, and understand outcomes. Yet cost, language, geography, workforce limitations, and fragmented systems can put those resources out of reach. <span className="font-semibold text-white">YTI exists to help close that gap.</span>
            </p>
          </div>

          <div className="flex justify-center pt-12 border-t border-white/10">
            <div className="max-w-2xl text-center">
              <div className="text-5xl font-display font-bold text-sun mb-4">2/3</div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                of children report at least one traumatic event by age 16. Childhood trauma can have lasting effects on health, learning, and wellbeing—making appropriate identification and support important.
                <span className="block text-sm mt-3 text-white/50 font-medium">Source: Substance Abuse and Mental Health Services Administration (SAMHSA)</span>
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
                The YTI Data Initiative is being developed to help organizations use repeated clinical measurement and outcomes data to better understand trauma treatment and recovery.
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
            
            <div className="bg-background border border-primary/10 p-8 sm:p-10 h-full">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Clinical Measurement Flow</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-primary mb-12">
                <span className="bg-white px-3 py-1.5 border border-primary/20">Screen</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-white px-3 py-1.5 border border-primary/20">Assess</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-white px-3 py-1.5 border border-primary/20">Treat</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-white px-3 py-1.5 border border-primary/20">Re-measure</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-white px-3 py-1.5 border border-primary/20">Analyze Outcomes</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-secondary/10 px-3 py-1.5 border border-secondary text-secondary">Inform Better Care</span>
              </div>
              
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6 border-t border-primary/10 pt-8">Research & Analytics Flow</h3>
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 bg-white p-4 border border-primary/10">
                    <Database className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-semibold text-primary text-sm">Participating Sites</span>
                 </div>
                 <div className="w-px h-4 bg-primary/20 ml-6"></div>
                 <div className="flex items-center gap-4 bg-white p-4 border border-primary/10">
                    <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-semibold text-primary text-sm">Governed Shared Research Data</span>
                 </div>
                 <div className="w-px h-4 bg-primary/20 ml-6"></div>
                 <div className="flex items-center gap-4 bg-white p-4 border border-primary/10">
                    <LineChart className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-semibold text-primary text-sm">Statistical / AI Analysis</span>
                 </div>
                 <div className="w-px h-4 bg-primary/20 ml-6"></div>
                 <div className="flex items-center gap-4 bg-primary p-4 border border-primary">
                    <BookOpen className="w-5 h-5 text-sun shrink-0" />
                    <span className="font-semibold text-white text-sm">Research Findings</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Funding Flow Explainer */}
      <section className="py-24 sm:py-32 bg-white px-6 lg:px-8 border-t border-accent">
        <div className="mx-auto max-w-7xl text-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
              Your support becomes clinical capacity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted max-w-2xl mx-auto">
              Funders support Youth Trauma Initiative. YTI then independently directs resources toward programs that expand clinical access, research, education, implementation, training, and global capacity.
            </p>
          </div>
          
          <div className="mt-16 max-w-5xl mx-auto flex flex-col items-center">
            
            {/* 1. Funders */}
            <div className="bg-accent/40 border border-primary/20 px-8 py-4 w-full max-w-3xl">
              <p className="text-sm font-bold text-primary uppercase tracking-wider">
                Foundations / Government / Corporate Philanthropy / Individuals
              </p>
            </div>
            
            {/* Arrow down */}
            <div className="h-8 w-px bg-primary/30"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30"></div>
            
            {/* 2. YTI */}
            <div className="bg-primary text-white p-8 w-full max-w-3xl relative mt-2 border-b-4 border-secondary">
              <div className="font-display font-bold text-3xl mb-1">Youth Trauma Initiative</div>
              <div className="text-sm font-medium text-gray-300 italic">"Independent charitable control"</div>
            </div>
            
            {/* Arrow down */}
            <div className="h-8 w-px bg-primary/30 mt-0"></div>
            
            {/* 3. Four Branches */}
            <div className="w-full max-w-4xl border-t border-primary/30 relative">
               <div className="flex justify-between w-full relative -top-3">
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30 mx-auto"></div>
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30 mx-auto"></div>
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30 mx-auto hidden md:block"></div>
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30 mx-auto hidden md:block"></div>
               </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-4">
              <div className="bg-white border border-primary/10 p-6 flex flex-col justify-center shadow-sm">
                <p className="text-sm font-bold text-primary leading-snug">Clinical Access &<br/>Implementation</p>
              </div>
              <div className="bg-white border border-primary/10 p-6 flex flex-col justify-center shadow-sm">
                <p className="text-sm font-bold text-primary leading-snug">Education &<br/>Awareness</p>
              </div>
              <div className="bg-white border border-primary/10 p-6 flex flex-col justify-center shadow-sm">
                <p className="text-sm font-bold text-primary leading-snug">Research, Data &<br/>Outcomes</p>
              </div>
              <div className="bg-white border border-primary/10 p-6 flex flex-col justify-center shadow-sm">
                <p className="text-sm font-bold text-primary leading-snug">Global Capacity<br/>Building</p>
              </div>
            </div>
            
            {/* Arrow down */}
            <div className="h-8 w-px bg-primary/30 mt-6"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30"></div>
            
            {/* 4. Recipients */}
            <div className="w-full max-w-4xl mt-2 p-6 bg-accent/20 border border-primary/10">
              <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Supported Partners & Recipients</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-primary font-medium text-sm">
                <span>Clinicians</span> •
                <span>Schools</span> •
                <span>Hospitals</span> •
                <span>Nonprofits</span> •
                <span>CACs</span> •
                <span>Universities</span> •
                <span>Public Agencies</span> •
                <span>International Partners</span>
              </div>
            </div>
            
            {/* Arrow down */}
            <div className="h-8 w-px bg-primary/30 mt-6"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30"></div>
            
            {/* 5. Outcomes */}
            <div className="w-full max-w-3xl mt-2 bg-secondary/10 border border-secondary/20 p-6">
              <p className="text-lg font-display font-bold text-primary flex flex-col md:flex-row items-center justify-center gap-4">
                <span>Earlier identification</span>
                <span className="hidden md:inline text-secondary">•</span>
                <span>Better measurement</span>
                <span className="hidden md:inline text-secondary">•</span>
                <span>Better-informed care</span>
              </p>
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
