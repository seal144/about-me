const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <button
      className="bg-primary text-background text-xl px-4 py-1 rounded-md drop-shadow-s hover:opacity-80 active:opacity-60"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
