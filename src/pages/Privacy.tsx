import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function Privacy() {
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
              <span className="text-xs text-maya-gold font-mono uppercase tracking-widest">Privacy Notice</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Privacy Notice</h1>
            <p className="text-white/60 leading-relaxed">Effective date: January 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl space-y-10 text-white/70 leading-relaxed">
          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">1. Who We Are</h2>
            <p>Maya AI, Inc. (Delaware, USA) and Maya AI KSA (Riyadh, KSA) operate this website and related services. References to "Maya AI," "we," or "our" refer to these entities operating jointly.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly through contact forms, including name, organization, email address, phone number, and the content of your inquiry. We do not collect personal data through cookies beyond standard analytics.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p>Information collected through contact forms is used solely to respond to your inquiry, evaluate potential engagements, and maintain records of institutional communications. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">4. Data Residency</h2>
            <p>Data submitted through <strong className="text-white">mayaai.net</strong> is processed and stored in the United States. Data submitted through <strong className="text-white">mayaai.sa</strong> is processed in accordance with applicable KSA data residency requirements under PDPL and SDAIA guidance.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">5. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at <a href="mailto:privacy@mayaai.net" className="text-maya-gold hover:text-white transition-colors">privacy@mayaai.net</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-white mb-3">6. Contact</h2>
            <p>For privacy inquiries, contact <a href="mailto:privacy@mayaai.net" className="text-maya-gold hover:text-white transition-colors">privacy@mayaai.net</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
