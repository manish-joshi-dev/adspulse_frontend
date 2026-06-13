import { Spinner } from './Spinner';

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  loading, 
  disabled, 
  fullWidth, 
  leftIcon, 
  rightIcon, 
  children, 
  className = '',
  ...props 
}) => {
  const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-signal text-white hover:bg-signal/90 focus:ring-signal',
    secondary: 'bg-bg-secondary border border-border-light text-text-primary hover:bg-bg-hover focus:ring-accent-primary',
    ghost: 'text-text-subtle hover:bg-bg-hover hover:text-ink',
    danger: 'bg-rose text-white hover:bg-rose/90 focus:ring-rose'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner size="sm" className="mr-2" />}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
