'use client'

import { useState, FormEvent } from 'react'
import { siteConfig } from '@/lib/constants'

const ROLE_OPTIONS = [
  'CEO / Founder',
  'COO / Operations',
  'CTO / VP Engineering',
  'VP / Director',
  'Operating Partner (PE)',
  'Other',
]

const CHALLENGE_OPTIONS = [
  'Manual processes costing us money',
  'Need AI strategy / roadmap',
  'Ready to deploy specific AI systems',
  'Full operational modernization',
  'Not sure yet -- need guidance',
]

const TIMELINE_OPTIONS = [
  'Immediate (next 30 days)',
  'This quarter',
  'Next quarter',
  'Exploring for later',
]

export function PreQualificationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: '',
    timeline: '',
    context: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid work email address.')
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/qualify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        setError(data.error || 'Something went wrong. Please try again.')
        setIsSubmitting(false)
        return
      }

      setIsSuccess(true)
      setTimeout(() => {
        window.location.href = siteConfig.links.calendly
      }, 2000)
    } catch {
      setError('Network error. Please check your connection and try again.')
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-bg-secondary border border-border rounded-card p-8 sm:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-h3 text-text-primary mb-3">
          Thank you, {formData.name.split(' ')[0]}.
        </h3>
        <p className="text-text-secondary mb-2">
          Redirecting you to book your strategy call...
        </p>
        <p className="text-text-tertiary text-sm">
          If you are not redirected,{' '}
          <a
            href={siteConfig.links.calendly}
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
          .
        </p>
      </div>
    )
  }

  const inputStyles =
    'w-full bg-bg-tertiary border border-border rounded-btn px-4 py-3 text-text-primary placeholder:text-text-tertiary text-sm focus:outline-none focus:border-accent transition-colors'
  const selectStyles =
    'w-full bg-bg-tertiary border border-border rounded-btn px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer'
  const labelStyles = 'block text-text-secondary text-sm font-medium mb-2'

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bg-secondary border border-border rounded-card p-6 sm:p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label htmlFor="pq-name" className={labelStyles}>
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="pq-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputStyles}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="pq-email" className={labelStyles}>
            Work Email <span className="text-accent">*</span>
          </label>
          <input
            id="pq-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={inputStyles}
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="pq-company" className={labelStyles}>
            Company Name <span className="text-accent">*</span>
          </label>
          <input
            id="pq-company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={inputStyles}
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="pq-role" className={labelStyles}>
            Your Role <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <select
              id="pq-role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className={`${selectStyles} ${!formData.role ? 'text-text-tertiary' : ''}`}
            >
              <option value="" disabled>
                Select your role
              </option>
              {ROLE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-text-tertiary"
              >
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Primary Challenge */}
        <div>
          <label htmlFor="pq-challenge" className={labelStyles}>
            Primary Challenge <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <select
              id="pq-challenge"
              name="challenge"
              required
              value={formData.challenge}
              onChange={handleChange}
              className={`${selectStyles} ${!formData.challenge ? 'text-text-tertiary' : ''}`}
            >
              <option value="" disabled>
                What are you looking to solve?
              </option>
              {CHALLENGE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-text-tertiary"
              >
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="pq-timeline" className={labelStyles}>
            Timeline <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <select
              id="pq-timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className={`${selectStyles} ${!formData.timeline ? 'text-text-tertiary' : ''}`}
            >
              <option value="" disabled>
                When do you want to start?
              </option>
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-text-tertiary"
              >
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Context */}
      <div className="mb-6">
        <label htmlFor="pq-context" className={labelStyles}>
          Brief context{' '}
          <span className="text-text-tertiary font-normal">(optional, max 500 chars)</span>
        </label>
        <textarea
          id="pq-context"
          name="context"
          value={formData.context}
          onChange={handleChange}
          maxLength={500}
          rows={3}
          placeholder="Tell us briefly about your current situation or what prompted you to reach out..."
          className={`${inputStyles} resize-none`}
        />
        {formData.context.length > 0 && (
          <p className="text-text-tertiary text-xs mt-1 text-right">
            {formData.context.length}/500
          </p>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-btn px-4 py-3 mb-5">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-bg-primary font-semibold rounded-btn px-8 py-4 text-base transition-all duration-200 hover:bg-accent-hover hover:scale-[1.01] mint-glow disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Submitting...
          </span>
        ) : (
          'Get Started -- Book Your Strategy Call'
        )}
      </button>
    </form>
  )
}
