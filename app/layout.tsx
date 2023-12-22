import type { Metadata } from 'next';
import { robotoMono } from '@/app/ui/fonts';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Rafał Fąk | Frontend Developer',
  description: 'Rafał Fąk - Frontend Developer. About me page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
