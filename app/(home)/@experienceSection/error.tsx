'use client';
import ExperienceCards from '@/app/ui/experienceCards';
import { Project } from '@/app/lib/definitions';
import Section from '@/app/ui/section';
import { HomeSections } from '@/app/lib/definitions';

const mockedData: Project[] = [
  {
    id: '1',
    name: 'E-learning web\xa0app',
    description:
      'E-learning app for medical students to prepare for university exams. Includes various types of exams and exercises also with study-in-group features via virtual meetings in the app. With an extensive dashboard of statistics about study progress and user account. The app is in a subscription-based model with a couple of different plans.\nI was involved in the rebranding and refactoring process of a whole application.',
    role: 'Frontend developer',
    technologies: ['React.js', 'TypeScript', 'Material UI', 'Apollo GraphQL'],
    list_order: 10,
  },
  {
    id: '2',
    name: 'blockchain-related web\xa0app',
    description:
      'Web applications related to blockchain technology for data management using blockchain. With a sub-app for user engagement via various types of challenges that encourage users to use the app and promote it outside. The sub-app is integrated with the metamask wallet because for fulfilling the challenges user is rewarded with tokens working on the Ethereum blockchain deposited on his metamask wallet.  Sub-app includes a scoreboard of users based on gained tokens. The goal of the sub-app is to build a community of app users and promotion of the app itself.\nI was involved as a front-end developer dedicated to building the sub-app from scratch.',
    role: 'Frontend developer',
    technologies: ['React.js', 'TypeScript', 'React Query', 'Material UI', 'Wagmi'],
    list_order: 20,
  },
  {
    id: '3',
    name: 'Software house website',
    description:
      'Website (SSG type) for a software house company. The site content was managed daily by various company departments through a CMS (Sanity).\nI was involved in developing the website, developing the CMS capabilities, refactoring existing code, performing deploys, and maintaining the project.',
    role: 'Frontend developer',
    technologies: ['React.js', 'Gatsby', 'JavaScript', 'Styled-components', 'Sanity', 'Netlify'],
    list_order: 30,
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
