import re

with open("src/components/Navbar.tsx", "r") as f:
    content = f.read()

# Desktop Donate Button
content = content.replace(
    '''<div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          <Link 
            to="/get-involved"
            className="rounded-full bg-secondary px-6 py-2.5 text-sm font-bold tracking-wide text-white shadow-sm hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors"
          >
            Support YTI
          </Link>
        </div>''',
    '''<div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          <Link 
            to="/donate"
            className="rounded-full bg-sun px-6 py-2.5 text-sm font-bold tracking-wide text-primary shadow-sm hover:bg-sun/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun transition-colors"
          >
            Donate
          </Link>
        </div>'''
)

# Mobile Donate Button
content = content.replace(
    '''<div className="py-6">
                  <Link
                    to="/get-involved"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-secondary hover:bg-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support YTI
                  </Link>
                </div>''',
    '''<div className="py-6">
                  <Link
                    to="/donate"
                    className="-mx-3 block rounded-lg bg-sun/10 px-3 py-2.5 text-base font-bold leading-7 text-primary hover:bg-sun/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Donate
                  </Link>
                </div>'''
)

with open("src/components/Navbar.tsx", "w") as f:
    f.write(content)
