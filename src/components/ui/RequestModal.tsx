import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Lock } from 'lucide-react';
import content from '@/data/site-content.json';
import { cn } from '@/lib/utils';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  solutionTitle?: string;
  readinessType?: 'available' | 'pilot' | 'strategic';
}

export default function RequestModal({
  isOpen,
  onClose,
  solutionTitle,
  readinessType,
}: RequestModalProps) {
  const modalContent = content.pages.requestModal;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-maya-navy border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div>
                <div className="flex items-center gap-2 text-maya-gold mb-1">
                  <Lock size={14} />
                  <span className="text-[10px] font-mono uppercase tracking-widest">
                    Restricted Discussion
                  </span>
                </div>
                <h2 className="text-xl font-display font-bold text-white">
                  {modalContent.title}
                </h2>
                {solutionTitle && (
                  <p className="text-white/50 text-sm mt-1">
                    Re: {solutionTitle}
                  </p>
                )}
              </div>

              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Request Received
                  </h3>

                  <p className="text-white/60 max-w-sm">
                    {modalContent.success}
                  </p>

                  <button
                    onClick={onClose}
                    className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-bold"
                    type="button"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                        Company
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                        Role
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                        Sector
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-maya-navy text-white/50">
                          Select...
                        </option>
                        {(modalContent.options.sectors as Array<{value:string;label:string}>).map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-maya-navy">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                        Phone
                      </label>
                      <input
                        required
                        type="tel"
                        dir="ltr"
                        className={cn(
                          'w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors text-left'
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                      Area of Interest
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-maya-navy text-white/50">
                        Select...
                      </option>
                      {(modalContent.options.scopes as Array<{value:string;label:string}>).map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-maya-navy">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                      City / Country
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/60 block mb-2">
                      Require NDA before deeper discussion?
                    </label>
                    <div className="flex gap-6 flex-wrap">
                      {(modalContent.options.nda as Array<{value:string;label:string}>).map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="nda" value={opt.value} className="accent-maya-gold" />
                          <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                      Notes
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm focus:border-maya-gold outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-maya-gold text-maya-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors rounded disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-maya-navy/30 border-t-maya-navy rounded-full animate-spin" />
                    ) : (
                      modalContent.submit
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}