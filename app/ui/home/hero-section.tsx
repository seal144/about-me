import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <Image src="/logo_wyc.png" height={81} width={150} className="mb-4 hidden sm:block" alt="logo" />
      <Image src="/logo_wyc.png" height={54} width={100} className="mb-4 block sm:hidden" alt="logo" />
      <h1 className="text-center text-5xl mb-2 sm:text-6xl md:text-7xl">Rafał Fąk</h1>
      <h2 className="text-center drop-shadow-s text-2xl text-secondary sm:text-3xl md:text-4xl">
        JavaScript Developer
      </h2>
    </section>
  );
}
