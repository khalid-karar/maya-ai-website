import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import Solutions from './pages/Solutions';
import GeoAI from './pages/GeoAI';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Governance from './pages/Governance';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capabilities" element={<GeoAI />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/deployment" element={<Governance />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />

            {/* Temporary legacy route support */}
            <Route path="/geoai" element={<GeoAI />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/national-programs" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;