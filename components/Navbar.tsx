
import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#workflow' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 glass' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center space-x-2 group"
        >
          <div className="p-2 bg-indigo-600 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black font-display tracking-tight uppercase">
            {PERSONAL_INFO.name.split(' ')[0]}<span className="text-indigo-500">_</span>V3
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(79,70,229,0.4)]"
          >
            Get Inquiry
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-8 flex flex-col space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-black uppercase tracking-widest text-gray-300"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 bg-indigo-600 text-center rounded-2xl font-black uppercase tracking-widest"
          >
            Get Inquiry
          </a>
        </div>
      )}
    </nav>
  );
};
