import { ReactElement } from 'react';
import clsx from 'clsx';
import Header from './header';
import DummyForScrollOffset from './dummyForScroll';

export const sectionMb = 'mb-section';
export const sectionPy = 'py-8';

const Section = ({
  backgroundPrimary = false,
  children,
  title,
  subtitle,
  id,
}: {
  children: ReactElement;
  backgroundPrimary?: boolean;
  title?: string;
  subtitle?: string;
  id?: string;
}) => {
  return (
    <section
      className={clsx(sectionMb, sectionPy, 'bg-background border-y', {
        'bg-primary': backgroundPrimary,
      })}
    >
      <DummyForScrollOffset id={id} />
      <div className="container flex flex-col items-center gap-5">
        {title && <Header onPrimary={backgroundPrimary} title={title} subtitle={subtitle} />}
        {children}
      </div>
    </section>
  );
};

export default Section;
