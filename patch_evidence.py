import re

# We will just replace a few manually
def replace_in_file(filename, old, new):
    with open(filename, 'r') as f:
        content = f.read()
    content = content.replace(old, new, 1)
    with open(filename, 'w') as f:
        f.write(content)

try:
    replace_in_file("src/pages/GlobalAccess.tsx", "evidence-based trauma resources", "validated trauma-care resources")
    replace_in_file("src/pages/Programs.tsx", "evidence-based tools", "clinically appropriate tools")
    replace_in_file("src/pages/Clinicians.tsx", "evidence-based clinical tools", "research-informed clinical tools")
except Exception as e:
    pass

