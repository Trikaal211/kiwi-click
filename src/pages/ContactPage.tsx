import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Send, Check, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import apiClient from '../api/client';
import { trackFormSubmit, trackPhoneClick, trackEmailClick, trackPricingClick, trackWhatsAppClick } from '../lib/analytics';

const WhatsAppIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.018-5.11-2.875-6.97C16.595 1.916 14.12 .894 11.487.894c-5.445 0-9.872 4.42-9.876 9.861-.001 1.716.455 3.39 1.32 4.894l-.994 3.633 3.71-.973zm12.39-7.143c-.302-.15-1.787-.88-2.063-.98-.277-.1-.478-.15-.68.15-.201.3-.778.98-.954 1.18-.176.2-.353.225-.655.075-3.02-1.51-4.962-2.912-5.972-4.65-.265-.458.265-.425.759-1.417.082-.163.04-.306-.02-.455-.06-.15-.478-1.15-.655-1.575-.172-.416-.347-.36-.478-.367-.123-.007-.264-.009-.404-.009-.14 0-.367.052-.56.26-.193.208-.737.72-.737 1.756s.755 2.036.86 2.18c.106.145 1.485 2.268 3.598 3.178.502.217.895.347 1.202.444.504.16 1.033.137 1.417.08.43-.065 1.787-.73 2.037-1.435.25-.706.25-1.313.175-1.435-.07-.12-.276-.22-.578-.37z" />
  </svg>
);

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    website: '',
    service: 'SEO',
    budget: '$1,000 - $2,500',
    message: ''
  });
  
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
        service: formState.service,
        budget: formState.budget,
        message: `Business Name: ${formState.business || 'N/A'}\nWebsite: ${formState.website || 'N/A'}\n\nProject Goals: ${formState.message || 'N/A'}`
      });
      setIsSubmitted(true);
      trackFormSubmit('Contact Page Discovery Form', 'success');
      setFormState({
        name: '',
        phone: '',
        email: '',
        business: '',
        website: '',
        service: 'SEO',
        budget: '$1,000 - $2,500',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to submit contact page lead:', error);
      trackFormSubmit('Contact Page Discovery Form', 'fail');
      alert('Failed to submit request. Please try again or connect via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustBadges = [
    { icon: ShieldCheck, title: '20+ Businesses Helped', desc: 'Verified local/national campaigns' },
    { icon: Clock, title: '4+ Years Experience', desc: 'Strategic execution history' },
    { icon: MapPin, title: 'Delhi NCR Native', desc: 'Based in Dwarka Sector 2' },
    { icon: Sparkles, title: 'Founder-Led Agency', desc: 'Direct strategy consultations' }
  ];

  return (
    <div className="min-h-screen bg-page-bg text-text-primary pt-32 md:pt-36 lg:pt-40 pb-16 transition-theme overflow-x-hidden">
      
      {/* Hero Header */}
      <section className="px-6 md:px-12 pb-10 border-b border-border-color transition-theme text-left">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">
              GROW DIRECTLY
            </span>
            <h1 className="font-serif italic text-5xl md:text-7xl text-text-primary leading-[1.0] tracking-tight">
              Let's Grow <br />Your Business.
            </h1>
            <p className="text-base md:text-lg font-sans font-light text-text-secondary leading-relaxed">
              Tell us about your goals and we'll show you how KiwiClicks can help. Our builders audit your details and configure a clean execution roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-12 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Discovery Form Card */}
          <div className="lg:col-span-7 w-full text-left">
            <div className="bg-card-bg border-4 border-accent-emerald p-6 md:p-10 rounded-3xl shadow-offset relative transition-theme overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(var(--accent-emerald) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
              
              <h3 className="font-serif italic text-2xl text-text-primary mb-6 border-b-2 border-accent-emerald pb-4 relative z-10">
                Project Discovery Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Bandana"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. 6230078396"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. info@kiwiclicks.in"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="business" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                      Business Name
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="website" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                      Website URL (optional)
                    </label>
                    <input 
                      type="url" 
                      id="website"
                      value={formState.website}
                      onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                      placeholder="e.g. www.kiwiclicks.in"
                      className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="service" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                      Service Required
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange transition-theme text-text-primary font-medium cursor-pointer"
                    >
                      <option value="SEO">SEO Services</option>
                      <option value="Local SEO">Local SEO</option>
                      <option value="Google Ads">Google Ads Management</option>
                      <option value="Meta Ads">Meta Ads Management</option>
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Shopify">Shopify Development</option>
                      <option value="WordPress">WordPress Development</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Other">Other Services</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                    Monthly Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['< $1,000', '$1,000 - $2,500', '$2,500 - $5,000', '$5,000+'].map((range) => {
                      const isSelected = formState.budget === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          onClick={() => {
                            setFormState({ ...formState, budget: range });
                            trackPricingClick(range);
                          }}
                          className={`py-3 rounded-xl text-[10px] font-sans font-bold transition-all border-2 cursor-pointer ${
                            isSelected 
                              ? 'bg-accent-orange text-white border-accent-emerald shadow-sm' 
                              : 'bg-page-bg border-border-color text-text-secondary hover:border-accent-orange hover:text-text-primary'
                          }`}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[9px] font-sans font-bold uppercase tracking-widest text-text-secondary/80">
                    Project Goals / Message
                  </label>
                  <textarea 
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your keywords, current performance bottlenecks, or automation goals..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-page-bg border-2 border-accent-emerald text-xs focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-theme text-text-primary resize-none font-medium"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs font-sans font-bold uppercase tracking-wider bg-accent-orange text-white border-2 border-accent-emerald hover:bg-accent-emerald hover:text-white transition-theme shadow-offset flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <>
                      <Check size={14} className="text-white" />
                      Inquiry Logged Succeeded
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      Request Growth Review
                    </>
                  )}
                </button>
              </form>

              <p className="text-[9px] font-sans font-light tracking-wide text-text-secondary/60 text-center mt-6 relative z-10">
                ✦ Submissions trigger a detailed manual audit by the founders ✦
              </p>
            </div>
          </div>

          {/* Right: Direct Information, Founders & Maps */}
          <div className="lg:col-span-5 space-y-8 text-left w-full">
            
            {/* Trust Badges */}
            <div className="bg-card-bg border-2 border-accent-emerald p-6 rounded-3xl shadow-offset-sm transition-theme">
              <h4 className="font-serif italic text-lg text-text-primary mb-4 border-b border-border-color pb-2">
                KiwiClicks Trust Signals
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {trustBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div key={idx} className="flex gap-3 items-start text-xs">
                      <div className="w-7 h-7 rounded bg-accent-green/10 flex items-center justify-center text-accent-green shrink-0 font-bold">
                        <Icon size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-text-primary">{badge.title}</p>
                        <p className="text-[10px] text-text-secondary mt-0.5">{badge.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Channels */}
            <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl shadow-offset-sm transition-theme space-y-4">
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-secondary/60">
                DIRECT FOUNDER CHANNELS
              </h4>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://wa.me/916230078396?text=Hi%20KiwiClicks,%20I'd%20like%20to%20discuss%20our%20digital%20growth%20strategy." 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => trackWhatsAppClick('Contact Page Desk')}
                  className="flex items-center gap-3 text-xs font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
                >
                  <div className="w-7 h-7 rounded bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <WhatsAppIcon size={14} />
                  </div>
                  Connect via WhatsApp
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href="tel:6230078396"
                  onClick={() => trackPhoneClick('6230078396', 'Contact Page Desk')}
                  className="flex items-center gap-3 text-xs font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
                >
                  <div className="w-7 h-7 rounded bg-accent-orange/10 flex items-center justify-center text-accent-orange">
                    <Phone size={13} />
                  </div>
                  +91 62300 78396 (Call Direct)
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href="tel:8210077633"
                  onClick={() => trackPhoneClick('8210077633', 'Contact Page Desk')}
                  className="flex items-center gap-3 text-xs font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
                >
                  <div className="w-7 h-7 rounded bg-accent-orange/10 flex items-center justify-center text-accent-orange">
                    <Phone size={13} />
                  </div>
                  +91 82100 77633 (Call Direct)
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href="mailto:bandana.k.official@gmail.com" 
                  onClick={() => trackEmailClick('bandana.k.official@gmail.com', 'Contact Page Desk')}
                  className="flex items-center gap-3 text-xs font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
                >
                  <div className="w-7 h-7 rounded bg-accent-green/10 flex items-center justify-center text-accent-green">
                    <Mail size={13} />
                  </div>
                  bandana.k.official@gmail.com
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href="mailto:info@kiwiclicks.in" 
                  onClick={() => trackEmailClick('info@kiwiclicks.in', 'Contact Page Desk')}
                  className="flex items-center gap-3 text-xs font-sans tracking-wide text-text-primary hover:text-accent-orange transition-colors w-max group font-semibold"
                >
                  <div className="w-7 h-7 rounded bg-accent-green/10 flex items-center justify-center text-accent-green">
                    <Mail size={13} />
                  </div>
                  info@kiwiclicks.in
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Micro Map Box */}
            <div className="bg-card-bg border-4 border-accent-emerald p-6 rounded-3xl shadow-offset text-xs transition-theme relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-accent-green shrink-0" />
                  <div>
                    <p className="font-bold text-text-primary">New Delhi Office</p>
                    <p className="text-[10px] text-text-secondary/60">Dwarka Sector 2, New Delhi, 110077</p>
                  </div>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=New+Delhi,+Dwarka+Sector+2,+110077" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[10px] font-sans font-bold text-accent-orange hover:text-accent-green transition-colors flex items-center gap-0.5"
                >
                  Directions <ArrowUpRight size={10} />
                </a>
              </div>
              <div className="w-full h-32 rounded-xl bg-page-bg border border-border-color overflow-hidden transition-theme">
                <iframe 
                  title="KiwiClicks Office Location Map"
                  src="https://maps.google.com/maps?q=Dwarka%20Sector%202%20New%20Delhi%20110077&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05)' }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Warm Founder Callout Section */}
      <section className="py-12 px-6 md:px-12 bg-page-bg-sec border-t border-border-color transition-theme">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-emerald shrink-0 bg-card-bg">
              <img src="/founder.png" alt="Bandana Kumari" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="font-serif italic text-base text-text-primary font-bold">"We build marketing systems that produce commercial results, not salesperson promises."</p>
              <p className="text-[10px] font-sans font-bold text-accent-green uppercase tracking-widest mt-1">Bandana Kumari // Founder</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-orange shrink-0 bg-card-bg">
              <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&h=400&q=80" alt="Baman Kumar" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="font-serif italic text-base text-text-primary font-bold">"Technical speed coupled with ROI campaign targeting is our blueprint for local growth."</p>
              <p className="text-[10px] font-sans font-bold text-accent-orange uppercase tracking-widest mt-1">Baman Kumar // Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
