import clsx from 'clsx';

const HamburgerButton = ({ isOpen, toggleIsOpen }: { isOpen: Boolean; toggleIsOpen: () => void }) => {
  return (
    <button className="w-8 space-y-2" onClick={toggleIsOpen}>
      <div
        className={clsx('w-full h-1 bg-primary origin-center transition duration-300', {
          'rotate-[225deg] translate-y-[12px]': isOpen,
        })}
      ></div>
      <div
        className={clsx('w-full h-1 bg-primary origin-center transition duration-300', {
          'rotate-[-225deg]': isOpen,
        })}
      ></div>
      <div
        className={clsx('w-full h-1 bg-primary origin-center transition duration-300', {
          'translate-y-[-50px]': isOpen,
        })}
      ></div>
    </button>
  );
};

export default HamburgerButton;
