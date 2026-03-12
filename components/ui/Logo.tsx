interface LogoProps {
  variant?: 'full' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: { mark: 20, gap: 'gap-2', text: 'text-lg' },
  md: { mark: 24, gap: 'gap-2.5', text: 'text-xl' },
  lg: { mark: 32, gap: 'gap-3', text: 'text-2xl' },
}

function LogoMark({ size }: { size: number }) {
  const block = Math.round(size * 0.6)
  const offset = Math.round(size * 0.35)
  const cutout = Math.round(size * 0.25)
  const r = Math.round(size * 0.12)

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect x={0} y={0} width={block} height={block} rx={r} fill="#00E5A0" />
      <rect x={offset} y={offset} width={block} height={block} rx={r} fill="#FAFAFA" />
      <rect x={offset} y={offset} width={cutout} height={cutout} rx={Math.round(r * 0.6)} fill="#0A0A0B" />
    </svg>
  )
}

export function Logo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const s = sizes[size]

  if (variant === 'icon') {
    return <LogoMark size={s.mark} />
  }

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <LogoMark size={s.mark} />
      <span className={`font-bold ${s.text} tracking-tight text-text-primary`}>
        Saksham<span className="text-accent">.</span>
      </span>
    </span>
  )
}
