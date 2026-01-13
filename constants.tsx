
import React from 'react';
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Layout,
  Rocket,
  ShieldCheck,
  Zap,
  Server,
  Smartphone,
  Terminal,
  Share2,
  ShoppingCart,
  Award
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "SHIJAS T K",
  role: "Frontend-focused Full-Stack Developer",
  tagline: "Results-driven Developer building scalable, real-time web solutions.",
  about: "Frontend-focused Full-Stack Developer with 2+ years of hands-on experience building scalable, real-world web applications using React, TypeScript, and modern UI frameworks. Strong experience in AI-powered platforms, resume automation, real-time systems, and event management solutions. Passionate about clean architecture, performance optimization, and user-centric design.",
  email: "shijasmuhammed573@gmail.com",
  phone: "+91 8943435546",
  location: "Calicut, Kerala",
  github: "https://www.github.com/Shijastk",
  linkedin: "https://www.linkedin.com/in/shijas-tk",
  twitter: "#",
};

export const SKILLS_CATEGORIES = [
  {
    title: "Languages",
    skills: [
      { name: 'JavaScript (ES6+)', value: 95 },
      { name: 'TypeScript', value: 90 },
      { name: 'HTML5', value: 95 },
      { name: 'CSS3', value: 95 }
    ]
  },
  {
    title: "Frontend Interaction",
    skills: [
      { name: 'React.js', value: 95 },
      { name: 'Vite', value: 90 },
      { name: 'Tailwind CSS', value: 95 },
      { name: 'MUI', value: 85 },
      { name: 'Framer Motion', value: 85 }
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: 'MongoDB', value: 90 },
      { name: 'Firebase Firestore', value: 88 },
      { name: 'Socket.io', value: 85 },
      { name: 'WebRTC (Jitsi)', value: 80 }
    ]
  },
  {
    title: "State & Tools",
    skills: [
      { name: 'Redux Toolkit', value: 85 },
      { name: 'Git & GitLab', value: 90 },
      { name: 'Axios', value: 95 },
      { name: 'Cloudinary', value: 85 }
    ]
  }
];

// Flat array for the chart in Skills component
export const SKILLS_DATA = SKILLS_CATEGORIES.flatMap(cat => cat.skills);

export const PROJECTS = [
  {
    title: "AI-Powered Resume Builder",
    description: "Flagship Project | Smart Resume Automation Platform. Developed a fully functional AI-powered resume builder allowing users to generate ATS-optimized resumes. Features direct email sending and customizable layouts.",
    tags: ["React", "TypeScript", "Gemini AI", "Tailwind CSS"],
    image: "/assets/projects/ai_resume.png",
    iframe: "https://ai-powerd-resume-builder.vercel.app/",
    link: "https://ai-powerd-resume-builder.vercel.app/",
    GIT: "https://github.com/Shijastk/ai-powerd-resume-builder",
    icon: <Rocket className="w-6 h-6" />,
    features: ["Gemini AI Integration", "ATS Optimization", "Direct Email"]
  },
  {
    title: "SkillSwap",
    description: "A gamified peer-to-peer skill exchange platform enabling users to trade expertise. Features a smart matching engine, XP-based leveling, virtual currency ('Skillcoins'), and real-time video lessons.",
    tags: ["React", "MERN", "Socket.io", "Jitsi", "Tailwind"],
    image: "/assets/projects/skillswap.png",
    iframe: "https://skillsync-frontend-theta.vercel.app/",
    GIT: "https://github.com/Shijastk/skillsync_frontend",
    link: "https://skillsync-frontend-theta.vercel.app/",
    icon: <Share2 className="w-6 h-6" />,
    features: ["Gamified Economy", "Real-time Messaging", "Smart Matching"]
  },
  {
    title: "Intensia Arts Fest",
    description: "Real-time arts festival management automation system. Replaced paper workflows with digital judging, live score updates, automated certificate generation, and a public results portal.",
    tags: ["React", "Firebase", "TypeScript", "jsPDF", "Real-time"],
    image: "/assets/projects/intensia.png",
    iframe: "https://intensia-arts-fest.vercel.app/",
    GIT: "https://github.com/Shijastk/intensia-arts-fest",
    link: "https://intensia-arts-fest.vercel.app/",
    icon: <Award className="w-6 h-6" />,
    features: ["Live Leaderboard", "Role-Based Dashboards", "Automated Scoring"]
  },
  {
    title: "Aura E-Commerce",
    description: "A premium e-commerce platform featuring a modern product catalog, secure cart and checkout flows, and an admin dashboard for inventory management. focuses on aesthetic UI/UX.",
    tags: ["MERN", "Redux", "Stripe", "Dashboard"],
    image: "/assets/projects/ecommerce.png",
    GIT: "https://github.com/Shijastk/ecommers",
    link: "#",
    icon: <ShoppingCart className="w-6 h-6" />,
    features: ["Secure Checkout", "Inventory Management", "Modern UI"]
  }
];

export const SERVICES = [
  {
    title: "Frontend Architecture",
    description: "Building responsive, high-performance interfaces with React, TypeScript, and modern CSS frameworks like Tailwind.",
    icon: <Layout className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end application development using the MERN stack (MongoDB, Express, React, Node.js).",
    icon: <Layers className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Real-Time Systems",
    description: "Implementing live features like chat, notifications, and data updates using Socket.io and Firebase.",
    icon: <Zap className="w-8 h-8 text-amber-400" />
  },
  {
    title: "Optimization & Logic",
    description: "Complex business logic implementation, performance tuning, and scalable database schema design.",
    icon: <Cpu className="w-8 h-8 text-rose-400" />
  }
];
