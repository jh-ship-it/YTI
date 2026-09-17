import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ArrowRight } from 'lucide-react';

export default function Programs() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="Our Work" description="Explore YTI's four core program areas: Clinical Capacity, Global Access, The Data Initiative, and Research, all designed to improve pediatric trauma care." />
      <PageHero 
        label="Our Work"
        title="Expanding access and improving care globally."
        subtitle="YTI's work is organized around four core areas to bridge the gap between clinical science and real-world application."
        imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200" layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16 space-y-24">
        
        {/* Program 1 */}
        <FadeIn as="section" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Program Area 01</p>
            <h2 className="text-3xl font-bold text-primary font-display mb-4">Clinical Access & Implementation</h2>
            <p className="text-xl font-semibold text-primary mb-6">Put evidence-based trauma tools within reach.</p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              YTI works to reduce financial, geographic, linguistic, technological, and institutional barriers that keep clinicians and child-serving organizations from using appropriate trauma and PTSD resources.
            </p>
            <ul className="space-y-4 mb-10 text-text-muted">
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">01</span>
                 <span>Sponsored or subsidized assessment/tool access</span>
              </li>
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">02</span>
                 <span>Implementation assistance and technical support</span>
              </li>
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">03</span>
                 <span>Translation and cultural adaptation</span>
              </li>
              <li className="flex gap-4">
                 <span className="font-bold text-primary shrink-0">04</span>
                 <span>Pilot funding for qualifying programs</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
              Request Implementation Support <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="bg-accent aspect-square sm:aspect-[4/3] p-8 flex items-center justify-center border border-primary/10">
             <div className="text-center space-y-4 max-w-sm">
                <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
                <h3 className="font-display text-2xl text-primary font-bold">Scaling Care</h3>
                <p className="text-text-muted">By subsidizing access to proprietary and hard-to-access tools, we equip front-line providers with the tools and implementation support they need.</p>
             </div>
          </div>
        </FadeIn>

        {/* Program 2 */}
        <FadeIn as="section" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 bg-primary text-white p-12 sm:p-16 h-full flex flex-col justify-center">
             <div className="text-center space-y-4 max-w-sm mx-auto">
                <div className="w-16 h-1 bg-sun mx-auto mb-8"></div>
                <h3 className="font-display text-2xl font-bold">Shaping Understanding</h3>
                <p className="text-gray-300">Public awareness campaigns shift the conversation from behavioral issues to trauma-informed responses.</p>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Program Area 02</p>
            <h2 className="text-3xl font-bold text-primary font-display mb-4">Public Education & Awareness</h2>
            <p className="text-xl font-semibold text-primary mb-6">Help communities recognize trauma earlier.</p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              YTI plans to conduct and fund public education and awareness intended to improve recognition of childhood trauma, increase understanding of trauma-informed care, and encourage appropriate screening.
            </p>
            <ul className="space-y-4 mb-10 text-text-muted">
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">01</span>
                 <span>Digital campaigns and public-service materials</span>
              </li>
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">02</span>
                 <span>Educational websites and toolkits</span>
              </li>
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">03</span>
                 <span>Webinars, school, and community education</span>
              </li>
              <li className="flex gap-4">
                 <span className="font-bold text-primary shrink-0">04</span>
                 <span>Caregiver education and professional outreach</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
              Partner on Education <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* Program 3 */}
        <FadeIn as="section" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Program Area 03</p>
            <h2 className="text-3xl font-bold text-primary font-display mb-4">Research, Data & Outcomes</h2>
            <p className="text-xl font-semibold text-primary mb-6">Turn better measurement into better care.</p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              YTI designs, funds, conducts, and supports implementation pilots, program evaluation, outcomes measurement, validation, and measurement-based care.
            </p>
            <ul className="space-y-4 mb-10 text-text-muted">
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">01</span>
                 <span>Implementation science and quality improvement</span>
              </li>
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">02</span>
                 <span>Multi-site research and shared data resources</span>
              </li>
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">03</span>
                 <span>Statistical and AI/ML analysis</span>
              </li>
              <li className="flex gap-4">
                 <span className="font-bold text-primary shrink-0">04</span>
                 <span>Study of trauma exposure, symptoms, and treatment trajectories</span>
              </li>
            </ul>
            <Link to="/data-initiative" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-sm font-bold tracking-wide hover:bg-primary-light uppercase transition-colors group">
              Learn about the Data Initiative <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="border border-primary p-12">
             <div className="space-y-6">
                <h3 className="font-display text-2xl text-primary font-bold">The Data Initiative</h3>
                <p className="text-text-muted">
                  A major planned initiative aims to build the infrastructure necessary to aggregate and study multi-site trauma outcomes securely.
                </p>
                <div className="w-full h-px bg-primary/20"></div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">Status: Planned</p>
             </div>
          </div>
        </FadeIn>

        {/* Program 4 */}
        <FadeIn as="section" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 bg-accent p-12 sm:p-16 h-full flex flex-col justify-center border border-primary/10">
             <div className="text-center space-y-4 max-w-sm mx-auto">
                <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
                <h3 className="font-display text-2xl text-primary font-bold">Capacity Where It Counts</h3>
                <p className="text-text-muted">Addressing systemic barriers in low-resource environments worldwide, ensuring science doesn't stop at borders.</p>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Program Area 04</p>
            <h2 className="text-3xl font-bold text-primary font-display mb-4">Global Capacity Building</h2>
            <p className="text-xl font-semibold text-primary mb-6">Expand trauma-care capacity where resources are limited.</p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              YTI plans to work in the United States and internationally, giving priority to settings where barriers include cost, geography, language, and limited specialized workforce.
            </p>
            <ul className="space-y-4 mb-10 text-text-muted">
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">01</span>
                 <span>Support for hospitals, universities, and nonprofits</span>
              </li>
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">02</span>
                 <span>Partnerships with government agencies and schools</span>
              </li>
              <li className="flex gap-4 border-b border-primary/10 pb-4">
                 <span className="font-bold text-primary shrink-0">03</span>
                 <span>Humanitarian organization support</span>
              </li>
              <li className="flex gap-4">
                 <span className="font-bold text-primary shrink-0">04</span>
                 <span>Addressing institutional capacity and displacement/conflict challenges</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
              Global Partnerships <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
