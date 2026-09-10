import { ShieldCheck, BookOpen, Activity, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

export default function Programs() {
  const programs = [
    {
      title: 'Clinical Access & Implementation',
      headline: 'Put evidence-based trauma tools within reach.',
      description: 'YTI works to reduce financial, geographic, linguistic, technological, and institutional barriers that keep clinicians and child-serving organizations from using appropriate trauma and PTSD resources.',
      details: [
        'Sponsored or subsidized assessment/tool access',
        'Implementation assistance and technical support',
        'Translation and cultural adaptation',
        'Pilot funding for qualifying programs'
      ],
      icon: ShieldCheck
    },
    {
      title: 'Public Education & Awareness',
      headline: 'Help communities recognize trauma earlier.',
      description: 'YTI may conduct or fund public education and awareness intended to improve recognition of childhood trauma, increase understanding of trauma-informed care, and encourage appropriate screening.',
      details: [
        'Digital campaigns and public-service materials',
        'Educational websites and toolkits',
        'Webinars, school, and community education',
        'Caregiver education and professional outreach'
      ],
      icon: BookOpen
    },
    {
      title: 'Research, Data & Outcomes',
      headline: 'Turn better measurement into better care.',
      description: 'YTI may design, fund, conduct, or support implementation pilots, program evaluation, outcomes measurement, validation, and measurement-based care.',
      details: [
        'Implementation science and quality improvement',
        'Multi-site research and shared data resources',
        'Statistical and AI/ML analysis',
        'Study of trauma exposure, symptoms, and treatment trajectories'
      ],
      icon: Activity
    },
    {
      title: 'Global Capacity Building',
      headline: 'Expand trauma-care capacity where resources are limited.',
      description: 'YTI expects to work in the United States and internationally, giving priority to settings where barriers include cost, geography, language, and limited specialized workforce.',
      details: [
        'Support for hospitals, universities, and nonprofits',
        'Partnerships with government agencies and schools',
        'Humanitarian organization support',
        'Addressing institutional capacity and displacement/conflict challenges'
      ],
      icon: Globe2
    }
  ];

  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="Our Programs"
        title="Expanding access and improving care globally."
        subtitle="Youth Trauma Institute operates four core program areas to bridge the gap between clinical science and real-world application."
        imageUrl="https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-5xl space-y-12">
          {programs.map((program, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={program.title} 
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm ring-1 ring-primary/5 flex flex-col md:flex-row gap-10 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                  <program.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary font-display">{program.title}</h2>
                <p className="text-lg font-semibold text-secondary mt-2">{program.headline}</p>
                <p className="mt-4 text-text-muted leading-7">
                  {program.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {program.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3 text-text-muted items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
