import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const CONTEXT_OPTIONS = [
  { value: 'enterprise', label: 'Enterprise Operations' },
  { value: 'government', label: 'Government / Public Sector' },
  { value: 'infrastructure', label: 'Infrastructure & Field' },
  { value: 'compliance', label: 'Compliance & Risk' },
  { value: 'other', label: 'Other' },
];

const inputClass =
  'bg-white/5 border border-white/15 text-white placeholder-white/30 rounded-sm px-4 py-3 w-full text-sm focus:border-maya-gold/50 focus:outline-none focus:ring-1 focus:ring-maya-gold/30 transition-colors';

export default function BriefingForm() {
  const [form, setForm] = useState({
    name: '',
    org: '',
    email: '',
    context: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const encode = (data: Record<string, string>) =>
    Object.entries(data)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'briefing-request', ...form }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', org: '', email: '', context: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-maya-gold/30 bg-maya-gold/5 rounded-sm p-8 text-center">
        <p className="text-maya-gold font-semibold text-base">
          ✓ Your request has been received.
        </p>
        <p className="text-white/85 text-sm mt-2">
          Our team in Virginia or Riyadh will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 text-left"
      data-netlify="true"
      name="briefing-request"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="briefing-request" />
      <input type="hidden" name="bot-field" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          required
          autoComplete="name"
          placeholder="Your full name"
          value={form.name}
          onChange={set('name')}
          className={inputClass}
        />
        <input
          type="text"
          name="organization"
          required
          autoComplete="organization"
          placeholder="Organization name"
          value={form.org}
          onChange={set('org')}
          className={inputClass}
        />
      </div>

      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="your@email.com"
        value={form.email}
        onChange={set('email')}
        className={inputClass}
      />

      <select
        name="deploymentContext"
        required
        value={form.context}
        onChange={set('context')}
        className={`${inputClass} ${!form.context ? 'text-white/30' : 'text-white'}`}
      >
        <option value="" disabled className="bg-[#0b0816] text-white/50">
          Select your context...
        </option>
        {CONTEXT_OPTIONS.map((o) => (
          <option key={o.value} value={o.value} className="bg-[#0b0816] text-white">
            {o.label}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        rows={4}
        placeholder="Briefly describe your deployment context or question..."
        value={form.message}
        onChange={set('message')}
        className={`${inputClass} resize-none`}
      />

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again or email us at sales@mayaai.sa
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-maya-gold text-maya-navy hover:bg-white transition-colors font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Briefing Request
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}
