import type { Metadata } from 'next';
import { robotoMono } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer';
import BackgroundAnimation from '@/app/ui/backgroundAnimation';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Rafał Fąk | JavaScript Developer',
  description: 'Rafał Fąk - JavaScript Developer. About me page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} antialiased`}>
        <main>
          <BackgroundAnimation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
