import clsx from 'clsx';
import { randomNumber } from '@/app/lib/utils';

const SkeletonText = ({ variant = 'p', quantity = 1 }: { variant?: 'p' | 'h3' | 'h4'; quantity?: number }) => {
  const iterationArray = new Array(quantity).fill(0).map(() => {
    const randomWidthVariant = randomNumber(4);
    switch (randomWidthVariant) {
      case 0:
        return 'sm';
      case 1:
        return 'md';
      case 2:
        return 'lg';
      case 3:
        return 'xl';
      default:
        return 'md';
    }
  });
  const pVariant = variant === 'p';
  const h4Variant = variant === 'h4';
  const h3Variant = variant === 'h3';

  return (
    <div className="opacity-40">
      {iterationArray.map((width, index, array) => {
        const lastElement = index === array.length - 1;
        const smWidth = width === 'sm';
        const mdWidth = width === 'md';
        const lgWidth = width === 'lg';
        const xlWidth = width === 'xl';
        return (
          <div
            key={index}
            className={clsx('animate-pulse inline-block rounded-lg', {
              'w-[22px]': smWidth && pVariant,
              'w-[42px]': mdWidth && pVariant,
              'w-[62px]': lgWidth && pVariant,
              'w-[82px]': xlWidth && pVariant,
              'w-[60px]': smWidth && !pVariant,
              'w-[80px]': mdWidth && !pVariant,
              'w-[100px]': lgWidth && !pVariant,
              'w-[120px]': xlWidth && !pVariant,
              'h-[16px] bg-foreground': pVariant,
              'h-[18px] bg-background': h4Variant,
              'h-[24px] bg-background': h3Variant,
              'mr-2': (pVariant || h4Variant) && !lastElement,
              'mr-3': h3Variant && !lastElement,
              'mr-0': lastElement,
            })}
          ></div>
        );
      })}
    </div>
  );
};

export default SkeletonText;
