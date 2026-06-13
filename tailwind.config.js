export default {
  // IMPORTANT: Enable class-based dark mode
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        // Map CSS variables to Tailwind so both systems work together
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-elevated': 'var(--color-bg-elevated)',
        'bg-hover': 'var(--color-bg-hover)',
        'border-color': 'var(--color-border)',
        'border-light': 'var(--color-border-light)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-subtle': 'var(--color-text-subtle)',
        'text-disabled': 'var(--color-text-disabled)',
        'accent-primary': 'var(--color-accent-primary)',
        'accent-success': 'var(--color-accent-success)',
        'accent-warning': 'var(--color-accent-warning)',
        'accent-critical': 'var(--color-accent-critical)',
        'accent-info': 'var(--color-accent-info)',
        'accent-purple': 'var(--color-accent-purple)',
        ink: 'var(--color-ink)',
        cloud: 'var(--color-cloud)',
        signal: 'var(--color-signal)',
        signalDark: 'var(--color-signal-dark)',
        amber: 'var(--color-amber-tone)',
        rose: 'var(--color-rose-tone)'
      },
      boxShadow: {
        soft: "0 16px 40px rgba(32, 33, 36, 0.08)"
      }
    }
  },
  plugins: []
};

