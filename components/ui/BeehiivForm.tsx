'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/constants'

interface BeehiivFormProps {
  className?: string
  buttonText?: string
  buttonClassName?: string
  inputClassName?: string
  direction?: 'row' | 'col'
}

export function BeehiivForm({
  className = '',
  buttonText = 'Subscribe',
  buttonClassName = '',
  inputClassName = '',
  direction = 'row',
}: BeehiivFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      await fetch(`${siteConfig.links.beehiivMagic}?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        mode: 'no-cors',
      })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-accent font-medium text-sm">
        Check your inbox to confirm your subscription.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${direction === 'col' ? 'flex-col' : ''} gap-2 ${className}`}>
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 bg-bg-tertiary border border-border rounded-btn px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors ${inputClassName}`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`bg-accent text-bg-primary font-semibold rounded-btn px-6 py-2.5 text-sm hover:bg-accent-hover transition-colors disabled:opacity-50 shrink-0 ${buttonClassName}`}
      >
        {status === 'loading' ? 'Subscribing...' : buttonText}
      </button>
      {status === 'error' && (
        <p className="text-warning text-sm">Something went wrong. Try again.</p>
      )}
    </form>
  )
}
