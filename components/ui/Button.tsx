import Link from 'next/link'

interface ButtonProps {
  href?: string
  variant?: 'filled' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  external?: boolean
  onClick?: () => void
}

export function Button({
  href,
  variant = 'filled',
  size = 'md',
  children,
  className = '',
  external = false,
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-btn transition-all duration-200'

  const variants = {
    filled: 'bg-accent text-bg-primary hover:bg-accent-hover hover:scale-[1.02] mint-glow',
    outlined: 'border border-accent text-accent hover:bg-accent hover:text-bg-primary hover:scale-[1.02]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
