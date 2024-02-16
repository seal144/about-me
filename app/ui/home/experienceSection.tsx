import { Suspense } from 'react';
import Section from '@/app/ui/section';
import ExperienceErrorFallback from '@/app/ui/home/experienceErrorFallback';
import ExperienceCards, { SkeletonExperienceCards } from '@/app/ui/experienceCards';
import ErrorBoundary from '@/app/ui/errorBoundary';
import { fetchProjects } from '@/app/lib/data';
import { HomeSections } from '@/app/lib/definitions';

const FetchedExperienceCards = async () => {
  const data = await fetchProjects();
  return <ExperienceCards data={data} />;
};

const ExperienceSection = () => {
  return (
    <Section
      title="Experience"
      subtitle="Some commercial projects I have been involved in:"
      id={HomeSections.ExperienceSection}
    >
      <div className="flex flex-wrap justify-center gap-8 xl:gap-10 2xl:gap-12">
        <ErrorBoundary fallback={<ExperienceErrorFallback />}>
          <Suspense fallback={<SkeletonExperienceCards quantity={3} />}>
            <FetchedExperienceCards />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Section>
  );
};

export default ExperienceSection;
