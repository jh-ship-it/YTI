with open("src/pages/GlobalAccess.tsx", "w") as f:
    f.write("""import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function GlobalAccess() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="Global Access"
        title="Science doesn't stop at borders."
        subtitle="Youth Trauma Institute's mission is global. We work to reduce financial, geographic, language, technology, and capacity barriers to evidence-based childhood trauma care."
        imageUrl="https://images.unsplash.com/photo-1526778548025-fa2fbf8b1bb3?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-16">
          
          <section>
            <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-6">Our Thesis</h2>
            <div className="bg-white p-8 sm:p-12 border-l-4 border-primary shadow-sm space-y-6">
              <p className="text-xl text-primary font-medium leading-relaxed">
                Evidence-based care for pediatric trauma should be a universal standard, not a geographic privilege.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                The majority of the world's traumatized children reside in low- and middle-income settings, yet the vast majority of validated clinical instruments, measurement frameworks, and specialized training materials are locked behind paywalls, English-language barriers, or complex licensing agreements designed for Western academic institutions.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                YTI exists to democratize these tools. We partner directly with local organizations, health ministries, and humanitarian responders to subsidize access, support accurate cultural translation, and build localized clinical capacity.
              </p>
            </div>
          </section>

          <section>
            <div className="bg-accent/30 p-8 sm:p-12 border border-primary/10">
              <div className="flex items-center gap-4 mb-8">
                <Globe className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-bold text-primary font-display">International Programs</h2>
              </div>
              
              <p className="text-text-muted leading-relaxed mb-10 text-lg">
                YTI develops international programs with qualified local partners, ensuring strict adherence to local clinical law, ethics, research requirements, privacy, child safeguarding, and cultural context.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <h3 className="font-bold text-primary mb-4 border-b border-primary/10 pb-2">Clinical Scaffolding</h3>
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
          </section>

          <section className="text-center mt-16 pt-16 border-t border-primary/10">
            <h3 className="text-xl font-bold text-primary font-display mb-4">Partner with us globally</h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              We are actively looking for international partners to help expand access to evidence-based care in underserved regions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary px-8 py-3.5 text-sm font-bold tracking-wide text-white hover:bg-primary-light uppercase transition-colors"
            >
              Contact our international team <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}
""")
