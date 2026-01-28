export interface Project {
  title: string;
  period: string;
  description: string;
  details: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  heroImage: string;
  aboutImage: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    location: string;
    dob: string;
    nationality: string;
  };
  summary: string;
  education: EducationItem[];
  projects: Project[];
  achievements: Achievement[];
  skills: string[];
}