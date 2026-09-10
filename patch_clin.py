with open("src/pages/Clinicians.tsx", "w") as f:
    f.write("""import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Stethoscope, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Clinicians() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="For Organizations"
        title="Bring stronger assessment to your clinical setting."
        subtitle="YTI aims to work with eligible organizations facing financial, implementation, language, geographic, technology, or capacity barriers to measurement-based care."
        imageUrl="https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-4xl space-y-16">
          
          <section>
            <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-6 text-center">How We Support You</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 sm:p-10 border border-primary/10 shadow-sm hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-accent flex items-center justify-center mb-6">
                  <Stethoscope className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-6 font-display">Clinical Resources</h3>
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
              </div>
              
              <div className="bg-white p-8 sm:p-10 border border-primary/10 shadow-sm hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-accent flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-6 font-display">Organizational Capacity</h3>
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
              </div>
            </div>
          </section>

          <section className="bg-white p-8 sm:p-12 border-l-4 border-secondary shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-6">Eligibility Self-Screen</h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              YTI partners with organizations providing direct services to children and adolescents. You may be eligible for support if your organization meets the following criteria:
            </p>
            <ul className="space-y-6 text-text-muted">
              <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                 <div>
                    <strong className="text-primary block mb-1">Organizational Type</strong>
                    <p className="text-sm leading-relaxed">Public, charter, or private school; nonprofit behavioral-health provider; hospital or health system; government agency; child advocacy center; or qualified international NGO.</p>
                 </div>
              </li>
              <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                 <div>
                    <strong className="text-primary block mb-1">Demonstrated Need</strong>
                    <p className="text-sm leading-relaxed">Facing significant financial, implementation, language, or geographic barriers to accessing proprietary or evidence-based clinical tools.</p>
                 </div>
              </li>
              <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                 <div>
                    <strong className="text-primary block mb-1">Target Population</strong>
                    <p className="text-sm leading-relaxed">Serving underserved children, low-income or rural communities, high-trauma populations, or locations with limited trauma-specialty resources.</p>
                 </div>
              </li>
            </ul>
          </section>

          <section className="bg-primary text-white p-12 md:p-16 text-center border-t border-primary-light/30">
            <h2 className="text-3xl font-bold font-display mb-4">Tell us about your organization</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
              If your organization is interested in partnering with YTI or seeking support for clinical resources, please reach out to our team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary px-8 py-3.5 text-sm font-bold tracking-wide text-white hover:bg-secondary-light transition-colors uppercase"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}
""")
