import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function Terms() {
  return (
    <div className="w-full bg-maya-navy min-h-screen pt-32 md:pt-36 pb-24">
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0816]">
        <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-maya-gold/30 rounded-full bg-maya-gold/10 mb-6">
              <Shield size={14} className="text-maya-gold" />
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">Terms of Use</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Terms of Use</h1>
            <p className="text-white/60 leading-relaxed">Effective date: January 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl space-y-10 text-white/70 leading-relaxed">
          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">1. Acceptance</h2>
            <p>By accessing this website, you agree to these Terms of Use. If you do not agree, do not use this site.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">2. Ownership</h2>
            <p>All content on this website, including text, graphics, and code, is the property of Maya AI, Inc. or its affiliates and is protected by applicable intellectual property laws. Unauthorized reproduction is prohibited.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">3. Permitted Use</h2>
            <p>This website is provided for informational and business engagement purposes only. You may not use this site for any unlawful purpose, to gather competitive intelligence through automated means, or to misrepresent your identity or affiliation.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">4. No Warranty</h2>
            <p>This site is provided "as is" without warranties of any kind. Maya AI makes no representations regarding the accuracy, completeness, or suitability of the information contained herein.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">5. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Maya AI, Inc. and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">6. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Delaware, USA, for mayaai.net, and the laws of the Kingdom of Saudi Arabia for mayaai.sa.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">7. Contact</h2>
            <p>For legal inquiries, contact <a href="mailto:legal@mayaai.net" className="text-maya-gold hover:text-white transition-colors">legal@mayaai.net</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
