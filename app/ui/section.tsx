import { ReactElement } from 'react';
import clsx from 'clsx';
import Header from './header';

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
      className={clsx('bg-background py-8 mb-section border-y', {
        'bg-primary': backgroundPrimary,
      })}
    >
      <div className="container flex flex-col items-center">
        {title && <Header reversed={backgroundPrimary} title={title} subtitle={subtitle} />}
        {children}
      </div>
    </section>
  );
};

export default Section;
