import { clsx } from 'clsx';

const Chip = ({
  label,
  onPrimary = false,
  skeleton = false,
  skeletonWidth = 'md',
}: {
  label: string;
  onPrimary?: boolean;
  skeleton?: boolean;
  skeletonWidth?: 'sm' | 'md' | 'lg' | 'xlg';
}) => {
  return (
    <div
      className={clsx(`w-fit text-foreground rounded-full py-1 px-3 text-l drop-shadow-s sm:text-xl`, {
        'bg-primary': !onPrimary,
        'bg-background': onPrimary,
        'animate-pulse': skeleton,
        'min-h-[36px]': skeleton,
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
