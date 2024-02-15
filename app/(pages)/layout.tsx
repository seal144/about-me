import Navigation from '@/app/ui/navigation';
import Footer from '@/app/ui/footer';
import BackgroundAnimation from '../ui/home/background-animation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <BackgroundAnimation />
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
