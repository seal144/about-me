import Card, { CardTitle } from './card';
import Chip, { ChipsSkeletonGroup } from './chip';
import InfoProp from './infoProp';
import Paragraph from './paragraph';
import SkeletonText from './skeletonText';
import { Project } from '@/app/lib/definitions';
import ExternalLink from './externalLink';

const ExperienceCard = ({ project }: { project?: Project }) => {
  return (
    <Card className="xl:w-[48%]">
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
          {project.links && (
            <InfoProp title="Links">
              {project.links.map((link) => (
                <div key={link.id}>
                  *
                  <ExternalLink label={link.label} href={link.url} iconColor="foreground" />
                </div>
              ))}
            </InfoProp>
          )}
          <InfoProp title="Core technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Chip key={index} label={tech} onPrimary autoAssignImage />
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
            <SkeletonText variant="p" quantity={1} />
            <SkeletonText variant="p" quantity={1} />
          </InfoProp>
          <InfoProp skeleton>
            <div className="flex flex-wrap gap-2">
              <ChipsSkeletonGroup quantity={5} />
            </div>
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
