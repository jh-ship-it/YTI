import re

for filename in ["src/pages/Home.tsx", "src/pages/Mission.tsx"]:
    with open(filename, "r") as f:
        content = f.read()
    
    content = re.sub(r'key=\{([^}]+)\}\}+', r'key={\1}', content)
    
    with open(filename, "w") as f:
        f.write(content)
