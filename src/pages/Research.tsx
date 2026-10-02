import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, BrainCircuit, LineChart, Users, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Research() {
    const priorities = [
    {
      category: 'Assessment & Measurement',
      icon: LineChart,
      topics: [
        'Assessment and measurement instrument validation',
        'Language & cultural adaptation of diagnostic tools',
        'Implementation barriers for routine screening'
      ]
    },
    {
      category: 'Treatment Outcomes & Implementation',
      icon: Users,
      topics: [
        'Implementation science in low-resource settings',
        'Treatment outcomes tracking and fidelity',
        'System-level cost and capacity modeling'
      ]
    },
    {
      category: 'Risk, Resilience & Comorbidity',
      icon: Microscope,
      topics: [
        'Risk and resilience modifiers',
        'Comorbidity with other developmental disorders',
        'Neurodevelopmental impacts of complex trauma'
      ]
    },
    {
      category: 'Multi-site Data & Responsible AI',
      icon: BrainCircuit,
      topics: [
        'Longitudinal symptom trajectories',
        'Multi-site data governance and aggregation',
        'Responsible AI and machine learning in pediatric mental health'
      ]
    }
  ];

  return (
    <div className="bg-background pb-24 sm:pb-32">
      <SEO title="Research" description="Learn about YTI's clinical research priorities, including Risk, Resilience & Comorbidity, Care Systems, Analytics, and how we collaborate with institutions." />
      <PageHero 
        label="Research & Partnerships"
        title="Building the evidence base together."
        subtitle="YTI seeks to connect clinicians, researchers, health systems, schools, public agencies, and child-serving organizations around practical questions that can improve trauma care."
        layout="text-only"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-24">
          
          <FadeIn as="section">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-display mb-6">Our Guiding Principles</h2>
            <div className="bg-white border-l-4 border-secondary p-8 shadow-sm text-text-muted space-y-4">
              <p>
                <strong>Clinically Grounded:</strong> Research must ultimately serve the clinicians delivering care and the children receiving it. We prioritize studies with clear pathways to practical implementation.
              </p>
              <p>
                <strong>Methodologically Rigorous:</strong> We support the use of validated instruments, rigorous ethical standards, and sound statistical methods.
              </p>
              <p>
                <strong>Responsibly Governed:</strong> Data and findings must be handled with the utmost respect for privacy, security, and consent, particularly when utilizing emerging technologies.
              </p>
            </div>
          </FadeIn>

          <FadeIn as="section">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-display mb-10">Research Priorities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {priorities.map((group, index) => (
                <div key={index} className="bg-white p-8 border border-primary/10">
                  <div className="flex items-center gap-3 mb-6 border-b border-primary/5 pb-4">
                    <group.icon className="w-6 h-6 text-secondary" />
                    <h3 className="font-bold text-primary font-display text-lg">{group.category}</h3>
                  </div>
                  <ul className="space-y-4">
                    {group.topics.map((topic, i) => (
                      <li key={i} className="flex gap-3 text-sm text-text-muted items-start">
                        <CheckCircle2 className="w-4 h-4 text-primary/40 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>

          
          <FadeIn as="section" className="bg-accent/20 border border-primary/10 p-8 sm:p-12 mb-16">
             <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-8 text-center">How Collaboration Works</h2>
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="bg-white p-6 border border-primary/20 flex-1 w-full relative">
                   <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">1</div>
                   <h3 className="font-bold text-primary mb-2">Define a question</h3>
                   <p className="text-sm text-text-muted">Identify practical gaps in pediatric trauma care or measurement.</p>
                </div>
                
                <div className="bg-white p-6 border border-primary/20 flex-1 w-full relative">
                   <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">2</div>
                   <h3 className="font-bold text-primary mb-2">Design a responsible project</h3>
                   <p className="text-sm text-text-muted">Ensure rigorous ethical standards, data privacy, and IRB alignment.</p>
                </div>
                
                <div className="bg-white p-6 border border-primary/20 flex-1 w-full relative">
                   <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">3</div>
                   <h3 className="font-bold text-primary mb-2">Generate & share findings</h3>
                   <p className="text-sm text-text-muted">Publish results to improve the clinical evidence base globally.</p>
                </div>
             </div>
          </FadeIn>
          <FadeIn as="section" className="text-center bg-primary text-white p-12 md:p-16 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-bold tracking-tight font-display mb-4">Collaborate With Us</h2>
               <p className="text-primary-light mb-8 max-w-xl mx-auto">
                 We are actively seeking academic, clinical, and technological partners to advance these priorities and develop the YTI Data Initiative.
               </p>
               <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary px-8 py-3.5 text-sm font-bold tracking-wide text-white hover:bg-secondary-light transition-colors uppercase"
              >
                Inquire about Partnerships 
              </Link>
             </div>
          </FadeIn>
          
        </div>
      </div>
    </div>
  );
}

