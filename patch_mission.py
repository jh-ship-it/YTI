import re

with open("src/pages/Mission.tsx", "r") as f:
    content = f.read()

content = content.replace('bg-white rounded-3xl p-8 sm:p-12 shadow-sm ring-1 ring-primary/5', 'bg-white p-8 sm:p-12 border-l-4 border-secondary shadow-sm ring-1 ring-primary/5')

content = content.replace(
    '''imageUrl="https://images.unsplash.com/photo-1509099836639-05bf910d6560?auto=format&fit=crop&q=80&w=1200"''',
    '''layout="text-only"'''
)

with open("src/pages/Mission.tsx", "w") as f:
    f.write(content)
