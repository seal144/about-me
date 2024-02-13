import clsx from 'clsx';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  active = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  active?: boolean;
}) => {
  const primaryV = variant === 'primary';
  const secondaryV = variant === 'secondary';

  return (
    <button
      className={clsx('py-1 drop-shadow-s hover:opacity-80 active:opacity-50', {
        'bg-primary text-background px-4 text-xl': primaryV,
        'bg-secondary underline': primaryV && active,
        'border-y px-1': secondaryV,
        'text-secondary': secondaryV && active,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
