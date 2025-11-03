import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#060713] text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#060713] py-6 text-center text-xs text-white/50">
        <p>
          © {new Date().getFullYear()} Saad — Designed in a Spider-Verse inspired aesthetic.
        </p>
      </footer>
    </div>
  );
};

export default App;
