export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
