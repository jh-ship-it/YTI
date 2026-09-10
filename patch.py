with open("src/pages/Home.tsx", "r") as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "{/* Data Initiative Feature */}" in line:
        start_idx = i
    if "Funding Flow Explainer" in line:
        end_idx = i - 1
        break

if start_idx != -1 and end_idx != -1:
    new_content = """      {/* Data Initiative Feature */}
      <section className="py-24 sm:py-32 bg-white px-6 lg:px-8 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10 border-t border-primary/10 pt-16">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Planned Initiative</p>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
                From individual assessments to shared learning.
              </h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                The Youth Trauma Data Initiative is being developed to help organizations use repeated clinical measurement and outcomes data to better understand trauma treatment and recovery.
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

            <div className="bg-background border-l-4 border-primary p-8 sm:p-12 h-full">
              <div className="flex flex-col gap-6">
                 {/* Process Flow */}
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border-2 border-primary/20 flex items-center justify-center shrink-0 rounded-full font-bold">1</div>
                    <span>Screen & Assess</span>
                 </div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border-2 border-primary/20 flex items-center justify-center shrink-0 rounded-full font-bold">2</div>
                    <span>Treat & Re-measure</span>
                 </div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border-2 border-primary/20 flex items-center justify-center shrink-0 rounded-full font-bold">3</div>
                    <span>Analyze Outcomes</span>
                 </div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-secondary font-semibold">
                    <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center shrink-0 rounded-full">
                      <Database className="w-5 h-5" />
                    </div>
                    <span>Improve Care Globally</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
"""
    lines[start_idx:end_idx+1] = [new_content]
    
    with open("src/pages/Home.tsx", "w") as f:
        f.writelines(lines)
        print("Updated Home.tsx")
