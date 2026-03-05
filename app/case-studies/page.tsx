import { Metadata } from 'next'
import { getCaseStudies } from '@/lib/mdx'
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'Case Studies',
  description: 'Real AI automation systems deployed for real B2B companies. See the architectures, the numbers, and the results.',
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies()

  return (
    <>
    <Section>
      <Container>
        <h1 className="text-h1 text-text-primary mb-4">Real systems. Real results.</h1>
        <p className="text-text-secondary max-w-2xl mb-12">
          Every case study includes the problem, the architecture, and the measurable results.
          See how B2B companies are deploying AI that actually works.
        </p>

        {caseStudies.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map(cs => (
              <CaseStudyCard key={cs.meta.slug} post={cs.meta} />
            ))}
          </div>
        ) : (
          <div className="bg-bg-secondary border border-border rounded-card p-12 text-center">
            <p className="text-text-tertiary text-lg mb-4">
              Case studies are being documented.
            </p>
            <p className="text-text-tertiary text-sm mb-6">
              In the meantime, book a call to discuss what we can build for you.
            </p>
            <Button href={siteConfig.links.calendly} external>
              Book a Call
            </Button>
          </div>
        )}

        <p className="text-text-tertiary text-sm mt-12">
          Want to see implementations in real time? <a href="/ai-builders-club" className="text-accent hover:text-accent-hover">Join AI Builders Club</a> for weekly build breakdowns.
        </p>
      </Container>
    </Section>

    <NewsletterSignup />
    </>
  )
}
