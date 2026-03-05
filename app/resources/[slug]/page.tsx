import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

const resources: Record<string, { title: string; description: string; format: string; details: string }> = {
  'ai-readiness-checklist': {
    title: 'AI Automation Readiness Checklist',
    description: 'A 20-point checklist to assess if your business is ready for AI automation.',
    format: 'PDF',
    details: 'This checklist covers the four pillars of AI readiness: data infrastructure, process documentation, team capability, and technical stack. Each item includes a scoring rubric so you can objectively assess where you stand. Used by 100+ companies before starting their AI implementation journey.',
  },
  'agent-architecture-template': {
    title: 'AI Agent Architecture Template',
    description: 'The 3-layer architecture pattern we use for every production AI agent.',
    format: 'Template',
    details: 'This template includes the perception layer (input processing), reasoning layer (decision making), and action layer (output execution) that we use across all client implementations. Includes Mermaid diagrams, integration specs, and deployment checklists.',
  },
  'ai-roi-calculator': {
    title: 'AI ROI Calculator',
    description: 'Calculate the expected ROI of AI automation for your specific business processes.',
    format: 'Spreadsheet',
    details: 'Input your current process metrics — time spent, error rates, employee costs — and the calculator projects expected improvements based on benchmarks from 50+ real implementations. Includes conservative, moderate, and aggressive scenarios.',
  },
  'vendor-comparison': {
    title: 'Vendor Comparison Matrix',
    description: 'Honest comparison of AI tools and platforms for B2B use cases.',
    format: 'PDF',
    details: 'We evaluate 30+ AI tools and platforms across pricing, reliability, ease of integration, and real-world performance. No affiliate links. No sponsored placements. Just what we and our clients have experienced firsthand.',
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(resources).map(slug => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const resource = resources[params.slug]
  if (!resource) return {}
  return generateSEO({
    title: resource.title,
    description: resource.description,
    path: `/resources/${params.slug}`,
  })
}

export default async function ResourcePage(props: Props) {
  const params = await props.params
  const resource = resources[params.slug]
  if (!resource) notFound()

  return (
    <Section>
      <Container className="max-w-2xl">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-text-tertiary text-sm hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Resources
        </Link>

        <Badge variant="dark" className="mb-4">{resource.format}</Badge>
        <h1 className="text-h1 text-text-primary mb-4">{resource.title}</h1>
        <p className="text-text-secondary text-lg mb-8">{resource.details}</p>

        {/* Preview placeholder */}
        <div className="bg-bg-tertiary border border-dashed border-accent/30 rounded-card p-12 text-center mb-8">
          <Download size={32} className="text-accent mx-auto mb-3" />
          <p className="text-text-tertiary text-sm">Resource preview</p>
        </div>

        {/* Email gate */}
        <div className="bg-bg-secondary border border-border rounded-card p-8 text-center">
          <h2 className="text-h3 text-text-primary mb-2">Get this resource free</h2>
          <p className="text-text-secondary text-sm mb-6">
            Enter your email and we&apos;ll send it right over. You&apos;ll also get the
            AI Builders Club newsletter (unsubscribe anytime).
          </p>
          <a
            href={siteConfig.links.newsletter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-bg-primary font-semibold rounded-btn px-8 py-3 hover:bg-accent-hover transition-colors mint-glow"
          >
            Subscribe to Download
          </a>
        </div>
      </Container>
    </Section>
  )
}
