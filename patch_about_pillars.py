import re

with open("src/pages/About.tsx", "r") as f:
    content = f.read()

content = content.replace(
    '''<h3 className="font-bold font-display text-primary text-lg">1. Tool Subsidization</h3>''',
    '''<h3 className="font-bold font-display text-primary text-lg">1. Clinical Access & Implementation</h3>'''
)

content = content.replace(
    '''<h3 className="font-bold font-display text-primary text-lg">2. Implementation Scaffolding</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Providing frontline clinical teams with workflow guides, scoring protocols, and ongoing training to ensure measurement-based care takes root sustainably.
                </p>''',
    '''<h3 className="font-bold font-display text-primary text-lg">2. Education & Awareness</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Helping communities recognize trauma earlier by supporting public education and awareness intended to improve recognition of childhood trauma and PTSD.
                </p>'''
)

content = content.replace(
    '''<h3 className="font-bold font-display text-primary text-lg">3. Multi-Site Open Data</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Building privacy-first, ethically governed infrastructure through the YTI Data Initiative to track longitudinal recovery and identify what interventions work best.
                </p>''',
    '''<h3 className="font-bold font-display text-primary text-lg">3. Research, Data & Outcomes</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Turning better measurement into better care through implementation pilots, program evaluation, outcomes measurement, and advanced analytics.
                </p>'''
)

content = content.replace(
    '''<h3 className="font-bold font-display text-primary text-lg">4. Global Linguistic Equity</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Collaborating with international clinical partners to translate and culturally adapt validated pediatric tools for low- and middle-income regions.
                </p>''',
    '''<h3 className="font-bold font-display text-primary text-lg">4. Global Capacity Building</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Expanding trauma-care capacity where resources are limited, working with qualified local partners and accounting for local cultural contexts.
                </p>'''
)

with open("src/pages/About.tsx", "w") as f:
    f.write(content)
