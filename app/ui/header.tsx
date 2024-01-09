import clsx from 'clsx';

const Header = ({ reversed = false, title, subtitle }: { reversed?: boolean; title: string; subtitle?: string }) => {
  return (
    <div className="min-h-0">
      <h2
        className={clsx('w-[200px] mx-auto text-center  text-3xl drop-shadow-l border-y sm:w-[300px] sm:text-4xl', {
          'text-background': reversed,
        })}
      >
        {title.toUpperCase()}
      </h2>
      <h3
        className={clsx('text-xl my-3 drop-shadow-s text-center', {
          'text-secondary': !reversed,
          'text-foreground': reversed,
        })}
      >
        {subtitle}
      </h3>
    </div>
  );
};

export default Header;
