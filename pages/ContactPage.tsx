
import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-5xl font-bold text-brand-deep">Get Your Free Quote</h1>
          <p className="text-xl text-gray-600">
            Professional electrical services for your home or business. We respond to all inquiries within 2 hours.
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
                <div>
                  <p className="text-white/60 text-sm">Email Us</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xl font-bold hover:text-brand-electric">{BUSINESS_INFO.email}</a>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input type="tel" required placeholder="07123 456789" className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input type="email" required placeholder="john@example.com" className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Service Needed</label>
                    <select className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric">
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
                  <label className="text-sm font-bold text-gray-700">Message / Project Details</label>
                  <textarea rows={5} placeholder="Tell us about your requirements..." className="w-full p-4 rounded-xl bg-brand-light border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-electric"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-orange hover:bg-orange-600 text-white p-6 rounded-xl font-bold text-xl transition-all shadow-xl shadow-orange-100 flex items-center justify-center gap-3">
                  Submit Request
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
