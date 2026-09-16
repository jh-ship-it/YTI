import re

with open("src/pages/Clinicians.tsx", "r") as f:
    content = f.read()

new_eligibility = '''          <section className="bg-white p-8 sm:p-12 border border-primary/10 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-primary font-display mb-6">Eligibility Self-Screen</h2>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h3 className="font-bold text-primary text-lg mb-4">You may be a fit if:</h3>
                <ul className="space-y-4 text-text-muted">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">you serve children or adolescents;</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">you provide trauma-related clinical, research, educational, or public services;</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">you face an access or implementation barrier;</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">you can use and monitor supported resources responsibly.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-primary text-lg mb-4">Priority may be given to:</h3>
                <ul className="space-y-4 text-text-muted">
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span className="text-sm">underserved settings,</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span className="text-sm">high-trauma populations,</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span className="text-sm">programs with durable implementation potential,</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                    <span className="text-sm">organizations able to contribute to learning and outcomes measurement.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>'''

# Replace from <section className="bg-white p-8 sm:p-12 border-l-4 border-secondary shadow-sm">
start_str = '<section className="bg-white p-8 sm:p-12 border-l-4 border-secondary shadow-sm">'
end_str = '<section className="bg-primary text-white p-12 md:p-16 text-center border-t border-primary-light/30">'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_eligibility + '\n          ' + content[end_idx:]

content = content.replace(
    'Contact Us',
    'Tell us about your organization'
)

# Text-only hero
content = content.replace(
    '''imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200"''',
    '''layout="text-only"'''
)

with open("src/pages/Clinicians.tsx", "w") as f:
    f.write(content)
