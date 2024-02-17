import Card, { CardTitle } from './card';
import Chip from './chip';
import InfoProp from './infoProp';
import Paragraph from './paragraph';
import SkeletonText from './skeletonText';
import { Project } from '@/app/lib/definitions';

const ExperienceCard = ({ project }: { project?: Project }) => {
  return (
    <Card className="lg:w-[48%]">
      <CardTitle title={project?.name.toUpperCase()} loading={!project} />
      {project ? (
        <>
          <InfoProp title="Description">
            {project.description.split('\n').map((paragraph, index) => (
              <Paragraph key="index">{paragraph}</Paragraph>
            ))}
          </InfoProp>
          <InfoProp title="My role">
            <Paragraph>{project.role}</Paragraph>
          </InfoProp>
          <InfoProp title="Core technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Chip key={index} label={tech} onPrimary small />
              ))}
            </div>
          </InfoProp>
        </>
      ) : (
        <>
          <InfoProp skeleton>
            <SkeletonText variant="p" quantity={70} />
          </InfoProp>
          <InfoProp skeleton>
            <SkeletonText variant="p" quantity={3} />
          </InfoProp>
          <InfoProp skeleton>
            <SkeletonText variant="h3" quantity={5} roundFull />
          </InfoProp>
        </>
      )}
    </Card>
  );
};

export const SkeletonExperienceCards = ({ quantity }: { quantity: number }) => {
  const iterationArray = new Array(quantity).fill('');
  return (
    <>
      {iterationArray.map((item, index) => (
        <ExperienceCard key={index} />
      ))}
    </>
  );
};

const ExperienceCards = ({ data }: { data: Project[] }) => {
  return (
    <>
      {data.map((project) => (
        <ExperienceCard key={project.id} project={project} />
      ))}
    </>
  );
};

export default ExperienceCards;