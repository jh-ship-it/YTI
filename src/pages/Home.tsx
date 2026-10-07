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

    <section className="mission-opening">
      <div className="site-width">
        <p className="eyebrow">Our purpose</p>
        <h1>{siteConfig.mission}</h1>
        <div className="opening-bottom"><p>{siteConfig.tagline}</p><Link className="text-link" to="/mission">Explore our mission</Link></div>
      </div>
    </section>

    <section className="home-intro site-width">
      <div className="intro-copy">
        <p className="eyebrow">A path toward healing</p>
        <h2>Better Tools<br/><span>Better data.</span><br/>Better trauma care for children.</h2>
        <p>Trauma can follow a child into the classroom, the home, and the moments that should feel safe. The people helping that child need the resources to recognize what is happening—and respond.</p>
        <p>YTI is being established to equip frontline clinicians, schools, and hospitals with validated tools, training, data, and implementation support.</p>
        <div className="button-row"><Link className="button-primary" to="/programs">Explore our work</Link><Link className="button-outline" to="/get-involved">Get involved</Link></div>
      </div>
      <figure className="intro-visual">
        <img src="/images/child-and-caregiver.jpg" alt="A mother and daughter drawing together at home."/>
        <figcaption><span>A moment to connect</span><br/><em>Room to heal and grow</em></figcaption>
      </figure>
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
        <div><p className="eyebrow">The need</p><h2>Recognition is the start.<br/>Access makes action possible.</h2><p>A child's recovery should not be limited by the resources of the organization caring for them. Cost, language, workforce shortages, and fragmented systems can leave clinicians without the tools and support they need.</p><p>Exposure does not by itself mean a child has PTSD. Appropriate assessment helps qualified professionals understand symptoms, plan care, and track progress.</p></div>
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
