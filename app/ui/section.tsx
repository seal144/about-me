import { ReactElement } from 'react';
import clsx from 'clsx';
import Header from './header';

export const sectionCommonClasses = 'mb-section';

const Section = ({
  backgroundPrimary = false,
  children,
  title,
  subtitle,
}: {
  children: ReactElement;
  backgroundPrimary?: boolean;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <section
      className={clsx(sectionCommonClasses, 'bg-background  py-8 border-y', {
        'bg-primary': backgroundPrimary,
      })}
    >
      <div className="container flex flex-col items-center gap-5">
        {title && <Header reversed={backgroundPrimary} title={title} subtitle={subtitle} />}
        {children}
      </div>
    </section>
  );
};

export default Section;
