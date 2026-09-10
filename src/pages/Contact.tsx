import { FormEvent, useState } from 'react';
import { Mail, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('submitted');
  };

  return (
    <div className="py-24 sm:py-32 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display text-center">
            Contact Us
          </h1>
          <p className="mt-4 text-lg leading-8 text-text-muted text-center">
            Connect with Youth Trauma Institute to discuss partnerships, funding, or research.
          </p>

          <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 shadow-sm ring-1 ring-primary/5">
            {status === 'submitted' ? (
              <div className="text-center py-12">
                <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary font-display mb-2">Message Received</h3>
                <p className="text-text-muted">
                  Thank you for reaching out. A member of our team will review your inquiry and respond shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-secondary font-semibold hover:text-secondary-light"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-primary">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="block w-full rounded-md border-0 py-2 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-primary">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="block w-full rounded-md border-0 py-2 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium leading-6 text-primary">
                      Organization
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        className="block w-full rounded-md border-0 py-2 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium leading-6 text-primary">
                      Role / Title
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="role"
                        id="role"
                        className="block w-full rounded-md border-0 py-2 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-primary">
                      Country
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="country"
                        id="country"
                        className="block w-full rounded-md border-0 py-2 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium leading-6 text-primary">
                      Inquiry Type
                    </label>
                    <div className="mt-2">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        className="block w-full rounded-md border-0 py-2 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                      >
                        <option>General Contact</option>
                        <option>Organization / Clinical Partnership</option>
                        <option>Research Collaboration</option>
                        <option>Funder / Donor Interest</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-primary">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="block w-full rounded-md border-0 py-2 px-3 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="bg-accent/50 p-4 rounded-lg flex gap-3 items-start border border-primary/10">
                  <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-primary font-medium">
                    Please do not submit patient-identifying or confidential clinical information through this form.
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all"
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
