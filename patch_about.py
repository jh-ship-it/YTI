import re

with open("src/pages/About.tsx", "r") as f:
    content = f.read()

content = content.replace(
    'description="Learn about Youth Trauma Initiative\'s origins, our team, and how we serve as an implementation engine for pediatric trauma care research and clinical tools."',
    'description="Learn about Youth Trauma Initiative\'s origins, our team, and our mission to move proven trauma-care knowledge and tools from research into real-world settings."'
)

content = content.replace(
    'title="Built to close the gap between evidence and access."',
    'title="Built to help close the gap between evidence and access."'
)

new_leadership = '''          {/* Leadership Planning */}
          <section className="bg-accent/20 p-8 sm:p-12 border border-primary/10">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-display mb-6">Leadership Planning</h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                Initial governance planning includes Jeffery Yard, Jonathan Howell, and Kipling Macartney.
              </p>
              <p>
                Clinical and scientific contributors associated with the development of the broader initiative include recognized experts in childhood trauma assessment and research, such as Robert Pynoos, M.D., M.P.H., and Alan Steinberg, Ph.D.
              </p>
            </div>
          </section>'''

# append before closing tag of <div className="mx-auto max-w-3xl space-y-16">
last_div = content.rfind('</div>\n        </div>\n      </div>\n    </div>')

if last_div != -1:
    content = content[:last_div] + new_leadership + '\n        ' + content[last_div:]

with open("src/pages/About.tsx", "w") as f:
    f.write(content)
