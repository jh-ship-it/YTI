with open("src/pages/Contact.tsx", "w") as f:
    f.write("""import { FormEvent, useState } from 'react';
import { Mail, ShieldAlert } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        setStatus('submitted');
    }, 800);
  };

  return (
    <div className="bg-background pb-24 sm:pb-32">
      <PageHero 
        label="Contact Us"
        title="Connect with Youth Trauma Institute."
        subtitle="Discuss partnerships, funding, or research opportunities."
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="mx-auto max-w-2xl">
          
          <div className="bg-white border-t-4 border-secondary p-8 sm:p-12 shadow-sm">
            {status === 'submitted' ? (
              <div className="text-center py-12">
                <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary font-display mb-2">Message sent.</h3>
                <p className="text-text-muted">
                  Thank you for reaching out. Our team will review your inquiry and follow up.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-secondary font-bold hover:text-secondary-light uppercase tracking-wide text-sm border-b-2 border-secondary/30 pb-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold tracking-wide leading-6 text-primary uppercase">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="block w-full border-0 py-2.5 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 bg-accent/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold tracking-wide leading-6 text-primary uppercase">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="block w-full border-0 py-2.5 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 bg-accent/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-bold tracking-wide leading-6 text-primary uppercase">
                      Organization
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        className="block w-full border-0 py-2.5 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 bg-accent/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-bold tracking-wide leading-6 text-primary uppercase">
                      Role / Title
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="role"
                        id="role"
                        className="block w-full border-0 py-2.5 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 bg-accent/20"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-bold tracking-wide leading-6 text-primary uppercase">
                      Country
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="country"
                        id="country"
                        className="block w-full border-0 py-2.5 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 bg-accent/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-bold tracking-wide leading-6 text-primary uppercase">
                      Reason for contact
                    </label>
                    <div className="mt-2">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        className="block w-full border-0 py-2.5 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 bg-accent/20"
                      >
                        <option>General inquiry</option>
                        <option>Funding</option>
                        <option>Clinical implementation</option>
                        <option>Research</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold tracking-wide leading-6 text-primary uppercase">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="block w-full border-0 py-2.5 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 bg-accent/20"
                    />
                  </div>
                </div>

                {/* Honeypot field for basic spam protection */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="bg-primary/5 p-4 flex gap-3 items-start border-l-2 border-secondary">
                  <ShieldAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm text-primary font-medium">
                    Please do not submit patient-identifying or confidential clinical information through this form.
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="bg-secondary px-8 py-3.5 text-sm font-bold tracking-wide text-white hover:bg-secondary-light transition-colors uppercase"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
""")
