import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'Newsletter Archive',
  description: 'Archive of the AI Builders Club newsletter. Weekly AI automation insights for B2B operators.',
  path: '/newsletter',
})

export default function NewsletterPage() {
  return (
    <Section>
      <Container className="max-w-2xl text-center">
        <h1 className="text-h1 text-text-primary mb-4">Newsletter Archive</h1>
        <p className="text-text-secondary mb-8">
          Every issue of the AI Builders Club newsletter. One actionable AI automation
          insight per week, delivered every Thursday.
        </p>

        <div className="bg-bg-secondary border border-border rounded-card p-12 mb-8">
          <p className="text-text-tertiary text-lg mb-4">
            Archive coming soon.
          </p>
          <p className="text-text-tertiary text-sm mb-6">
            Subscribe to get every issue delivered to your inbox.
          </p>
          <Button href={siteConfig.links.newsletter} external>
            Subscribe to AI Builders Club
          </Button>
        </div>
      </Container>
    </Section>
  )
}
