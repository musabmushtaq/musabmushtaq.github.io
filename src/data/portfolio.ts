export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  email: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Musab Mushtaq",
  role: "AI Systems & Full-Stack Engineer",
  bio: "I am an AI Engineering student at ITU Lahore and a systems-focused Full-Stack Developer specializing in scalable cloud architectures, AI automation, and high-performance apps. I have a deep passion for electronics and hardware, and I thrive on breaking down complex abstractions, finding logical loopholes, and optimizing systems to be highly edge-case resilient.",
  email: "musabmushtaq952@gmail.com",
  socials: {
    github: "https://github.com/musabmushtaq",
    linkedin: "https://linkedin.com/in/musabmushtaq",
  },
  skills: [
    {
      title: "Languages & Frameworks",
      items: ["Python", "C++", "Dart (Flutter)", "JavaScript", "Hugging Face", "Assembly"]
    },
    {
      title: "Databases & Cloud",
      items: ["PostgreSQL", "MongoDB", "Self-hosted Cloud Infrastructure"]
    },
    {
      title: "Specialties & Logic",
      items: ["System Architecture Design", "Prompt Engineering", "DSA", "Logic Optimization", "Electronics"]
    }
  ],
  experience: [
    {
      id: "exp1",
      role: "Full-Stack Developer",
      company: "Multiline Engineering Co.",
      duration: "Oct 2025 - Present",
      description: "Leading the end-to-end digital transformation of industrial workflows, replacing a manual 3-stage paper handover with a streamlined Flutter mobile app, responsive Web UI, and custom APIs. Designed bespoke database architectures to optimize inter-departmental operations for 20+ active field technicians."
    },
    {
      id: "exp2",
      role: "AI Systems Architect",
      company: "Smart Education LLC (UAE)",
      duration: "Jun 2025 - Sep 2025",
      description: "Architected core system backbones for high-stakes evaluation systems, including an automated Essay Scorer and Code Evaluator. Engineered robust Python script runners for scoring, optimized AI prompt consistency, and maintained secure NDA-compliant environments for international clients."
    }
  ],
  projects: []
};
