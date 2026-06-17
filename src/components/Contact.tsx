import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Send, Check } from 'lucide-react';
import apiClient from '../api/client';

const WhatsAppIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.018-5.11-2.875-6.97C16.595 1.916 14.12 .894 11.487.894c-5.445 0-9.872 4.42-9.876 9.861-.001 1.716.455 3.39 1.32 4.894l-.994 3.633 3.71-.973zm12.39-7.143c-.302-.15-1.787-.88-2.063-.98-.277-.1-.478-.15-.68.15-.201.3-.778.98-.954 1.18-.176.2-.353.225-.655.075-3.02-1.51-4.962-2.912-5.972-4.65-.265-.458.265-.425.759-1.417.082-.163.04-.306-.02-.455-.06-.15-.478-1.15-.655-1.575-.172-.416-.347-.36-.478-.367-.123-.007-.264-.009-.404-.009-.14 0-.367.052-.56.26-.193.208-.737.72-.737 1.756s.755 2.036.86 2.18c.106.145 1.485 2.268 3.598 3.178.502.217.895.347 1.202.444.504.16 1.033.137 1.417.08.43-.065 1.787-.73 2.037-1.435.25-.706.25-1.313.175-1.435-.07-.12-.276-.22-.578-.37z" />
  </svg>
);

const PinIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', business: '', email: '', phone: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.phone) return;
    
    setIsSubmitting(true);
    try {
      await apiClient.post('/leads', {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        service: 'General Discovery',
        budget: 'N/A',
        message: `Business Name: ${formState.business || 'N/A'}\n\nProject Details: ${formState.details || 'N/A'}`
      });
      setIsSubmitted(true);
      setFormState({ name: '', business: '', email: '', phone: '', details: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to submit contact lead:', error);
      alert('Failed to submit request. Please try again or connect via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-10 md:py-16 px-6 md:px-12 bg-page-bg-sec transition-theme overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Headline and Direct Channels */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">
            08 // INITIATIVE
          </span>
          
          <h2 className="font-serif italic text-5xl md:text-7xl text-text-primary leading-[0.95] tracking-tight">
            Let's Grow <br />
            Something <br />
            <span className="font-sans font-extrabold text-accent-green tracking-tight not-italic">Remarkable.</span>
          </h2>

          <p className="text-base md:text-lg font-sans font-light text-text-secondary max-w-xl leading-relaxed">
            Ready to secure actual business outcomes? Reach out directly. We will evaluate your keyword metrics, review your ad configurations, and layout an execution roadmap built around your commercial targets.
          </p>

          {/* Workspace Image Banner */}
          <div className="w-full h-48 rounded-2xl overflow-hidden border-2 border-accent-emerald shadow-offset-sm transition-theme my-6">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
              alt="KiwiClicks Dwarka Delhi Office Workspace" 
              loading="lazy"
              className="w-full h-full object-cover object-center grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Direct Channels */}
          <div className="pt-6 space-y-6">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-secondary/60">
              DIRECT AGENCY CHANNELS:
            </h4>
            
            <div className="flex flex-col gap-4">
              {/* WhatsApp CTA */}
              <a 
                href="https://wa.me/916230078396?text=Hi%20KiwiClicks,%20I'd%20like%20to%20discuss%20our%20digital%20growth%20strategy." 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon size={16} />
                </div>
                Connect via WhatsApp
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Call Direct */}
              <div className="flex flex-col gap-4">
                <a 
                  href="tel:6230078396" 
                  className="flex items-center gap-3 text-sm font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
                    <Phone size={15} />
                  </div>
                  +91 62300 78396 (Call Direct)
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href="tel:8210077633" 
                  className="flex items-center gap-3 text-sm font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
                    <Phone size={15} />
                  </div>
                  +91 82100 77633 (Call Direct)
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Founder Email */}
              <a 
                href="mailto:bandana.k.official@gmail.com" 
                className="flex items-center gap-3 text-sm font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
                  <Mail size={15} />
                </div>
                bandana.k.official@gmail.com
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* General Email */}
              <a 
                href="mailto:info@kiwiclicks.in" 
                className="flex items-center gap-3 text-sm font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
                  <Mail size={15} />
                </div>
                info@kiwiclicks.in
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Location Tag */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=New+Delhi,+Dwarka+Sector+2,+110077"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-sans tracking-wide text-text-secondary hover:text-accent-orange transition-colors w-max group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold-accent/10 flex items-center justify-center text-gold-accent group-hover:bg-accent-orange/10 group-hover:text-accent-orange transition-colors">
                  <PinIcon size={15} />
                </div>
                <div>
                  <p className="font-semibold text-text-primary leading-none group-hover:text-accent-orange transition-colors flex items-center gap-1.5">
                    Delhi Office
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-xs text-text-secondary/60 mt-1">New Delhi, Dwarka Sector 2, 110077</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-card-bg border-4 border-accent-emerald p-8 md:p-10 rounded-3xl shadow-offset relative transition-theme overflow-hidden">
            
            {/* Whiteboard marker dots background */}
            <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(var(--accent-emerald) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />

            <h3 className="font-serif italic text-2xl text-text-primary mb-6 border-b-2 border-accent-emerald pb-4 text-left relative z-10">
              Discovery Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 text-left relative z-10">
              <div className="space-y-1">
                <label htmlFor="name" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary font-medium"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="business" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                  Company / Business Name
                </label>
                <input 
                  type="text" 
                  id="business"
                  value={formState.business}
                  onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                  placeholder="e.g. Veda Organics"
                  className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary font-medium"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@vedaorganics.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary font-medium"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="+91 99999 99999"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary font-medium"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="details" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                  Project Details
                </label>
                <textarea 
                  id="details"
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  placeholder="Please describe your marketing objectives..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary resize-none font-medium"
                />
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-xs font-sans font-bold uppercase tracking-wider bg-accent-orange text-white border-2 border-accent-emerald hover:bg-accent-emerald hover:text-white transition-theme shadow-offset-green flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <Check size={14} className="text-white" />
                    Discovery Request Sent
                  </>
                ) : (
                  <>
                    <Send size={12} />
                    Submit Growth Request
                  </>
                )}
              </button>
            </form>

            <p className="text-[9px] font-sans font-light tracking-wide text-text-secondary/60 text-center mt-6 relative z-10">
              ✦ Lead data is fully encrypted and routed to CPM CP database ✦
            </p>

          </div>
        </div>
      </div>

      {/* Footer Copy */}
      <div className="max-w-6xl w-full mx-auto mt-16 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans text-text-secondary/60 border-t border-border-color pt-4 gap-2 transition-theme">
        <p>© 2026-2027 KIWICLICKS AGENCY PVT LTD. ALL CONVERSIONS INTEGRATED.</p>
        <p className="tracking-widest">NEW DELHI, DWARKA SECTOR 2, 110077 // GROW REMARKABLY</p>
      </div>
    </section>
  );
}
