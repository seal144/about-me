import Section from '@/app/ui/section';
import { HomeSections } from '@/app/lib/definitions';

const ExperienceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section
      title="Experience"
      subtitle="Some of the commercial projects, that I have been working on:"
      id={HomeSections.ExperienceSection}
    >
      <div className="flex flex-wrap justify-center gap-8 xl:gap-10 2xl:gap-12">{children}</div>
    </Section>
  );
};

export default ExperienceLayout;
