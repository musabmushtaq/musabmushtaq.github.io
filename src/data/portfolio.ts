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
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "",
  role: "",
  bio: "",
  email: "",
  socials: {
    github: "",
    linkedin: "",
  },
  experience: [],
  projects: []
};
