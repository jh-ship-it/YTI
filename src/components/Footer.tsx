import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Logo className="w-14 h-14 text-white shrink-0" />
              <div className="flex flex-col">
                <span className="font-display font-semibold text-2xl tracking-tight text-white leading-tight">
                  Youth Trauma Initiative
                </span>
                <span className="text-[10px] tracking-widest font-semibold text-white/70 uppercase mt-1">
                  Brighter Tomorrows for Braver Kids
                </span>
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-300 max-w-xs">
              Expanding global access to the evidence-based tools, training, data, and research needed to improve childhood trauma and PTSD care.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white font-display">Programs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/programs" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Clinical Access
                    </Link>
                  </li>
                  <li>
                    <Link to="/data-initiative" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Data Initiative
                    </Link>
                  </li>
                  <li>
                    <Link to="/global-access" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Global Capacity
                    </Link>
                  </li>
                  <li>
                    <Link to="/research" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Research
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white font-display">Organization</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      About & Leadership
                    </Link>
                  </li>
                  <li>
                    <Link to="/mission" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link to="/clinicians" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      For Clinicians
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white font-display">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/get-involved" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link to="/donate" className="text-sm leading-6 text-sun font-semibold hover:text-white transition-colors">
                      Donate & Philanthropy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white font-display">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/privacy" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to="/transparency" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Transparency
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-16">
          <div className="bg-white/5 p-4 sm:p-5 border border-white/10 rounded-lg text-xs leading-relaxed text-gray-300 max-w-4xl mb-8">
            <span className="font-bold text-white uppercase tracking-wider block mb-1">
              Crisis Disclaimer & Resources
            </span>
            Youth Trauma Initiative does not provide direct clinical services, psychiatric crisis intervention, or emergency medical care. If you, a child, or a family member is in immediate physical danger or experiencing a mental health emergency, please dial <strong>988</strong> (USA & Canada Suicide & Crisis Lifeline) or contact local emergency services immediately.
          </div>

          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Youth Trauma Initiative. All rights reserved. <br/>
            <span className="italic mt-2 block opacity-75">YTI is currently being established as a nonprofit organization.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
