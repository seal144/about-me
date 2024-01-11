import Image from 'next/image';
import Link from 'next/link';

const Navigation = ({ className }: { className?: string }) => {
  return (
    <section className={`bg-background py-3 border-y sticky top-0 z-[100] ${className}`}>
      <div className="container">
        <Link href="/" className="block w-fit">
          <Image src="/logo.png" height={36} width={66} alt="logo" />
        </Link>
      </div>
    </section>
  );
};

export default Navigation;
