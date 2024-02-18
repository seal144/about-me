export type Skill = {
  id: string;
  name: string;
  list_order: number;
  skill: string | null;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  role: string;
  technologies: string[];
  list_order: number;
};

export enum Routes {
  Home = '/',
  Projects = '/projects',
}

export enum HomeSections {
  AboutMeSection = 'about-me-section',
  SkillsSection = 'skills-section',
  ExperienceSection = 'experience-section',
}

export interface ImageInterface {
  src: string;
  alt: string;
}
