import { Suspense } from 'react';
import ExperienceCards, { SkeletonExperienceCards } from '@/app/ui/experienceCards';
import { fetchProjects } from '@/app/lib/data';

const FetchedExperienceCards = async () => {
  const data = await fetchProjects();
  return <ExperienceCards data={data} />;
};

const ExperienceSection = () => {
  return (
    <Suspense fallback={<SkeletonExperienceCards quantity={3} />}>
      <FetchedExperienceCards />
    </Suspense>
  );
};

export default ExperienceSection;
