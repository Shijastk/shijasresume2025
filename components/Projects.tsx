
import React from 'react';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black font-display">Production-Ready Works.</h3>
          </div>
          <p className="text-gray-500 max-w-sm">
            End-to-end applications demonstrating my ability to manage data, state, and user experience concurrently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-950 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative group-hover:shadow-2xl transition-all duration-500">
                {(project as any).iframe ? (
                  <iframe
                    src={(project as any).iframe}
                    title={project.title}
                    className="w-full h-full border-0 bg-gray-900"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                )}

                {/* Overlay - Only show on hover for iframe to allow interaction, or keep logic simple */}
                {!(project as any).iframe && (
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-60 pointer-events-none"></div>
                )}

                <div className="absolute top-6 right-6 pointer-events-none">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white backdrop-blur-md">
                    {project.icon}
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 py-1 px-3 bg-indigo-500/5 border border-indigo-500/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-8 flex-1">
                  {(project as any).features?.map((feature: string) => (
                    <div key={feature} className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500/70" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a href={project.link} className="flex-1 py-3 bg-white text-gray-950 text-center rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all">
                    View Project
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center glass rounded-xl text-gray-400 hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
