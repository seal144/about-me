import clsx from 'clsx';
import SkeletonText from './skeletonText';

export const CardTitle = ({ title, loading = false }: { title?: string; loading?: boolean }) => {
  return (
    <h3 className="text-background text-xl text-center mb-2 sm:text-2xl md:mb-4">
      {!loading ? title?.toUpperCase() : <SkeletonText variant="h3" quantity={3} />}
    </h3>
  );
};

const Card = ({
  children,
  className,
  loading = false,
}: {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}) => {
  return (
    <div
      className={clsx('bg-primary p-6 rounded-2xl drop-shadow-l', className, {
        'animate-pulse': loading,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
