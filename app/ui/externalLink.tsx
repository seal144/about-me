import Link from 'next/link';
import ArrowRightIcon from '@/app/ui/icons/arrowRightIcon';
import type { Colors } from '@/tailwind.config';

const ExternalLink = ({ label, href, iconColor }: { label: string; href: string; iconColor?: Colors }) => {
  return (
    <Link className="drop-shadow-s border-b-sm" href={href} target="_blank">
      {label}
      <ArrowRightIcon fill={iconColor} />
    </Link>
  );
};

export default ExternalLink;
