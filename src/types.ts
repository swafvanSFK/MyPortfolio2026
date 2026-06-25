export type ProjectCategory = 'frontend' | 'backend' | 'fullstack';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string[];
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  authorImage: string;
}

export type SkillCategory = 'language' | 'frontend' | 'backend' | 'devops' | 'database';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0-100 percentage
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  iconName: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
