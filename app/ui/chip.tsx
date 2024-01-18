import { clsx } from 'clsx';

const Chip = ({
  label,
  onPrimary = false,
  small = false,
  skeleton = false,
  skeletonWidth = 'md',
}: {
  label: string;
  onPrimary?: boolean;
  small?: boolean;
  skeleton?: boolean;
  skeletonWidth?: 'sm' | 'md' | 'lg' | 'xlg';
}) => {
  return (
    <div
      className={clsx(`whitespace-nowrap w-fit text-foreground rounded-full py-1 px-3 drop-shadow-s`, {
        'bg-primary': !onPrimary,
        'bg-background': onPrimary,
        'text-base sm:text-xl': !small,
        'text-sm sm:text-base': small,
        'animate-pulse min-h-[36px]': skeleton,
        'min-w-[80px]': skeleton && skeletonWidth === 'sm',
        'min-w-[100px]': skeleton && skeletonWidth === 'md',
        'min-w-[130px]': skeleton && skeletonWidth === 'lg',
        'min-w-[160px]': skeleton && skeletonWidth === 'xlg',
      })}
    >
      {skeleton ? '' : `*${label}`}
    </div>
  );
};

export default Chip;
