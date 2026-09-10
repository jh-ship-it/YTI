import urllib.request
import re
import glob
import os

urls = set()
for root, _, files in os.walk("src"):
    for file in files:
        if file.endswith(".tsx"):
            with open(os.path.join(root, file), "r") as f:
                content = f.read()
                found = re.findall(r'https://images\.unsplash\.com/[^\'"\)\s]+', content)
                for u in found:
                    urls.add(u)

for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print(f"OK: {u}")
    except Exception as e:
        print(f"FAIL: {u} ({e})")
