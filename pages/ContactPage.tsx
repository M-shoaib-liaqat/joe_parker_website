
import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle2, Loader } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email using backend API (use relative path so it works on Vercel)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          serviceNeeded: formData.service,
          message: formData.message
        })
      });

      // guard against empty or non-JSON responses
      let data: any = {};
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        try {
          data = await response.json();
        } catch {
          // parsing failed; leave data empty
        }
      } else {
        // try reading text for debugging
        const text = await response.text();
        console.error('Non-JSON response from /api/contact:', text);
      }

      if (!response.ok) {
        throw new Error((data && data.message) || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'General Inquiry',
        message: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again or call us directly.');
      console.error('API error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-5xl font-bold text-brand-deep">Get Your Free Quote</h1>
          <p className="text-xl text-gray-600">
            Professional electrical services for your home or business. We respond to all inquiries within 2 hours. You will also receive an email copy of your submission (check your inbox/spam).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-brand-deep text-white p-10 rounded-3xl shadow-xl space-y-8">
              <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
              
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Call Us Directly</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xl font-bold hover:text-brand-electric">{BUSINESS_INFO.phone}</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail className="text-brand-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/60 text-sm">Email Us</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xl font-bold hover:text-brand-electric break-all">{BUSINESS_INFO.email}</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Clock className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Business Hours</p>
                  <p className="text-lg font-bold">Mon - Fri: 08:00 - 17:00</p>
                  <p className="text-brand-orange font-bold">24/7 Emergency Response</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Service Area</p>
                  <p className="text-lg font-bold">Essex & London Coverage</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-bold text-xl">Why wait?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600"><CheckCircle2 className="text-brand-success" size={18} /> No-obligation quotes</li>
                <li className="flex items-center gap-2 text-gray-600"><CheckCircle2 className="text-brand-success" size={18} /> NICEIC approved expertise</li>
                <li className="flex items-center gap-2 text-gray-600"><CheckCircle2 className="text-brand-success" size={18} /> Fast, friendly response</li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-20 space-y-6">
                <div className="bg-brand-success/10 text-brand-success w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-brand-deep">Thank You!</h2>
                <p className="text-xl text-gray-600">Your message has been sent successfully. One of our specialists will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-deep text-white px-8 py-3 rounded-lg font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="John Doe" 
                      className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      placeholder="07123 456789" 
                      className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      id="email" 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="john@example.com" 
                      className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-gray-700">Service Needed</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric"
                    >
                      <option>General Inquiry</option>
                      <option>EICR Certificate</option>
                      <option>Emergency Call Out</option>
                      <option>House Rewiring</option>
                      <option>EV Charger Install</option>
                      <option>Commercial Project</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700">Message / Project Details</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="Tell us about your requirements..." 
                    className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-orange hover:bg-orange-600 disabled:opacity-50 text-white p-6 rounded-xl font-bold text-xl transition-all shadow-xl shadow-orange-100 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy. Your data is secure.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
