import os

files_to_check = [
    "src/pages/About.tsx",
    "src/pages/GetInvolved.tsx",
    "src/pages/GlobalAccess.tsx",
    "src/pages/FAQ.tsx",
    "src/pages/Terms.tsx",
    "src/pages/Donate.tsx",
    "src/pages/Mission.tsx",
    "src/pages/Privacy.tsx",
    "src/pages/Contact.tsx",
    "src/pages/Home.tsx",
    "src/pages/Programs.tsx",
    "src/pages/Transparency.tsx",
    "src/pages/Clinicians.tsx",
    "src/pages/Research.tsx",
    "src/pages/DataInitiative.tsx",
    "src/pages/NotFound.tsx",
    "src/components/Footer.tsx",
    "src/components/Navbar.tsx",
    "src/components/Logo.tsx",
    "src/components/SEO.tsx",
    "src/content.ts",
    "metadata.json",
    "index.html"
]

for filepath in files_to_check:
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            content = f.read()
        
        # Replace occurrences
        new_content = content.replace("Youth Trauma Institute", "Youth Trauma Initiative")
        new_content = new_content.replace("Institute's", "Initiative's")
        
        if content != new_content:
            with open(filepath, "w") as f:
                f.write(new_content)
                print(f"Updated {filepath}")

