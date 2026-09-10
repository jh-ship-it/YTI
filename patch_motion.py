import os
import re

for filename in ["src/pages/Home.tsx", "src/pages/Mission.tsx", "src/components/PageHero.tsx"]:
    with open(filename, "r") as f:
        content = f.read()
    
    # Remove import { motion } from 'motion/react';
    content = re.sub(r"import\s+\{\s*motion\s*\}\s+from\s+['\"]motion/react['\"];\s*\n", "", content)
    
    # Replace <motion.div ...> with <div ...> ignoring attributes that start with initial, whileInView, viewport, transition, variants, etc.
    # Actually, simpler is to just use regex to remove the motion. part and the animation props
    content = content.replace("<motion.div", "<div")
    content = content.replace("</motion.div>", "</div>")
    
    content = content.replace("<motion.section", "<section")
    content = content.replace("</motion.section>", "</section>")
    
    content = content.replace("<motion.h1", "<h1")
    content = content.replace("</motion.h1>", "</h1>")
    
    content = content.replace("<motion.h2", "<h2")
    content = content.replace("</motion.h2>", "</h2>")
    
    content = content.replace("<motion.p", "<p")
    content = content.replace("</motion.p>", "</p>")
    
    content = content.replace("<motion.span", "<span")
    content = content.replace("</motion.span>", "</span>")
    
    content = content.replace("<motion.li", "<li")
    content = content.replace("</motion.li>", "</li>")
    
    content = content.replace("<motion.ul", "<ul")
    content = content.replace("</motion.ul>", "</ul>")
    
    # Remove animation props
    content = re.sub(r'\s+initial=\{[^}]+\}', '', content)
    content = re.sub(r'\s+whileInView=\{[^}]+\}', '', content)
    content = re.sub(r'\s+viewport=\{[^}]+\}', '', content)
    content = re.sub(r'\s+transition=\{[^}]+\}', '', content)
    content = re.sub(r'\s+variants=\{[^}]+\}', '', content)
    
    with open(filename, "w") as f:
        f.write(content)

