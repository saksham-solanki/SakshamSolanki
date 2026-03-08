import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ResourceCard } from '@/components/resources/ResourceCard'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Resources',
  description: 'Free AI automation resources: templates, guides, and tools for B2B operators implementing AI systems.',
  path: '/resources',
})

const resources = [
  {
    title: 'AI Automation Readiness Checklist',
    description: 'A 20-point checklist to assess if your business is ready for AI automation. Covers data, processes, team, and infrastructure.',
    format: 'PDF',
    slug: 'ai-readiness-checklist',
  },
  {
    title: 'AI Agent Architecture Template',
    description: 'The 3-layer architecture pattern we use for every production AI agent. Includes system design diagrams and integration specs.',
    format: 'Template',
    slug: 'agent-architecture-template',
  },
  {
    title: 'AI ROI Calculator',
    description: 'Calculate the expected ROI of AI automation for your specific business processes. Input your numbers, get projections.',
    format: 'Spreadsheet',
    slug: 'ai-roi-calculator',
  },
  {
    title: 'Vendor Comparison Matrix',
    description: 'Honest comparison of AI tools and platforms for B2B use cases. Updated monthly. No affiliate links.',
    format: 'PDF',
    slug: 'vendor-comparison',
  },
]

export default function ResourcesPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-h1 text-text-primary mb-4">Resources</h1>
        <p className="text-text-secondary max-w-2xl mb-12">
          Free tools and templates for B2B operators implementing AI systems.
          Everything here comes from building real systems for real companies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map(resource => (
            <ResourceCard key={resource.slug} {...resource} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
