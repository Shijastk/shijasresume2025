
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Gemini AI.
        </div>

        <div className="flex items-center gap-8">
          <a href="#about" className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">About</a>
          <a href="#projects" className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Projects</a>
          <a href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Get Inquiry</a>
        </div>
      </div>
    </footer >
  );
};
