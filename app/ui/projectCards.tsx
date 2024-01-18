import clsx from 'clsx';
import Chip from './chip';
import Paragraph from './paragraph';
import SkeletonText from './skeletonText';
import { Project } from '@/app/lib/definitions';

const ProjectProp = ({
  title,
  children,
  skeleton = false,
}: {
  title?: string;
  children: React.ReactNode;
  skeleton?: boolean;
}) => {
  return (
    <div className="mb-3">
      <h4 className="text-background text-base sm:text-lg mb-1">{!skeleton ? title : <SkeletonText variant="h4" />}</h4>
      {children}
    </div>
  );
};

const ProjectCard = ({ project }: { project?: Project }) => {
  return (
    <div
      className={clsx('bg-primary p-6 rounded-2xl drop-shadow-l w-[100%] lg:w-[48%]', {
        'animate-pulse': !project,
      })}
    >
      <h3 className="text-background text-xl text-center mb-2 sm:text-2xl md:mb-4">
        {project ? project.name.toUpperCase() : <SkeletonText variant="h3" quantity={3} />}
      </h3>
      {project ? (
        <>
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
        </>
      ) : (
        <>
          <ProjectProp skeleton>
            <SkeletonText variant="p" quantity={70} />
          </ProjectProp>
          <ProjectProp skeleton>
            <SkeletonText variant="p" quantity={3} />
          </ProjectProp>
          <ProjectProp skeleton>
            <SkeletonText variant="h3" quantity={5} roundFull />
          </ProjectProp>
        </>
      )}
    </div>
  );
};

export const SkeletonProjectCards = ({ quantity }: { quantity: number }) => {
  const iterationArray = new Array(quantity).fill('');
  return (
    <>
      {iterationArray.map((item, index) => (
        <ProjectCard key={index} />
      ))}
    </>
  );
};

const ProjectCards = ({ data }: { data: Project[] }) => {
  return (
    <>
      {data.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  );
};

export default ProjectCards;
