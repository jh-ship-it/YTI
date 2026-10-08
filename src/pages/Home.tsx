import { Link } from 'react-router-dom';
import { BookOpen, HeartHandshake, UsersRound } from 'lucide-react';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { siteConfig } from '../content';

const approaches = [
  {
    icon: HeartHandshake,
    number: '01',
    title: 'Equip professionals',
    text: 'Support the knowledge, training, and tools that help professionals understand and respond to youth trauma.',
    href: '/clinicians',
    link: 'For clinicians and organizations',
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Expand awareness',
    text: 'Make information about trauma, support, and recovery easier for caregivers, communities, and partners to understand.',
    href: '/programs',
    link: 'Explore YTI’s planned work',
  },
  {
    icon: UsersRound,
    number: '03',
    title: 'Build partnerships',
    text: 'Bring practitioners, researchers, and child-serving organizations together to learn and pursue lasting improvements.',
    href: '/get-involved',
    link: 'Find a way to take part',
  },
];

export default function Home() {
  return <>
    <SEO title="Brighter Tomorrows for Braver Kids" description={siteConfig.mission} />

    <section className="mission-opening home-hero">
      <div className="site-width home-hero-grid">
        <div className="home-hero-copy">
          <p className="eyebrow">Youth Trauma Initiative</p>
          <h1>Helping children<br className="desktop-break"/> around the world.</h1>
          <p className="hero-tagline">Working toward a future where more children and teens affected by trauma can access the understanding, support, and care they deserve.</p>
          <div className="hero-actions">
            <Link className="button-primary" to="/mission">Our mission <span aria-hidden="true">→</span></Link>
            <Link className="hero-text-link" to="/get-involved">Get involved</Link>
          </div>
        </div>
        <figure className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="https://images.pexels.com/photos/8457815/pexels-photo-8457815.jpeg?auto=compress&cs=tinysrgb&w=1200"
              srcSet="https://images.pexels.com/photos/8457815/pexels-photo-8457815.jpeg?auto=compress&cs=tinysrgb&w=800 800w, https://images.pexels.com/photos/8457815/pexels-photo-8457815.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w, https://images.pexels.com/photos/8457815/pexels-photo-8457815.jpeg?auto=compress&cs=tinysrgb&w=1600 1600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="1600"
              height="1067"
              alt="Teenagers sit together in the grass, sharing conversation and study on a sunny day."
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <figcaption><span className="hero-caption-kicker">Care grows through connection.</span><span className="hero-caption-tag">Children · Families · Care teams</span></figcaption>
        </figure>
      </div>
    </section>

    <section className="mission-purpose site-width">
      <FadeIn className="mission-purpose-copy">
        <p className="eyebrow">Why this work matters</p>
        <h2>Every child deserves the chance to heal and thrive.</h2>
        <p>Traumatic experiences can affect how young people feel, learn, and connect. YTI is being established to help clinicians and child-serving systems access the understanding, tools, training, research, and implementation support they need.</p>
      </FadeIn>
      <div className="mission-statement-card">
        <p className="eyebrow">Our mission</p>
        <p>{siteConfig.mission}</p>
      </div>
    </section>

    <section className="approach-section">
      <div className="site-width">
        <div className="section-heading">
          <div><p className="eyebrow">How we hope to make a difference</p><h2>Support the people around every child.</h2></div>
          <p>YTI is being established. These are the ways we intend to help care, knowledge, and connection reach young people.</p>
        </div>
        <div className="approach-grid">
          {approaches.map(({ icon: Icon, number, title, text, href, link }) => <article className="approach-card" key={number}>
            <div className="approach-card-top"><span className="approach-icon"><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span><span>{number}</span></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <Link className="text-link" to={href}>{link}<span aria-hidden="true"> →</span></Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="need-section">
      <div className="site-width need-grid">
        <div className="need-stat"><span>More than</span><strong>2/3</strong><p>of children report at least one traumatic event by age 16.</p><a href="https://www.samhsa.gov/child-trauma/understanding-child-trauma" target="_blank" rel="noopener noreferrer">Read the SAMHSA source <span aria-hidden="true">↗</span></a></div>
        <div className="need-copy"><p className="eyebrow">The need</p><h2>Understanding can open a path to support.</h2><p>Children and teens deserve care shaped around their needs. Yet cost, language, workforce capacity, and fragmented systems can make it harder for the people helping them to find appropriate resources.</p><p>Exposure to a traumatic event does not by itself mean a child has PTSD. Qualified professionals determine what support may be appropriate.</p></div>
      </div>
    </section>

    <section className="vision-band">
      <figure className="vision-band-image">
        <picture>
          <source type="image/webp" srcSet="/images/child-and-caregiver-800.webp 800w, /images/child-and-caregiver.webp 1600w" sizes="(max-width: 700px) 100vw, 54vw" />
          <img src="/images/child-and-caregiver.jpg" width="1800" height="1200" alt="A school-age child draws with a supportive adult in a warm, focused moment." loading="lazy" />
        </picture>
      </figure>
      <div className="vision-band-copy">
        <p className="eyebrow">A future worth working toward</p>
        <h2>More understanding.<br/>More support.<br/><span>More possibility.</span></h2>
        <p>Our vision is a world where a child’s experience of trauma does not define their future.</p>
      </div>
    </section>

    <section className="site-width support-section">
      <div><p className="eyebrow">Be part of the work</p><h2>Help shape a more hopeful future for young people.</h2><p>Connect with YTI about the mission, future partnerships, research, or ways to support the organization as it takes shape.</p></div>
      <div className="support-actions"><Link className="button-primary" to="/get-involved">Get involved <span aria-hidden="true">→</span></Link><Link className="button-outline" to="/about">About YTI</Link></div>
      <p className="support-stage-note">YTI is being established. Online donations are not currently being accepted.</p>
    </section>
  </>;
}
