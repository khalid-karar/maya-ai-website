import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';

// استيراد جميع الصفحات
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import GeoAI from './pages/GeoAI';
import NationalPrograms from './pages/NationalPrograms';
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
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/geoai" element={<GeoAI />} />
            <Route path="/national-programs" element={<NationalPrograms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company" element={<Company />} />
            <Route path="/governance" element={<Governance />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;