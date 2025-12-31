
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { SKILLS_DATA, SKILLS_CATEGORIES } from '../constants';

export const Skills: React.FC = () => {
  const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#3b82f6', '#ef4444', '#8b5cf6'];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-4">Competency</h2>
          <h3 className="text-4xl md:text-5xl font-black font-display mb-8">Full-Stack Technical Proficiency.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SKILLS_CATEGORIES.map((category, idx) => (
            <div key={idx} className="p-8 glass rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all">
              <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                {category.title}
              </h4>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{skill.name}</span>
                      <span className="text-xs font-mono text-indigo-400">{skill.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500 transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="h-[400px] glass rounded-[2.5rem] border border-white/5 p-8 relative overflow-hidden">
           <div className="absolute top-8 left-8 z-10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Skill Distribution Chart</h4>
           </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SKILLS_DATA} layout="horizontal" margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#4b5563" 
                fontSize={10} 
                tickLine={false}
                axisLine={false}
              />
              <YAxis hide domain={[0, 100]} />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                contentStyle={{ 
                  backgroundColor: '#030712', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                  padding: '12px'
                }}
                itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                {SKILLS_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
