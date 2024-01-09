import { sql } from '@vercel/postgres';
import type { Skill } from './definitions';

export const fetchSkills = async () => {
  try {
    const data = await sql<Skill>`SELECT * FROM aboutme_skills`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch skills data.');
  }
};
