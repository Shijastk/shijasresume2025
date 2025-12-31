
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { AIAgent } from './components/AIAgent';
import { Footer } from './components/Footer';
import FeatureSteps from './components/ui/feature-steps.tsx';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workflowSteps = [
    {
      title: "Discovery & Architecture",
      content: "Deep diving into project requirements to design a scalable database schema in MongoDB and defining a robust API contract.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Development & Testing",
      content: "Rapidly iterating on the React frontend while building the Node.js/Express backend with comprehensive TDD practices.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Deployment & Scaling",
      content: "Automated CI/CD pipelines deploying containerized MERN apps to AWS/Azure with multi-environment monitoring.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <Navbar scrolled={scrollY > 50} />
      
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="workflow" className="py-24 bg-gray-950/30">
          <FeatureSteps features={workflowSteps} />
        </div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><Contact /></div>
      </main>

      <Footer />
      <AIAgent />
    </div>
  );
};

export default App;
