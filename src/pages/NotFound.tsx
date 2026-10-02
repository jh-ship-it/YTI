import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, BookOpen, Heart, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 px-6 lg:px-8 bg-background">
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist on the Youth Trauma Initiative website."
      />

      <div className="max-w-xl text-center space-y-8">
        <div className="w-16 h-1 bg-secondary mx-auto"></div>
        
        <div>
          <p className="text-sm font-bold tracking-[0.25em] text-secondary uppercase">Error 404</p>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-primary mt-3">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-text-muted leading-relaxed">
            The page or resource you requested may have moved or is no longer available. Explore our primary programs or reach out to our team below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            to="/programs"
            className="p-4 bg-white border border-primary/10 hover:border-secondary transition-colors flex items-center gap-3 shadow-xs"
          >
            <BookOpen className="w-5 h-5 text-secondary shrink-0" />
            <div>
              <p className="font-bold text-sm text-primary">Our Programs</p>
              <p className="text-xs text-text-muted">Explore clinical initiatives</p>
            </div>
          </Link>

          <Link
            to="/donate"
            className="p-4 bg-white border border-primary/10 hover:border-secondary transition-colors flex items-center gap-3 shadow-xs"
          >
            <Heart className="w-5 h-5 text-sun shrink-0" />
            <div>
              <p className="font-bold text-sm text-primary">Support YTI</p>
              <p className="text-xs text-text-muted">Philanthropic giving</p>
            </div>
          </Link>

          <Link
            to="/clinicians"
            className="p-4 bg-white border border-primary/10 hover:border-secondary transition-colors flex items-center gap-3 shadow-xs"
          >
            <Home className="w-5 h-5 text-secondary shrink-0" />
            <div>
              <p className="font-bold text-sm text-primary">For Organizations</p>
              <p className="text-xs text-text-muted">Eligibility & partnership</p>
            </div>
          </Link>

          <Link
            to="/contact"
            className="p-4 bg-white border border-primary/10 hover:border-secondary transition-colors flex items-center gap-3 shadow-xs"
          >
            <Mail className="w-5 h-5 text-secondary shrink-0" />
            <div>
              <p className="font-bold text-sm text-primary">Contact Team</p>
              <p className="text-xs text-text-muted">Direct inquiries</p>
            </div>
          </Link>
        </div>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider hover:text-secondary transition-colors border-b-2 border-primary/20 pb-1"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

