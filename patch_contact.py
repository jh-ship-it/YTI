import re

with open("src/pages/Contact.tsx", "r") as f:
    content = f.read()

new_form_content = '''          <div className="bg-white border-t-4 border-secondary p-8 sm:p-12 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight text-primary font-display mb-6">Directory</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              Youth Trauma Initiative is currently being established. While our integrated contact forms are being configured, please direct inquiries to the appropriate team via email.
            </p>
            
            <div className="space-y-6">
              <div className="border-b border-primary/10 pb-6">
                 <h4 className="font-bold text-primary mb-1">Organization / Clinical Partnership Inquiry</h4>
                 <p className="text-sm text-text-muted mb-3">For clinical settings, schools, or NGOs exploring subsidized access and implementation support.</p>
                 <a href="mailto:partnerships@youthtraumainitiative.org" className="text-secondary font-bold hover:underline text-sm uppercase tracking-wide">partnerships@youthtraumainitiative.org</a>
              </div>
              
              <div className="border-b border-primary/10 pb-6">
                 <h4 className="font-bold text-primary mb-1">Research Collaboration Inquiry</h4>
                 <p className="text-sm text-text-muted mb-3">For universities, researchers, and organizations exploring the YTI Data Initiative.</p>
                 <a href="mailto:research@youthtraumainitiative.org" className="text-secondary font-bold hover:underline text-sm uppercase tracking-wide">research@youthtraumainitiative.org</a>
              </div>
              
              <div className="border-b border-primary/10 pb-6">
                 <h4 className="font-bold text-primary mb-1">Funder / Donor Interest</h4>
                 <p className="text-sm text-text-muted mb-3">For foundations, philanthropists, and corporate partners.</p>
                 <a href="mailto:giving@youthtraumainitiative.org" className="text-secondary font-bold hover:underline text-sm uppercase tracking-wide">giving@youthtraumainitiative.org</a>
              </div>
              
              <div className="border-b border-primary/10 pb-6">
                 <h4 className="font-bold text-primary mb-1">International Partnership Inquiry</h4>
                 <p className="text-sm text-text-muted mb-3">For global NGOs, health ministries, and humanitarian responders.</p>
                 <a href="mailto:global@youthtraumainitiative.org" className="text-secondary font-bold hover:underline text-sm uppercase tracking-wide">global@youthtraumainitiative.org</a>
              </div>
              
              <div className="pb-2">
                 <h4 className="font-bold text-primary mb-1">General Contact</h4>
                 <p className="text-sm text-text-muted mb-3">For all other inquiries.</p>
                 <a href="mailto:info@youthtraumainitiative.org" className="text-secondary font-bold hover:underline text-sm uppercase tracking-wide">info@youthtraumainitiative.org</a>
              </div>
            </div>

            <div className="bg-primary/5 p-5 mt-10 flex gap-4 items-start border-l-4 border-secondary">
              <ShieldAlert className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
              <div className="space-y-1">
                 <p className="text-sm text-primary font-bold">
                   Please do not submit patient-identifying or confidential clinical information via email.
                 </p>
                 <p className="text-sm text-text-muted">
                   These public email addresses are not secure channels for Protected Health Information (PHI).
                 </p>
              </div>
            </div>
          </div>'''

# Replace from <div className="bg-white border-t-4 border-secondary p-8 sm:p-12 shadow-sm"> to end of that div
start_str = '<div className="bg-white border-t-4 border-secondary p-8 sm:p-12 shadow-sm">'

start_idx = content.find(start_str)
end_idx = content.rfind('</div>\n      </div>\n    </div>')

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_form_content + '\n        </div>\n      </div>\n    </div>\n  );\n}'

with open("src/pages/Contact.tsx", "w") as f:
    f.write(content)
