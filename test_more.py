import urllib.request
urls = [
    "https://images.unsplash.com/photo-1581056771107-11a4e09d57a9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
]
for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print(f"OK: {u}")
    except:
        print(f"FAIL: {u}")
