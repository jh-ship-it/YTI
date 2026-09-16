import re

with open("src/pages/Home.tsx", "r") as f:
    content = f.read()

new_funding_flow = '''      {/* Funding Flow Explainer */}
      <section className="py-24 sm:py-32 bg-white px-6 lg:px-8 border-t border-accent">
        <div className="mx-auto max-w-7xl text-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
              Your support becomes clinical capacity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted max-w-2xl mx-auto">
              Funders support Youth Trauma Initiative. YTI then independently directs resources toward programs that expand clinical access, research, education, implementation, training, and global capacity.
            </p>
          </div>
          
          <div className="mt-16 max-w-5xl mx-auto flex flex-col items-center">
            
            {/* 1. Funders */}
            <div className="bg-accent/40 border border-primary/20 px-8 py-4 w-full max-w-3xl">
              <p className="text-sm font-bold text-primary uppercase tracking-wider">
                Foundations / Government / Corporate Philanthropy / Individuals
              </p>
            </div>
            
            {/* Arrow down */}
            <div className="h-8 w-px bg-primary/30"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30"></div>
            
            {/* 2. YTI */}
            <div className="bg-primary text-white p-8 w-full max-w-3xl relative mt-2 border-b-4 border-secondary">
              <div className="font-display font-bold text-3xl mb-1">Youth Trauma Initiative</div>
              <div className="text-sm font-medium text-gray-300 italic">"Independent charitable control"</div>
            </div>
            
            {/* Arrow down */}
            <div className="h-8 w-px bg-primary/30 mt-0"></div>
            
            {/* 3. Four Branches */}
            <div className="w-full max-w-4xl border-t border-primary/30 relative">
               <div className="flex justify-between w-full relative -top-3">
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30 mx-auto"></div>
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30 mx-auto"></div>
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30 mx-auto hidden md:block"></div>
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30 mx-auto hidden md:block"></div>
               </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-4">
              <div className="bg-white border border-primary/10 p-6 flex flex-col justify-center shadow-sm">
                <p className="text-sm font-bold text-primary leading-snug">Clinical Access &<br/>Implementation</p>
              </div>
              <div className="bg-white border border-primary/10 p-6 flex flex-col justify-center shadow-sm">
                <p className="text-sm font-bold text-primary leading-snug">Education &<br/>Awareness</p>
              </div>
              <div className="bg-white border border-primary/10 p-6 flex flex-col justify-center shadow-sm">
                <p className="text-sm font-bold text-primary leading-snug">Research, Data &<br/>Outcomes</p>
              </div>
              <div className="bg-white border border-primary/10 p-6 flex flex-col justify-center shadow-sm">
                <p className="text-sm font-bold text-primary leading-snug">Global Capacity<br/>Building</p>
              </div>
            </div>
            
            {/* Arrow down */}
            <div className="h-8 w-px bg-primary/30 mt-6"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30"></div>
            
            {/* 4. Recipients */}
            <div className="w-full max-w-4xl mt-2 p-6 bg-accent/20 border border-primary/10">
              <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Supported Partners & Recipients</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-primary font-medium text-sm">
                <span>Clinicians</span> •
                <span>Schools</span> •
                <span>Hospitals</span> •
                <span>Nonprofits</span> •
                <span>CACs</span> •
                <span>Universities</span> •
                <span>Public Agencies</span> •
                <span>International Partners</span>
              </div>
            </div>
            
            {/* Arrow down */}
            <div className="h-8 w-px bg-primary/30 mt-6"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/30"></div>
            
            {/* 5. Outcomes */}
            <div className="w-full max-w-3xl mt-2 bg-secondary/10 border border-secondary/20 p-6">
              <p className="text-lg font-display font-bold text-primary flex flex-col md:flex-row items-center justify-center gap-4">
                <span>Earlier identification</span>
                <span className="hidden md:inline text-secondary">•</span>
                <span>Better measurement</span>
                <span className="hidden md:inline text-secondary">•</span>
                <span>Better-informed care</span>
              </p>
            </div>
            
          </div>
        </div>
      </section>'''

# Replace the old Funding Flow section. We need to find the start and end.
start_str = '{/* Funding Flow Explainer */}'
end_str = '{/* Closing CTA */}'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_funding_flow + '\n      ' + content[end_idx:]

with open("src/pages/Home.tsx", "w") as f:
    f.write(content)
