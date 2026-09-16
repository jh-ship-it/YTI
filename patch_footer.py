import re

with open("src/components/Footer.tsx", "r") as f:
    content = f.read()

# Comment out privacy and terms
content = content.replace('<li>\n                    <Link to="/privacy"', '{/* <li>\n                    <Link to="/privacy"')
content = content.replace('Privacy\n                    </Link>\n                  </li>', 'Privacy\n                    </Link>\n                  </li> */}')
content = content.replace('<li>\n                    <Link to="/terms"', '{/* <li>\n                    <Link to="/terms"')
content = content.replace('Terms\n                    </Link>\n                  </li>', 'Terms\n                    </Link>\n                  </li> */}')

content = content.replace("Youth Trauma Institute is a nonprofit initiative in development. Organization status information will be updated upon final formation.", "YTI is currently being established as a nonprofit organization.")

with open("src/components/Footer.tsx", "w") as f:
    f.write(content)
