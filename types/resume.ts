export interface Link {
    id: string;
    url: string;
    label: string;
}

export interface TechnicalSkill {
    category: string;
    skills: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    location: string;
    year: string;
    highlights: string[];
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    techStack: string;
    gitLink?: string;
    liveLink?: string;
    liveLinkLabel?: string;
    highlights: string[];
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    year: string;
}

export interface Education {
    id: string;
    school: string;
    degree: string;
    major: string;
    year: string;
    result?: string;
}

export interface Freelance {
    id: string;
    project: string;
    role: string;
    duration: string;
    highlights: string[];
}

export interface Section {
    id: string;
    title: string;
    isVisible: boolean;
}

export interface ResumeData {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    links: Link[];
    summary: string;
    technicalSkills: TechnicalSkill[];
    experiences: Experience[];
    projects: Project[];
    certifications: Certification[];
    education: Education[];
    freelance: Freelance[];
    others: any[]; // User provided empty array
    sections: Section[];
}
