import { clsx } from 'clsx';
import Image from 'next/image';

import { ImageInterface } from '../lib/definitions';

const Chip = ({
  label,
  onPrimary = false,
  small = false,
  skeleton = false,
  skeletonWidth = 'md',
  image,
}: {
  label: string;
  onPrimary?: boolean;
  small?: boolean;
  skeleton?: boolean;
  skeletonWidth?: 'sm' | 'md' | 'lg' | 'xlg';
  image?: ImageInterface;
}) => {
  return (
    <div
      className={clsx(`whitespace-nowrap w-fit text-foreground rounded-full py-1 px-4 drop-shadow-s`, {
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
      {skeleton && ''}
      {!skeleton && image ? (
        <span>
          <Image height={20} width={20} src={image.src} alt={image.alt} className="inline mb-[3px]" /> {label}
        </span>
      ) : (
        `*${label}`
      )}
    </div>
  );
};

export default Chip;
