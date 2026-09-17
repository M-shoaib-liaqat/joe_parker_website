import React, { useState } from 'react';
import { CheckCircle2, Loader, Send } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const PROBLEMS = [
  'Emergency / No Power',
  'EICR Certificate',
  'House Rewiring',
  'Consumer Unit Replacement',
  'EV Charger Installation',
  'Commercial Electrical Work',
  'Something Else',
];

interface QuickQuoteFormProps {
  /** Pre-selects a problem type relevant to the page this form is embedded on. */
  defaultProblem?: string;
}

/**
 * 3-field quote widget (Name, Phone, Problem) for embedding on money pages —
 * lighter-weight than the full ContactPage form. Posts to the same /api/contact
 * endpoint (email omitted; the endpoint accepts that).
 */
const QuickQuoteForm: React.FC<QuickQuoteFormProps> = ({ defaultProblem }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState(defaultProblem || PROBLEMS[0]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          phone,
          serviceNeeded: problem,
          message: `Quick quote request via website — problem: ${problem}`,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || 'Failed to send request');

      trackEvent('form_submit', { form: 'quick_quote', problem });
      setSubmitted(true);
      setName('');
      setPhone('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-brand-success/10 border border-brand-success/30 rounded-2xl p-6 text-center space-y-2">
        <CheckCircle2 className="mx-auto text-brand-success" size={32} />
        <p className="font-bold text-brand-deep">Got it — we'll call you back shortly.</p>
        <button onClick={() => setSubmitted(false)} className="text-sm text-brand-electric font-semibold underline">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
      {error && <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-200">{error}</div>}
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric"
        />
        <input
          type="tel"
          required
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric"
        />
      </div>
      <select
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        className="w-full p-3 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric"
      >
        {PROBLEMS.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-orange hover:bg-orange-600 disabled:opacity-50 text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
      >
        {loading ? <Loader className="animate-spin" size={18} /> : <Send size={18} />}
        {loading ? 'Sending...' : 'Get My Free Quote'}
      </button>
    </form>
  );
};

export default QuickQuoteForm;
