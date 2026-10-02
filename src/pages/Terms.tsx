import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { AlertOctagon, PhoneCall, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO
        title="Terms of Use"
        description="Terms of Use for the Youth Trauma Initiative website, including medical advice disclaimers, crisis support notices, and intellectual property terms."
      />

      <PageHero
        label="Legal & Governance"
        title="Terms of Use"
        subtitle="Terms governing the use of the Youth Trauma Initiative website and digital resources."
        layout="text-only"
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-12 sm:mt-16 space-y-12">
        {/* Urgent Crisis & Medical Disclaimer */}
        <div className="bg-rose-50 border-l-4 border-rose-600 p-6 sm:p-8 text-rose-950 space-y-4">
          <div className="flex items-center gap-3">
            <AlertOctagon className="w-6 h-6 text-rose-600 shrink-0" />
            <h3 className="font-bold font-display text-lg text-rose-900">
              Emergency & Mental Health Crisis Resources
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-rose-900">
            <strong>Youth Trauma Initiative does not provide crisis intervention, emergency psychiatric services, or direct clinical medical advice.</strong> If a child, adolescent, or family member is experiencing an immediate life-threatening emergency, self-harm crisis, or severe emotional distress:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white/80 p-4 border border-rose-200">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <PhoneCall className="w-4 h-4 text-rose-600" />
                988 Suicide & Crisis Lifeline (USA & Canada)
              </div>
              <p className="text-xs text-rose-800 mt-1">Dial or text <strong>988</strong> anytime 24/7 for free, confidential support.</p>
            </div>
            <div className="bg-white/80 p-4 border border-rose-200">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <PhoneCall className="w-4 h-4 text-rose-600" />
                National Child Abuse Hotline
              </div>
              <p className="text-xs text-rose-800 mt-1">Call or text <strong>1-800-422-4453</strong> (Childhelp National Child Abuse Hotline).</p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10 text-text-muted leading-relaxed text-base">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">2. Disclaimer Regarding Medical and Clinical Advice</h2>
            <p>
              All materials, research summaries, assessment framework overviews, and educational toolkits published on this website are for <strong>informational, educational, and institutional capacity-building purposes only</strong>.
            </p>
            <p>
              The content is not intended to be a substitute for professional medical advice, psychiatric diagnosis, or clinical treatment. Always seek the advice of a qualified physician, psychologist, licensed clinical social worker, or other qualified mental health provider with any questions you may have regarding a medical or behavioral condition.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">3. Intellectual Property and Citation</h2>
            <p>
              The content, text, branding, and design elements on this website are owned by Youth Trauma Initiative or utilized under appropriate authorization. You may access and download educational materials for non-commercial, educational, or clinical training purposes, provided that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appropriate attribution to the Youth Trauma Initiative (and any primary scientific sources cited) is maintained.</li>
              <li>Content is not altered, resold, or incorporated into commercial diagnostic software without express written agreement.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">4. Vendor and Assessment Neutrality</h2>
            <p>
              References to specific clinical assessment tools, psychometric batteries, or treatment modalities (such as TF-CBT, EMDR, or standardized PTSD inventories) are included for scientific and comparative context. Youth Trauma Initiative is committed to vendor-neutral, evidence-based recommendations and does not endorse commercial diagnostic products for proprietary gain.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">5. User Conduct and Form Submissions</h2>
            <p>
              You agree not to use the website to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit unlawful, defamatory, abusive, or fraudulent information.</li>
              <li>Transmit patient-identifying health information, medical records, or confidential clinical files.</li>
              <li>Attempt to compromise the security, integrity, or availability of our servers and web applications.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">6. Limitation of Liability</h2>
            <p>
              In no event shall Youth Trauma Initiative, its directors, officers, advisors, or affiliates be liable for any damages (including, without limitation, direct, indirect, incidental, or consequential damages) arising out of the use or inability to use the materials on this website.
            </p>
          </section>

          <section className="space-y-4 border-t border-primary/10 pt-8">
            <h2 className="text-2xl font-bold font-display text-primary">7. Contact Information</h2>
            <p>
              For legal inquiries regarding these Terms of Use, please reach out via our <Link to="/contact" className="text-secondary font-semibold hover:underline">Contact page</Link>.
            </p>
            <p className="text-xs text-text-muted mt-2">Terms last updated: September 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}

