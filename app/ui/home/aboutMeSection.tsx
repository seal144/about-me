import clsx from 'clsx';
import Image from 'next/image';
import { sectionMb, sectionPy } from '@/app/ui/section';
import Header from '@/app/ui/header';
import ExternalLink from '@/app/ui/externalLink';
import Paragraph from '@/app/ui/paragraph';
import DummyForScrollOffset from '@/app/ui/dummyForScroll';
import { HomeSections } from '@/app/lib/definitions';

// NOTE: the padding classes are related to containerPadding in tailwind.config.ts, if the containerPadding changes, you need to also manually change the below values to align with the app container. I tried to use the template string (``) and calculate the padding values to change automatically when containerPadding changes, but it is not always working.
const containerPadding = 'px-0 sm:px-[1rem]';
const lefColPadding = 'px-[1rem] lg:pr-[2rem] md:pl-[1rem] lg:pl-[3rem] xl:pl-[7rem]';
//unused right now because left column is centred
const rightColPadding = 'px-[1rem] lg:pl-[2rem] md:pr-[1rem] lg:pr-[3rem] xl:pr-[7rem]';

const SubSection = ({
  children,
  title,
  rightCol = false,
  onPrimary = false,
  center = false,
  noMarginTopOnSmallScreen = false,
}: {
  children: React.ReactNode;
  title?: string;
  rightCol?: boolean;
  onPrimary?: boolean;
  center?: boolean;
  noMarginTopOnSmallScreen?: boolean;
}) => {
  const padding = center ? 'px-[1rem]' : rightCol ? rightColPadding : lefColPadding;
  return (
    <>
      <div
        className={clsx('border-t mb-[-8px]', {
          'mt-8': !noMarginTopOnSmallScreen,
          'mt-[-12px]': noMarginTopOnSmallScreen,
          'md:mt-8': noMarginTopOnSmallScreen,
        })}
      ></div>
      <div
        className={clsx('text-foreground pt-[-12px]', padding, {
          'text-center': center,
        })}
      >
        {title && (
          <h3
            className={clsx('text-2xl mb-3 lg:text-3xl', {
              'text-primary': !onPrimary,
              'text-background': onPrimary,
            })}
          >
            {title.toUpperCase()}
          </h3>
        )}
        {children}
      </div>
    </>
  );
};

const AboutMeSection = () => {
  const infoSubsection = [
    {
      key: 'Name',
      value: 'Rafał Fąk',
    },
    {
      key: 'Based',
      value: 'Warsaw',
    },
    {
      key: 'Nationality',
      value: 'Polish',
    },
  ];

  return (
    <section className={clsx(sectionMb)}>
      <DummyForScrollOffset id={HomeSections.AboutMeSection} offset="sm" />
      <div className={clsx('container flex flex-col-reverse md:flex-row', containerPadding)}>
        <div
          className={clsx(
            sectionPy,
            'bg-background border-y sm:border-l sm:border-r md:w-7/12 md:border-r-0 xl:w-8/12'
          )}
        >
          <Header className="hidden md:block" title="About me" />
          <SubSection title="Who I am" noMarginTopOnSmallScreen>
            <Paragraph>
              I am a dedicated front-end developer with a track record in web application development. My passion for
              the craft is evident in my extensive knowledge of JavaScript and related technologies, with a primary
              focus on front-end frameworks like React.js and Vue.js.
            </Paragraph>
            <Paragraph>
              I thrive on the challenge of finding innovative solutions that enhance user experiences for websites and
              applications. As a team player, I like to collaborate and I know the importance of good communication.
            </Paragraph>
            <Paragraph>
              I believe in the transformative power of technology to make a positive impact on the world.
            </Paragraph>
          </SubSection>
          <SubSection title="My background">
            <Paragraph>
              My programming journey started from a deep fascination with information technology. As a self-taught
              professional, I&apos;ve developed an ability for independent learning and continuous self-improvement.
            </Paragraph>
            <Paragraph>
              Before my foray into the IT field, I earned a master of engineering degree in architectural studies and
              spent several years practicing as an architect. My experience in architecture has instilled in me an
              engineering approach to problem-solving, a sense of aesthetics, and an appreciation for good design. This
              background enabled me to approach programming with a unique blend of creativity and analytical thinking.
            </Paragraph>
          </SubSection>
        </div>
        <div className={clsx(sectionPy, 'bg-primary text-background md:w-5/12 xl:w-4/12')}>
          <Header className="mb-8 block md:hidden" title="About me" />
          <Image className="rounded-full mx-auto" src="/portrait.jpg" height={180} width={180} alt="portrait" />
          <SubSection title="Info" rightCol onPrimary center>
            <ul>
              {infoSubsection.map((item, index) => (
                <li key={index}>
                  <span className="font-bold text-background">*{item.key}:</span> {item.value}
                </li>
              ))}
            </ul>
          </SubSection>
          <SubSection title="Contact / Links" rightCol onPrimary center>
            <ul>
              <li>*rafalfak8@gmail.com</li>
              <li>
                *
                <ExternalLink
                  label="LinkedIn(rafal-fak)"
                  href="https://www.linkedin.com/in/rafal-fak/"
                  iconColor="foreground"
                  dropShadow={false}
                  hideArrowUnderLg
                />
              </li>
              <li>
                *
                <ExternalLink
                  label="Github(seal144)"
                  href="https://github.com/seal144"
                  iconColor="foreground"
                  dropShadow={false}
                  hideArrowUnderLg
                />
              </li>
            </ul>
          </SubSection>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
