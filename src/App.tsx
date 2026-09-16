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
import Transparency from './pages/Transparency';

import Donate from './pages/Donate';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

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
          <Route path="donate" element={<Donate />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="transparency" element={<Transparency />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
