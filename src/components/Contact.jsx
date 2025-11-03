import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#080914] py-28 text-white">
      {/* Rooftop skyline mood */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(2,6,23,1), rgba(2,6,23,0.6)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Ambient city lights */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-96 w-[120vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.18),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute -top-24 left-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.18),transparent_60%)] blur-xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          Let’s Build Your Future Web
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-white/70"
        >
          Reach out and we’ll swing into action — crafting experiences that feel cinematic, bold, and brilliantly usable.
        </motion.p>

        <div className="mt-8">
          <a
            href="mailto:hello@saad.design"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30"
          >
            <span className="relative z-10">Contact Saad</span>
            {/* neon bloom */}
            <span className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.25),transparent_60%)] opacity-80" />
            {/* web pattern appears on hover */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="webPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M5 0 L5 10 M0 5 L10 5" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#webPattern)" />
            </svg>
          </a>
        </div>
      </div>

      {/* horizon line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default Contact;
