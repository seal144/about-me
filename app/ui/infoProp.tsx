import SkeletonText from './skeletonText';

const InfoProp = ({
  title,
  children,
  skeleton = false,
}: {
  title?: string;
  children: React.ReactNode;
  skeleton?: boolean;
}) => {
  return (
    <div className="mb-3">
      <h4 className="text-background text-base sm:text-lg mb-1">{!skeleton ? title : <SkeletonText variant="h4" />}</h4>
      {children}
    </div>
  );
};

export default InfoProp;
