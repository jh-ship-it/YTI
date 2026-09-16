import re

with open("src/pages/FAQ.tsx", "r") as f:
    content = f.read()

content = content.replace("import { useState } from 'react';", "import { useState } from 'react';\nimport SEO from '../components/SEO';")
content = content.replace("<div className=\"py-24 sm:py-32 bg-background\">", "<div className=\"py-24 sm:py-32 bg-background\">\n      <SEO title=\"FAQ\" description=\"Frequently asked questions about Youth Trauma Institute's mission, programs, and approach.\" />")

button_old = """                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left p-6 focus:outline-none"
                >"""
button_new = """                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >"""

content = content.replace(button_old, button_new)

answer_old = """                {openIndex === index && (
                  <div className="px-6 pb-6">"""
answer_new = """                {openIndex === index && (
                  <div className="px-6 pb-6" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`}>"""
                  
content = content.replace(answer_old, answer_new)

with open("src/pages/FAQ.tsx", "w") as f:
    f.write(content)
