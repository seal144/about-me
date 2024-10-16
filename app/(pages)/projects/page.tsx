import Image from 'next/image';

import Section from '@/app/ui/section';
import Card, { CardTitle } from '@/app/ui/card';
import Chip from '@/app/ui/chip';
import InfoProp from '@/app/ui/infoProp';
import Paragraph from '@/app/ui/paragraph';
import ExternalLink from '@/app/ui/externalLink';
import { ImageInterface } from '@/app/lib/definitions';

interface LinkInterface {
  label: string;
  href: string;
}

interface technologyInterface {
  label: string;
  image?: ImageInterface;
}

interface ProjectsInterface {
  title: string;
  image?: ImageInterface;
  description?: string[];
  keyFeatures?: string[];
  links?: LinkInterface[];
  technologies?: technologyInterface[];
}

const projectsData: ProjectsInterface[] = [
  {
    title: 'Choooser - web app',
    image: { src: '/choooser.png', alt: 'communicator screen' },
    description: [
      'A fully functional application designed to streamline group decision-making processes, CHOOOSER provides a system for selecting the best choice from multiple options in a group setting.',
      'To use it, create or join a room and share it with others. Besides the decision-making system, rooms also offer a group chatting feature.',
      'The application leverages Firebase for authentication and database management, ensuring a secure and reliable user experience.',
    ],
    keyFeatures: [
      'Multiple authentication methods: email and password, Google, and anonymous sign-up.',
      'App settings to change the color theme, display name, or delete an account.',
      'Creating and joining rooms for collaboration with other users.',
      'A three-phase choosing process: setting options, ranking options, and presenting results.',
      'Intuitive room interface with integrated chat functionality for real-time communication among room members.',
    ],
    links: [
      {
        label: 'Publication',
        href: 'https://choooser.vercel.app/',
      },
      {
        label: 'GitHub repository',
        href: 'https://github.com/seal144/choooser/',
      },
    ],
    technologies: [
      {
        label: 'Vue',
        image: {
          src: '/logo/vue.png',
          alt: 'vue logo',
        },
      },
      {
        label: 'TypeScript',
        image: {
          src: '/logo/typescript.png',
          alt: 'typescript logo',
        },
      },
      {
        label: 'Pinia',
        image: {
          src: '/logo/pinia.png',
          alt: 'pinia logo',
        },
      },
      {
        label: 'Vuetify',
        image: {
          src: '/logo/vuetify.png',
          alt: 'vuetify logo',
        },
      },
      {
        label: 'Firebase',
        image: {
          src: '/logo/firebase.png',
          alt: 'firebase logo',
        },
      },
      {
        label: 'Vite',
        image: {
          src: '/logo/vite.png',
          alt: 'vite logo',
        },
      },
    ],
  },
  {
    title: 'About me - website',
    image: { src: '/about-me.png', alt: 'about me screen' },
    description: [
      'The Project is the website you are currently on :).  It is a résumé page on my professional skills, commercial projects that I was working on, and also my private projects that I am working on after hours.',
      'Built with Next.js version 14, the website employs server-side rendering for optimal performance. Some of the page data is fetched from the PostgreSQL database on the server, with integrated handling loading state and possible errors.',
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
    technologies: [
      {
        label: 'React',
        image: {
          src: '/logo/react.png',
          alt: 'react logo',
        },
      },
      {
        label: 'Next',
        image: {
          src: '/logo/next.png',
          alt: 'next logo',
        },
      },
      {
        label: 'TypeScript',
        image: {
          src: '/logo/typescript.png',
          alt: 'typescript logo',
        },
      },
      {
        label: 'Tailwind CSS',
        image: {
          src: '/logo/tailwindcss.png',
          alt: 'tailwind logo',
        },
      },
      {
        label: 'PostgreSQL',
        image: {
          src: '/logo/postgresql.png',
          alt: 'postgresql logo',
        },
      },
    ],
  },
  {
    title: 'Rectangle World - experimental evolution simulator',
    image: { src: '/rectangle-world.png', alt: 'rectangle world screen' },
    description: [
      'The project, called The Rectangle World, is a simple evolution simulator. In this world live two kinds of creatures: plants and bugs. Plants serve as the sole source of food for the bugs. The Bugs are the subject of evolution, they have two purposes: eat when hungry, and mate when full. Bugs have four features (inherited from their parents): speed, size, senses, and aggression (the features determine the appearance of a bug). To reproduce, bugs have to find another critter, who also wants to mate and who represents the same species. Offspring inherit features after their parents with some inaccuracy, allowing for evolutionary change. With passing generations in this small world, new species arise.',
      'Feel free to experiment with the simulator by customizing parameters such as environmental factors and initial genes of the bugs in the settings.',
      'The project is built using: JS (vanilla with object-oriented programming), HTML, CSS, and Canvas.',
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
    technologies: [
      {
        label: 'JavaScript',
        image: {
          src: '/logo/javascript.png',
          alt: 'javascript logo',
        },
      },
      { label: 'Canvas' },
    ],
  },
];

const ProjectCard = ({ project }: { project: ProjectsInterface }) => {
  const { title, image, description, keyFeatures, links, technologies } = project;

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
            <InfoProp title="Key features">
              {keyFeatures.map((feature, index) => (
                <Paragraph key={index}>{feature}</Paragraph>
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
                  <Chip key={index} label={tech.label} image={tech.image} onPrimary />
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
      <Section title="Projects" subtitle="Some of my private projects, that I am working on after hours">
        <div className="w-full flex flex-col gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          <Card>
            <p className="text-foreground text-base text-center sm:text-lg">
              That&apos;s not all. If you are interested in my other projects, check&nbsp;my&nbsp;
              <ExternalLink label="Github" href="https://github.com/seal144" iconColor="foreground" />
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
