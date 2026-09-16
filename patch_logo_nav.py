import re

with open("src/components/Logo.tsx", "r") as f:
    content = f.read()

# Remove horizontal variant logic
content = re.sub(r'  if \(variant === "horizontal"\).*?  return \(', '  return (', content, flags=re.DOTALL)
# Remove variant prop
content = re.sub(r',\s*variant = "mark"', '', content)
content = re.sub(r'\s*variant\?: "mark" \| "horizontal";', '', content)

with open("src/components/Logo.tsx", "w") as f:
    f.write(content)

with open("src/components/Navbar.tsx", "r") as f:
    nav_content = f.read()

# Replace desktop logo
desktop_logo_old = '<Logo variant="horizontal" className="h-12 w-auto text-primary" />'
desktop_logo_new = """<div className="flex items-center gap-3">
              <Logo className="h-10 w-10 text-primary shrink-0" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-primary leading-none">
                  Youth Trauma Institute
                </span>
              </div>
            </div>"""

nav_content = nav_content.replace(desktop_logo_old, desktop_logo_new)

# Replace mobile logo
mobile_logo_old = '<Logo variant="horizontal" className="h-10 w-auto text-primary" />'
mobile_logo_new = """<div className="flex items-center gap-2">
                <Logo className="h-8 w-8 text-primary shrink-0" />
                <span className="font-display font-bold text-lg tracking-tight text-primary leading-none">
                  Youth Trauma Institute
                </span>
              </div>"""

nav_content = nav_content.replace(mobile_logo_old, mobile_logo_new)

with open("src/components/Navbar.tsx", "w") as f:
    f.write(nav_content)
