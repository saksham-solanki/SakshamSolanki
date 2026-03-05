interface BadgeProps {
  children: React.ReactNode
  variant?: 'mint' | 'dark' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'mint', className = '' }: BadgeProps) {
  const variants = {
    mint: 'bg-accent/10 text-accent border-accent/20',
    dark: 'bg-bg-tertiary text-text-secondary border-border',
    warning: 'bg-warning/10 text-warning border-warning/20',
  }

  return (
    <span
      className={`inline-block px-3 py-1 text-caption uppercase tracking-widest rounded-badge border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
