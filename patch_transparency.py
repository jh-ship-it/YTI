import re

with open("src/pages/Transparency.tsx", "r") as f:
    content = f.read()

new_content = '''import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

export default function Transparency() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO
        title="Transparency & Governance"
        description="Youth Trauma Initiative's commitment to independent governance, vendor neutrality, and organizational transparency."
      />
      
      <PageHero 
        label="Accountability"
        title="Transparency & Governance"
        subtitle="Independent governance, clear conflict principles, and vendor neutrality."
        layout="text-only"
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8 mt-12 sm:mt-16 space-y-12">
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Mission & Governance</h2>
          <p className="text-text-muted leading-relaxed">
            Youth Trauma Initiative (YTI) operates with a singular focus: expanding access to effective pediatric trauma care. Our governance structure is designed to ensure our programs, funding, and research initiatives remain independent, mission-driven, and clinically rigorous. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Planning-Stage Legal Status</h2>
          <p className="text-text-muted leading-relaxed">
            YTI is currently in its formation stage. During launch, YTI may pursue fiscal sponsorship or other interim charitable-administration arrangements. All donor-restricted funds remain subject to YTI's mission and appropriate charitable control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Vendor Neutrality</h2>
          <p className="text-text-muted leading-relaxed">
            YTI is a vendor-neutral, independent organization. It may support authorized access to evidence-based tools from multiple vendors and licensors. Behavioral Health Innovations (BHI) is a for-profit company associated with the distribution of certain childhood-trauma assessment materials and may potentially be one supplier used by YTI, but YTI is not owned by or controlled by BHI, nor does it exist to promote any single commercial product.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Conflict of Interest Principles</h2>
          <p className="text-text-muted leading-relaxed">
            To protect the integrity of our clinical and research initiatives, YTI enforces strict conflict-of-interest policies and related-party principles. YTI independently determines programs, recipients, vendors, research priorities, and grant amounts to ensure all funding supports its charitable mission rather than private commercial interests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Future Reporting</h2>
          <p className="text-text-muted leading-relaxed">
            As we launch our initial programs, YTI will publish annual reports, Board of Directors information, and financial documents to provide full organizational transparency as that information becomes available.
          </p>
        </section>
      </div>
    </div>
  );
}
'''

with open("src/pages/Transparency.tsx", "w") as f:
    f.write(new_content)
