import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import type { Skill, Project } from './definitions';

const replaceDefects = (text: string) => {
  return text.replace(/\\xa0/g, '\xa0').replace(/\\n/g, '\n');
};

export const fetchSkills = async () => {
  noStore();
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const data = await sql<Skill>`SELECT * FROM aboutme_skills`;

    return data.rows.sort((a, b) => a.list_order - b.list_order);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch skills data.');
  }
};

export const fetchProjects = async () => {
  noStore();

  try {
    const data = await sql<Project>`SELECT * FROM aboutme_projects`;

    const parsedData = data.rows.map((project) => {
      return {
        ...project,
        name: replaceDefects(project.name),
        description: replaceDefects(project.description),
        role: replaceDefects(project.role),
      };
    });

    return parsedData.sort((a, b) => a.list_order - b.list_order);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects data.');
  }
};
