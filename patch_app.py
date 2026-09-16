import re

with open("src/App.tsx", "r") as f:
    content = f.read()

content = content.replace("import Contact from './pages/Contact';", "import Contact from './pages/Contact';\nimport Transparency from './pages/Transparency';")
content = content.replace("<Route path=\"transparency\" element={<PlaceholderPage title=\"Transparency\" />} />", "<Route path=\"transparency\" element={<Transparency />} />")

with open("src/App.tsx", "w") as f:
    f.write(content)
