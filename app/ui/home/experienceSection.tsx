import Section from '@/app/ui/section';
import ExperienceErrorFallback from '@/app/ui/home/experienceErrorFallback';

const ExperienceSection = () => {
  return (
    <Section title="Experience" subtitle="Some commercial projects I have been involved in:">
      <div className="flex flex-wrap justify-center gap-8 xl:gap-10 2xl:gap-12">
        <ExperienceErrorFallback />
      </div>
    </Section>
  );
};

export default ExperienceSection;
