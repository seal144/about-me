import { Suspense } from 'react';
import { fetchSkills } from '@/app/lib/data';
import Chip from '@/app/ui/chip';
import { randomNumber } from '@/app/lib/utils';

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
      {new Array(43).fill('x').map((_, index) => (
        <Chip key={index} onPrimary skeleton skeletonWidth={setSkeletonWidth()} />
      ))}
    </>
  );
};

const SkillsSection = () => {
  return (
    <Suspense fallback={<SkillsSkeleton />}>
      <Skills />
    </Suspense>
  );
};

export default SkillsSection;
