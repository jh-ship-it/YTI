import SEO from '../components/SEO';
import { siteConfig } from '../content';
import PageHero from '../components/PageHero';

export default function About() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="About" description="Learn about Youth Trauma Initiative's origins, our team, and our mission to move proven trauma-care knowledge and tools from research into real-world settings." />
      <PageHero 
        label="About Youth Trauma Initiative"
        title="Built to help close the gap between evidence and access."
        subtitle="Youth Trauma Initiative is being developed to expand access to the clinical tools, knowledge, data, training, and implementation support needed to improve childhood-trauma care."
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-16">
          
          <section className="bg-white p-8 sm:p-12 border-t-4 border-secondary shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-display mb-6">Our Origins</h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                The Youth Trauma Initiative (YTI) grew out of a recognition that the science of treating childhood trauma has advanced significantly, but the delivery systems have struggled to keep pace. While researchers have developed effective, evidence-based methods for assessing and treating pediatric PTSD, these tools remain inaccessible to many frontline clinicians.
              </p>
              <p>
                The barriers are varied: cost barriers for proprietary assessments, lack of translated instruments in global settings, limited training opportunities for non-specialist providers, and fragmented technological infrastructure.
              </p>
              <p>
                YTI is being established to help translate proven trauma-care knowledge and validated tools from research into real-world settings, bridging the gap between academic clinical science and community-based practice.
              </p>
            </div>
          </section>

          {/* Strategic Pillars */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-6">Strategic Pillars</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 border border-primary/10 space-y-2">
                <h3 className="font-bold font-display text-primary text-lg">1. Clinical Access & Implementation</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Lowering direct licensing and adoption costs for high-quality, validated trauma assessments so community clinics aren't forced to rely on informal screening.
                </p>
              </div>
              <div className="bg-white p-6 border border-primary/10 space-y-2">
                <h3 className="font-bold font-display text-primary text-lg">2. Education & Awareness</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Helping communities recognize trauma earlier by supporting public education and awareness intended to improve recognition of childhood trauma and PTSD.
                </p>
              </div>
              <div className="bg-white p-6 border border-primary/10 space-y-2">
                <h3 className="font-bold font-display text-primary text-lg">3. Multi-Site Open Data</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Building privacy-first, ethically governed infrastructure through the Youth Trauma Data Initiative to track longitudinal recovery and identify what interventions work best.
                </p>
              </div>
              <div className="bg-white p-6 border border-primary/10 space-y-2">
                <h3 className="font-bold font-display text-primary text-lg">4. Global Capacity Building</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Expanding trauma-care capacity where resources are limited, working with qualified local partners and accounting for local cultural contexts.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-6">Leadership & Governance</h2>
            <p className="text-text-muted mb-8 leading-relaxed text-lg">
              Youth Trauma Initiative is currently in its developmental phase. We are actively assembling a board of directors and a clinical advisory council composed of recognized experts in pediatric trauma, implementation science, public health, and nonprofit governance.
            </p>
            <p className="text-text-muted mb-8 leading-relaxed text-lg">
              Our founding team brings together expertise across clinical science, technology development, and philanthropy.
            </p>
            <div className="border border-primary/10 bg-white p-6">
              <p className="text-sm text-text-muted font-medium">
                Official titles, institutional affiliations, and formal governance roles will be published upon the final completion of our organizational formation and tax-exempt filing processes.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
