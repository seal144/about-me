import { clsx } from 'clsx';
import Image from 'next/image';

import { ImageInterface } from '@/app/lib/definitions';
import { randomNumber } from '@/app/lib/utils';
import autoAssignLogoImage from '@/app/lib/autoAssignLogoImage';

const Chip = ({
  label,
  onPrimary = false,
  small = false,
  skeleton = false,
  skeletonWidth = 'md',
  image,
  autoAssignImage = false,
}: {
  label?: string;
  onPrimary?: boolean;
  small?: boolean;
  skeleton?: boolean;
  skeletonWidth?: 'sm' | 'md' | 'lg' | 'xlg';
  image?: ImageInterface;
  autoAssignImage?: boolean;
}) => {
  if (autoAssignImage && label) {
    image = autoAssignLogoImage(label);
  }
  const setContent = () => {
    if (skeleton) {
      return '';
    }
    if (image) {
      return (
        <span>
          <Image
            height={20}
            width={20}
            src={image.src}
            alt={image.alt}
            className="hidden translate-y-[-2px] sm:inline"
          />
          <Image
            height={18}
            width={18}
            src={image.src}
            alt={image.alt}
            className="inline translate-y-[-2px] sm:hidden"
          />{' '}
          {label}
        </span>
      );
    }
    if (label) {
      return `*${label}`;
    }
  };

  const content = setContent();

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
      {content}
    </div>
  );
};

export const ChipsSkeletonGroup = ({ quantity }: { quantity: number }) => {
  const setSkeletonWidth = () => {
    const randomVariant = randomNumber(5);
    switch (randomVariant) {
      case 0:
        return 'sm';
      case 1:
        return 'md';
      case 2:
        return 'lg';
      case 3:
        return 'xlg';
      default:
        return 'md';
    }
  };

  return (
    <>
      {new Array(quantity).fill('x').map((_, index) => (
        <Chip key={index} onPrimary skeleton skeletonWidth={setSkeletonWidth()} />
      ))}
    </>
  );
};

export default Chip;
