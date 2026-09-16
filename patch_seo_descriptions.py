import re
import os

descriptions = {
    "src/pages/Home.tsx": ("Better tools, data, and trauma care for children", "Youth Trauma Institute works to expand global access to evidence-based tools, training, data, research, and implementation support for childhood trauma and PTSD care."),
    "src/pages/About.tsx": ("About", "Learn about Youth Trauma Institute's origins, our team, and how we serve as an implementation engine for pediatric trauma care research and clinical tools."),
    "src/pages/Clinicians.tsx": ("For Organizations", "Discover how your clinical setting, school, or NGO can partner with Youth Trauma Institute to strengthen trauma assessment and measurement-based care."),
    "src/pages/Contact.tsx": ("Contact", "Get in touch with Youth Trauma Institute to discuss potential partnerships, funding opportunities, research collaborations, or clinical implementation."),
    "src/pages/DataInitiative.tsx": ("Data Initiative", "The Youth Trauma Data Initiative helps organizations use repeated clinical measurement and outcomes data to better understand trauma treatment and recovery."),
    "src/pages/GetInvolved.tsx": ("Support YTI", "Support Youth Trauma Institute through philanthropy or institutional partnerships to help expand access to evidence-based pediatric trauma care globally."),
    "src/pages/GlobalAccess.tsx": ("Global Access", "YTI works to make evidence-based trauma resources more accessible and usable across diverse settings, overcoming cost, language, and licensing barriers."),
    "src/pages/Mission.tsx": ("Our Mission", "The Youth Trauma Institute exists to ensure that every child affected by trauma has access to validated assessment and measurement-based care worldwide."),
    "src/pages/Programs.tsx": ("Our Work", "Explore YTI's four core program areas: Clinical Capacity, Global Access, The Data Initiative, and Research, all designed to improve pediatric trauma care."),
    "src/pages/Research.tsx": ("Research", "Learn about YTI's clinical research priorities, including Risk, Resilience & Comorbidity, Care Systems, Analytics, and how we collaborate with institutions.")
}

for filepath, (title, desc) in descriptions.items():
    if not os.path.exists(filepath):
        continue
    with open(filepath, "r") as f:
        content = f.read()
    
    content = re.sub(r'<SEO title="[^"]*" description="[^"]*" />', f'<SEO title="{title}" description="{desc}" />', content)
    
    with open(filepath, "w") as f:
        f.write(content)
