interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-container mx-auto px-5 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
