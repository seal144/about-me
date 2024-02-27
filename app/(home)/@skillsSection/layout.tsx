import Section from '@/app/ui/section';
import { HomeSections } from '@/app/lib/definitions';

const SkillsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section title="Skills" backgroundPrimary id={HomeSections.SkillsSection}>
      <div className="flex gap-2 flex-wrap justify-center sm:gap-4">{children}</div>
    </Section>
  );
};

export default SkillsLayout;
