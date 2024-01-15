import BackgroundAnimation from '@/app/ui/home/background-animation';
import HeroSection from '@/app/ui/home/hero-section';
import Navigation from '@/app/ui/navigation';
import Section from '@/app/ui/section';
import AboutMeSection from '@/app/ui/home/aboutMeSection';
import SkillsSection from '@/app/ui/home/skillsSection';
import Footer from '@/app/ui/footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <BackgroundAnimation />
      <HeroSection />
      <Navigation className="mb-section" />
      <AboutMeSection />
      <SkillsSection />
      <Section title="Experience" subtitle="Commercial projects examples I have been involved in:">
        <p className="text-foreground text-xl h-[300px]">content</p>
      </Section>
      <Footer />
    </main>
  );
}
