import re

with open("src/pages/GlobalAccess.tsx", "r") as f:
    content = f.read()

content = content.replace(
    '''title="Science doesn't stop at borders."
        subtitle="Youth Trauma Initiative's mission is global. We work to reduce financial, geographic, language, technology, and capacity barriers to evidence-based childhood trauma care."''',
    '''title="Evidence-based trauma care should not stop at a border."
        subtitle="The mission of YTI is global. We work to reduce financial, geographic, language, technology, and capacity barriers to evidence-based childhood trauma care."'''
)

content = content.replace(
    '''The majority of the world's traumatized children reside in low- and middle-income settings, yet the vast majority of validated clinical instruments, measurement frameworks, and specialized training materials are locked behind paywalls, English-language barriers, or complex licensing agreements designed for Western academic institutions.''',
    '''In many settings, cost, language, licensing, workforce, implementation, and infrastructure barriers can limit access to validated trauma resources.'''
)

content = content.replace(
    '''Support International Expansion''',
    '''Discuss an international partnership'''
)

content = content.replace(
    '''<PageHero 
        label="Global Access"
        title="Evidence-based trauma care should not stop at a border."
        subtitle="The mission of YTI is global. We work to reduce financial, geographic, language, technology, and capacity barriers to evidence-based childhood trauma care."
        imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
      />''',
    '''<PageHero 
        label="Global Access"
        title="Evidence-based trauma care should not stop at a border."
        subtitle="The mission of YTI is global. We work to reduce financial, geographic, language, technology, and capacity barriers to evidence-based childhood trauma care."
        layout="text-only"
      />'''
)


with open("src/pages/GlobalAccess.tsx", "w") as f:
    f.write(content)
