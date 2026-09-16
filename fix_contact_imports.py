import re

with open("src/pages/Contact.tsx", "r") as f:
    content = f.read()

# Remove useState and FormEvent
content = re.sub(r"import \{ useState, FormEvent \} from 'react';\n", "", content)
content = re.sub(r"import \{ useState \} from 'react';\n", "", content)

# Remove state declaration
content = re.sub(r"const \[isSubmitting, setIsSubmitting\] = useState\(false\);\n\s*const \[status, setStatus\] = useState<'idle' \| 'submitted' \| 'error'>\('idle'\);\n", "", content)
content = re.sub(r"const handleSubmit.*?setStatus\('submitted'\);\n\s*\}, 1000\);\n\s*\};\n", "", content, flags=re.DOTALL)

with open("src/pages/Contact.tsx", "w") as f:
    f.write(content)
