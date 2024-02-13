import BackgroundAnimation from '@/app/ui/home/background-animation';
import HeroSection from '@/app/ui/home/hero-section';
import Navigation from '@/app/ui/navigation';
import AboutMeSection from '@/app/ui/home/aboutMeSection';
import SkillsSection from '@/app/ui/home/skillsSection';
import ExperienceSection from '@/app/ui/home/experienceSection';
import Footer from '@/app/ui/footer';

export default function Home() {
  return (
    <main>
      <BackgroundAnimation />
      <HeroSection />
      <Navigation className="mb-section" />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
