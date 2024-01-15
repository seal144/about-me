import clsx from 'clsx';

const Paragraph = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={clsx('text-foreground mb-2 text-left lg:text-justify', className)}>*{children}</p>;
};

export default Paragraph;
