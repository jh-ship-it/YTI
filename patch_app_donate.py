import re

with open("src/App.tsx", "r") as f:
    content = f.read()

content = content.replace(
    '<Route path="get-involved" element={<GetInvolved />} />',
    '<Route path="get-involved" element={<GetInvolved />} />\n          <Route path="donate" element={<PlaceholderPage title="Donate Portal" />} />'
)

with open("src/App.tsx", "w") as f:
    f.write(content)
