import Navigation from '@/app/ui/navigation';
import Footer from '@/app/ui/footer';
import BackgroundAnimation from '../ui/home/background-animation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <BackgroundAnimation />
      <Navigation className="mb-section" />
      {children}
      <Footer />
    </main>
  );
}
