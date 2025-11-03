import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Web Systems',
    desc: 'High-performance design system with motion primitives and holographic themes.',
    href: '#',
    palette: ['#0ea5e9', '#22d3ee'],
    cover: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Verse Commerce',
    desc: 'Headless eCommerce experience with cinematic microinteractions.',
    href: '#',
    palette: ['#ef4444', '#f43f5e'],
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'City OS',
    desc: 'Data-driven city dashboard with parallax layers and ambient lights.',
    href: '#',
    palette: ['#a78bfa', '#22d3ee'],
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0b0c1f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-8 w-1 rounded bg-gradient-to-b from-[#ef4444] to-[#0ea5e9]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Featured Missions</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0f1024] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.cover} alt="project cover" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* dynamic spotlight */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(800px 200px at 50% 120%, ${p.palette[0]}22, transparent 60%)` }} />
              </div>
              <div className="relative space-y-2 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <ExternalLink size={18} className="text-white/60 transition-colors group-hover:text-white" />
                </div>
                <p className="text-sm text-white/60">{p.desc}</p>
                {/* web shooter pull-in accent */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full" style={{ background: `radial-gradient(circle at center, ${p.palette[1]}33, transparent 60%)` }} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0ea5e9]/20 via-[#a78bfa]/10 to-[#ef4444]/20 p-[1px]"
        >
          <div className="relative rounded-2xl bg-[#0b0c1f] p-8">
            <p className="text-center text-lg text-white/80">
              Every project is a new universe. Ready to launch the next one?
            </p>
            <div className="mt-6 flex justify-center">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#ef4444] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-transform duration-300 hover:scale-[1.03] hover:brightness-110">
                Begin a Mission
              </a>
            </div>
            <div className="pointer-events-none absolute -inset-20 -z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
