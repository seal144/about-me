'use client';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';

import Button from './button';
import HamburgerButton from './hamburgerButton';
import { Routes, HomeSections } from '@/app/lib/definitions';
import { getElementTopPosition } from '@/app/lib/utils';

const Navigation = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<HomeSections | null>(null);
  const [isMenuExpanded, setIsMenuExpanded] = useState<Boolean>(false);

  const isHome = useMemo(() => {
    return pathName === Routes.Home;
  }, [pathName]);
  const isProjects = useMemo(() => {
    return pathName === Routes.Projects;
  }, [pathName]);

  useEffect(() => {
    if (isHome) {
      const handleActiveSection = () => {
        const AboutMeSectionPosition = getElementTopPosition(HomeSections.AboutMeSection);
        const SkillsSectionPosition = getElementTopPosition(HomeSections.SkillsSection);
        const ExperienceSectionPosition = getElementTopPosition(HomeSections.ExperienceSection);

        if (
          AboutMeSectionPosition !== undefined &&
          SkillsSectionPosition !== undefined &&
          ExperienceSectionPosition !== undefined
        ) {
          if (AboutMeSectionPosition <= 1 && SkillsSectionPosition > 1 && ExperienceSectionPosition > 1) {
            setActiveSection(HomeSections.AboutMeSection);
          } else if (SkillsSectionPosition <= 1 && ExperienceSectionPosition > 1) {
            setActiveSection(HomeSections.SkillsSection);
          } else if (ExperienceSectionPosition <= 1) {
            setActiveSection(HomeSections.ExperienceSection);
          } else {
            setActiveSection(null);
          }
        }
      };

      handleActiveSection();

      window.addEventListener('scroll', handleActiveSection);

      return () => {
        window.removeEventListener('scroll', handleActiveSection);
      };
    }
  }, [isHome]);

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      router.push(Routes.Home);
    }
  };

  const handleLink = (route: Routes) => {
    if (pathName === route) {
      return;
    }
    router.push(route);
  };

  const handleSectionLink = (sectionId: string) => {
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`${Routes.Home}#${sectionId}`);
    }
  };

  return (
    <section
      className={clsx(
        'bg-background py-3 border-y sticky top-0 z-[100] mb-sectionMargin overflow-hidden transition-[height] duration-300',
        {
          'h-[66px]': !isMenuExpanded,
          'h-[324px] lg:h-[66px]': isMenuExpanded,
        }
      )}
    >
      <div className="container flex justify-between items-start ">
        <button onClick={handleLogoClick} className="block">
          <Image src="/logo.png" height={36} width={66} alt="logo" />
        </button>
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="w-fit lg:hidden mt-1 mb-3 ml-auto">
            <HamburgerButton
              isOpen={isMenuExpanded}
              toggleIsOpen={() => {
                setIsMenuExpanded((prevState) => !prevState);
              }}
            />
          </div>
          <Button
            onClick={() => {
              handleLink(Routes.Home);
            }}
            active={isHome}
          >
            Home
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleSectionLink(HomeSections.AboutMeSection);
            }}
            active={activeSection === HomeSections.AboutMeSection}
          >
            About me
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleSectionLink(HomeSections.SkillsSection);
            }}
            active={activeSection === HomeSections.SkillsSection}
          >
            Skills
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleSectionLink(HomeSections.ExperienceSection);
            }}
            active={activeSection === HomeSections.ExperienceSection}
          >
            Experience
          </Button>
          <Button
            onClick={() => {
              handleLink(Routes.Projects);
            }}
            active={isProjects}
          >
            Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
