import BackgroundAnimation from '@/app/ui/home/background-animation';
import HeroSection from '@/app/ui/home/hero-section';
import Navigation from '@/app/ui/navigation';
import Section from '@/app/ui/section';
import Footer from '@/app/ui/footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <BackgroundAnimation />
      <HeroSection />
      <Navigation className="mb-section" />
      <Section title="About me">
        <p className="text-foreground text-xl h-[300px] mt-12">content</p>
      </Section>
      <Section title="Skills" backgroundPrimary>
        <p className="text-foreground text-xl h-[300px] mt-12">content</p>
      </Section>
      <Section title="Experience" subtitle="Commercial projects examples I have been involved in:">
        <p className="text-foreground text-xl h-[300px] mt-12">content</p>
      </Section>
      <Footer />
    </main>
  );
}
