import { useState } from 'react';
import { Send, Check, Mail, Phone, MapPin } from 'lucide-react';
import apiClient from '../api/client';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg('');

    try {
      // API request to public submission endpoint
      const response = await apiClient.post('/leads', {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        message: `Business: ${formState.business}\n\nObjectives:\n${formState.details}`,
      });

      if (response.data.success) {
        setIsSubmitted(true);
        setStatusMsg('Your request has been received! We will contact you within 4 hours.');
        // Reset form
        setFormState({ name: '', business: '', email: '', phone: '', details: '' });
      } else {
        setIsSubmitted(false);
        setStatusMsg('Submission failed. Please try again or contact us directly.');
      }
    } catch (err: any) {
      console.error('[Lead Sync Error] Submission failed:', err);
      setIsSubmitted(false);
      // Show user-friendly network error (NOT a fake success)
      const errMsg = err?.response?.data?.message;
      setStatusMsg(errMsg || 'Network error. Please try again or WhatsApp us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 md:py-32 px-6 md:px-12 bg-page-bg text-text-primary transition-theme border-b border-border-color overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Editorial Typography & Links */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <span className="text-xs font-mono tracking-widest text-accent-green font-bold uppercase">
            08 // CONNECT WITH US
          </span>
          
          <h2 className="font-sans font-extrabold text-5xl md:text-7xl text-text-primary leading-[0.9] tracking-tight transition-theme">
            Engineered for <br />
            absolute <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-cyan-400 font-extrabold tracking-tight">scale.</span>
          </h2>

          <p className="text-base md:text-lg font-sans text-text-secondary max-w-xl leading-relaxed font-medium transition-theme">
            Ready to secure actual business outcomes? Connect directly. We will evaluate your search traffic index, audit your conversion pipeline, and map out a revenue acceleration blueprint built around your metrics targets.
          </p>

          {/* Premium Operations Hub Image */}
          <div className="w-full h-48 rounded-3xl overflow-hidden border border-border-color shadow-lg my-6 bg-page-bg-sec transition-theme">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
              alt="KiwiClicks Enterprise Operations Center" 
              loading="lazy"
              className="w-full h-full object-cover object-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Operational Nodes */}
          <div className="pt-6 space-y-4">
            <h4 className="text-[9.5px] font-mono font-bold uppercase tracking-widest text-text-secondary transition-theme">
              DIRECT DESK PIPELINES:
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left font-sans text-xs">
              <a href="mailto:bandana.k.official@gmail.com" className="flex items-center gap-3 p-3 rounded-2xl bg-card-bg border border-border-color hover:border-accent-green transition-all group">
                <div className="w-8 h-8 rounded-xl bg-page-bg-sec border border-border-color flex items-center justify-center text-text-secondary group-hover:text-accent-green transition-theme">
                  <Mail size={13} />
                </div>
                <div>
                  <span className="text-[8px] font-mono text-text-secondary/50 uppercase font-bold block">Founder Desk</span>
                  <span className="text-[11px] font-bold text-text-primary group-hover:text-accent-green transition-theme">bandana.k.official@gmail.com</span>
                </div>
              </a>

              <a href="tel:+916230078396" className="flex items-center gap-3 p-3 rounded-2xl bg-card-bg border border-border-color hover:border-accent-green transition-all group">
                <div className="w-8 h-8 rounded-xl bg-page-bg-sec border border-border-color flex items-center justify-center text-text-secondary group-hover:text-accent-green transition-theme">
                  <Phone size={13} />
                </div>
                <div>
                  <span className="text-[8px] font-mono text-text-secondary/50 uppercase font-bold block">Direct Operations</span>
                  <span className="text-[11px] font-bold text-text-primary group-hover:text-accent-green transition-theme">+91 62300 78396</span>
                </div>
              </a>

              <a href="mailto:info@kiwiclicks.in" className="flex items-center gap-3 p-3 rounded-2xl bg-card-bg border border-border-color hover:border-accent-green transition-all group">
                <div className="w-8 h-8 rounded-xl bg-page-bg-sec border border-border-color flex items-center justify-center text-text-secondary group-hover:text-accent-green transition-theme">
                  <Mail size={13} />
                </div>
                <div>
                  <span className="text-[8px] font-mono text-text-secondary/50 uppercase font-bold block">General Desk</span>
                  <span className="text-[11px] font-bold text-text-primary group-hover:text-accent-green transition-theme">info@kiwiclicks.in</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-card-bg border border-border-color transition-all">
                <div className="w-8 h-8 rounded-xl bg-page-bg-sec border border-border-color flex items-center justify-center text-text-secondary">
                  <MapPin size={13} />
                </div>
                <div>
                  <span className="text-[8px] font-mono text-text-secondary/50 uppercase font-bold block">Headquarters</span>
                  <span className="text-[11px] font-bold text-text-primary">Dwarka Sector 2, New Delhi, 110077</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form Container */}
        <div className="lg:col-span-5 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-3xl blur-2xl pointer-events-none" />
          <div className="bg-card-bg backdrop-blur-md border border-border-color rounded-3xl p-6 md:p-8 shadow-xl relative transition-theme">
            
            <div className="mb-6 pb-4 border-b border-border-color transition-theme">
              <h3 className="font-sans font-extrabold text-xl text-text-primary transition-theme">
                Initiate Performance Scan
              </h3>
              <p className="text-[10px] font-sans text-text-secondary mt-1 transition-theme">
                Please populate your details. Direct response callback in 4 hours.
              </p>
            </div>

            {statusMsg && (
              <div className={`p-3 rounded-xl border text-[11px] font-mono mb-4 text-left ${
                isSubmitted 
                  ? 'bg-emerald-500/10 border-accent-green/20 text-accent-green' 
                  : 'bg-red-500/10 border-red-500/20 text-red-400'
              }`}>
                {isSubmitted ? '✅ ' : '⚠️ '}{statusMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4.5 text-left relative z-10">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-text-secondary">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-page-bg border border-border-color text-xs focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all text-text-primary font-medium placeholder-text-secondary/40"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="business" className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-text-secondary">
                  Enterprise / Brand Name
                </label>
                <input 
                  type="text" 
                  id="business"
                  value={formState.business}
                  onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                  placeholder="e.g. Veda Labs"
                  className="w-full px-4 py-3 rounded-2xl bg-page-bg border border-border-color text-xs focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all text-text-primary font-medium placeholder-text-secondary/40"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-text-secondary">
                  Corporate Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@vedalabs.com"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-page-bg border border-border-color text-xs focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all text-text-primary font-medium placeholder-text-secondary/40"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-text-secondary">
                  Direct Contact Line
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="+91 62300 78396"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-page-bg border border-border-color text-xs focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all text-text-primary font-medium placeholder-text-secondary/40"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="details" className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-text-secondary">
                  Growth Objectives
                </label>
                <textarea 
                  id="details"
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  placeholder="Describe your active conversion hurdles..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl bg-page-bg border border-border-color text-xs focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all text-text-primary resize-none font-medium placeholder-text-secondary/40"
                />
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl text-xs font-sans font-bold uppercase tracking-wider bg-text-primary text-page-bg hover:bg-accent-green hover:text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="w-4 h-4 border-2 border-page-bg border-t-transparent rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <Check size={14} />
                    Audit Request Dispatched
                  </>
                ) : (
                  <>
                    <Send size={12} />
                    Submit Performance Request
                  </>
                )}
              </button>
            </form>

            <p className="text-[8.5px] font-mono text-text-secondary opacity-60 text-center mt-6 relative z-10 transition-theme">
              ✦ Encrypted pipeline synchronized to Hubspot CRM Node ✦
            </p>

          </div>
        </div>
      </div>

      {/* Footer Copy */}
      <div className="max-w-6xl w-full mx-auto mt-20 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-text-secondary opacity-60 border-t border-border-color pt-6 gap-3 transition-theme">
        <p>© 2026-2027 KIWICLICKS AGENCY PVT LTD. ALL CONVERSIONS INTEGRATED.</p>
        <p className="tracking-widest">NEW DELHI, DWARKA SECTOR 2, 110077 // GROW REMARKABLY</p>
      </div>
    </section>
  );
}
