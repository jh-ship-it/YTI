import { Link } from 'react-router-dom';
import { Activity, BookOpen, ChartNoAxesCombined, Globe2, HeartHandshake, Stethoscope } from 'lucide-react';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { siteConfig } from '../content';

const pillars = [
  { n: '01', icon: HeartHandshake, title: 'Clinical Access & Implementation', text: 'Validated assessment tools, clinician training, and practical support to put them to work.', url: '/clinicians', tone: 'clinical' },
  { n: '02', icon: BookOpen, title: 'Education & Awareness', text: 'Help professionals and communities recognize childhood trauma and understand paths to care.', url: '/programs', tone: 'learning' },
  { n: '03', icon: ChartNoAxesCombined, title: 'Research, Data & Outcomes', text: 'Support research and repeated measurement to understand recovery and meaningful change.', url: '/research', tone: 'research' },
  { n: '04', icon: Globe2, title: 'Global Capacity Building', text: 'Develop locally informed approaches to language, access, training, and implementation.', url: '/global-access', tone: 'global' },
];

const pathway = [
  { icon: Activity, label: 'The need', title: 'A child needs support.', text: 'Trauma can shape how a child feels, learns, and connects with the people around them.' },
  { icon: BookOpen, label: 'YTI’s planned role', title: 'Equip the people who help.', text: 'Tools, training, data, and implementation support can help care teams respond with clarity.' },
  { icon: Stethoscope, label: 'Where care happens', title: 'Bring support into reach.', text: 'Clinicians, schools, hospitals, and local partners are closest to children and families.' },
];

export default function Home() {
  return <>
    <SEO title="Brighter Tomorrows for Braver Kids" description={siteConfig.mission} />

    <section className="mission-opening home-hero">
      <div className="site-width home-hero-grid">
        <div className="home-hero-copy">
          <p className="eyebrow">Youth Trauma Initiative</p>
          <h1>{siteConfig.mission}</h1>
          <p className="hero-tagline">{siteConfig.tagline}</p>
          <div className="hero-actions"><Link className="button-primary" to="/programs">See what we’re building <span aria-hidden="true">→</span></Link><Link className="hero-text-link" to="/mission">Our mission</Link></div>
        </div>
        <figure className="hero-visual">
          <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1774641373770-a4c33a2651ab?auto=format&fit=crop&q=82&w=1500" alt="A caregiver and young child share a playful moment on a playground." loading="eager" fetchPriority="high"/>
            <svg className="hero-landscape-lines" viewBox="0 0 600 580" fill="none" aria-hidden="true"><path d="M-20 395C85 343 126 455 224 398C317 344 340 214 463 240C519 252 549 292 620 279"/><path d="M-18 431C79 387 129 487 233 433C325 386 372 282 474 300C543 312 566 338 618 328"/><path d="M-12 468C86 429 143 519 251 469C340 428 399 347 489 362C544 371 579 394 619 389"/><path className="hero-path" d="M156 580C179 502 254 492 279 439C309 378 247 338 274 281C296 234 373 213 392 161C402 134 394 105 378 81"/></svg>
          </div>
          <figcaption><span className="hero-caption-kicker">Connection creates room for healing</span><span className="hero-caption-tag">Child · Family · Care team</span></figcaption>
        </figure>
        <div className="hero-orbit hero-orbit-one" aria-hidden="true"/><div className="hero-orbit hero-orbit-two" aria-hidden="true"/>
      </div>
    </section>

    <section className="better-callout">
      <div className="site-width better-callout-inner">
        <div><p className="eyebrow">A clear north star</p><h2>Better Tools.<br/><span>Better data.</span><br/>Better trauma care for children.</h2></div>
        <div className="better-callout-copy"><p>Childhood trauma can reach into the home, the classroom, and the moments that should feel safe. The people helping children need tools and training to recognize what is happening—and support to put knowledge into practice.</p><Link className="text-link" to="/programs">Explore YTI’s planned work <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <section className="pillars-section">
      <div className="site-width">
        <div className="section-heading">
          <div><p className="eyebrow">What YTI is building</p><h2>Four connected ways to strengthen care.</h2></div>
          <p>Children are the reason. The professionals and systems around them are how support reaches them.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map(({n,icon:Icon,title,text,url,tone})=><Link to={url} className={`pillar pillar-${tone}`} key={n}>
            <div className="pillar-top"><span className="pillar-icon"><Icon size={25} strokeWidth={1.7}/></span><span>{n}</span></div>
            <h3>{title}</h3><p>{text}</p><span className="pillar-link">Explore this focus <span aria-hidden="true">→</span></span>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="pathway-section">
      <div className="site-width">
        <div className="section-heading">
          <div><p className="eyebrow">From need to care</p><h2>Keep the child at the center.</h2></div>
          <p>YTI’s model starts with the needs children face, supports the people positioned to help, and makes room to learn from care.</p>
        </div>
        <div className="pathway-grid">
          {pathway.map(({icon:Icon,label,title,text},index)=><article className="pathway-card" key={label}>
            <FadeIn delay={index*.1}>
              <div className="pathway-card-top"><span className="pathway-icon"><Icon size={22}/></span><span className="pathway-number">0{index+1}</span></div>
              <p className="pathway-label">{label}</p><h3>{title}</h3><p>{text}</p>
            </FadeIn>
          </article>)}
        </div>
      </div>
    </section>

    <section className="need-section">
      <div className="site-width need-grid">
        <div className="need-stat"><span>More than</span><strong>2/3</strong><p>of children report at least one traumatic event by age 16.</p><a href="https://www.samhsa.gov/child-trauma/understanding-child-trauma" target="_blank" rel="noopener noreferrer">Read the SAMHSA source <span aria-hidden="true">↗</span></a></div>
        <div className="need-copy"><p className="eyebrow">The need</p><h2>Recognition is the start.<br/>Access makes action possible.</h2><p>A child's recovery should not be limited by the resources of the organization caring for them. Cost, language, workforce shortages, and fragmented systems can leave clinicians without the tools and support they need.</p><p>Exposure does not by itself mean a child has PTSD. Appropriate assessment helps qualified professionals understand symptoms, plan care, and track progress.</p></div>
        <figure className="need-visual"><img src="/images/child-and-caregiver.jpg" alt="A caregiver and child draw together at a table." loading="lazy"/><figcaption>Support starts with connection.</figcaption></figure>
      </div>
    </section>

    <section className="site-width delivery-section">
      <div className="section-heading"><div><p className="eyebrow">How support reaches children</p><h2>From resources to lasting effects.</h2></div><p>YTI’s planned funding model connects charitable support with people delivering care, with clear goals and accountable stewardship.</p></div>
      <div className="funding-flow" aria-label="Planned funding flow">
        <div className="flow-step"><span>01 · Support</span><h3>Funders</h3><p>Foundations, public funders, companies, and individuals.</p></div>
        <div className="flow-step flow-yti"><span>02 · Stewardship</span><h3>Youth Trauma Initiative</h3><p>Independent charitable control and vendor-neutral program decisions.</p></div>
        <div className="flow-step"><span>03 · Delivery</span><h3>Frontline care</h3><p>Tools, training, data, and implementation support for clinicians, schools, and hospitals.</p></div>
        <div className="flow-step flow-outcomes"><span>04 · Intended outcomes</span><h3>Healing that lasts</h3><p>Support clinical repair, measure improvement, and evaluate success in establishing lasting effects.</p></div>
      </div>
      <p className="flow-note">These are planned activities and intended outcomes, not a claim of programs or results already delivered.</p>
    </section>

    <section className="data-section"><div className="site-width data-grid"><div><p className="eyebrow">Planned initiative</p><h2>Learn from care.<br/>Carry that learning forward.</h2></div><div><p>The YTI Data Initiative could help child-serving organizations use repeated measurement to understand progress and study treatment outcomes.</p><p>Research and analytics would operate under appropriate privacy, ethics, and governance controls. Clinical decisions remain with qualified people.</p><Link className="text-link" to="/data-initiative">Explore the YTI Data Initiative</Link></div></div></section>

    <section className="leadership-preview"><div className="site-width leadership-preview-inner"><div><p className="eyebrow">Open governance</p><h2>Leadership you can see.</h2></div><p>YTI publishes its current founding board officers and formation-stage governance commitments as the organization takes shape.</p><Link className="text-link" to="/about#leadership">Meet the board officers</Link></div></section>

    <section className="closing-section site-width"><p className="eyebrow">Help build the next chapter</p><h2>More support for the people<br/>children count on.</h2><p>Help equip child-serving organizations with the tools, training, and implementation support to recognize trauma, guide care, and measure recovery.</p><div className="button-row"><Link className="button-primary" to="/donate">Support YTI</Link><Link className="button-outline" to="/contact">Discuss a partnership</Link></div><small>{siteConfig.legalStatus}</small></section>
  </>;
}
