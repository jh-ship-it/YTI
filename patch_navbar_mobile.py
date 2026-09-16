import re

with open("src/components/Navbar.tsx", "r") as f:
    content = f.read()

# Replace the entire mobile menu rendering with a dialog approach
mobile_menu_old = """      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-text/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Logo variant="horizontal" className="h-10 w-auto text-primary" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-accent">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-background transition-colors ${
                          isActive ? 'text-secondary bg-background/50' : 'text-text'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="py-6">
                  <Link
                    to="/get-involved"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-secondary hover:bg-background transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support YTI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}"""

mobile_menu_new = """      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-text/20 backdrop-blur-sm" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
          <dialog 
            open
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10 shadow-2xl m-0 max-h-screen h-full"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Logo variant="horizontal" className="h-10 w-auto text-primary" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-text-muted hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
                autoFocus
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-accent">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset ${
                          isActive ? 'text-secondary bg-background/50' : 'text-text'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="py-6">
                  <Link
                    to="/get-involved"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-secondary hover:bg-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support YTI
                  </Link>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      )}"""

content = content.replace(mobile_menu_old, mobile_menu_new)

with open("src/components/Navbar.tsx", "w") as f:
    f.write(content)
