import { Suspense } from 'react';
import Section from '@/app/ui/section';
import { fetchSkills } from '@/app/lib/data';
import Chip from '@/app/ui/chip';
import { randomNumber } from '@/app/lib/utils';
import ErrorBoundary from '@/app/ui/errorBoundary';
import SkillsErrorFallback from './skillsErrorFallback';

const Skills = async () => {
  const data = await fetchSkills();
  return <>{data && data.map((skill) => <Chip key={skill.id} label={skill.name} onPrimary />)}</>;
};

const SkillsSkeleton = () => {
  const setSkeletonWidth = () => {
    const randomVariant = randomNumber(5);
    switch (randomVariant) {
      case 0:
        return 'sm';
      case 1:
        return 'md';
      case 2:
        return 'lg';
      case 3:
        return 'xlg';
      default:
        return 'md';
    }
  };

  return (
    <>
      {new Array(25).fill('x').map((_, index) => (
        <Chip key={index} label="skeleton" onPrimary skeleton skeletonWidth={setSkeletonWidth()} />
      ))}
    </>
  );
};

const SkillsSection = () => {
  return (
    <Section title="Skills" backgroundPrimary>
      <div className="flex gap-2 flex-wrap justify-center sm:gap-4">
        <ErrorBoundary fallback={<SkillsErrorFallback />}>
          <Suspense fallback={<SkillsSkeleton />}>
            <Skills />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Section>
  );
};

export default SkillsSection;
