import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import { PageWrapper } from './components/ui/PageWrapper';

import Home from './pages/Home';
import Solutions from './pages/Solutions';
import GeoAI from './pages/GeoAI';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Governance from './pages/Governance';

const Leadership = lazy(() => import('./pages/Leadership'));
const Trust      = lazy(() => import('./pages/Trust'));
const Careers    = lazy(() => import('./pages/Careers'));
const Insights   = lazy(() => import('./pages/Insights'));
const Privacy    = lazy(() => import('./pages/Privacy'));
const Terms      = lazy(() => import('./pages/Terms'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                 element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/capabilities"     element={<PageWrapper><GeoAI /></PageWrapper>} />
        <Route path="/solutions"        element={<PageWrapper><Solutions /></PageWrapper>} />
        <Route path="/deployment"       element={<PageWrapper><Governance /></PageWrapper>} />
        <Route path="/company"          element={<PageWrapper><Company /></PageWrapper>} />
        <Route path="/leadership"       element={<PageWrapper><Leadership /></PageWrapper>} />
        <Route path="/contact"          element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/trust"            element={<PageWrapper><Trust /></PageWrapper>} />
        <Route path="/careers"          element={<PageWrapper><Careers /></PageWrapper>} />
        <Route path="/insights"         element={<PageWrapper><Insights /></PageWrapper>} />
        <Route path="/privacy"          element={<PageWrapper><Privacy /></PageWrapper>} />
        <Route path="/terms"            element={<PageWrapper><Terms /></PageWrapper>} />

        {/* Legacy route support */}
        <Route path="/geoai"            element={<PageWrapper><GeoAI /></PageWrapper>} />
        <Route path="/governance"       element={<PageWrapper><Governance /></PageWrapper>} />
        <Route path="/national-programs" element={<PageWrapper><Home /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className="min-h-screen bg-maya-navy" />}>
            <AnimatedRoutes />
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
