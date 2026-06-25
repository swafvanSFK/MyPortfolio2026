import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import BlogDetailModal from './components/BlogDetailModal';
import Contact from './components/Contact';
import { BlogPost } from './types';
import { USER_INFO } from './data';
import SplashCursor from './components/SplashCursor';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Initialize App to Dark Mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Scroll spy to update navigation highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // height of fixed navbar
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-neutral-100 font-sans selection:bg-blue-400 selection:text-black">
      <Analytics />
      {/* global mouse fluid splash cursor */}
      <SplashCursor />

      {/* Background canvas wrapper */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <ParticleBackground />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating Header Navbar */}
        <Navbar
          activeSection={activeSection}
        />

        {/* Content sections */}
        <main className="flex-grow">
          {/* Landing / Hero view */}
          <Hero
            onContactClick={() => scrollToSection('contact')}
            onProjectsClick={() => scrollToSection('projects')}
          />

          {/* About section */}
          <About />

          {/* Skills / Technical Arsenal section */}
          <Skills />

          {/* Selected Work section */}
          <Projects />

          {/* Timeline / Certifications section */}
          <Experience />

          {/* Engineering Blog section */}
          <Blog onSelectPost={(post) => setSelectedPost(post)} />

          {/* Contact me section */}
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-display text-lg font-bold text-neutral-200 uppercase tracking-widest">
                SFK<span className="text-blue-400">.DEV</span>
              </p>
              <p className="text-[9px] text-neutral-500 font-mono mt-1 uppercase tracking-widest">
                © {new Date().getFullYear()} Safu.dev. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              <span className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => scrollToSection('hero')}>Top</span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => scrollToSection('about')}>About</span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => scrollToSection('projects')}>Projects</span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => scrollToSection('experience')}>Experience</span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => scrollToSection('contact')}>Contact</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Full reading overlay for blog posts */}
      <BlogDetailModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}
