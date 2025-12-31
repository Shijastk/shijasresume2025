
import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle, Loader2, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-4">Connect</h2>
            <h3 className="text-4xl md:text-5xl font-black font-display mb-8">Let's build the backend together.</h3>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Looking for a developer who understands both sides of the application? Drop me a message to discuss your architectural needs or project vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Direct Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-medium hover:text-indigo-400 transition-colors">{PERSONAL_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone / WhatsApp</div>
                  <a href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-white font-medium hover:text-emerald-400 transition-colors">{PERSONAL_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Location</div>
                  <div className="text-white font-medium">{(PERSONAL_INFO as any).location}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-12">
              {[
                { Icon: Linkedin, href: PERSONAL_INFO.linkedin },
                { Icon: Github, href: PERSONAL_INFO.github }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            {formState === 'success' ? (
              <div className="glass p-12 rounded-[2.5rem] border border-emerald-500/20 h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-400">Thanks for reaching out, Marcus will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-gray-950 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-6 py-4 bg-gray-950 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-gray-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Project Brief</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Explain your project goals, tech stack, or hiring requirements..."
                    className="w-full px-6 py-4 bg-gray-950 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-gray-800 resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={formState === 'loading'}
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.6)] active:scale-[0.98] disabled:opacity-70"
                >
                  {formState === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>Send Inquiry <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
