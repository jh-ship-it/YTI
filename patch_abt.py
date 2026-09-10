with open("src/pages/About.tsx", "w") as f:
    f.write("""import PageHero from '../components/PageHero';

export default function About() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="About Youth Trauma Institute"
        title="Built to close the gap between evidence and access."
        subtitle="Youth Trauma Institute is being developed to expand access to the clinical tools, knowledge, data, training, and implementation support needed to improve childhood-trauma care."
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-16">
          
          <section className="bg-white p-8 sm:p-12 border-t-4 border-secondary shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-display mb-6">Our Origins</h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                The Youth Trauma Institute (YTI) grew out of a recognition that the science of treating childhood trauma has advanced significantly, but the delivery systems have struggled to keep pace. While researchers have developed effective, evidence-based methods for assessing and treating pediatric PTSD, these tools remain inaccessible to many frontline clinicians.
              </p>
              <p>
                The barriers are varied: prohibitive costs for proprietary assessments, lack of translated instruments in global settings, limited training opportunities for non-specialist providers, and fragmented technological infrastructure.
              </p>
              <p>
                YTI is being established to act as an implementation accelerator—a philanthropic and capacity-building engine designed to bridge the gap between academic research and community-based practice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-6">Leadership & Governance</h2>
            <p className="text-text-muted mb-8 leading-relaxed text-lg">
              Youth Trauma Institute is currently in its developmental phase. We are actively assembling a board of directors and a clinical advisory council composed of recognized experts in pediatric trauma, implementation science, public health, and nonprofit governance.
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
""")
