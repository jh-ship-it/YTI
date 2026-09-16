import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Shield, Lock, FileText, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO
        title="Privacy Policy"
        description="Youth Trauma Initiative's Privacy Policy describes how we handle institutional inquiries, donor information, website data, and protected health information safeguards."
      />

      <PageHero
        label="Legal & Governance"
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding institutional trust, visitor privacy, and health information ethics."
        layout="text-only"
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-12 sm:mt-16 space-y-12">
        {/* Vital PHI Notice Banner */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 text-amber-950 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold text-base">Critical Health Information Safeguard (HIPAA / Protected Health Information)</h3>
            <p className="text-sm leading-relaxed">
              Youth Trauma Initiative provides institutional, scientific, educational, and philanthropic resources. <strong>This website does not collect, process, or store Protected Health Information (PHI).</strong> Please do not submit patient names, clinical records, diagnostic details, or confidential medical information through our general contact or inquiry forms.
            </p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="space-y-10 text-text-muted leading-relaxed text-base">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">1. Overview and Scope</h2>
            <p>
              This Privacy Policy applies to the public website, digital resources, and communication channels operated by the Youth Trauma Initiative ("YTI", "we", "our", or "us"). We are committed to transparency in how we collect, use, and protect any information you provide while engaging with our programs, research initiatives, and philanthropic activities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">2. Information We Collect</h2>
            <p>We collect only the information necessary to fulfill our mission and respond to institutional inquiries:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-primary">Contact & Inquiry Information:</strong> When you submit a partnership, clinical support, or research inquiry, we collect your name, email address, organization name, role, country, and message contents.
              </li>
              <li>
                <strong className="text-primary">Philanthropic & Donor Records:</strong> When you pledge or make a donation, we collect donor name, email, billing/mailing address, gift designation, and optional honorarium/dedication details. Payment processing is handled by compliant third-party payment gateways; YTI does not store full payment card numbers or banking credentials.
              </li>
              <li>
                <strong className="text-primary">Technical Logs & Usage Metrics:</strong> Like most web servers, our infrastructure records standard technical metadata such as browser type, operating system, referring URL, and page request timestamps to ensure site security and availability. We do not use invasive third-party cross-site trackers.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">3. How We Use Information</h2>
            <p>Information provided to YTI is used exclusively for legitimate organizational and charitable purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Evaluating and responding to institutional collaboration and partnership requests.</li>
              <li>Coordinating clinical tool subsidization, implementation assistance, and training.</li>
              <li>Issuing charitable pledge acknowledgments and reporting on program milestones.</li>
              <li>Maintaining the security, performance, and integrity of our digital platforms.</li>
            </ul>
            <p className="font-semibold text-primary">
              We never sell, rent, trade, or commercially monetize contact details, donor lists, or institutional inquiry data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">4. Data Governance & Clinical Research Data</h2>
            <p>
              Any future multi-site clinical datasets associated with the planned Youth Trauma Data Initiative will be governed by independent institutional review board (IRB) approvals, explicit patient/guardian consents, and strict de-identification protocols meeting or exceeding HIPAA Safe Harbor and Expert Determination standards. <strong>No clinical research data is collected or stored through this public website.</strong>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">5. Cookies and Web Analytics</h2>
            <p>
              This website uses only essential session cookies and privacy-preserving, aggregated telemetry necessary to maintain site stability, prevent spam (including honeypot verification), and optimize page performance. We do not use third-party behavioral advertising cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">6. Data Retention and Security</h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to protect all submitted information against unauthorized access, loss, or alteration. Inquiries and correspondence are retained only as long as necessary to facilitate ongoing partnerships or comply with non-profit legal and audit requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">7. Your Privacy Rights</h2>
            <p>
              Depending on your jurisdiction (such as California under the CCPA/CPRA, or the European Economic Area under GDPR), you have the right to request access to, correction of, or deletion of personal contact information we hold. To exercise these rights, please contact our privacy compliance team.
            </p>
          </section>

          <section className="space-y-4 border-t border-primary/10 pt-8">
            <h2 className="text-2xl font-bold font-display text-primary">8. Inquiries and Contact</h2>
            <p>
              If you have questions about this Privacy Policy or our data protection practices, please contact us at:
            </p>
            <div className="bg-white p-6 border border-primary/10 space-y-1 text-sm">
              <p className="font-bold text-primary">Youth Trauma Initiative</p>
              <p>Attention: Privacy & Governance Officer</p>
              <p>Inquiries: <Link to="/contact" className="text-secondary font-semibold hover:underline">Via Contact Form</Link></p>
              <p className="text-xs text-text-muted mt-2">Policy last updated: September 2026</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
