import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function GlobalAccess() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="Global Access" description="Learn how YTI is planning for locally informed, responsible access to child trauma-care resources across diverse settings." />
      <PageHero 
        label="Global Access"
        title="Evidence-based trauma care should not stop at a border."
        subtitle="YTI's international work is still being planned. Any programs may be developed with local context, clinical standards, language, and child safeguarding in view."
        layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-16">

          <FadeIn as="section" className="global-pathway">
            <p className="eyebrow">A locally informed path</p>
            <div className="global-pathway-steps" aria-label="Potential international planning sequence">
              <article><span>01</span><h2>Understand the setting</h2><p>Language, resources, and care systems.</p></article>
              <article><span>02</span><h2>Plan with local partners</h2><p>Qualified expertise and shared priorities.</p></article>
              <article><span>03</span><h2>Adapt with care</h2><p>Clinical practice, privacy, and safeguarding.</p></article>
            </div>
            <p className="global-pathway-note">A planning framework, not a list of active international programs or partners.</p>
          </FadeIn>
          
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
                YTI may explore ways to make evidence-based trauma resources more accessible and usable across diverse settings. Any future international programs may be developed with qualified local partners and appropriate attention to applicable requirements.
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
                International programs may be developed in close collaboration with qualified local partners, with appropriate attention to applicable local clinical regulations, medical ethics, patient privacy, child safeguarding standards, and cultural contexts.
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
              As YTI's planning develops, conversations can help identify locally informed approaches to access and implementation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary px-8 py-3.5 text-sm font-bold tracking-wide text-white hover:bg-primary-light uppercase transition-colors"
            >
              Discuss an international partnership 
            </Link>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}

