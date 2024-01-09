import Section from '@/app/ui/section';
import { fetchSkills } from '@/app/lib/data';
import Chip from '@/app/ui/chip';

const SkillsSection = async () => {
  const data = await fetchSkills();
  return (
    <Section title="Skills" backgroundPrimary>
      <div className="flex gap-2 flex-wrap justify-center sm:gap-4">
        {data.map((skill) => (
          <Chip key={skill.id} label={skill.name} onPrimary />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
