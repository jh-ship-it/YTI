import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { siteConfig } from '../content';
import PageHero from '../components/PageHero';

export default function Mission() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="Our Mission" description="The Youth Trauma Initiative exists to ensure that every child affected by trauma has access to validated assessment and measurement-based care worldwide." />
      <PageHero 
        label="Our Mission"
        title="Closing the gap in trauma care."
        subtitle="Youth Trauma Initiative helps children around the world receive better trauma and PTSD care by expanding access to the tools, training, data, and research clinicians need."
        layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-16">
          <div
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Youth Trauma Initiative exists to expand clinical access globally to the evidence-based tools and supporting resources clinicians and child-serving systems need to properly identify, assess, diagnose, monitor, and treat trauma and post-traumatic stress disorder in children and adolescents.
            </p>
          </div>

          <div
            className="bg-white p-8 sm:p-12 border-l-4 border-secondary shadow-sm ring-1 ring-primary/5"
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display">The Gap in Care</h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Too many children experience trauma without timely, consistent access to the tools and systems needed to recognize PTSD, guide care, and measure whether treatment is helping. Youth Trauma Initiative works to close that gap.
            </p>
          </div>

          <div
          >
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display">Our Approach</h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              YTI is a mission-first, vendor-neutral nonprofit organization focused on improving childhood-trauma care worldwide. We work to support:
            </p>
            <ul className="mt-8 space-y-4 text-lg text-text-muted list-none">
              {[
                'Funding or subsidized access to evidence-based trauma screening, assessment, diagnostic-support, treatment-planning, monitoring, and outcomes tools.',
                'Training and implementation support for clinicians and organizations.',
                'Public education and awareness campaigns to improve recognition of childhood trauma.',
                'Pilots, research, validation, translation, cultural adaptation, and program evaluation.',
                'Measurement-based care initiatives for clinical and child-serving organizations.',
                'Shared research data resources and responsible AI / machine-learning research to improve our understanding of trauma.'
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
