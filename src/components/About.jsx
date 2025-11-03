import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette } from 'lucide-react';

const panelVariants = {
  offscreen: { opacity: 0, x: 60, rotate: 0.5 },
  onscreen: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.06 * i, type: 'spring', stiffness: 80, damping: 18 } }),
};

const About = () => {
  const panels = [
    {
      title: 'Origin',
      text: "I’m Saad — a creator at the intersection of code and imagination. I design and build immersive digital experiences that move with purpose.",
      accent: 'from-[#60a5fa] to-[#22d3ee]',
    },
    {
      title: 'Values',
      text: 'Heroic clarity, playful creativity, and motion that feels alive — every pixel tells a story.',
      accent: 'from-[#22c55e] to-[#a3e635]',
    },
    {
      title: 'Focus',
      text: 'Web Development, UI/UX Design, Creative Direction. From strategy to shipping with cinematic polish.',
      accent: 'from-[#f43f5e] to-[#f97316]',
    },
  ];

  const skills = [
    { name: 'HTML', color: 'from-[#ef4444] to-[#f59e0b]' },
    { name: 'CSS', color: 'from-[#06b6d4] to-[#3b82f6]' },
    { name: 'JavaScript', color: 'from-[#f59e0b] to-[#f43f5e]' },
    { name: 'React', color: 'from-[#22d3ee] to-[#60a5fa]' },
    { name: 'Tailwind', color: 'from-[#06b6d4] to-[#22d3ee]' },
    { name: 'Web3', color: 'from-[#a78bfa] to-[#22d3ee]' },
  ];

  return (
    <section id="about" className="relative bg-[#0a0b1a] py-24 text-white">
      {/* soft grid halftone */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-8 w-1 rounded bg-gradient-to-b from-[#0ea5e9] to-[#ef4444]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">About — Into the Code-Verse</h2>
        </div>

        {/* Abstract avatar with hover web-sling micro-motion */}
        <div className="mb-10 flex items-center gap-6">
          <motion.div
            whileHover={{ y: -4, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="relative h-20 w-20 shrink-0 rounded-full border border-white/10 bg-gradient-to-br from-[#0ea5e9] to-[#ef4444] p-[2px]"
            aria-hidden
          >
            <div className="relative h-full w-full rounded-full bg-[#0a0b1a]">
              <div className="absolute inset-0 m-3 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.2),transparent_60%)]" />
              {/* tech-web glyph */}
              <svg className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2" fill="#e11d48" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" stroke="#22d3ee" strokeWidth="1.2"/>
              </svg>
              <div className="absolute left-1/2 top-0 h-10 w-[1px] -translate-x-1/2 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          </motion.div>
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/80"
            >
              Stories shape interfaces. I craft systems where technology, motion, and narrative converge — building experiences that feel alive and unmistakably Saad.
            </motion.p>
          </div>
        </div>

        {/* Comic panel scroller */}
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6">
          {panels.map((p, i) => (
            <motion.div
              key={p.title}
              className="relative min-w-[85%] snap-center rounded-xl border border-white/10 bg-gradient-to-br from-[#0f1024] to-[#0a0b1a] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.5)] sm:min-w-[55%] md:min-w-[40%]"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.6 }}
              custom={i}
              variants={panelVariants}
            >
              <div className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${p.accent} opacity-40 blur-xl`} />
              <h3 className="text-xl font-bold">
                {p.title}
              </h3>
              <p className="mt-2 text-white/70">{p.text}</p>
              <div className="mt-6 flex items-center gap-2 text-white/60">
                {i === 0 ? <Code size={18} /> : <Palette size={18} />}
                <span className="text-xs uppercase tracking-widest">Comic Panel</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills as holographic web nodes with matrix overlay */}
        <div className="relative mt-12">
          <svg className="pointer-events-none absolute inset-0" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={i} x1={`${(i+1)*12}%`} y1="10%" x2={`${(i+1)*10}%`} y2="90%" stroke="rgba(255,255,255,0.06)" />
            ))}
            {Array.from({ length: 4 }).map((_, i) => (
              <line key={`h-${i}`} x1="2%" y1={`${(i+1)*20}%`} x2="98%" y2={`${(i+1)*22}%`} stroke="rgba(255,255,255,0.05)" />
            ))}
          </svg>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.04 }}
                className={`group relative overflow-hidden rounded-lg border border-white/10 bg-[#0f1024]/70 p-3 text-center text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)]`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.color} opacity-15 transition-opacity duration-300 group-hover:opacity-25`} />
                <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{s.name}</span>
                {/* radiant node glow */}
                <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-xl" />
                {/* connecting lines on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(94,234,212,0.25)" />
                    <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(14,165,233,0.2)" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
