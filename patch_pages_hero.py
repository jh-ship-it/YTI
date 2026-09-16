import re

def update_file(filename, layout_str):
    with open(filename, 'r') as f:
        content = f.read()
    content = re.sub(r'(<PageHero[\s\S]*?imageUrl="[^"]*")', r'\1 layout="' + layout_str + '"', content)
    with open(filename, 'w') as f:
        f.write(content)

try:
    update_file("src/pages/DataInitiative.tsx", "centered-image")
    update_file("src/pages/Contact.tsx", "text-only")
    update_file("src/pages/About.tsx", "centered-image")
    update_file("src/pages/Programs.tsx", "text-only")
except Exception as e:
    pass

