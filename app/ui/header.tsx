import clsx from 'clsx';

const Header = ({ reversed = false, title, subtitle }: { reversed?: boolean; title: string; subtitle?: string }) => {
  return (
    <>
      <h2
        className={clsx('w-fit text-background text-3xl px-3 py-1 drop-shadow-l rounded-md sm:text-4xl', {
          'bg-primary': !reversed,
          'bg-background': reversed,
          'text-background': !reversed,
          'text-primary': reversed,
        })}
      >
        *{title}
      </h2>
      <h3
        className={clsx('text-xl mt-3 drop-shadow-s', {
          'text-secondary': !reversed,
          'text-foreground': reversed,
        })}
      >
        {subtitle}
      </h3>
    </>
  );
};

export default Header;
