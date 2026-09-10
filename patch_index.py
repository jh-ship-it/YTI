with open("index.html", "r") as f:
    content = f.read()

content = content.replace("<title>Vite + React + TS</title>", "<title>Youth Trauma Institute</title>")
content = content.replace('<meta name="description" content="Web site created with AI Studio" />', '<meta name="description" content="Expanding access to the clinical tools, training, research, and data clinicians need to identify and treat childhood trauma and PTSD." />')
content = content.replace('<meta property="og:title" content="Vite + React + TS App" />', '<meta property="og:title" content="Youth Trauma Institute" />')
content = content.replace('<meta property="og:description" content="A web app created with AI Studio" />', '<meta property="og:description" content="Expanding access to the clinical tools, training, research, and data clinicians need to identify and treat childhood trauma and PTSD." />')

with open("index.html", "w") as f:
    f.write(content)
