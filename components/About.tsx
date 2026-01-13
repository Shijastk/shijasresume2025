
import React from 'react';
import { Timeline } from './ui/timeline';

export const About: React.FC = () => {
  const journeyData = [
    {
      title: "2023 - 2025",
      content: (
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold text-white">Frontend Developer</h4>
            <span className="text-indigo-400 font-semibold">Bistux Solutions Pvt. Ltd.</span>
          </div>
          <p className="text-sm md:text-base text-neutral-400 font-medium leading-relaxed">
            Developing and maintaining customer call management applications used in production.
            Building responsive dashboards with <span className="text-white">React, TypeScript, and MUI</span>.
            Collaborating with backend teams for real-time API integration and improving UI performance across modules.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'MUI', 'GitLab', 'Agile'].map(t => (
              <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-indigo-400 font-black uppercase">{t}</span>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Freelance & Projects",
      content: (
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold text-white">Independent Consultant</h4>
            <span className="text-indigo-400 font-semibold">Global Clients</span>
          </div>
          <p className="text-sm md:text-base text-neutral-400 font-medium leading-relaxed">
            Delivered production-grade solutions for international clients:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-400 text-sm">
            <li><strong className="text-white">Ambulance Service Management:</strong> Booking & dispatch coordination system.</li>
            <li><strong className="text-white">Ice Cream Brand (UAE):</strong> Responsive brand showcase & product catalog.</li>
            <li><strong className="text-white">Fresh Meat Platform:</strong> Inventory & business listing for wholesale.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Education & Pivot",
      content: (
        <div className="space-y-6">
          <div className="p-6 glass rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full" />
            <h4 className="text-lg font-bold text-white mb-2">Sociology to Tech Transition</h4>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Graduated with a <strong className="text-white">BA in Sociology (2024)</strong> from the University of Calicut.
              My background in sociology allows me to understand user behavior, social dynamics, and system interactions on a deeper level.
              I leverage this human-centric perspective to build more intuitive, accessible, and impactful technology solutions.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-2 rounded-lg w-fit">
              <span>✓ Adacode Solutions: MERN Full Stack Developer Certificate</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="relative">
      <Timeline data={journeyData} />
    </section>
  );
};
