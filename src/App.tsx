import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import Solutions from './pages/Solutions';
import GeoAI from './pages/GeoAI';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Governance from './pages/Governance';

const Leadership = lazy(() => import('./pages/Leadership'));
const Trust = lazy(() => import('./pages/Trust'));
const Careers = lazy(() => import('./pages/Careers'));
const Insights = lazy(() => import('./pages/Insights'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-screen bg-maya-navy" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capabilities" element={<GeoAI />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/deployment" element={<Governance />} />
            <Route path="/company" element={<Company />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trust" element={<Trust />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Legacy route support */}
            <Route path="/geoai" element={<GeoAI />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/national-programs" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;