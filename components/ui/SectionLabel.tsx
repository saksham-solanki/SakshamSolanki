interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span className={`text-caption uppercase tracking-[0.15em] text-accent font-medium ${className}`}>
      {children}
    </span>
  )
}
