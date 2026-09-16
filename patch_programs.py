import re

with open("src/pages/Programs.tsx", "r") as f:
    content = f.read()

content = content.replace(
    "Youth Trauma Initiative operates four core program areas",
    "YTI's work is organized around four core areas"
)

with open("src/pages/Programs.tsx", "w") as f:
    f.write(content)
