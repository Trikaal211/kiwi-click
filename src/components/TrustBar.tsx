import { motion } from 'framer-motion';

const services = [
  { label: 'SEO Growth Systems', emoji: '🚀', color: 'text-accent-green' },
  { label: 'Google Ads Architecture', emoji: '🎯', color: 'text-accent-orange' },
  { label: 'Meta Ads Funnels', emoji: '⚡', color: 'text-blue-500' },
  { label: 'Content Strategy & Flow', emoji: '✍️', color: 'text-gold-accent' },
  { label: 'Digital Marketing', emoji: '📈', color: 'text-accent-green' },
  { label: 'Web Development', emoji: '💻', color: 'text-cyan-500' },
  { label: 'AI Automation Pipelines', emoji: '🤖', color: 'text-violet-500' },
  { label: 'High-Conversion Lead Gen', emoji: '🔥', color: 'text-accent-orange' },
];

// Tripled for seamless loop
const marqueeItems = [...services, ...services, ...services];

export default function TrustBar() {
  return (
    <section className="relative py-0 overflow-hidden select-none transition-theme z-10">

      {/* Top Label Row */}
      <div className="bg-page-bg-sec border-y-2 border-accent-emerald/30 transition-theme">
        <div className="max-w-6xl w-full mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left: label */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <h3 className="text-xs font-mono font-bold tracking-widest text-accent-emerald uppercase transition-theme">
              Agency Competencies
            </h3>
          </div>

          {/* Right: tagline */}
          <p className="text-sm font-sans font-medium text-text-secondary transition-theme text-center sm:text-right">
            Trusted growth partner for ambitious startups, local businesses, and growing brands.
          </p>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="relative bg-accent-emerald dark:bg-[#152a22] border-b-2 border-accent-emerald overflow-hidden py-3">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-accent-emerald dark:from-[#152a22] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-accent-emerald dark:from-[#152a22] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 30,
              ease: 'linear',
            },
          }}
          className="flex gap-0 items-center w-max"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 px-6 whitespace-nowrap"
            >
              <div className="flex items-center gap-2 group">
                <span className="text-base leading-none group-hover:scale-125 transition-transform duration-200">
                  {item.emoji}
                </span>
                <span className="font-serif italic text-lg md:text-xl text-white/90 dark:text-white/80 font-light tracking-wide">
                  {item.label}
                </span>
              </div>
              <span className="text-white/40 text-sm font-sans">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom micro-strip: colored accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-accent-green via-accent-orange to-accent-emerald" />

    </section>
  );
}
