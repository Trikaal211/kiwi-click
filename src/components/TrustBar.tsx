export default function TrustBar() {
  const servicesList = [
    'Digital Marketing',
    'Web Development',
    'SEO Growth Systems',
    'AI Automation Pipelines',
    'High-Conversion Lead Gen',
    'Google Ads Architecture',
    'Meta Ads Funnels',
    'Content Strategy & Flow'
  ];

  // Repeat twice for seamless loop
  const marqueeItems = [...servicesList, ...servicesList];

  return (
    <section className="py-12 bg-page-bg-sec border-y border-border-color overflow-hidden select-none transition-theme">
      <div className="max-w-6xl w-full mx-auto px-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3 className="text-xs font-sans font-semibold tracking-widest text-accent-green uppercase transition-theme">
          Agency Competencies
        </h3>
        <p className="text-sm font-sans font-light text-text-secondary transition-theme">
          Trusted growth partner for ambitious startups, local businesses, and growing brands.
        </p>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full flex items-center overflow-hidden py-3 bg-page-bg/40 border-y border-border-color/20 transition-theme">
        <div className="animate-marquee flex gap-12 items-center">
          {marqueeItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-12 font-serif italic text-xl md:text-2xl text-text-primary/80 tracking-wide font-light whitespace-nowrap transition-theme"
            >
              <span>{item}</span>
              <span className="text-gold-accent font-sans not-italic text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
