
import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { InteractiveRobotSpline } from './ui/interactive-3d-robot';

export const Hero: React.FC = () => {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D Robot Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full" 
        />
      </div>

      {/* Hero Content Over Robot */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase mb-8">
            <Terminal className="w-3 h-3" /> System Operational: MARCUS_VANE_V3
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black font-display tracking-tighter leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            MERN <br/><span className="text-indigo-500">ARCHITECT</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
            {PERSONAL_INFO.tagline} Engineered with MongoDB, Express, React, and Node.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-gray-950 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white transition-all hover:shadow-[0_0_50px_-10px_rgba(79,70,229,0.7)]"
            >
              System Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-5 glass text-white rounded-2xl font-black uppercase tracking-widest border border-white/10 hover:border-white/30 transition-all flex items-center justify-center"
            >
              Initiate Contact
            </a>
          </div>
        </div>
      </div>

      {/* Gradient Fog at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030712] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};
