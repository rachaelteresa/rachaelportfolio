export interface ExtraCurricular {
  activity: string;
  organization: string;
  description: string;
}
export interface Award {
  name: string;
  organization: string;
  year: string;
  description?: string;
}
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  avatar: string;
  tagline: string;
}

export interface Skill {
  name: string;
  category: 'AI/ML' | 'Programming' | 'Tools' | 'Soft Skills' | 'Certification';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'AI Research' | 'Engineering' | 'Open Source' | 'Personal';
  status: 'Completed' | 'In Progress' | 'Archived';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  achievements: string[];
}

export interface Hobby {
  name: string;
  description: string;
  category: 'Crocheting' | 'Arts & Crafts' | 'My Little Pony' | 'Unicorns' | 'Other';
  imageUrl?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
  resume?: string;
}

export interface Portfolio {
  personal: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  awards: Award[];
  extraCurriculars: ExtraCurricular[];
  contact: ContactInfo;
}