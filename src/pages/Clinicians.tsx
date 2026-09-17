import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Stethoscope, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Clinicians() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="For Organizations" description="Discover how your clinical setting, school, or NGO can partner with Youth Trauma Initiative to strengthen trauma assessment and measurement-based care." />
      <PageHero 
        label="For Organizations"
        title="Strengthen trauma assessment and measurement-based care."
        subtitle="YTI aims to work with eligible organizations facing financial, implementation, language, geographic, technology, or capacity barriers to measurement-based care."
        layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-4xl space-y-16">
          
          <FadeIn as="section">
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
          </FadeIn>

                    <FadeIn as="section" className="bg-white p-8 sm:p-12 border border-primary/10 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-6">Eligibility Self-Screen</h2>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h3 className="font-bold text-primary text-lg mb-4">You may be a fit if:</h3>
                <ul className="space-y-4 text-text-muted">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">you serve children or adolescents;</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">you provide trauma-related clinical, research, educational, or public services;</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">you face an access or implementation barrier;</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">you can use and monitor supported resources responsibly.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-primary text-lg mb-4">Priority may be given to:</h3>
                <ul className="space-y-4 text-text-muted">
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span className="text-sm">underserved settings,</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span className="text-sm">high-trauma populations,</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span className="text-sm">programs with durable implementation potential,</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span className="text-sm">organizations able to contribute to learning and outcomes measurement.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
          <FadeIn as="section" className="bg-primary text-white p-12 md:p-16 text-center border-t border-primary-light/30">
            <h2 className="text-3xl font-bold font-display mb-4">Tell us about your organization</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
              If your organization is interested in partnering with YTI or seeking support for clinical resources, please reach out to our team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary px-8 py-3.5 text-sm font-bold tracking-wide text-white hover:bg-secondary-light transition-colors uppercase"
            >
              Tell us about your organization <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
