'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import Button from './button';
import { Routes } from '@/app/lib/definitions';

const Navigation = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (pathName === Routes.Home) {
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
            active={pathName === Routes.Home}
          >
            HOME
          </Button>
          <Button variant="secondary">About me</Button>
          <Button variant="secondary">Skills</Button>
          <Button variant="secondary">Experience</Button>
          <Button
            onClick={() => {
              handleLink(Routes.Projects);
            }}
            active={pathName === Routes.Projects}
          >
            PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
