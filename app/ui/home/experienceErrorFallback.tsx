import ProjectCards from '@/app/ui/projectCards';
import { Project } from '@/app/lib/definitions';

const mockedData: Project[] = [
  {
    id: '1',
    name: 'E-learning web\xa0app',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi labore mollitia quisquam accusamus sunt magni adipisci, ipsum exercitationem eius culpa suscipit. Dolores provident aut natus iste harum? Quam, inventore?\nLorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi labore mollitia quisquam accusamus sunt magni adipisci, ipsum exercitationem eius culpa suscipit. Dolores provident aut natus iste harum? Quam, inventore?',
    myRole: 'Frontend developer',
    technologies: ['React', 'Gatsby', 'Styled-components'],
  },
  {
    id: '2',
    name: 'blockchain-related web\xa0app',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi labore mollitia quisquam accusamus sunt magni adipisci, ipsum exercitationem eius culpa suscipit. Dolores provident aut natus iste harum? Quam, inventore?',
    myRole: 'Frontend developer',
    technologies: ['React', 'Gatsby', 'Styled-components'],
  },
  {
    id: '3',
    name: 'Software house website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi labore mollitia quisquam accusamus sunt magni adipisci, ipsum exercitationem eius culpa suscipit. Dolores provident aut natus iste harum? Quam, inventore?',
    myRole: 'Frontend developer',
    technologies: ['React', 'Gatsby', 'Styled-components'],
  },
];

// This component is used as a fallback for ErrorBoundry. It is showing mocked data that normally are fetched from DB, it could be also an Error message, but I rather show some mocked data instead of an error. Maybe you want to ask: "But why do you have to fetch this data in the first place?" and my answer would be: "Good question you are right I don't have to do so, but it is my first project in Next.js and I want to practice features that Next has to offer"

const ExperienceErrorFallback = () => {
  return <ProjectCards data={mockedData} />;
};

export default ExperienceErrorFallback;
