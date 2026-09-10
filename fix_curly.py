import glob

def fix(filename):
    with open(filename, "r") as f:
        content = f.read()
    
    # Simple replace of leftover curlies on div/section/h1/h2/p/span/li/ul tags
    # Usually they look like <div}}
    content = content.replace("<div}}", "<div")
    content = content.replace("<div}}}", "<div")
    content = content.replace("<div}}}}", "<div")
    
    content = content.replace("<section}}", "<section")
    content = content.replace("<section}}}", "<section")
    content = content.replace("<section}}}}", "<section")
    
    content = content.replace("<h1}}", "<h1")
    content = content.replace("<h1}}}", "<h1")
    content = content.replace("<h1}}}}", "<h1")
    
    content = content.replace("<h2}}", "<h2")
    content = content.replace("<h2}}}", "<h2")
    content = content.replace("<h2}}}}", "<h2")
    
    content = content.replace("<p}}", "<p")
    content = content.replace("<p}}}", "<p")
    content = content.replace("<p}}}}", "<p")
    
    content = content.replace("<span}}", "<span")
    content = content.replace("<span}}}", "<span")
    content = content.replace("<span}}}}", "<span")
    
    content = content.replace("<li}}", "<li")
    content = content.replace("<li}}}", "<li")
    content = content.replace("<li}}}}", "<li")
    
    content = content.replace("<ul}}", "<ul")
    content = content.replace("<ul}}}", "<ul")
    content = content.replace("<ul}}}}", "<ul")

    # The issue might be that it's on a new line and not attached to <div
    import re
    content = re.sub(r'\s+\}\}\}\}\s*>', ' >', content)
    content = re.sub(r'\s+\}\}\}\s*>', ' >', content)
    content = re.sub(r'\s+\}\}\s*>', ' >', content)
    content = re.sub(r'\s+\}\s*>', ' >', content)
    
    # Sometimes it's like <div \n }}}>
    
    with open(filename, "w") as f:
        f.write(content)

for f in ["src/pages/Home.tsx", "src/pages/Mission.tsx", "src/components/PageHero.tsx"]:
    fix(f)
