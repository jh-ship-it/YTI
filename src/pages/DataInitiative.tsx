import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { Database, Network, TrendingUp, ShieldAlert } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function DataInitiative() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="Data Initiative" description="The YTI Data Initiative helps organizations use repeated clinical measurement and outcomes data to better understand trauma treatment and recovery." />
      <PageHero 
        label="Planned Initiative"
        title="Building the data infrastructure for better trauma care."
        subtitle="The YTI Data Initiative is a planned effort intended to help child-serving programs use measurement-based care and data more effectively to understand trauma treatment, progress, and clinically meaningful outcomes."
        layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-20">
          
          <FadeIn as="section">
            <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">The Care Pathway</h2>
            <h3 className="text-3xl font-bold tracking-tight text-primary font-display">From individual assessments to shared learning</h3>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Behavioral health has historically lagged other areas of medicine in routine use of evidence-based measurement, enabling technology, and systematic outcomes analysis. We are planning the infrastructure to change that.
            </p>
            
            <div className="mt-12 bg-white border-l-4 border-primary p-8 sm:p-12 shadow-sm">
              <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">1</div>
                    <span>Screen & Assess</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">2</div>
                    <span>Treat</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>

                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">3</div>
                    <span>Re-measure at appropriate intervals</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">4</div>
                    <span>Analyze Outcomes</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>

                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">5</div>
                    <span>Generate Insights</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-secondary font-bold">
                    <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center shrink-0">
                      <Database className="w-5 h-5" />
                    </div>
                    <span>Inform Better Care</span>
                 </div>
              </div>
            </div>
            
            <div className="mt-12 border-t border-primary/10 pt-12">
              <h3 className="font-semibold text-primary text-lg mb-6">What participating programs may receive:</h3>
              <ul className="space-y-4 text-text-muted list-none">
                {[
                  'Funding for data-analysis capacity',
                  'Instructional resources and technical consultation',
                  'Research support and training',
                  'Authorized access to relevant assessment or measurement tools',
                  'Digital infrastructure',
                  'Help structuring repeated measurement and outcomes tracking'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start border-b border-primary/5 pb-4 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn as="section">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-display">Shared Data Concept</h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Where ethically and legally appropriate, participating institutions may contribute data to a shared multi-site research resource. This responsibly governed resource could support global research into trauma and treatment.
            </p>
            
            <div className="mt-8 grid sm:grid-cols-2 gap-8 border-t border-primary/10 pt-8">
               <div>
                  <Network className="w-6 h-6 text-secondary mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Potential Data Domains</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Demographics, trauma history, type, timing of exposure, PTSD symptom profiles, severity, functional impairment, treatment course, repeated assessments, outcomes, and comorbidity.
                  </p>
               </div>
               <div>
                  <ShieldAlert className="w-6 h-6 text-secondary mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Governance & Privacy</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Rigorous controls including de-identification where appropriate, IRB/ethics review, consent/waiver management, data-use agreements, role-based access, security, and scientific access review.
                  </p>
               </div>
            </div>
          </FadeIn>

          <FadeIn as="section">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-display">Advanced Analytics</h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              YTI may eventually use computational modeling, statistical analysis, and machine learning as research tools to study large, complex trauma datasets. If employed, these techniques may help researchers identify complex patterns in treatment response and symptom trajectories.
            </p>
            
            <div className="mt-6 bg-primary/5 p-6 border-l-4 border-secondary">
              <p className="text-sm text-primary font-semibold">
                Important Context on AI
              </p>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Human judgment stays central. Artificial intelligence and machine learning may be used solely as research and analytical tools—not substitutes for qualified clinical care. AI does not independently diagnose children or prescribe treatment. Clinical diagnosis and treatment remain the strict responsibility of appropriately qualified human professionals.
              </p>
            </div>

            <ul className="mt-10 grid gap-4">
              {[
                'Identify predictive markers of PTSD risk',
                'Identify patterns associated with treatment response',
                'Study possible moderators and mediators',
                'Examine symptom trajectories over time',
                'Improve understanding of comorbidity',
                'Support research into case conceptualization and treatment planning'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-center bg-white p-4 border border-primary/10">
                  <TrendingUp className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-text-muted font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
