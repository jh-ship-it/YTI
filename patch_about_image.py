import re

with open("src/pages/About.tsx", "r") as f:
    content = f.read()

content = re.sub(r'layout="centered-image"', 'layout="text-only"', content)

with open("src/pages/About.tsx", "w") as f:
    f.write(content)
