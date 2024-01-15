import clsx from 'clsx';

const Header = ({
  title,
  subtitle,
  onPrimary = false,
  className = '',
}: {
  title: string;
  subtitle?: string;
  onPrimary?: boolean;
  className?: string;
}) => {
  return (
    <div className="min-h-0">
      <h2
        className={clsx(
          'w-[200px] mx-auto text-center  text-3xl drop-shadow-l border-y sm:w-[300px] sm:text-4xl',
          {
            'text-background': onPrimary,
          },
          className
        )}
      >
        {title.toUpperCase()}
      </h2>
      <h3
        className={clsx('text-xl my-3 drop-shadow-s text-center', {
          'text-secondary': !onPrimary,
          'text-foreground': onPrimary,
        })}
      >
        {subtitle}
      </h3>
    </div>
  );
};

export default Header;
