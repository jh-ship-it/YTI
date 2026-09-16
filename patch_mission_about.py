import re

# Mission.tsx
with open("src/pages/Mission.tsx", "r") as f:
    content = f.read()

content = content.replace("Expanded Mission Statement", "Our Mission")
content = content.replace("Youth Trauma Institute is a developing nonprofit organization", "{siteConfig.legalStatus}")
content = content.replace("import SEO from '../components/SEO';", "import SEO from '../components/SEO';\nimport { siteConfig } from '../content';")

with open("src/pages/Mission.tsx", "w") as f:
    f.write(content)

# About.tsx
with open("src/pages/About.tsx", "r") as f:
    content = f.read()

content = content.replace("Youth Trauma Institute is being established as a 501(c)(3) nonprofit organization.", "{siteConfig.legalStatus}")
content = content.replace("import SEO from '../components/SEO';", "import SEO from '../components/SEO';\nimport { siteConfig } from '../content';")

with open("src/pages/About.tsx", "w") as f:
    f.write(content)
