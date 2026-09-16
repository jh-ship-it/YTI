import re

with open("src/pages/Home.tsx", "r") as f:
    content = f.read()

content = content.replace(
    '''Yet cost, language, geography, and fragmented systems put those resources out of reach.''',
    '''Yet cost, language, geography, workforce limitations, and fragmented systems can put those resources out of reach.'''
)

with open("src/pages/Home.tsx", "w") as f:
    f.write(content)
