import clsx from 'clsx';

const Paragraph = ({
  children,
  className,
  smallMargin = false,
}: {
  children: React.ReactNode;
  className?: string;
  smallMargin?: boolean;
}) => {
  return (
    <p
      className={clsx('text-foreground text-left text-sm sm:text-base lg:text-justify', className, {
        'mb-2': !smallMargin,
        'mb-1': smallMargin,
      })}
    >
      *{children}
    </p>
  );
};

export default Paragraph;
