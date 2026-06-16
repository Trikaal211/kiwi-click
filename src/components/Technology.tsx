import { motion } from 'framer-motion';
import { Target, TrendingUp, Zap } from 'lucide-react';

export default function Technology() {
  return (
    <section
      id="tech"
      className="relative py-12 md:py-18 px-6 md:px-12 bg-page-bg-sec text-text-primary transition-theme overflow-hidden"
    >
      {/* Watermark background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(60px,12vw,140px)] font-sans font-black text-text-primary/[0.015] dark:text-text-primary/[0.03] tracking-tight leading-none whitespace-nowrap uppercase">
          OPERATIONS
        </span>
      </div>

      {/* Grid dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] select-none"
        style={{
          backgroundImage: 'radial-gradient(var(--accent-emerald) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-6 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              06 // STACK OPERATIONS
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-text-primary mt-2 transition-theme">
              Operations & Tech Stack
            </h2>
            <p className="font-handwriting text-accent-orange text-lg -rotate-1 mt-2 font-semibold">
              ✦ How we execute, track, and scale campaigns 🛠️
            </p>
          </div>
          <div className="max-w-sm text-left">
            <p className="text-xs md:text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              We run high-performance growth channels with live tracking, automated qualification, and transparent metrics dashboards.
            </p>
          </div>
        </div>

        {/* 3 Operational Dashboard Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* PANEL 1: Paid Ads Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card-bg border-2 border-accent-orange/30 rounded-2xl p-6 shadow-offset-sm flex flex-col justify-between min-h-[360px]"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-border-color/10 pb-3">
                <div className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
                  <Target size={16} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-text-primary">Ads Performance Board</h3>
                  <span className="text-[8px] font-mono text-text-secondary uppercase">Google + Meta Ads</span>
                </div>
                <span className="ml-auto text-[8px] font-mono text-accent-green bg-accent-green/10 border border-accent-green/20 px-2 py-0.5 rounded font-bold">LIVE METRICS</span>
              </div>

              {/* Meta Mockup */}
              <div className="bg-page-bg-sec/50 border border-border-color/10 rounded-xl p-3 text-left space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[7px] font-mono font-bold text-blue-500 uppercase">META CREATIVE TEST</span>
                  <span className="text-[7px] font-mono text-accent-orange font-bold">4.8x ROAS</span>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded p-1.5 text-white">
                  <p className="text-[8px] font-bold leading-tight">🔥 3-Sec Hook: "Delhi ke sabse best dentist..."</p>
                </div>
                <div className="flex justify-between text-[8px]">
                  <div><span className="text-text-secondary block text-[7px] font-mono">Reach</span><span className="font-bold text-text-primary">89K</span></div>
                  <div><span className="text-text-secondary block text-[7px] font-mono">CPL</span><span className="font-bold text-accent-green">₹140</span></div>
                  <div><span className="text-text-secondary block text-[7px] font-mono">Impressions</span><span className="font-bold text-text-primary">142K</span></div>
                </div>
              </div>

              {/* Google Ads Table Mockup */}
              <div className="bg-page-bg-sec/50 border border-border-color/10 rounded-xl p-3 text-left space-y-1.5">
                <span className="text-[7px] font-mono font-bold text-accent-orange uppercase block">GOOGLE SEARCH METRICS</span>
                {[
                  { label: 'Avg Click CTR', value: '6.4%', trend: '+2.1%' },
                  { label: 'Conv. Rate', value: '12.8%', trend: '+4.3%' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-[8px] border-b border-border-color/5 pb-1">
                    <span className="text-text-secondary font-medium">{row.label}</span>
                    <div className="flex gap-2 items-center font-mono">
                      <span className="font-bold text-text-primary">{row.value}</span>
                      <span className="text-accent-green font-bold">{row.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[9px] font-sans font-medium text-text-secondary/60 leading-relaxed text-left border-t border-border-color/10 pt-3 mt-4">
              ✓ Negative keyword pruning & weekly asset rotations running automatically.
            </p>
          </motion.div>

          {/* PANEL 2: SEO & Rankings Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card-bg border-2 border-accent-green/30 rounded-2xl p-6 shadow-offset-sm flex flex-col justify-between min-h-[360px]"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-border-color/10 pb-3">
                <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-text-primary">SEO & Rankings Board</h3>
                  <span className="text-[8px] font-mono text-text-secondary uppercase">Ahrefs + GSC Tracker</span>
                </div>
                <span className="ml-auto text-[8px] font-mono text-accent-green bg-accent-green/10 border border-accent-green/20 px-2 py-0.5 rounded font-bold">DR 34 (+12)</span>
              </div>

              {/* Sparkline Chart */}
              <div className="bg-page-bg-sec/50 border border-border-color/10 rounded-xl p-3 text-left mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[8px] font-mono font-bold text-text-secondary">Organic Impressions</span>
                  <span className="text-[7px] font-mono text-accent-green font-bold">+67% MoM</span>
                </div>
                <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    d="M0,25 L15,22 L30,24 L45,17 L60,13 L75,8 L90,4 L100,2"
                    fill="none"
                    stroke="var(--accent-green)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex justify-between text-[7px] text-text-secondary/70 font-mono mt-1">
                  <span>90 Days Ago</span>
                  <span className="text-accent-orange font-bold font-mono">Today: 48.2K /mo</span>
                </div>
              </div>

              {/* Keyword Ranks */}
              <div className="bg-page-bg-sec/50 border border-border-color/10 rounded-xl p-3 text-left space-y-1.5">
                <span className="text-[7px] font-mono font-bold text-accent-green uppercase block">TRACKED TARGETS (DELHI NCR)</span>
                {[
                  { kw: 'dental clinic Dwarka', pos: '#1', vol: '2.4K' },
                  { kw: 'best dentist Delhi', pos: '#2', vol: '4.8K' },
                  { kw: 'implants CP Delhi', pos: '#1', vol: '1.2K' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-[8px] border-b border-border-color/5 pb-1">
                    <span className="text-text-secondary truncate max-w-[120px] font-semibold">{row.kw}</span>
                    <div className="flex gap-2 shrink-0 font-mono">
                      <span className="font-bold text-accent-green">{row.pos}</span>
                      <span className="text-text-secondary/60">{row.vol}/mo</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[9px] font-sans font-medium text-text-secondary/60 leading-relaxed text-left border-t border-border-color/10 pt-3 mt-4">
              ✓ Semantic schemas, citation lists, and map rankings synchronized daily.
            </p>
          </motion.div>

          {/* PANEL 3: AI & Lead Automation Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card-bg border-2 border-accent-emerald/30 rounded-2xl p-6 shadow-offset-sm flex flex-col justify-between min-h-[360px]"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-border-color/10 pb-3">
                <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
                  <Zap size={16} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-text-primary">AI Automation Hub</h3>
                  <span className="text-[8px] font-mono text-text-secondary uppercase">Lead Qualification Router</span>
                </div>
                <span className="ml-auto text-[8px] font-mono text-white bg-accent-orange border border-accent-orange/20 px-2 py-0.5 rounded font-bold">92% TIME SAVED</span>
              </div>

              {/* Automation steps */}
              <div className="bg-[#0d1117] rounded-xl p-3.5 text-left font-mono space-y-2 mb-4 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-[8px] font-mono text-violet-400 uppercase font-bold">Pipeline Active</span>
                </div>
                {[
                  { step: 'Lead Form Trigger', time: '0.0s', color: 'text-white/60' },
                  { step: 'AI Scoring (GPT-4o)', time: '0.3s', color: 'text-violet-400' },
                  { step: 'Auto WhatsApp Sent', time: '0.5s', color: 'text-green-400' },
                  { step: 'CRM Synced (Node/API)', time: '0.8s', color: 'text-accent-orange' }
                ].map((s, i) => (
                  <div key={i} className="flex justify-between items-center text-[7.5px] border-b border-white/5 pb-1">
                    <span className={s.color}>{s.step}</span>
                    <span className="text-white/30 font-mono">{s.time}</span>
                  </div>
                ))}
              </div>

              {/* Visual WhatsApp Chat Simulator snippet */}
              <div className="bg-[#e5ddd5] dark:bg-[#121c15] border border-border-color/10 rounded-xl p-2.5 text-left space-y-1.5">
                <div className="max-w-[90%] bg-white dark:bg-[#1e2a22] text-text-primary p-1.5 rounded-r-lg rounded-tl-lg text-[7px] leading-snug shadow-sm">
                  <p className="font-bold text-accent-green text-[6px]">Inbound WhatsApp Lead</p>
                  I'd like to book an implant consultation at your Dwarka clinic tomorrow.
                </div>
                <div className="max-w-[90%] bg-[#dcf8c6] dark:bg-[#056162] text-text-primary ml-auto p-1.5 rounded-l-lg rounded-tr-lg text-[7px] leading-snug shadow-sm">
                  <p className="font-bold text-accent-orange text-[6px]">KiwiClicks AI Assistant</p>
                  Sure! We have slots at 11:30 AM and 3:00 PM. Prefer one?
                </div>
              </div>
            </div>

            <p className="text-[9px] font-sans font-medium text-text-secondary/60 leading-relaxed text-left border-t border-border-color/10 pt-3 mt-4">
              ✓ Automatic routing to Dwarka team CRM with instant SMS qualification triggers.
            </p>
          </motion.div>

        </div>

        {/* Bottom accent note */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-card-bg border border-border-color/60 rounded-xl px-5 py-2.5 shadow-offset-sm transition-theme">
            <span className="text-accent-green text-sm">⚡</span>
            <p className="text-xs font-sans font-medium text-text-primary">
              All visual boards reflect active client integrations in <strong>Delhi NCR</strong> — not decorative templates.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
