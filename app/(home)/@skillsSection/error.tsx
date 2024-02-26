'use client';
import Chip from '@/app/ui/chip';

const mockedData = [
  {
    name: 'JavaScript',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'React.js',
  },
  {
    name: 'Vue',
  },
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'Next.js',
  },
  {
    name: 'Gatsby.js',
  },
  {
    name: 'Redux',
  },
  {
    name: 'Pinia',
  },
  {
    name: 'RestAPIs',
  },
  {
    name: 'GraphQL',
  },
  {
    name: 'React Query',
  },
  {
    name: 'Apollo GraphQL',
  },
  {
    name: 'Styled-Components',
  },
  {
    name: 'Material UI',
  },
  {
    name: 'Tailwind CSS',
  },
  {
    name: 'Vuetify',
  },
  {
    name: 'Jest',
  },
  {
    name: 'SCSS',
  },
  {
    name: 'Jest',
  },
  {
    name: 'Testing Library',
  },
  {
    name: 'Cypress',
  },
  {
    name: 'Node.js',
  },
  {
    name: 'Express',
  },
  {
    name: 'Sanity',
  },
  {
    name: 'Contentful',
  },
  {
    name: 'Netlify',
  },
  {
    name: 'Firebase',
  },
  {
    name: 'Wagmi',
  },
  {
    name: 'Web3',
  },
  {
    name: 'Git',
  },
  {
    name: 'Vite',
  },
  {
    name: 'Webpack',
  },
  {
    name: 'Scrum',
  },
  {
    name: 'CI/CD',
  },
  {
    name: 'Jira',
  },
];
// The error is showing mocked data that normally are fetched from DB, it could be also an Error message, but I rather show some mocked data instead of an error. Maybe you want to ask: "But why do you have to fetch this data in the first place?" and my answer would be: "Good question you are right I don't have to do so, but it is my first project in Next.js and I want to practice features that Next has to offer"
const SkillsError = () => {
  return (
    <>
      {mockedData.map((skill, index) => (
        <Chip key={index} label={skill.name} onPrimary />
      ))}
    </>
  );
};

export default SkillsError;
