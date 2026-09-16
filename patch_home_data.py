import re

with open("src/pages/Home.tsx", "r") as f:
    content = f.read()

new_data_feature = '''      {/* Data Initiative Feature */}
      <section className="py-24 sm:py-32 bg-white px-6 lg:px-8 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10 border-t border-primary/10 pt-16">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Planned Initiative</p>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
                From individual assessments to shared learning.
              </h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                The YTI Data Initiative is being developed to help organizations use repeated clinical measurement and outcomes data to better understand trauma treatment and recovery.
              </p>
              <p className="mt-4 text-lg leading-8 text-text-muted">
                Over time, responsibly governed multi-site research data and advanced analytics may help researchers identify risk patterns, understand treatment response, study symptom trajectories, and improve the evidence available to clinicians.
              </p>
              <div className="mt-10 flex">
                <Link
                  to="/data-initiative"
                  className="group flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors"
                >
                  Explore the Data Initiative <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="bg-background border border-primary/10 p-8 sm:p-10 h-full">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Clinical Measurement Flow</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-primary mb-12">
                <span className="bg-white px-3 py-1.5 border border-primary/20">Screen</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-white px-3 py-1.5 border border-primary/20">Assess</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-white px-3 py-1.5 border border-primary/20">Treat</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-white px-3 py-1.5 border border-primary/20">Re-measure</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-white px-3 py-1.5 border border-primary/20">Analyze Outcomes</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span className="bg-secondary/10 px-3 py-1.5 border border-secondary text-secondary">Inform Better Care</span>
              </div>
              
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6 border-t border-primary/10 pt-8">Research & Analytics Flow</h3>
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 bg-white p-4 border border-primary/10">
                    <Database className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-semibold text-primary text-sm">Participating Sites</span>
                 </div>
                 <div className="w-px h-4 bg-primary/20 ml-6"></div>
                 <div className="flex items-center gap-4 bg-white p-4 border border-primary/10">
                    <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-semibold text-primary text-sm">Governed Shared Research Data</span>
                 </div>
                 <div className="w-px h-4 bg-primary/20 ml-6"></div>
                 <div className="flex items-center gap-4 bg-white p-4 border border-primary/10">
                    <LineChart className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-semibold text-primary text-sm">Statistical / AI Analysis</span>
                 </div>
                 <div className="w-px h-4 bg-primary/20 ml-6"></div>
                 <div className="flex items-center gap-4 bg-primary p-4 border border-primary">
                    <BookOpen className="w-5 h-5 text-sun shrink-0" />
                    <span className="font-semibold text-white text-sm">Research Findings</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>'''

start_str = '{/* Data Initiative Feature */}'
end_str = '{/* Funding Flow Explainer */}'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_data_feature + '\n      ' + content[end_idx:]

with open("src/pages/Home.tsx", "w") as f:
    f.write(content)
