import clsx from 'clsx';
import type { Colors } from '@/tailwind.config';

const ArrowRightIcon = ({ fill = 'primary' }: { fill?: Colors }) => {
  return (
    <svg
      className={clsx('inline', {
        'fill-primary': fill === 'primary',
        'fill-secondary': fill === 'secondary',
        'fill-background': fill === 'background',
        'fill-foreground': fill === 'foreground',
      })}
      height="20"
      viewBox="0 -960 960 960"
      width="20"
    >
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  );
};

export default ArrowRightIcon;
