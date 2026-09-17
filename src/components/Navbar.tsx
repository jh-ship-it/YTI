import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navigation = [
  { name: 'Mission', href: '/mission' },
  { name: 'Programs', href: '/programs' },
  { name: 'Data Initiative', href: '/data-initiative' },
  { name: 'For Organizations', href: '/clinicians' },
  { name: 'Research', href: '/research' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50 border-b border-accent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Youth Trauma Initiative</span>
            {/* Horizontal lockup */}
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10 text-primary shrink-0" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-primary leading-none">
                  Youth Trauma Initiative
                </span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-muted hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-semibold leading-6 transition-colors hover:text-secondary ${
                  isActive ? 'text-secondary' : 'text-text-muted'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          <Link 
            to="/donate"
            className="rounded-full bg-sun px-6 py-2.5 text-sm font-bold tracking-wide text-primary shadow-sm hover:bg-sun/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun transition-colors"
          >
            Support YTI
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
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
                <div className="flex items-center gap-2">
                <Logo className="h-8 w-8 text-primary shrink-0" />
                <span className="font-display font-bold text-lg tracking-tight text-primary leading-none">
                  Youth Trauma Initiative
                </span>
              </div>
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
                    to="/donate"
                    className="-mx-3 block rounded-lg bg-sun/10 px-3 py-2.5 text-base font-bold leading-7 text-primary hover:bg-sun/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support YTI
                  </Link>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </header>
  );
}
