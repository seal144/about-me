import { clsx } from 'clsx';

const Chip = ({ label, onPrimary = false }: { label: string; onPrimary?: boolean }) => {
  return (
    <div
      className={clsx('w-fit text-foreground rounded-full py-1 px-3 text-l drop-shadow-s sm:text-xl', {
        'bg-primary': !onPrimary,
        'bg-background': onPrimary,
      })}
    >
      *{label}
    </div>
  );
};

export default Chip;
