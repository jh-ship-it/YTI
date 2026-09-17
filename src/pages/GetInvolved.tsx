import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Lightbulb, Landmark, UserPlus } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function GetInvolved() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="Support YTI" description="Support Youth Trauma Initiative through philanthropy or institutional partnerships to help expand access to evidence-based pediatric trauma care globally." />
      <PageHero 
        label="Get Involved"
        title="Help put better trauma care within reach."
        subtitle="Funding for Youth Trauma Initiative can help expand access to evidence-based clinical resources, strengthen measurement-based care, support research, and bring proven approaches to communities."
        imageUrl="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-5xl space-y-16">
          
          <FadeIn as="section">
            <h2 className="text-3xl font-bold text-primary font-display mb-8">Funding & Philanthropy</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 sm:p-10 border border-primary/10 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <HeartHandshake className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-bold text-primary font-display">Fund a Program</h3>
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Support clinical access, global capacity building, or public education initiatives to ensure child-serving organizations have the resources they need. 
                </p>
                
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Discuss funding <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-white p-8 sm:p-10 border border-primary/10 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <UserPlus className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-bold text-primary font-display">Individual Support</h3>
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Every contribution helps expand clinical access and awareness. Join our community of supporters committed to better care for children.
                </p>
                
                <Link to="/donate" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Learn about supporting YTI <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn as="section">
            <h2 className="text-3xl font-bold text-primary font-display mb-8">Institutional Partnerships</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 sm:p-10 border border-primary/10 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <Landmark className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-bold text-primary font-display">Strategic Alliances</h3>
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Foundations, government agencies, and corporate philanthropy can partner with YTI to drive systemic change in trauma measurement and care.
                </p>
                
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Talk with our team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-white p-8 sm:p-10 border border-primary/10 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <Lightbulb className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-bold text-primary font-display">Research Collaboration</h3>
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Universities, hospitals, and clinical experts can contribute research capacity and scientific insight to the Youth Trauma Data Initiative.
                </p>
                
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Explore collaboration <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
