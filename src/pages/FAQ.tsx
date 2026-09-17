import { useState } from 'react';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What does Youth Trauma Initiative do?",
    answer: "YTI works to expand access to the evidence-based tools, training, data, research, and implementation support needed to improve childhood-trauma and PTSD care."
  },
  {
    question: "Who can YTI work with?",
    answer: "Potential partners include clinicians, behavioral-health organizations, hospitals, schools, universities, nonprofits, government agencies, child advocacy organizations, child welfare and juvenile justice systems, and qualified international programs."
  },
  {
    question: "Does YTI provide therapy directly?",
    answer: "YTI's primary role is to expand access, strengthen systems, support research, and build clinical capacity. Clinical diagnosis and treatment must be provided by appropriately qualified professionals."
  },
  {
    question: "Does YTI support only one trauma assessment?",
    answer: "No. YTI is intended to be vendor- and tool-neutral and may support evidence-based resources appropriate to the population and program."
  },
  {
    question: "Is YTI international?",
    answer: "The mission is global. International programs may be developed with qualified partners and appropriate clinical, legal, research, privacy, safeguarding, and financial controls."
  },
  {
    question: "What is the Youth Trauma Data Initiative?",
    answer: "It is a planned research and implementation effort focused on measurement-based care, outcomes analysis, multi-site data, and responsible advanced analytics to improve understanding of childhood trauma and PTSD."
  },
  {
    question: "Is AI making diagnoses?",
    answer: "No. AI and machine learning may be used as research or analytical tools. Clinical diagnosis and treatment decisions remain subject to appropriate evidence, validation, professional standards, and qualified human oversight."
  },
  {
    question: "Can private practices receive support?",
    answer: "Potentially. Support for for-profit providers should be tied to a defined charitable or public purpose rather than simply subsidizing normal commercial operations."
  },
  {
    question: "Can funding support forensic programs?",
    answer: "Potentially, when the activity primarily serves a charitable class or public purpose, such as child advocacy, child welfare, juvenile justice, indigent youth, or bona fide research."
  },
  {
    question: "How can I get involved?",
    answer: "Organizations can inquire about partnerships or program support. Researchers can explore collaboration. Foundations, companies, government partners, and individuals can help fund the mission."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-24 sm:py-32 bg-background">
      <SEO title="FAQ" description="Frequently asked questions about Youth Trauma Initiative's mission, programs, and approach." />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Learn more about Youth Trauma Initiative's mission, programs, and approach.
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-16">
          <dl className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm ring-1 ring-primary/5 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-semibold text-primary">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDown
                      className={`h-5 w-5 text-secondary transition-transform duration-200 ${
                        openIndex === index ? '-rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`}>
                    <p className="text-text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </dl>

          {/* Bottom Support & Crisis Guidance */}
          <div className="mt-16 bg-white p-8 border border-primary/10 rounded-2xl shadow-sm text-center space-y-4">
            <h2 className="text-xl font-display font-bold text-primary">Still have questions?</h2>
            <p className="text-text-muted text-sm max-w-md mx-auto">
              Our team is pleased to connect with clinicians, researchers, and philanthropic partners regarding program details and technical partnerships.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white text-xs uppercase font-bold tracking-wider px-6 py-3 hover:bg-primary-light transition-colors"
              >
                Reach Out to Our Team
              </a>
            </div>
            <p className="text-xs text-text-muted border-t border-primary/10 pt-4 mt-4">
              <strong>Emergency Notice:</strong> If a child is experiencing an immediate psychiatric emergency, please dial or text <strong>988</strong> (USA & Canada Suicide & Crisis Lifeline) or contact local emergency services immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
