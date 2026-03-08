import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BeehiivForm } from '@/components/ui/BeehiivForm'

export function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="bg-bg-secondary border border-border rounded-card p-6">
        <p className="text-text-primary font-semibold mb-2">AI Builders Club Newsletter</p>
        <p className="text-text-tertiary text-sm mb-4">
          One actionable AI automation insight per week.
        </p>
        <BeehiivForm direction="col" buttonClassName="w-full" />
      </div>
    )
  }

  return (
    <section className="bg-bg-secondary border-t border-b border-border py-10 sm:py-16 lg:py-20">
      <Container className="text-center max-w-2xl">
        <SectionLabel>Newsletter</SectionLabel>
        <h2 className="text-h2 text-text-primary mt-4 mb-4">
          Get the AI Builders Club newsletter
        </h2>
        <p className="text-text-secondary mb-8">
          One actionable AI automation insight per week. Delivered every Thursday.
          Written for operators who build, not theorists who speculate.
        </p>
        <BeehiivForm className="max-w-md mx-auto" />
        <p className="text-text-tertiary text-sm mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </Container>
    </section>
  )
}
