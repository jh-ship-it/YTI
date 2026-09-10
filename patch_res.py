with open("src/pages/Research.tsx", "w") as f:
    f.write("""import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, BrainCircuit, LineChart, Users, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Research() {
  const priorities = [
    {
      category: 'Clinical Measurement',
      icon: LineChart,
      topics: [
        'Assessment and measurement instrument validation',
        'Language & cultural adaptation of diagnostic tools',
        'Treatment outcomes tracking and fidelity'
      ]
    },
    {
      category: 'Care Systems',
      icon: Users,
      topics: [
        'Implementation science in low-resource settings',
        'Access barriers for marginalized populations',
        'System-level cost and capacity modeling'
      ]
    },
    {
      category: 'Advanced Analytics',
      icon: BrainCircuit,
      topics: [
        'Longitudinal symptom trajectories',
        'Multi-site data governance and aggregation',
        'Responsible AI and machine learning in pediatric mental health'
      ]
    },
    {
      category: 'Clinical Phenotypes',
      icon: Microscope,
      topics: [
        'Risk and resilience modifiers',
        'Comorbidity with other developmental disorders',
        'Neurodevelopmental impacts of complex trauma'
      ]
    }
  ];

  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="Research & Partnerships"
        title="Building the evidence base together."
        subtitle="YTI seeks to connect clinicians, researchers, health systems, schools, public agencies, and child-serving organizations around practical questions that can improve trauma care."
        imageUrl="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-24">
          
          <section>
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
          </section>

          <section>
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
          </section>

          <section className="text-center bg-primary text-white p-12 md:p-16 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
             <div className="relative z-10">
               <h2 className="text-3xl font-bold tracking-tight font-display mb-4">Collaborate With Us</h2>
               <p className="text-primary-light mb-8 max-w-xl mx-auto">
                 We are actively seeking academic, clinical, and technological partners to advance these priorities and develop the Youth Trauma Data Initiative.
               </p>
               <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary px-8 py-3.5 text-sm font-bold tracking-wide text-white hover:bg-secondary-light transition-colors uppercase"
              >
                Inquire about Partnerships <ArrowRight className="w-4 h-4" />
              </Link>
             </div>
          </section>
          
        </div>
      </div>
    </div>
  );
}
""")
