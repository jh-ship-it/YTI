import re

with open("src/pages/GetInvolved.tsx", "r") as f:
    content = f.read()

# Change $50,000 grant
content = content.replace(
    "A $50,000 grant could subsidize access to our assessment platform, clinical training, and dedicated implementation support for 10 under-resourced community health clinics for a year.",
    "A program grant could help multiple under-resourced clinics obtain assessment access, training, and implementation support."
)

# Change health department
content = content.replace(
    "Example: A regional health department partnering with YTI to roll out standardized PTSD screening protocols across their public school systems, receiving custom implementation guidance and data dashboards.",
    "Illustrative Model: A regional health department partnering with YTI to establish standardized trauma screening protocols across their public school systems, receiving implementation guidance and training support."
)

# Change academic medical center
content = content.replace(
    "Example: A major children's hospital joining our data initiative, contributing de-identified treatment outcomes to our research pool while gaining access to our aggregate analytics tools.",
    "Illustrative Model: A major children's hospital participating in a shared clinical research network, contributing de-identified treatment outcomes to build the evidence base for pediatric trauma care."
)

with open("src/pages/GetInvolved.tsx", "w") as f:
    f.write(content)
