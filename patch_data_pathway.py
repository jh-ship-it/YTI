import re

with open("src/pages/DataInitiative.tsx", "r") as f:
    content = f.read()

pathway_old = """                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border-2 border-primary/20 flex items-center justify-center shrink-0 rounded-full font-bold">1</div>
                    <span>Screen & Assess accurately using validated instruments.</span>
                 </div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border-2 border-primary/20 flex items-center justify-center shrink-0 rounded-full font-bold">2</div>
                    <span>Treat & Re-measure continuously to monitor progress.</span>
                 </div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-primary font-medium">
                    <div className="w-10 h-10 border-2 border-primary/20 flex items-center justify-center shrink-0 rounded-full font-bold">3</div>
                    <span>Analyze Outcomes using advanced data infrastructure.</span>
                 </div>
                 <div className="w-px h-6 bg-primary/20 ml-5"></div>
                 
                 <div className="flex items-center gap-4 text-secondary font-semibold">
                    <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center shrink-0 rounded-full">
                      <Database className="w-5 h-5" />
                    </div>
                    <span>Improve Care Globally by sharing insights.</span>
                 </div>"""

pathway_new = """                 <div className="flex items-center gap-4 text-primary font-medium">
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

content = content.replace(pathway_old, pathway_new)

with open("src/pages/DataInitiative.tsx", "w") as f:
    f.write(content)
