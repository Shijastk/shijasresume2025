
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
  name: "SHIJAS PALANGAD",
  role: "Frontend / Full-Stack Developer (React • MERN)",
  tagline: "Results-driven Developer building scalable, real-time web solutions.",
  about: "I am a Full-Stack Developer with hands-on experience building scalable, real-time web applications using React, TypeScript, Node.js, Firebase, and MongoDB. I specialize in designing complex systems, optimizing performance, and delivering production-ready solutions for startups and enterprises. My focus is on clean architecture, UX performance, and real-time data systems.",
  email: "shijasmuhammed573@gmail.com",
  phone: "+91 8943435546",
  location: "Calicut, Kerala",
  github: "https://github.com/Shijastk",
  linkedin: "https://www.linkedin.com/in/shijas-tk-a17176330/",
  twitter: "#",
};

export const SKILLS_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: [
      { name: 'React (Vite)', value: 95 },
      { name: 'TypeScript', value: 90 },
      { name: 'Tailwind CSS', value: 95 },
      { name: 'Framer Motion & GSAP', value: 85 },
      { name: 'MUI', value: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: 'Node.js & Express.js', value: 90 },
      { name: 'REST APIs & JWT', value: 92 },
      { name: 'Role-Based Access', value: 90 }
    ]
  },
  {
    title: "Database & Real-Time",
    skills: [
      { name: 'MongoDB', value: 90 },
      { name: 'Firebase Firestore', value: 88 },
      { name: 'Socket.io', value: 85 },
      { name: 'WebRTC (Jitsi)', value: 80 }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
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
    title: "SkillSwap",
    description: "A gamified peer-to-peer skill exchange platform enabling users to trade expertise. Features a smart matching engine, XP-based leveling, virtual currency ('Skillcoins'), and real-time video lessons.",
    tags: ["React", "MERN", "Socket.io", "Jitsi", "Tailwind"],
    image: "/assets/projects/skillswap.png",
    iframe: "https://skillsync-frontend-theta.vercel.app/",
    link: "https://skillsync-frontend-theta.vercel.app/",
    icon: <Share2 className="w-6 h-6" />,
    features: ["Gamified Economy", "Real-time Messaging", "Smart Matching"]
  },
  {
    title: "Intensia Admin Pro",
    description: "Real-time arts festival management automation system. Replaced paper workflows with digital judging, live score updates, automated certificate generation, and a public results portal.",
    tags: ["React", "Firebase", "TypeScript", "jsPDF", "Real-time"],
    image: "/assets/projects/intensia.png",
    iframe: "https://intensia-arts-fest.vercel.app/",
    link: "https://intensia-arts-fest.vercel.app/",
    icon: <Award className="w-6 h-6" />,
    features: ["Live Leaderboard", "Role-Based Dashboards", "Automated Scoring"]
  },
  {
    title: "Aura E-Commerce",
    description: "A premium e-commerce platform featuring a modern product catalog, secure cart and checkout flows, and an admin dashboard for inventory management. focuses on aesthetic UI/UX.",
    tags: ["MERN", "Redux", "Stripe", "Dashboard"],
    image: "/assets/projects/ecommerce.png",
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
