import HeroSection from '@/app/ui/home/hero-section';
import Navigation from '@/app/ui/navigation';
import AboutMeSection from '@/app/ui/home/aboutMeSection';
import SkillsSection from '@/app/ui/home/skillsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navigation />
      <AboutMeSection />
      <SkillsSection />
    </>
  );
}
