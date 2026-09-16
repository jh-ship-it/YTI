import re

def clean_file(filename):
    with open(filename, 'r') as f:
        content = f.read()

    if "DataInitiative" in filename:
        content = re.sub(r'ArrowRight,\s*', '', content)
    if "GlobalAccess" in filename:
        content = re.sub(r'ShieldCheck,\s*', '', content)
        
    with open(filename, 'w') as f:
        f.write(content)

clean_file("src/pages/DataInitiative.tsx")
clean_file("src/pages/GlobalAccess.tsx")
