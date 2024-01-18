import { Suspense } from 'react';
import Section from '@/app/ui/section';
import ExperienceErrorFallback from '@/app/ui/home/experienceErrorFallback';
import ProjectCards from '@/app/ui/projectCards';
import ErrorBoundary from '@/app/ui/errorBoundary';
import { fetchProjects } from '@/app/lib/data';

const FetchedProjectCards = async () => {
  const data = await fetchProjects();
  return <ProjectCards data={data} />;
};

const ExperienceSection = () => {
  return (
    <Section title="Experience" subtitle="Some commercial projects I have been involved in:">
      <div className="flex flex-wrap justify-center gap-8 xl:gap-10 2xl:gap-12">
        <ErrorBoundary fallback={<ExperienceErrorFallback />}>
          <Suspense fallback={<p>loading</p>}>
            <FetchedProjectCards />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Section>
  );
};

export default ExperienceSection;