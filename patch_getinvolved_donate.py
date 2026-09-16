import re

with open("src/pages/GetInvolved.tsx", "r") as f:
    content = f.read()

# Replace the text about donation processing coming soon
content = content.replace(
    '''Direct donation processing is coming soon as we finalize our tax-exempt status. Please contact us to express early interest.''',
    '''Direct donation processing is now available. Your contribution directly supports our mission to expand pediatric trauma care globally.'''
)

# Change the link to /donate
content = content.replace(
    '''<Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Express Interest''',
    '''<Link to="/donate" className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary hover:text-secondary uppercase transition-colors group">
                  Make a Donation'''
)

with open("src/pages/GetInvolved.tsx", "w") as f:
    f.write(content)
