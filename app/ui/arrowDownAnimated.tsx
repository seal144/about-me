'use client';
import clsx from 'clsx';
import style from './arrowDownAnimated.module.css';
import { HomeSections } from '@/app/lib/definitions';

const ArrowDownAnimated = ({ className }: { className?: string }) => {
  const goToAboutMeSection = () => {
    document.getElementById(HomeSections.AboutMeSection)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      onClick={goToAboutMeSection}
      className={clsx('drop-shadow-s hover:opacity-80 active:opacity-50', style.arrow, className)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ArrowDownAnimated;
