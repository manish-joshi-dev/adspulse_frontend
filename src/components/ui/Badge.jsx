export const Badge = ({ variant = 'neutral', size = 'md', children, className = '' }) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium';
  
  const getVariantStyle = () => {
    const variantMap = {
      success: { background: 'var(--color-accent-success)', color: 'white', opacity: 0.1 },
      warning: { background: 'var(--color-accent-warning)', color: 'white', opacity: 0.1 },
      critical: { background: 'var(--color-accent-critical)', color: 'white', opacity: 0.1 },
      info: { background: 'var(--color-accent-info)', color: 'white', opacity: 0.1 },
      neutral: { background: 'var(--color-text-subtle)', color: 'var(--color-text-primary)', opacity: 0.1 }
    };
    return variantMap[variant] || variantMap.neutral;
  };
  
  const sizes = { sm: 'px-2 py-0.5 text-xs', md: 'px-2.5 py-1 text-sm' };
  const style = getVariantStyle();
  
  return (
    <span className={`${baseStyles} ${sizes[size]} ${className}`} style={{ backgroundColor: `${style.background}${Math.round(style.opacity * 255).toString(16).padStart(2, '0')}`, color: style.color }}>
      {children}
    </span>
  );
};
