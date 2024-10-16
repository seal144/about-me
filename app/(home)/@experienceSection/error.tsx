'use client';
import ExperienceCards from '@/app/ui/experienceCards';
import { Project } from '@/app/lib/definitions';
import Section from '@/app/ui/section';
import { HomeSections } from '@/app/lib/definitions';

const mockedData: Project[] = [
  {
    id: '0',
    name: 'AI-powered web\xa0app',
    description:
      'Web application leveraging AI to empower businesses across various activities. The app serves as a toolbox for creating collaborative projects using AI for a wide range of purposes, such as automating processes, gathering information, performing calculations, obtaining assistance, etc. It is about saturating AI with context and tools by creating various types of assets like agents, notes, API integrations, processes, etc. The app is integrated with multiple large language models (LLMs), enabling users to select the best model for each task.\nI was involved in developing the frontend of the application, making extensive use of AI-powered development tools. Additionally, I participated in tech decision-making during the early stages of the product life cycle.',
    role: 'Frontend developer',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Zustand', 'React Query'],
    list_order: 5,
    links: [
      {
        id: 'f21e180b-15c3-43b7-bdf6-5c2b14fabb81',
        url: 'https://aiconsole.ai/',
        label: 'website',
      },
    ],
  },
  {
    id: '1',
    name: 'E-learning web\xa0app',
    description:
      'E-learning app for medical students to prepare for university exams. Includes various types of exams and exercises also with study-in-group features via virtual meetings in the app. With an extensive dashboard of statistics about study progress and user account. The app is in a subscription-based model with a couple of different plans.\nI was involved in the rebranding and refactoring process of a whole application.',
    role: 'Frontend developer',
    technologies: ['React.js', 'TypeScript', 'Material UI', 'Apollo GraphQL'],
    list_order: 10,
    links: [
      {
        id: '55d69861-54f4-40d6-81d8-2b9fe0ca97d6',
        url: 'https://quesmed.com/',
        label: 'website',
      },
      {
        id: 'efaad3b2-624a-4f2f-9862-271709aef6e4',
        url: 'https://app.quesmed.com/',
        label: 'app',
      },
    ],
  },
  {
    id: '2',
    name: 'blockchain-related web\xa0app',
    description:
      'Web applications related to blockchain technology for data management using blockchain. With a sub-app for user engagement via various types of challenges that encourage users to use the app and promote it outside. The sub-app is integrated with the metamask wallet because for fulfilling the challenges user is rewarded with tokens working on the Ethereum blockchain deposited on his metamask wallet.  Sub-app includes a scoreboard of users based on gained tokens. The goal of the sub-app is to build a community of app users and promotion of the app itself.\nI was involved as a front-end developer dedicated to building the sub-app from scratch.',
    role: 'Frontend developer',
    technologies: ['React.js', 'TypeScript', 'React Query', 'Material UI', 'Wagmi'],
    list_order: 20,
    links: [
      {
        id: '7274c697-7d72-4730-9201-5b7379fd3dea',
        url: 'https://www.sqd.dev/',
        label: 'website',
      },
      {
        id: '7bc84015-c044-4013-a1df-4e9a8f386bd8',
        url: 'https://app.subsquid.io/',
        label: 'app',
      },
    ],
  },
  {
    id: '3',
    name: 'Software house website',
    description:
      'Website (SSG type) for a software house company. The site content was managed daily by various company departments through a CMS (Sanity).\nI was involved in developing the website, developing the CMS capabilities, refactoring existing code, performing deploys, and maintaining the project.',
    role: 'Frontend developer',
    technologies: ['React.js', 'Gatsby', 'JavaScript', 'Styled-components', 'Sanity', 'Netlify'],
    list_order: 30,
    links: [
      {
        id: '36b397e3-05c9-41e6-bf6a-fb7ac3eed1e9',
        url: 'https://10clouds.com/',
        label: 'website',
      },
    ],
  },
];

// The error is showing mocked data that normally are fetched from DB, it could be also an Error message, but I rather show some mocked data instead of an error. Maybe you want to ask: "But why do you have to fetch this data in the first place?" and my answer would be: "Good question you are right I don't have to do so, but it is my first project in Next.js and I want to practice features that Next has to offer"

const ExperienceError = () => {
  // the section and div are duplicated in page.tsx. These wrappers should be moved to layout.tsx (like in @skillsSection), but for some reason the layout file is omitted on deployment (it is absent on production)
  return (
    <Section
      title="Experience"
      subtitle="Some of the commercial projects, that I have been working on:"
      id={HomeSections.ExperienceSection}
    >
      <div className="flex flex-wrap justify-center gap-8 xl:gap-10 2xl:gap-12">
        <ExperienceCards data={mockedData} />
      </div>
    </Section>
  );
};

export default ExperienceError;
