import Image from 'next/image';
import ArrowDownAnimated from '../arrowDownAnimated';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <Image src="/logo.png" height={165} width={300} className="mb-12 hidden sm:block" alt="logo" />
      <Image src="/logo.png" height={110} width={200} className="mb-8 block sm:hidden" alt="logo" />
      <h1 className="text-center text-5xl mb-2 sm:text-6xl md:text-7xl">RAFAŁ FĄK</h1>
      <h2 className="text-center drop-shadow-s text-xl text-secondary sm:text-3xl md:text-4xl">JavaScript Developer</h2>
      <ArrowDownAnimated className="absolute bottom-16" />
    </section>
  );
}
