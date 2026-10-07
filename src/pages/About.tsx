import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import PageHero from '../components/PageHero';

const directors = [
  { name: 'Jeffery Yard', role: 'President' },
  { name: 'Jonathan Howell', role: 'Secretary' },
  { name: 'Kipling Macartney', role: 'Treasurer' },
];

export default function About() {
  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="About & Leadership" description="Meet Youth Trauma Initiative's founding board officers and learn how YTI is being established." />
      <PageHero
        label="About Youth Trauma Initiative"
        title="A clearer path from evidence to care."
        subtitle="YTI is being established to help children around the world receive trauma and PTSD care by equipping the people and systems around them."
        layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-5xl space-y-16">
          <FadeIn as="section" className="about-story">
            <div className="about-story-copy">
              <p className="eyebrow">Why YTI</p>
              <h2 className="text-3xl font-display font-medium text-primary mb-6">Children need care that can reach them.</h2>
              <div className="space-y-5 text-lg text-text-muted leading-relaxed">
                <p>Knowledge about childhood trauma has grown, yet access to appropriate assessment, trained providers, and sustained support remains uneven. Cost, language, workforce capacity, and fragmented systems can all create barriers.</p>
                <p>Youth Trauma Initiative is being structured to help close those gaps. Our planned work centers on validated tools, practical training, responsible data and research, and implementation support for clinicians and child-serving organizations.</p>
              </div>
            </div>
            <div className="about-story-note">
              <span className="about-note-mark" aria-hidden="true">YTI</span>
              <p>Child-centered. Clinically grounded. Vendor-neutral.</p>
              <Link to="/transparency" className="text-link">How we approach accountability</Link>
            </div>
          </FadeIn>

          <FadeIn as="section" className="about-pillars">
            <div className="section-heading">
              <div><p className="eyebrow">Our focus</p><h2>Practical support at every step.</h2></div>
              <p>YTI’s planned initiatives connect evidence, frontline practice, and learning across care settings.</p>
            </div>
            <div className="about-focus-grid">
              <article><span>01</span><h3>Clinical access</h3><p>Support access to validated assessment tools and help organizations put them into practice.</p></article>
              <article><span>02</span><h3>Training & education</h3><p>Build knowledge among clinicians and child-serving professionals who support children and families.</p></article>
              <article><span>03</span><h3>Research & learning</h3><p>Encourage responsible measurement and research that can inform care and implementation.</p></article>
              <article><span>04</span><h3>Global capacity</h3><p>Explore locally informed approaches to language, training, and implementation with qualified partners.</p></article>
            </div>
          </FadeIn>

          <FadeIn as="section" className="border-y border-primary/10 py-12 sm:py-16">
            <div className="section-heading">
              <div><p className="eyebrow">One mission, across settings</p><h2>Local care. National reach. Global purpose.</h2></div>
              <p>YTI is being established with a worldwide mission. Future work may support child-serving systems at different geographic scales as partnerships and resources develop.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-primary/10">
                <span className="text-sm font-bold tracking-[0.18em] text-secondary uppercase">Regional</span>
                <h3 className="mt-3 font-display text-2xl text-primary">Close to the community</h3>
                <p className="mt-3 text-text-muted">Potential support for local clinics, schools, hospitals, and the people children see every day.</p>
              </article>
              <article className="rounded-2xl bg-sky/45 p-6 sm:p-8 border border-primary/10">
                <span className="text-sm font-bold tracking-[0.18em] text-secondary uppercase">National</span>
                <h3 className="mt-3 font-display text-2xl text-primary">Across the United States</h3>
                <p className="mt-3 text-text-muted">Potential collaboration with child-serving organizations and systems across the country.</p>
              </article>
              <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-primary/10">
                <span className="text-sm font-bold tracking-[0.18em] text-secondary uppercase">International</span>
                <h3 className="mt-3 font-display text-2xl text-primary">Around the world</h3>
                <p className="mt-3 text-text-muted">Potential partnerships shaped by local expertise, language, clinical standards, and child safeguarding.</p>
              </article>
            </div>
            <p className="mt-5 text-sm text-text-muted">These describe YTI’s intended scope, not active programs, established partnerships, or current geographic coverage.</p>
          </FadeIn>

          <FadeIn as="section" className="leadership-section">
            <span id="leadership" className="reading-anchor" />
            <div className="section-heading">
              <div><p className="eyebrow">People & governance</p><h2>Meet YTI’s founding officers.</h2></div>
              <p>YTI publishes its current founding board officers and explains the Board’s oversight role. Additional organizational and financial reporting will be added as it becomes available.</p>
            </div>
            <div className="leader-grid">
              {directors.map((person, index) => (
                <article className="leader-card" key={person.name}>
                  <div className={`leader-monogram leader-monogram-${index + 1}`} aria-hidden="true">{person.name.split(' ').map((part) => part[0]).join('')}</div>
                  <div><h3>{person.name}</h3><p>{person.role} · Board of Directors</p></div>
                </article>
              ))}
            </div>
            <div className="leadership-note"><p>The Board provides organizational oversight and stewardship. These are governance roles, not clinical endorsements. YTI is being established as an independent, vendor-neutral nonprofit organization.</p><Link to="/transparency" className="text-link">Read about governance and safeguards</Link></div>
          </FadeIn>

          <FadeIn as="section" className="about-next-step">
            <p className="eyebrow">Continue exploring</p>
            <h2>Help shape a more connected path to care.</h2>
            <p>We welcome conversations with clinicians, child-serving organizations, researchers, and supporters who share this purpose.</p>
            <div className="button-row"><Link className="button-primary" to="/contact">Start a conversation</Link><Link className="button-outline" to="/mission">Read our mission</Link></div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
