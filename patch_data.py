import re

with open("src/pages/DataInitiative.tsx", "r") as f:
    content = f.read()

content = content.replace(
    '''YTI intends to use computational modeling, statistical analysis, and machine learning as research tools to study large, complex trauma datasets. These techniques help researchers find patterns in data that would be invisible to the human eye.''',
    '''YTI intends to eventually use computational modeling, statistical analysis, and machine learning as research tools to study large, complex trauma datasets. If employed, these techniques may help researchers identify complex patterns in treatment response and symptom trajectories.'''
)

content = content.replace(
    '''Artificial intelligence and machine learning will be used solely as backend research and analytical tools to understand aggregate data. AI does not, and will not, diagnose children or prescribe treatment. Clinical diagnosis and treatment remain the strict responsibility of appropriately qualified human professionals.''',
    '''Human judgment stays central. Artificial intelligence and machine learning may be used solely as research and analytical tools—not substitutes for qualified clinical care. AI does not independently diagnose children or prescribe treatment. Clinical diagnosis and treatment remain the strict responsibility of appropriately qualified human professionals.'''
)

content = content.replace(
    '''<PageHero 
        label="Planned Initiative"
        title="Building the data infrastructure for better trauma care."
        subtitle="The YTI Data Initiative is a planned effort intended to help child-serving programs use measurement-based care and data more effectively to understand trauma treatment, progress, and clinically meaningful outcomes."
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" layout="centered-image"
      />''',
    '''<PageHero 
        label="Planned Initiative"
        title="Building the data infrastructure for better trauma care."
        subtitle="The YTI Data Initiative is a planned effort intended to help child-serving programs use measurement-based care and data more effectively to understand trauma treatment, progress, and clinically meaningful outcomes."
        layout="text-only"
      />'''
)

with open("src/pages/DataInitiative.tsx", "w") as f:
    f.write(content)
