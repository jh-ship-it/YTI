import re

with open("src/pages/Donate.tsx", "r") as f:
    content = f.read()

new_form_content = '''          {/* Left Column: Pledge Options */}
          <div className="lg:col-span-7">
            <div className="bg-white border-t-4 border-secondary p-8 sm:p-12 shadow-sm border border-primary/10">
              <div className="text-center mb-10">
                <h3 className="font-display font-bold text-2xl text-primary mb-3">Support the Mission</h3>
                <p className="text-text-muted text-sm max-w-lg mx-auto leading-relaxed">
                  Youth Trauma Initiative is currently being established. While we configure our online giving infrastructure, our leadership team is actively organizing founding commitments and programmatic support.
                </p>
              </div>

              <div className="space-y-8">
                <div className="border border-primary/10 p-6 bg-accent/20">
                  <h4 className="font-bold text-primary mb-2 text-lg">Philanthropic Pledges</h4>
                  <p className="text-sm text-text-muted mb-4">
                    If you are interested in making a founding contribution to underwrite clinical access, training, or the Data Initiative, please contact our team to discuss your intended pledge.
                  </p>
                  <a href="mailto:giving@youthtraumainitiative.org" className="inline-flex items-center gap-2 bg-secondary text-white font-bold text-sm uppercase px-6 py-3 tracking-wider hover:bg-secondary-light transition-colors">
                    <Mail className="w-4 h-4" /> Email our Giving Team
                  </a>
                </div>

                <div className="border border-primary/10 p-6">
                  <h4 className="font-bold text-primary mb-2 text-lg">Organizational Status</h4>
                  <p className="text-sm text-text-muted mb-4">
                    YTI is currently in the formation stage. We will provide updates regarding 501(c)(3) tax-exempt status, fiscal sponsorship arrangements, and online donation processing capabilities as those details are finalized.
                  </p>
                  <p className="text-sm font-bold text-primary">
                    Important Note: Do not send checks or wire transfers until formal giving instructions and tax documents have been directly provided to you by an authorized YTI officer.
                  </p>
                </div>
                
              </div>
            </div>
          </div>'''

# We need to replace the entire Left Column from:
# {/* Left Column: Pledge Form */}
# up to:
# {/* Right Column: Major Gifts, DAF, & FAQ */}
start_str = '{/* Left Column: Pledge Form */}'
end_str = '{/* Right Column: Major Gifts, DAF, & FAQ */}'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_form_content + '\n\n          ' + content[end_idx:]

# Remove react hooks since they are unused
content = re.sub(r"import \{ useState, FormEvent \} from 'react';\n", "", content)
content = re.sub(r"import \{ useState \} from 'react';\n", "", content)

# Remove all state definitions inside the component
state_str = '''  const [frequency, setFrequency] = useState<'one-time' | 'monthly' | 'annual'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(250);
  const [customAmount, setCustomAmount] = useState('');
  const [designation, setDesignation] = useState('where-needed');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    dedicationType: 'none',
    dedicationName: ''
  });

  const presetAmounts = frequency === 'one-time' 
    ? [100, 250, 500, 1000, 5000]
    : [25, 50, 100, 250, 500];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const effectiveAmount = selectedAmount === 'custom' ? parseFloat(customAmount) || 0 : selectedAmount;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (effectiveAmount <= 0) return;
    setIsSubmitting(true);
    // Simulate pledge/donation submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };'''

content = content.replace(state_str, "")

with open("src/pages/Donate.tsx", "w") as f:
    f.write(content)
