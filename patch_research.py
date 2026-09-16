import re

with open("src/pages/Research.tsx", "r") as f:
    content = f.read()

new_priorities = '''  const priorities = [
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
  ];'''

# Replace priorities
content = re.sub(r'const priorities = \[\s+.*?\];', new_priorities, content, flags=re.DOTALL)

# Add collaboration pathway
pathway_html = '''
          <section className="bg-accent/20 border border-primary/10 p-8 sm:p-12 mb-16">
             <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-8 text-center">How Collaboration Works</h2>
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="bg-white p-6 border border-primary/20 flex-1 w-full relative">
                   <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">1</div>
                   <h3 className="font-bold text-primary mb-2">Define a question</h3>
                   <p className="text-sm text-text-muted">Identify practical gaps in pediatric trauma care or measurement.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-primary/30 hidden md:block shrink-0" />
                <div className="bg-white p-6 border border-primary/20 flex-1 w-full relative">
                   <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">2</div>
                   <h3 className="font-bold text-primary mb-2">Design a responsible project</h3>
                   <p className="text-sm text-text-muted">Ensure rigorous ethical standards, data privacy, and IRB alignment.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-primary/30 hidden md:block shrink-0" />
                <div className="bg-white p-6 border border-primary/20 flex-1 w-full relative">
                   <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">3</div>
                   <h3 className="font-bold text-primary mb-2">Generate & share findings</h3>
                   <p className="text-sm text-text-muted">Publish results to improve the clinical evidence base globally.</p>
                </div>
             </div>
          </section>'''

# Insert pathway before Collaborate With Us
collaborate_idx = content.find('<section className="text-center bg-primary')
if collaborate_idx != -1:
    content = content[:collaborate_idx] + pathway_html + '\n          ' + content[collaborate_idx:]

content = content.replace(
    'Youth Trauma Data Initiative',
    'YTI Data Initiative'
)

# Text-only hero
content = content.replace(
    '''imageUrl="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200"''',
    '''layout="text-only"'''
)

with open("src/pages/Research.tsx", "w") as f:
    f.write(content)
