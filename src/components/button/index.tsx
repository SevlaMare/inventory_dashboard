interface ButtonProps {
  name: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const buttonVariants = {
  primary:
    'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800',
  secondary:
    'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
  danger:
    'bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800',
  outline:
    'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white',
};

const buttonSizes = {
  small: 'py-1 px-2',
  medium: 'py-2 px-4',
  large: 'py-3 px-6',
};

// TODO: style states on d system: hover focus disable | press rest(std)
export function Button({
  onClick,
  name,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        font-semibold rounded shadow focus:outline-none focus:ring-2 focus:ring-opacity-75
        ${buttonVariants[variant]} ${buttonSizes[size]}`}
    >
      {name}
    </button>
  );
}
