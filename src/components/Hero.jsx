import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useTransform(my, [-200, 200], [8, -8]);
  const rotateY = useTransform(mx, [-200, 200], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mx.set(x);
    my.set(y);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#060713] via-[#0b0c1f] to-[#120b1d]"
    >
      {/* Spline 3D scene as immersive background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Holographic radial glows */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-[50vh] w-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,170,255,0.25),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[50vh] w-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,90,0.2),transparent_60%)] blur-2xl" />

      {/* Subtle glitch particles */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" style={{ maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 60%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          style={{ rotateX, rotateY }}
          className="will-change-transform"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="font-extrabold tracking-tight"
          >
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#5ddbff] via-white to-[#ff2d55] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(93,219,255,0.35)]">
              SAAD
            </span>
            <span className="mt-3 block text-lg sm:text-2xl md:text-3xl text-white/80">
              Web Developer • UI/UX Designer • Innovative Problem Solver
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70"
          >
            Crafting Web Experiences With Hero-Level Impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#ef4444] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-transform duration-300 hover:scale-[1.03] hover:brightness-110"
            >
              <Sparkles size={18} className="animate-pulse" />
              Explore the Multiverse
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:border-white/40 hover:text-white"
            >
              Origin Story
            </a>
          </motion.div>
        </motion.div>

        {/* Neon web overlay arcs */}
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[...Array(6)].map((_, i) => (
              <circle
                key={i}
                cx="600"
                cy="600"
                r={150 + i * 110}
                className="animate-[pulse_6s_ease-in-out_infinite]"
                stroke={i % 2 === 0 ? 'rgba(14,165,233,0.25)' : 'rgba(239,68,68,0.2)'}
                strokeWidth={1.2}
                strokeDasharray="6 12"
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
