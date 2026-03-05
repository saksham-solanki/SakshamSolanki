import { Metadata } from 'next'
import { Target, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'AI Consulting — Deploy AI in Weeks, Not Months',
  description: 'AI automation consulting for B2B companies. 50+ systems deployed, $2M+ in client ROI. From audit to production-ready AI in 2-4 weeks. Book a free call.',
  path: '/consulting',
})

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-28">
        <Container className="max-w-3xl">
          <SectionLabel>Consulting</SectionLabel>
          <h1 className="text-hero text-text-primary mt-6 mb-6">
            Deploy AI in weeks, not months.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            I help B2B companies implement AI systems that generate measurable ROI.
            Not PowerPoint strategies. Deployed infrastructure.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-text-tertiary text-sm mb-10">
            <span className="flex items-center gap-2"><Zap size={16} className="text-accent" /> 50+ AI systems deployed</span>
            <span className="flex items-center gap-2"><TrendingUp size={16} className="text-accent" /> $2M+ in client ROI generated</span>
          </div>
          <Button href={siteConfig.links.calendly} size="lg" external>
            Book a Call
          </Button>
        </Container>
      </section>

      {/* Services */}
      <Section className="bg-bg-secondary/50">
        <Container>
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-10">
            Three paths from stuck to shipped
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'AI Audit',
                price: 'Starting at $2,500',
                description: 'A deep dive into your operations to identify where AI creates real ROI. You get a prioritized roadmap with specific architectures, not vague recommendations.',
                deliverables: [
                  'Operations analysis',
                  'AI opportunity mapping',
                  'Architecture recommendations',
                  'ROI projections',
                  'Implementation roadmap',
                ],
              },
              {
                icon: Zap,
                title: 'Implementation Sprint',
                price: 'Starting at $10,000',
                description: 'From architecture to deployed system in 2-4 weeks. My team handles the full build — you get a production-ready AI system.',
                deliverables: [
                  'System architecture design',
                  'Full development & integration',
                  'Testing & quality assurance',
                  'Deployment & handoff',
                  '30-day support included',
                ],
              },
              {
                icon: TrendingUp,
                title: 'Ongoing AI Ops',
                price: 'Custom pricing',
                description: 'Continuous optimization, monitoring, and expansion of your AI infrastructure. Your systems get better over time.',
                deliverables: [
                  'Performance monitoring',
                  'Continuous optimization',
                  'New feature development',
                  'Monthly strategy reviews',
                  'Priority support',
                ],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-bg-secondary border border-border rounded-card p-8 flex flex-col hover:border-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <service.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-h3 text-text-primary mb-1">{service.title}</h3>
                <p className="text-accent text-sm font-medium mb-4">{service.price}</p>
                <p className="text-text-secondary text-sm mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-accent shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Button href={siteConfig.links.calendly} external className="mt-auto">
                  Discuss This
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container className="max-w-3xl">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-12">
            Three steps to deployed AI
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Diagnose',
                description: 'We start with a call to understand your operations, bottlenecks, and goals. I identify the highest-ROI opportunities for AI automation.',
              },
              {
                step: '02',
                title: 'Architect',
                description: 'I design the system architecture — what to build, how it integrates with your stack, and what results to expect. You approve before we build.',
              },
              {
                step: '03',
                title: 'Deploy',
                description: 'My team builds and deploys the system. You get a production-ready AI system with documentation, monitoring, and ongoing support.',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-3xl font-bold text-accent/30 shrink-0 w-12">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-h3 text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who This Is For */}
      <Section className="bg-bg-secondary/50">
        <Container className="max-w-3xl">
          <SectionLabel>Who This Is For</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-6">
            You should book a call if...
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              'You run a B2B company with 11-200 employees',
              'You have manual processes that cost you time and money every week',
              'You\'ve tried AI tools but couldn\'t make them work reliably',
              'You want a deployed system, not a strategy deck',
              'You need someone who has actually built this before',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-text-secondary">
                <ArrowRight size={18} className="text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-text-tertiary text-sm">
            Not ready to commit? <a href="/ai-builders-club" className="text-accent hover:text-accent-hover">Join AI Builders Club</a> for free weekly AI automation insights.
          </p>
        </Container>
      </Section>

      {/* Newsletter */}
      <NewsletterSignup />

      {/* CTA */}
      <Section>
        <Container className="text-center max-w-2xl">
          <h2 className="text-h1 text-text-primary mb-6">
            Talk to Saksham before implementing AI in your business.
          </h2>
          <p className="text-text-secondary mb-8">
            30-minute call. No pitch. Just an honest assessment of where AI can
            help your business and where it can&apos;t.
          </p>
          <Button href={siteConfig.links.calendly} size="lg" external>
            Book Your Free Call
          </Button>
        </Container>
      </Section>
    </>
  )
}
