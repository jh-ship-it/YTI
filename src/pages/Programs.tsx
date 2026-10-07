import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';


export default function Programs() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="Our Work" description="Explore Youth Trauma Initiative's planned areas of work in clinical access, education, research, data, and global capacity." />
      <PageHero 
        label="Our Work"
        title="Expanding access and improving care globally."
        subtitle="YTI's work is organized around four core areas to bridge the gap between clinical science and real-world application." layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16 space-y-24">
        
        {/* Program 1 */}
        <FadeIn as="section" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Program Area 01</p>
            <h2 className="text-3xl font-bold text-primary font-display mb-4">Clinical Access & Implementation</h2>
            <p className="text-xl font-semibold text-primary mb-6">Put evidence-based trauma tools within reach.</p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              YTI is being established to help reduce financial, geographic, linguistic, technological, and institutional barriers that can keep clinicians and child-serving organizations from using appropriate trauma and PTSD resources.
            </p>
            <details className="program-details"><summary>Explore planned activities<span aria-hidden="true">+</span></summary><ul className="space-y-4 text-text-muted">
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
            </ul></details>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
              Discuss Possible Implementation Support
            </Link>
          </div>
          <figure className="program-visual"><img src="https://images.unsplash.com/photo-1758691462119-792279713969?auto=format&fit=crop&q=82&w=1400" alt="A pediatrician talks with a mother and child during an appointment." loading="lazy"/><figcaption>Clinical access begins with a conversation.</figcaption></figure>
        </FadeIn>

        {/* Program 2 */}
        <FadeIn as="section" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <figure className="program-visual order-2 lg:order-1"><img src="https://images.unsplash.com/photo-1627764940620-90393d0e8c34?auto=format&fit=crop&q=82&w=1400" alt="Children hold hands and play in a circle on a sunny field." loading="lazy"/><figcaption>Learning happens across the places children grow.</figcaption></figure>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Program Area 02</p>
            <h2 className="text-3xl font-bold text-primary font-display mb-4">Public Education & Awareness</h2>
            <p className="text-xl font-semibold text-primary mb-6">Help communities recognize trauma earlier.</p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              YTI plans to conduct and fund public education and awareness intended to improve recognition of childhood trauma, increase understanding of trauma-informed care, and encourage appropriate screening.
            </p>
            <details className="program-details"><summary>Explore planned activities<span aria-hidden="true">+</span></summary><ul className="space-y-4 text-text-muted">
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
            </ul></details>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
              Partner on Education 
            </Link>
          </div>
        </FadeIn>

        {/* Program 3 */}
        <FadeIn as="section" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Program Area 03</p>
            <h2 className="text-3xl font-bold text-primary font-display mb-4">Research, Data & Outcomes</h2>
            <p className="text-xl font-semibold text-primary mb-6">Use measurement to guide care and understand recovery.</p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              YTI's planned work may include implementation pilots, program evaluation, outcomes measurement, validation, and measurement-based care.
            </p>
            <details className="program-details"><summary>Explore planned activities<span aria-hidden="true">+</span></summary><ul className="space-y-4 text-text-muted">
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
            </ul></details>
            <Link to="/data-initiative" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-sm font-bold tracking-wide hover:bg-primary-light uppercase transition-colors group">
              Learn about the Data Initiative 
            </Link>
          </div>
          <figure className="program-data-visual"><svg viewBox="0 0 600 420" role="img" aria-labelledby="program-data-title program-data-desc"><title id="program-data-title">Illustrative measurement pathway</title><desc id="program-data-desc">A simple abstract line graphic represents repeated measurement over time. It contains no real or projected data.</desc><path className="data-graphic-grid" d="M64 60H556M64 140H556M64 220H556M64 300H556M64 380H556M64 60V380M186 60V380M310 60V380M434 60V380M556 60V380"/><path className="data-graphic-line data-line-one" d="M64 310C126 290 140 212 200 230S282 303 340 200 420 177 460 134 515 146 556 98"/><path className="data-graphic-line data-line-two" d="M64 350C124 326 147 300 194 316S274 258 329 274 404 228 449 245 512 203 556 214"/><circle cx="556" cy="98" r="7"/><circle cx="556" cy="214" r="7"/></svg><figcaption>Illustrative only · no real or projected data</figcaption></figure>
        </FadeIn>

        {/* Program 4 */}
        <FadeIn as="section" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <figure className="program-visual order-2 lg:order-1"><img src="/images/child-and-caregiver.jpg" alt="A caregiver and child draw together at a table." loading="lazy"/><figcaption>Support should fit the realities of everyday life.</figcaption></figure>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Program Area 04</p>
            <h2 className="text-3xl font-bold text-primary font-display mb-4">Global Capacity Building</h2>
            <p className="text-xl font-semibold text-primary mb-6">Expand trauma-care capacity where resources are limited.</p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              YTI plans to work in the United States and internationally, giving priority to settings where barriers include cost, geography, language, and limited specialized workforce.
            </p>
            <details className="program-details"><summary>Explore planned activities<span aria-hidden="true">+</span></summary><ul className="space-y-4 text-text-muted">
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
            </ul></details>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
              Global Partnerships 
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}

