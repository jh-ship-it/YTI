import re

with open("src/pages/Home.tsx", "r") as f:
    content = f.read()

content = content.replace(
    '''Youth Trauma Initiative expands access to the clinical tools, training, research, and data clinicians need to identify and treat childhood trauma and PTSD.''',
    '''Youth Trauma Initiative helps children around the world receive better trauma and PTSD care by expanding access to the tools, training, data, research, and implementation support clinicians and child-serving systems need.'''
)

with open("src/pages/Home.tsx", "w") as f:
    f.write(content)
