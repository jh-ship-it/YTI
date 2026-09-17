import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function GlobalAccess() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="Global Access" description="YTI works to make validated trauma-care resources more accessible and usable across diverse settings, overcoming cost, language, and licensing barriers." />
      <PageHero 
        label="Global Access"
        title="Evidence-based trauma care should not stop at a border."
        subtitle="The mission of YTI is global. We work to reduce financial, geographic, language, technology, and capacity barriers to evidence-based childhood trauma care."
        layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-16">
          
          <FadeIn as="section">
            <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-6">Our Thesis</h2>
            <div className="bg-white p-8 sm:p-12 border-l-4 border-primary shadow-sm space-y-6">
              <p className="text-xl text-primary font-medium leading-relaxed">
                Evidence-based care for pediatric trauma should be a universal standard, not a geographic privilege.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                In many settings, cost, language, licensing, workforce, implementation, and infrastructure barriers can limit access to validated trauma resources.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                YTI works to make evidence-based trauma resources more accessible, affordable, and usable across diverse settings. YTI intends to work with local organizations, health ministries, and humanitarian responders to subsidize access, support accurate cultural translation, and build localized clinical capacity.
              </p>
            </div>
          </FadeIn>

          <FadeIn as="section">
            <div className="bg-accent/30 p-8 sm:p-12 border border-primary/10">
              <div className="flex items-center gap-4 mb-8">
                <Globe className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-bold text-primary font-display">International Programs</h2>
              </div>
              
              <p className="text-text-muted leading-relaxed mb-10 text-lg">
                International programs may be developed in close collaboration with qualified local partners, ensuring with appropriate attention to applicable to local clinical regulations, medical ethics, patient privacy, child safeguarding standards, and cultural contexts.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <h3 className="font-bold text-primary mb-4 border-b border-primary/10 pb-2">Clinical Access & Implementation</h3>
                  <ul className="space-y-3 text-text-muted">
                    <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Subsidized clinical resources</li>
                    <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Translation and cultural adaptation</li>
                    <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Clinical training</li>
                    <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Implementation support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-4 border-b border-primary/10 pb-2">Outcomes & Research</h3>
                  <ul className="space-y-3 text-text-muted">
                    <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Program grants</li>
                    <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Research collaboration</li>
                    <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Measurement-based-care infrastructure</li>
                    <li className="flex gap-3"><span className="text-secondary font-bold">•</span> Data and outcomes projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn as="section" className="text-center mt-16 pt-16 border-t border-primary/10">
            <h3 className="text-xl font-bold text-primary font-display mb-4">Partner with us globally</h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              We are actively looking for international partners to help expand access to evidence-based care in underserved regions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary px-8 py-3.5 text-sm font-bold tracking-wide text-white hover:bg-primary-light uppercase transition-colors"
            >
              Discuss an international partnership <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
