/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import GeoAI from './pages/GeoAI';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';

import NationalPrograms from './pages/NationalPrograms';

// Placeholder pages for routing structure
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-maya-navy">
    <div className="text-center">
      <h1 className="text-4xl font-display text-white mb-4">{title}</h1>
      <p className="text-white/50">Module under construction.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/national-programs" element={<NationalPrograms />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/geoai" element={<GeoAI />} />
            <Route path="/enterprise-agents" element={<PlaceholderPage title="Enterprise Agents" />} />
            <Route path="/company" element={<Contact />} />
            <Route path="/about" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
