import clsx from 'clsx';
import Link from 'next/link';
import ArrowRightIcon from '@/app/ui/icons/arrowRightIcon';
import type { Colors } from '@/tailwind.config';

const ExternalLink = ({
  label,
  href,
  iconColor,
  underline = true,
  hideArrowOnMd = false,
  dropShadow = true,
}: {
  label: string;
  href: string;
  iconColor?: Colors;
  underline?: boolean;
  hideArrowOnMd?: boolean;
  dropShadow?: boolean;
}) => {
  return (
    <Link
      className={clsx({
        'drop-shadow-s': dropShadow,
        'border-b-sm': underline,
      })}
      href={href}
      target="_blank"
    >
      {label}
      <ArrowRightIcon
        className={clsx({
          'inline md:hidden lg:inline': hideArrowOnMd,
        })}
        fill={iconColor}
      />
    </Link>
  );
};

export default ExternalLink;
