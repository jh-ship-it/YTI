import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Heart, ShieldCheck, CheckCircle2, ArrowRight, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Donate() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO
        title="Donate & Support"
        description="Support Youth Trauma Initiative's mission to expand global access to evidence-based childhood trauma care."
      />

      <PageHero
        label="Philanthropy & Partnerships"
        title="Help put better trauma care within reach."
        subtitle="A child's ability to receive appropriate trauma care should not depend on whether their clinic, school, or community can afford the right tools and implementation support."
        layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Pledge Options */}
          <div className="lg:col-span-7">
            <div className="bg-white border-t-4 border-secondary p-8 sm:p-12 shadow-sm border border-primary/10">
              <div className="text-center mb-10">
                <h3 className="font-display font-bold text-2xl text-primary mb-3">Support the Mission</h3>
                <p className="text-text-muted text-sm max-w-lg mx-auto leading-relaxed">
                  Youth Trauma Initiative is currently being established. While we configure our online giving infrastructure, our leadership team is actively organizing founding commitments and programmatic support.
                </p>
              </div>

              <div className="space-y-8">
                <div className="border border-primary/10 p-6 bg-accent/20">
                  <h4 className="font-bold text-primary mb-2 text-lg">Philanthropic Pledges</h4>
                  <p className="text-sm text-text-muted mb-4">
                    If you are interested in making a founding contribution to underwrite clinical access, training, or the YTI Data Initiative, please contact our team to discuss your intended pledge.
                  </p>
                  <a href="mailto:giving@youthtraumainitiative.org" className="inline-flex items-center gap-2 bg-secondary text-white font-bold text-sm uppercase px-6 py-3 tracking-wider hover:bg-secondary-light transition-colors">
                    <Mail className="w-4 h-4" /> Email our Giving Team
                  </a>
                </div>

                <div className="border border-primary/10 p-6">
                  <h4 className="font-bold text-primary mb-2 text-lg">Organizational Status</h4>
                  <p className="text-sm text-text-muted mb-4">
                    YTI is currently in the formation stage. We will provide updates regarding 501(c)(3) tax-exempt status, fiscal sponsorship arrangements, and online donation processing capabilities as those details are finalized.
                  </p>
                  <p className="text-sm font-bold text-primary">
                    Important Note: Do not send checks or wire transfers until formal giving instructions and tax documents have been directly provided to you by an authorized YTI officer.
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Right Column: Major Gifts, DAF, & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            {/* Major Gifts & Institutional Grants */}
            <div className="bg-primary text-white p-8 border border-primary-light/30">
              <h3 className="font-display font-bold text-xl mb-3">Institutional & Major Gifts</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                We work directly with philanthropic foundations, family offices, donor-advised funds (DAF), and corporate partners seeking transformative, measurable returns on youth mental health.
              </p>
              <ul className="space-y-3 text-xs text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sun shrink-0" />
                  <span>Wire / ACH instructions & multi-year pledges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sun shrink-0" />
                  <span>Donor-Advised Fund (DAF) grants</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sun shrink-0" />
                  <span>Named clinical cohorts and regional pilot grants</span>
                </li>
              </ul>
              <a href="mailto:giving@youthtraumainitiative.org" className="inline-flex items-center gap-2 bg-sun text-primary font-bold text-xs uppercase px-5 py-2.5 tracking-wider hover:bg-sun/90 transition-colors">
                Inquire about Major Gifts <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stewardship Principles */}
            <div className="bg-white p-8 border border-primary/10 space-y-4">
              <h3 className="font-display font-bold text-primary text-lg">Stewardship Principles</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Program Primacy:</strong> Contributions directly underwrite clinic access, tool translations, and measurement systems.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Full Transparency:</strong> Supporters receive annual performance briefs detailing clinic onboarding and youth reached.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Ethical Governance:</strong> Strict conflict-of-interest firewalls prevent commercial distortion of clinical decisions.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
