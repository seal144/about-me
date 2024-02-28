import { Suspense } from 'react';
import { fetchSkills } from '@/app/lib/data';
import Chip, { ChipsSkeletonGroup } from '@/app/ui/chip';

const Skills = async () => {
  const data = await fetchSkills();
  return <>{data && data.map((skill) => <Chip key={skill.id} label={skill.name} onPrimary />)}</>;
};

const SkillsSection = () => {
  return (
    <Suspense fallback={<ChipsSkeletonGroup quantity={43} />}>
      <Skills />
    </Suspense>
  );
};

export default SkillsSection;
