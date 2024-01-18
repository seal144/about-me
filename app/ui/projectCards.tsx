import Chip from './chip';
import Paragraph from './paragraph';
import { Project } from '@/app/lib/definitions';

const ProjectProp = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="mb-3">
      <h4 className="text-background text-base sm:text-lg mb-1">{title}</h4>
      {children}
    </div>
  );
};

const ProjectCards = ({ data }: { data: Project[] }) => {
  return (
    <>
      {data.map((project) => (
        <div key={project.id} className="bg-primary p-6 rounded-2xl drop-shadow-l w-[100%] lg:w-[48%]">
          <h3 className="text-background text-xl text-center mb-2 sm:text-2xl md:mb-4">{project.name.toUpperCase()}</h3>
          <ProjectProp title="Description">
            {project.description.split('\n').map((paragraph, index) => (
              <Paragraph key="index">{paragraph}</Paragraph>
            ))}
          </ProjectProp>
          <ProjectProp title="My role">
            <Paragraph>{project.role}</Paragraph>
          </ProjectProp>
          <ProjectProp title="Core technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Chip key={index} label={tech} onPrimary small />
              ))}
            </div>
          </ProjectProp>
        </div>
      ))}
    </>
  );
};

export default ProjectCards;
