import Image from 'next/image';

import Section from '@/app/ui/section';
import Card, { CardTitle } from '@/app/ui/card';
import Chip from '@/app/ui/chip';
import InfoProp from '@/app/ui/infoProp';
import Paragraph from '@/app/ui/paragraph';
import ExternalLink from '@/app/ui/externalLink';

interface LinkInterface {
  label: string;
  href: string;
}

interface ImageInterface {
  src: string;
  alt: string;
}

const projects = [
  {
    title: 'Communicator - web app',
    image: { src: '/communicator.png', alt: 'communicator screen' },
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem nisi, placeat sunt perferendis quae adipisci impedit, totam velit illo, rem deleniti natus omnis ex deserunt quam accusamus nam similique?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem nisi, placeat sunt perferendis quae adipisci impedit, totam velit illo, rem deleniti natus omnis ex deserunt quam accusamus nam similique?',
    ],
    keyFeatures: ['Lorem ipsum dolor', 'Lorem dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum sit amet'],
    links: [
      {
        label: 'Publication',
        href: 'https://choooser.vercel.app/',
      },
      {
        label: 'GitHub repository',
        href: 'https://github.com/seal144/chooser/',
      },
    ],
    technologies: ['Vue', 'Pinia', 'Vuetify', 'Firebase', 'Vite'],
  },
  {
    title: 'Rectangle World - experimental evolution simulator',
    image: { src: '/rectangle-world.png', alt: 'rectangle world screen' },
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem nisi, placeat sunt perferendis quae adipisci impedit, totam velit illo, rem deleniti natus omnis ex deserunt quam accusamus nam similique?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem nisi, placeat sunt perferendis quae adipisci impedit, totam velit illo, rem deleniti natus omnis ex deserunt quam accusamus nam similique?',
    ],
    links: [
      {
        label: 'Publication',
        href: 'https://seal144.github.io/rec_w/',
      },
      {
        label: 'GitHub repository',
        href: 'https://github.com/seal144/rec_w/',
      },
    ],
    technologies: ['Canvas'],
  },
  {
    title: 'About me - website',
    image: { src: '/about-me.png', alt: 'about me screen' },
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem nisi, placeat sunt perferendis quae adipisci impedit, totam velit illo, rem deleniti natus omnis ex deserunt quam accusamus nam similique?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem nisi, placeat sunt perferendis quae adipisci impedit, totam velit illo, rem deleniti natus omnis ex deserunt quam accusamus nam similique?',
    ],
    links: [
      {
        label: 'Publication',
        href: 'https://rafal-fak.vercel.app/',
      },
      {
        label: 'GitHub repository',
        href: 'https://github.com/seal144/about-me/',
      },
    ],
    technologies: ['React', 'Next', 'Tailwind', 'PostgreSQL'],
  },
];

const ProjectCard = ({
  title,
  image,
  description,
  keyFeatures,
  links,
  technologies,
}: {
  title: string;
  image?: ImageInterface;
  description?: string[];
  keyFeatures?: string[];
  links?: LinkInterface[];
  technologies?: string[];
}) => {
  return (
    <Card>
      <CardTitle title={title} />
      <div className="flex flex-col gap-4 lg:flex-row xl:gap-8 xxl:gap-12">
        {image && (
          <div className="flex-1">
            <Image
              className="border border-lg border-foreground"
              src={image.src}
              height={450}
              width={600}
              alt={image.alt}
            />
          </div>
        )}
        <div className="flex-1">
          {description && (
            <InfoProp title="Description">
              {description.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
              ))}
            </InfoProp>
          )}
          {keyFeatures && (
            <InfoProp title="key features">
              {keyFeatures.map((feature, index) => (
                <Paragraph smallMargin key={index}>
                  {feature}
                </Paragraph>
              ))}
            </InfoProp>
          )}
          {links && (
            <InfoProp title="Links">
              <div className="text-foreground space-y-2">
                {links.map((link, index) => (
                  <div key={index}>
                    *
                    <ExternalLink label={link.label} href={link.href} iconColor="foreground" />
                  </div>
                ))}
              </div>
            </InfoProp>
          )}
          {technologies && (
            <InfoProp title="Core technologies">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Chip key={index} label={tech} onPrimary />
                ))}
              </div>
            </InfoProp>
          )}
        </div>
      </div>
    </Card>
  );
};

export default function Projects() {
  return (
    <>
      <Section title="Projects" subtitle="non">
        <div className="w-full flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              keyFeatures={project.keyFeatures}
              links={project.links}
              technologies={project.technologies}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
