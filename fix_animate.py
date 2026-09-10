import re

filename = "src/components/PageHero.tsx"
with open(filename, "r") as f:
    content = f.read()

content = re.sub(r'\s+animate=\{[^}]+\}\}+', '', content)
content = re.sub(r'\s+animate=\{[^}]+\}', '', content)

with open(filename, "w") as f:
    f.write(content)
