import clsx from 'clsx';
import { sectionCommonClasses } from '@/app/ui/section';

// NOTE: the padding classes are related to containerPadding in tailwind.config.ts, if the containerPadding changes, you need to also manually change the below values to align with the app container. I tried to use the template string (``) and calculate the padding values to change automatically when containerPadding changes, but it is not always working.
const containerPadding = 'px-0 sm:px-[1rem]';
const lefColPadding = 'px-[1rem] md:pl-[1rem] lg:pl-[3rem] xl:pl-[7rem]';
const rightColPadding = 'px-[1rem] md:pr-[1rem] lg:pr-[3rem] xl:pr-[7rem]';

const AboutMeSection = () => {
  return (
    <section className={clsx(sectionCommonClasses)}>
      <div className={clsx('container flex flex-col md:flex-row', containerPadding)}>
        <div className={clsx('flex-1 bg-background border-y sm:border-l sm:border-r md:border-r-0', lefColPadding)}>
          <p className="min-h-[400px]">AboutMeSection left</p>
        </div>
        <div className={clsx('flex-1 bg-primary text-background', rightColPadding)}>
          <p className="min-h-[400px]">AboutMeSection right</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
