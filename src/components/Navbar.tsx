import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navigation = [
  { name: 'Mission', href: '/mission' },
  { name: 'Programs', href: '/programs' },
  { name: 'Data Initiative', href: '/data-initiative' },
  { name: 'Global Access', href: '/global-access' },
  { name: 'Research', href: '/research' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-4">
            <span className="sr-only">Youth Trauma Institute</span>
            <Logo className="w-14 h-14 text-primary shrink-0" />
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-semibold text-2xl tracking-tight text-primary leading-tight">
                Youth Trauma Institute
              </span>
              <span className="text-[10px] tracking-widest font-semibold text-secondary uppercase mt-0.5">
                Brighter Tomorrows for Braver Kids
              </span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-muted"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-colors hover:text-secondary ${
                location.pathname === item.href ? 'text-secondary' : 'text-text-muted'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          <Link to="/contact" className="text-sm font-semibold leading-6 text-text-muted hover:text-primary transition-colors">
            Contact
          </Link>
          <Link
            to="/get-involved"
            className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all"
          >
            Support YTI
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-text/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <Logo className="w-10 h-10 text-primary shrink-0" />
                <span className="font-display font-semibold text-xl text-primary">Youth Trauma Institute</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-text-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-100">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:bg-background"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:bg-background"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="/get-involved"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-secondary hover:bg-background"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support YTI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
