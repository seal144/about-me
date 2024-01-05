const Navigation = ({ className }: { className?: string }) => {
  return (
    <section className={`bg-background py-5 border-y sticky top-0 z-[100] ${className}`}>
      <div className="container">Navigation</div>
    </section>
  );
};

export default Navigation;
