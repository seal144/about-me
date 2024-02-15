'use client';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import Button from './button';
import { Routes, HomeSections } from '@/app/lib/definitions';
import { getElementTopPosition } from '@/app/lib/utils';

const Navigation = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<HomeSections | null>(null);

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
    <section className={`bg-background py-3 border-y sticky top-0 z-[100] ${className}`}>
      <div className="container flex justify-between">
        <button onClick={handleLogoClick} className="block">
          <Image src="/logo.png" height={36} width={66} alt="logo" />
        </button>
        <div className="flex gap-3">
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
