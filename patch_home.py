import re

with open("src/pages/Home.tsx", "r") as f:
    content = f.read()

# Replace the stats grid
stats_old = """          <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div>
              <div className="text-4xl font-display font-bold text-sun mb-2">2/3</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                of children report at least one traumatic event by age 16. Early identification is critical to preventing long-term outcomes.
                <span className="block text-xs mt-2 text-white/50">(SAMHSA)</span>
              </p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-sun mb-2">40%</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                of youth do not receive adequate follow-up care or measurement-based tracking during trauma treatment.
                <span className="block text-xs mt-2 text-white/50">(NCTSN)</span>
              </p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-sun mb-2">90+</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                countries face severe shortages of validated, translated pediatric trauma assessment instruments.
                <span className="block text-xs mt-2 text-white/50">(Global Health Estimates)</span>
              </p>
            </div>
          </div>"""

stats_new = """          <div className="flex justify-center pt-12 border-t border-white/10">
            <div className="max-w-2xl text-center">
              <div className="text-5xl font-display font-bold text-sun mb-4">2/3</div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                of children report at least one traumatic event by age 16. Childhood trauma can have lasting effects on health, learning, and wellbeing—making appropriate identification and support important.
                <span className="block text-sm mt-3 text-white/50 font-medium">Source: Substance Abuse and Mental Health Services Administration (SAMHSA)</span>
              </p>
            </div>
          </div>"""

content = content.replace(stats_old, stats_new)

# Replace the Process flow in Home
process_old = """                 <div className="flex items-center gap-4 text-primary font-medium">
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
                 </div>"""

process_new = """                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">1</div>
                    <span>Screen & Assess</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">2</div>
                    <span>Treat</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>

                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">3</div>
                    <span>Re-measure at appropriate intervals</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">4</div>
                    <span>Analyze Outcomes</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>

                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0 font-bold">5</div>
                    <span>Generate Insights</span>
                 </div>
                 <div className="w-px h-4 bg-primary ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-secondary font-bold">
                    <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center shrink-0">
                      <Database className="w-5 h-5" />
                    </div>
                    <span>Inform Better Care</span>
                 </div>"""

content = content.replace(process_old, process_new)

with open("src/pages/Home.tsx", "w") as f:
    f.write(content)
