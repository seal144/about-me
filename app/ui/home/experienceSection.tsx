import Section from '@/app/ui/section';
import Paragraph from '@/app/ui/paragraph';

const mockedProjects = [
  {
    id: 1,
    name: 'E-learning web\xa0app',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi labore mollitia quisquam accusamus sunt magni adipisci, ipsum exercitationem eius culpa suscipit. Dolores provident aut natus iste harum? Quam, inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi labore mollitia quisquam accusamus sunt magni adipisci, ipsum exercitationem eius culpa suscipit. Dolores provident aut natus iste harum? Quam, inventore?',
    myRole: 'Frontend developer',
    technologies: ['React', 'Gatsby', 'Styled-components'],
  },
  {
    id: 2,
    name: 'blockchain-related web\xa0app',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi labore mollitia quisquam accusamus sunt magni adipisci, ipsum exercitationem eius culpa suscipit. Dolores provident aut natus iste harum? Quam, inventore?',
    myRole: 'Frontend developer',
    technologies: ['React', 'Gatsby', 'Styled-components'],
  },
  {
    id: 3,
    name: 'Software house website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi labore mollitia quisquam accusamus sunt magni adipisci, ipsum exercitationem eius culpa suscipit. Dolores provident aut natus iste harum? Quam, inventore?',
    myRole: 'Frontend developer',
    technologies: ['React', 'Gatsby', 'Styled-components'],
  },
];

const ProjectProp = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <>
      <h4 className="text-background text-base sm:text-lg">{title}</h4>
      {children}
    </>
  );
};

const ProjectCards = () => {
  return (
    <>
      {mockedProjects &&
        mockedProjects.map((project) => (
          <div key={project.id} className="bg-primary p-6 rounded-2xl drop-shadow-l w-[100%] lg:w-[48%]">
            <h3 className="text-background text-xl text-center mb-2 sm:text-2xl md:mb-4">
              {project.name.toUpperCase()}
            </h3>
            <ProjectProp title="Description">
              <Paragraph>{project.description}</Paragraph>
            </ProjectProp>
            <ProjectProp title="My role">
              <Paragraph>{project.myRole}</Paragraph>
            </ProjectProp>
            <ProjectProp title="Technologies">
              <span className="text-foreground">*{project.technologies.join(', *')}</span>
            </ProjectProp>
          </div>
        ))}
    </>
  );
};

const ExperienceSection = () => {
  return (
    <Section title="Experience" subtitle="Commercial projects examples I have been involved in:">
      <div className="flex flex-wrap justify-center gap-8 xl:gap-10 2xl:gap-12">
        <ProjectCards />
      </div>
    </Section>
  );
};

export default ExperienceSection;
