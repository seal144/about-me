'use client';

import { usePathname, useRouter } from 'next/navigation';

import Image from 'next/image';

const Navigation = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  const router = useRouter();

  const logoClick = () => {
    if (pathName === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      router.push('/');
    }
  };

  return (
    <section className={`bg-background py-3 border-y sticky top-0 z-[100] ${className}`}>
      <div className="container">
        <button onClick={logoClick} className="block">
          <Image src="/logo.png" height={36} width={66} alt="logo" />
        </button>
      </div>
    </section>
  );
};

export default Navigation;
