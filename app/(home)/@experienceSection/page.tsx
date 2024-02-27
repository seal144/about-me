import { Suspense } from 'react';
import ExperienceCards, { SkeletonExperienceCards } from '@/app/ui/experienceCards';
import { fetchProjects } from '@/app/lib/data';
import Section from '@/app/ui/section';
import { HomeSections } from '@/app/lib/definitions';

const FetchedExperienceCards = async () => {
  const data = await fetchProjects();
  return <ExperienceCards data={data} />;
};

const ExperienceSection = () => {
  // the section and div are duplicated in error.tsx. These wrappers should be moved to layout.tsx (like in @skillsSection), but for some reason the layout file is omitted on deployment (it is absent on production)
  return (
    <Section
      title="Experience"
      subtitle="Some of the commercial projects, that I have been working on:"
      id={HomeSections.ExperienceSection}
    >
      <div className="flex flex-wrap justify-center gap-8 xl:gap-10 2xl:gap-12">
        <Suspense fallback={<SkeletonExperienceCards quantity={3} />}>
          <FetchedExperienceCards />
        </Suspense>
      </div>
    </Section>
  );
};

export default ExperienceSection;
