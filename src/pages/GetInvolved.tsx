import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { HeartHandshake, Lightbulb, Landmark, UserPlus } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function GetInvolved() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="Get Involved" description="Explore ways to start a conversation with Youth Trauma Initiative about future philanthropy, partnerships, research, and service." />
      <PageHero 
        label="Get Involved"
        title="Help shape a path to care."
        subtitle="YTI is being established. We welcome conversations with people and organizations interested in the future of child trauma care."
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
                <p className="text-text-muted mb-6 leading-relaxed">Foundations and other prospective supporters can learn about YTI’s planned areas of work and discuss possible future support.</p>
                
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Discuss future support
                </Link>
              </div>

              <div className="bg-white p-8 sm:p-10 border border-primary/10 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <UserPlus className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-bold text-primary font-display">Individual Support</h3>
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">Individuals interested in YTI’s mission can get in touch to learn about the organization and its formation-stage plans.</p>
                
                <Link to="/donate" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Support YTI
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
                <p className="text-text-muted mb-6 leading-relaxed">Organizations can start a conversation about shared priorities, potential collaboration, and the safeguards that guide YTI’s planning.</p>
                
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Talk with our team 
                </Link>
              </div>

              <div className="bg-white p-8 sm:p-10 border border-primary/10 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <Lightbulb className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-bold text-primary font-display">Research Collaboration</h3>
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">Researchers and care organizations may discuss areas of mutual interest as YTI’s research and data initiatives are developed.</p>
                
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Explore collaboration 
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}

