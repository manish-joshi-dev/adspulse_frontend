export const ProgressBar = ({ progress, stepLabel }) => (
  <div className="w-full">
    {stepLabel && <p className="mb-1 text-sm font-medium">{stepLabel}</p>}
    <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
      <div 
        className="h-full bg-signal transition-all duration-500" 
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} 
      />
    </div>
    <p className="mt-1 text-xs text-right" style={{ color: 'var(--color-text-secondary)' }}>{Math.round(progress)}%</p>
  </div>
);
