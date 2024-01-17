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
  myRole: string;
  technologies: string[];
};
