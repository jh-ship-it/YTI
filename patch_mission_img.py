import re

with open("src/pages/Mission.tsx", "r") as f:
    content = f.read()

content = content.replace("1464822759023-fed622ff2c3b", "1509099836639-05bf910d6560")

with open("src/pages/Mission.tsx", "w") as f:
    f.write(content)
