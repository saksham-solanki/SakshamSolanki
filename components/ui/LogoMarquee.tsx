"use client"

import { Container } from '@/components/ui/Container'

const logos = [
  "Paytm",
  "IKEA",
  "Nestle",
  "Sequoia",
  "Dripify",
  "Novagems",
  "Snapdeal",
  "Shiprocket",
  "Vizitor",
  "Klarity",
  "Lohum",
  "Vikram Solar",
]

export function LogoMarquee() {
  return (
    <section className="py-12 border-b border-border bg-bg-primary">
      <Container>
        <p className="text-caption uppercase tracking-[0.15em] text-text-tertiary text-center mb-8">
          Trusted by teams at
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="mx-8 text-text-tertiary/50 hover:text-text-primary text-sm font-semibold tracking-wide transition-colors duration-300 cursor-default select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
