import re

with open("src/components/Navbar.tsx", "r") as f:
    content = f.read()

new_nav = '''const navigation = [
  { name: 'Mission', href: '/mission' },
  { name: 'Programs', href: '/programs' },
  { name: 'Data Initiative', href: '/data-initiative' },
  { name: 'For Organizations', href: '/clinicians' },
  { name: 'Research', href: '/research' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];'''

content = re.sub(r'const navigation = \[.*?\];', new_nav, content, flags=re.DOTALL)

content = content.replace(
    '''<Link to="/donate" className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-light hover:scale-105 transition-all">
            Get Involved
          </Link>''',
    '''<Link to="/donate" className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-light hover:scale-105 transition-all">
            Support YTI
          </Link>'''
)

# And in the mobile menu:
content = content.replace(
    '''<Link
                    to="/donate"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-primary/5 uppercase tracking-wide"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Involved
                  </Link>''',
    '''<Link
                    to="/donate"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-primary/5 uppercase tracking-wide"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support YTI
                  </Link>'''
)

with open("src/components/Navbar.tsx", "w") as f:
    f.write(content)
