/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Programs from './pages/Programs';
import DataInitiative from './pages/DataInitiative';
import GlobalAccess from './pages/GlobalAccess';
import Clinicians from './pages/Clinicians';
import Research from './pages/Research';
import GetInvolved from './pages/GetInvolved';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Placeholder components for legal/minor pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold font-display text-primary">{title}</h1>
    <p className="mt-6 text-lg text-text-muted">Content coming soon.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mission" element={<Mission />} />
          <Route path="programs" element={<Programs />} />
          <Route path="data-initiative" element={<DataInitiative />} />
          <Route path="global-access" element={<GlobalAccess />} />
          <Route path="clinicians" element={<Clinicians />} />
          <Route path="research" element={<Research />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="terms" element={<PlaceholderPage title="Terms of Use" />} />
          <Route path="transparency" element={<PlaceholderPage title="Transparency" />} />
          <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
