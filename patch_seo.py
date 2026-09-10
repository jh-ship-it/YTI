import glob
import os

pages = {
    "src/pages/Home.tsx": "Better tools, data, and trauma care for children",
    "src/pages/About.tsx": "About - Bridging the gap between evidence and access",
    "src/pages/Clinicians.tsx": "For Organizations - Clinical resources and capacity building",
    "src/pages/Contact.tsx": "Contact - Connect with our team",
    "src/pages/DataInitiative.tsx": "Data Initiative - The visual care pathway and shared learning",
    "src/pages/GetInvolved.tsx": "Get Involved - Philanthropy and institutional partnerships",
    "src/pages/GlobalAccess.tsx": "Global Access - Care shouldn't stop at a border",
    "src/pages/Mission.tsx": "Our Mission - Advancing pediatric trauma care",
    "src/pages/Programs.tsx": "Our Work - Core programs and initiatives",
    "src/pages/Research.tsx": "Research & Partnerships - Building the evidence base",
}

for filepath, title in pages.items():
    if not os.path.exists(filepath):
        continue
    with open(filepath, "r") as f:
        content = f.read()
    
    # Add import
    import_statement = "import SEO from '../components/SEO';\n"
    content = import_statement + content
    
    # Find return ( <div ... or return ( <> or similar
    # Simple regex to find return ( and insert <SEO title="..." />
    import re
    
    # Looking for return (
    # followed by <div or <>
    def repl(m):
        return f"{m.group(1)}<SEO title=\"{title.split(' - ')[0]}\" description=\"{title}\" />\n      "
    
    content = re.sub(r'(return\s*\(\s*<div[^>]*>\s*)', repl, content, count=1)
    
    with open(filepath, "w") as f:
        f.write(content)
