import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  // Track scrolling to add glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/15 py-4'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          id="logo-link"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-2xl font-bold tracking-tighter text-white select-none hover:opacity-90 transition-opacity"
        >
          SFK<span className="text-blue-400">.DEV</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8" id="desktop-menu">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              id={`nav-link-${item.href.substring(1)}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-xs uppercase font-mono tracking-widest transition-all relative py-1 hover:text-blue-400 ${
                activeSection === item.href.substring(1)
                  ? 'text-blue-400 font-semibold'
                  : 'text-neutral-400'
              }`}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-400" />
              )}
            </a>
          ))}

        </div>

        {/* Mobile Nav Actions */}
        <div className="flex md:hidden items-center gap-3" id="mobile-nav-actions">
          {/* Toggle Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2 text-white hover:bg-neutral-900 rounded-none border border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-0 top-[65px] w-full bg-black/98 backdrop-blur-2xl z-40 md:hidden border-t border-white/10 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 px-8 py-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              id={`mobile-nav-link-${item.href.substring(1)}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-mono uppercase tracking-widest py-3 transition-colors border-b border-white/10 ${
                activeSection === item.href.substring(1)
                  ? 'text-blue-400 pl-2 border-l-2 border-l-blue-400'
                  : 'text-neutral-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
