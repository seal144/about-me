import clsx from 'clsx';

const DummyForScrollOffset = ({ id, offset = 'lg' }: { id?: string; offset?: 'sm' | 'lg' }) => {
  return (
    <div className="relative">
      <div
        id={id}
        className={clsx('absolute', {
          'top-[-380px] lg:top-[-130px]': offset === 'lg',
          'top-[-340px] lg:top-[-90px]': offset === 'sm',
        })}
      ></div>
    </div>
  );
};

export default DummyForScrollOffset;
