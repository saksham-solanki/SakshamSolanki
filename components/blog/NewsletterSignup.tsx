import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { siteConfig } from '@/lib/constants'

export function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="bg-bg-secondary border border-border rounded-card p-6">
        <p className="text-text-primary font-semibold mb-2">AI Builders Club Newsletter</p>
        <p className="text-text-tertiary text-sm mb-4">
          One actionable AI automation insight per week.
        </p>
        <a
          href={siteConfig.links.newsletter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-accent text-bg-primary font-semibold rounded-btn px-4 py-2.5 text-sm hover:bg-accent-hover transition-colors"
        >
          Subscribe Free
        </a>
      </div>
    )
  }

  return (
    <section className="bg-bg-secondary border-t border-b border-border py-16 lg:py-20">
      <Container className="text-center max-w-2xl">
        <SectionLabel>Newsletter</SectionLabel>
        <h2 className="text-h2 text-text-primary mt-4 mb-4">
          Get the AI Builders Club newsletter
        </h2>
        <p className="text-text-secondary mb-8">
          One actionable AI automation insight per week. Delivered every Thursday.
          Written for operators who build, not theorists who speculate.
        </p>
        <a
          href={siteConfig.links.newsletter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent text-bg-primary font-semibold rounded-btn px-8 py-3.5 text-base hover:bg-accent-hover hover:scale-[1.02] transition-all mint-glow"
        >
          Subscribe Free
        </a>
        <p className="text-text-tertiary text-sm mt-4">
          Join 500+ B2B operators. No spam. Unsubscribe anytime.
        </p>
      </Container>
    </section>
  )
}
