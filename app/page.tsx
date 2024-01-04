import BackgroundAnimation from '@/app/ui/home/background-animation';
import HeroSection from '@/app/ui/home/hero-section';

export default function Home() {
  return (
    <main className="flex flex-col">
      <BackgroundAnimation />
      <HeroSection />
      <section className="min-h-screen bg-background">
        <h1 className="text-5xl">Example Section</h1>
        <p className="text-xl text-secondary">example </p>
      </section>
    </main>
  );
}
