import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Billboard messages ─────────────────────────── */
const MESSAGES = [
  { line1: 'BEST DIGITAL', line2: 'MARKETING AGENCY', line3: 'IN DELHI NCR.' },
  { line1: 'EVERY BUSINESS.', line2: 'EVERY DREAM.', line3: 'ONE DIGITAL DESTINATION.' },
  { line1: 'BUILD.', line2: 'GROW.', line3: 'SCALE.' },
  { line1: 'LOCAL TO GLOBAL.', line2: '', line3: '' },
  { line1: 'YOUR DIGITAL', line2: 'RESPONSIBILITY,', line3: 'NOW OURS.' },
  { line1: 'SEO • ADS', line2: 'WEBSITES • AI', line3: '' },
  { line1: 'WE GROW', line2: 'TOGETHER.', line3: '' },
];

const METRICS = [
  { value: '500+', label: 'Campaigns Launched', icon: '◈' },
  { value: '50M+', label: 'People Reached', icon: '◉' },
  { value: '10X', label: 'Growth Delivered', icon: '◆' },
  { value: '24×7', label: 'Support Available', icon: '◎' },
];

const PILLS = ['Local Businesses', 'Startups', 'D2C Brands', 'Founders', 'Enterprises'];

/* ─── Crowd silhouettes (pure SVG paths) ─────────── */
const CROWD_PATHS = [
  'M0,80 Q10,60 20,70 Q25,45 35,55 Q40,30 50,45 Q55,20 65,35 Q75,25 85,40 Q90,55 100,50 Q110,40 120,55 Q130,30 140,45 Q150,20 160,38 Q170,55 180,48 Q185,35 200,50 L200,120 L0,120 Z',
  'M0,90 Q15,70 30,80 Q45,55 55,68 Q65,45 80,58 Q95,35 110,50 Q125,60 140,48 Q155,35 170,52 Q182,65 200,58 L200,120 L0,120 Z',
  'M0,100 Q20,80 40,90 Q55,70 70,80 Q85,60 100,72 Q115,80 130,68 Q145,55 160,70 Q175,80 200,70 L200,120 L0,120 Z',
];

export default function WhyKiwiClicks() {
  const [msgIdx, setMsgIdx] = useState(0);
  const particlesRef = useRef<{ x: number; y: number; size: number; delay: number; speed: number }[]>([]);

  /* Rotate billboard messages */
  useEffect(() => {
    const id = setInterval(() => setMsgIdx(i => (i + 1) % MESSAGES.length), 3200);
    return () => clearInterval(id);
  }, []);

  /* Init particles once — reduced to 20 for performance on low-end devices */
  if (particlesRef.current.length === 0) {
    particlesRef.current = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      delay: Math.random() * 4,
      speed: 0.8 + Math.random() * 1.2,
    }));
  }

  const msg = MESSAGES[msgIdx];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/[0.05]"
      style={{ background: 'linear-gradient(175deg, #030b16 0%, #060e1e 50%, #04111c 100%)' }}
    >
      {/* ─── BACKGROUND LAYER ──────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        {/* Green ambient left */}
        <div className="absolute -left-20 top-0 bottom-0 w-[45vw] rounded-full blur-[180px]" style={{ background: 'radial-gradient(ellipse, rgba(0,255,102,0.09) 0%, transparent 70%)' }} />
        {/* Blue ambient right */}
        <div className="absolute right-0 top-0 bottom-0 w-[50vw] rounded-full blur-[160px]" style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 70%)' }} />
        {/* Aurora strip */}
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,102,0.4), rgba(56,189,248,0.4), transparent)' }} />

        {/* Floating particles */}
        {particlesRef.current.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
              background: i % 3 === 0 ? 'rgba(0,255,102,0.7)' : i % 3 === 1 ? 'rgba(56,189,248,0.6)' : 'rgba(255,255,255,0.35)',
            }}
            animate={{ y: ['-10vh', '110vh'], opacity: [0, 0.8, 0] }}
            transition={{ duration: p.speed * 10, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* ─── MAIN CONTENT ──────────────────────────── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-14 xl:px-20">

        {/* Top label */}
        <div className="pt-16 md:pt-20 mb-8">
          <span className="text-[10px] font-mono tracking-[0.4em] text-white/25 uppercase">// 02 — ONE DESTINATION. INFINITE GROWTH.</span>
        </div>

        {/* ─── HERO GRID ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[55%_45%] gap-10 xl:gap-16 items-center pb-0">

          {/* LEFT — Copy */}
          <div className="flex flex-col justify-center py-4 lg:py-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-black leading-[0.92] tracking-tighter text-white"
              style={{ fontSize: 'clamp(52px, 7vw, 108px)' }}
            >
              ONE{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #00FF66 0%, #38bdf8 100%)' }}
              >
                DESTINATION.
              </span>
              <br />
              INFINITE{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #00FF66 100%)' }}
              >
                GROWTH.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 text-white/55 font-sans leading-relaxed"
              style={{ fontSize: 'clamp(16px, 1.6vw, 22px)', maxWidth: '52ch' }}
            >
              From local shops to global brands, KiwiClicks brings SEO, websites, ads, branding,
              AI automation and growth systems under one roof.{' '}
              <span className="text-[#00FF66] font-semibold">Your digital responsibility, now ours.</span>
            </motion.p>

            {/* Keyword pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap gap-3 mt-9"
            >
              {['Market Research', 'SEO & Content', 'Paid Ads', 'Web Design', 'AI Automation', 'CRM Systems'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="px-4 py-2 rounded-full font-mono font-bold"
                  style={{
                    fontSize: 'clamp(10px, 1vw, 13px)',
                    background: i % 2 === 0 ? 'rgba(0,255,102,0.08)' : 'rgba(56,189,248,0.08)',
                    border: `1px solid ${i % 2 === 0 ? 'rgba(0,255,102,0.28)' : 'rgba(56,189,248,0.28)'}`,
                    color: i % 2 === 0 ? '#00FF66' : '#38bdf8',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans font-bold uppercase tracking-wider transition-all"
                style={{
                  fontSize: 'clamp(11px, 1.1vw, 14px)',
                  background: 'linear-gradient(135deg, #00FF66, #00cc55)',
                  color: '#03120a',
                  boxShadow: '0 0 40px rgba(0,255,102,0.35)',
                }}
              >
                Grow My Business →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans font-bold uppercase tracking-wider border border-white/15 text-white/70 hover:border-white/30 hover:text-white transition-all"
                style={{ fontSize: 'clamp(11px, 1.1vw, 14px)', background: 'rgba(255,255,255,0.04)' }}
              >
                Talk to Experts
              </Link>
            </motion.div>

            {/* Audience pills row */}
            <div className="flex flex-wrap gap-2 mt-8">
              {PILLS.map(p => (
                <span
                  key={p}
                  className="px-3 py-1 rounded-full text-[10px] font-mono text-white/35"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)' }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Cinematic billboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-end justify-center"
            style={{ minHeight: 'clamp(360px, 52vw, 640px)' }}
          >
            {/* ── Billboard structure ── */}
            <div className="relative w-full" style={{ maxWidth: 600 }}>

              {/* Billboard legs */}
              <div className="absolute bottom-[22%] left-[38%] w-[5%] h-[18%] rounded-sm" style={{ background: 'linear-gradient(180deg, #1a2a1a, #0a120a)', borderLeft: '1px solid rgba(0,255,102,0.15)', borderRight: '1px solid rgba(0,255,102,0.15)' }} />
              <div className="absolute bottom-[22%] right-[38%] w-[5%] h-[18%] rounded-sm" style={{ background: 'linear-gradient(180deg, #1a2a1a, #0a120a)', borderLeft: '1px solid rgba(0,255,102,0.15)', borderRight: '1px solid rgba(0,255,102,0.15)' }} />

              {/* Billboard screen glow */}
              <motion.div
                className="absolute rounded-2xl blur-[60px]"
                style={{ inset: '-5% 0 15% 0', background: 'radial-gradient(ellipse, rgba(0,255,102,0.2) 0%, rgba(56,189,248,0.1) 50%, transparent 80%)' }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />

              {/* Billboard frame */}
              <div
                className="relative mx-auto rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #091825, #030d18)',
                  border: '1.5px solid rgba(0,255,102,0.35)',
                  boxShadow: '0 0 80px rgba(0,255,102,0.25), 0 0 160px rgba(56,189,248,0.12), inset 0 0 60px rgba(0,255,102,0.04)',
                  aspectRatio: '16/9',
                }}
              >
                {/* Screen scanlines */}
                <div
                  className="absolute inset-0 opacity-[0.035] pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,102,0.5) 2px, rgba(0,255,102,0.5) 3px)',
                  }}
                />

                {/* Corner LEDs */}
                {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos) => (
                  <motion.div
                    key={pos}
                    className={`absolute ${pos} w-2 h-2 rounded-full`}
                    style={{ background: '#00FF66', boxShadow: '0 0 8px #00FF66' }}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: Math.random() * 0.5 }}
                  />
                ))}

                {/* KIWI brand header */}
                <div className="absolute top-3 inset-x-0 flex justify-center">
                  <span className="text-[9px] font-mono font-bold tracking-[0.5em] text-[#00FF66]/60 uppercase">KIWICLICKS.IN</span>
                </div>

                {/* Main message area */}
                <div className="flex items-center justify-center h-full px-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={msgIdx}
                      initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-center"
                    >
                      <div
                        className="font-sans font-black leading-[1] text-white"
                        style={{ fontSize: 'clamp(22px, 3.6vw, 44px)', textShadow: '0 0 40px rgba(0,255,102,0.5)' }}
                      >
                        {msg.line1}
                      </div>
                      {msg.line2 && (
                        <div
                          className="font-sans font-black leading-[1] mt-1"
                          style={{
                            fontSize: 'clamp(22px, 3.6vw, 44px)',
                            color: '#00FF66',
                            textShadow: '0 0 30px rgba(0,255,102,0.8)',
                          }}
                        >
                          {msg.line2}
                        </div>
                      )}
                      {msg.line3 && (
                        <div
                          className="font-sans font-bold leading-[1] mt-2 text-white/70"
                          style={{ fontSize: 'clamp(14px, 2vw, 26px)' }}
                        >
                          {msg.line3}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom ticker */}
                <div className="absolute bottom-0 inset-x-0 h-7 overflow-hidden flex items-center" style={{ background: 'rgba(0,255,102,0.08)', borderTop: '1px solid rgba(0,255,102,0.2)' }}>
                  <motion.div
                    className="whitespace-nowrap text-[9px] font-mono font-bold tracking-widest"
                    style={{ color: '#00FF66' }}
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  >
                    {'  ✦  SEO  ✦  WEB DESIGN  ✦  GOOGLE ADS  ✦  META ADS  ✦  AI AUTOMATION  ✦  CRM  ✦  BRANDING  ✦  CONTENT  ✦  PERFORMANCE MARKETING  ✦  KIWICLICKS.IN  ✦  '.repeat(2)}
                  </motion.div>
                </div>
              </div>

              {/* Spotlight beams from top */}
              {[-30, 0, 30].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute top-[-10%] pointer-events-none"
                  style={{
                    left: `${35 + i * 15}%`,
                    width: 2,
                    height: '55%',
                    background: i % 2 === 0
                      ? 'linear-gradient(180deg, rgba(0,255,102,0.5), transparent)'
                      : 'linear-gradient(180deg, rgba(56,189,248,0.4), transparent)',
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: 'top center',
                    filter: 'blur(3px)',
                  }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}

              {/* Crowd silhouettes */}
              <div className="relative w-full overflow-hidden" style={{ height: 'clamp(70px, 10vw, 130px)', marginTop: -2 }}>
                {/* Crowd glow */}
                <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(0,255,102,0.12), transparent)' }} />
                {/* Atmospheric ground light */}
                <div className="absolute inset-x-0 bottom-0 h-6 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(0,255,102,0.15), transparent)' }} />

                {CROWD_PATHS.map((path, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 200 120"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: 0.7 - i * 0.15 }}
                  >
                    <defs>
                      <linearGradient id={`crowd${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={i === 0 ? '#001a08' : i === 1 ? '#0a1a24' : '#060e12'} />
                        <stop offset="100%" stopColor="#000" />
                      </linearGradient>
                    </defs>
                    <path d={path} fill={`url(#crowd${i})`} />
                  </svg>
                ))}

                {/* Raised hands */}
                {[12, 23, 36, 48, 58, 70, 81, 91].map((left, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-[30%]"
                    style={{ left: `${left}%`, width: 2, background: 'rgba(0,255,102,0.35)', borderRadius: 2 }}
                    animate={{ height: ['16px', '24px', '16px'], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.5 + (i % 3) * 0.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}

                {/* Confetti-like particles */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`conf${i}`}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      left: `${10 + i * 8}%`,
                      background: i % 2 === 0 ? '#00FF66' : '#38bdf8',
                    }}
                    animate={{ y: [0, -30, -50], opacity: [0, 1, 0], x: [(i % 2 === 0 ? 6 : -6)] }}
                    transition={{ duration: 2.5, delay: i * 0.35, repeat: Infinity, ease: 'easeOut' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── METRICS STRIP ──────────────────────────── */}
        <div
          className="relative mt-12 mb-0 py-8 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Green line on top */}
          <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,102,0.4), rgba(56,189,248,0.4), transparent)' }} />

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06] px-4">
            {METRICS.map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center px-4 py-2"
              >
                <span
                  className="font-sans font-black text-white leading-none"
                  style={{ fontSize: 'clamp(36px, 4vw, 60px)', textShadow: '0 0 30px rgba(0,255,102,0.4)' }}
                >
                  {m.value}
                </span>
                <span className="mt-2 text-white/35 font-mono uppercase tracking-widest" style={{ fontSize: 'clamp(9px, 0.9vw, 11px)' }}>
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom fade into next section */}
      <div className="h-16 md:h-20" />
    </section>
  );
}
