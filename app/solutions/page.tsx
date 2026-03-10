import { Metadata } from 'next'
import Link from 'next/link'
import {
  Search,
  PenLine,
  Hammer,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { LogoMarquee } from '@/components/consulting/LogoMarquee'
import { PreQualificationForm } from '@/components/PreQualificationForm'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'Solutions | Saksham Solanki -- AI Systems That Deliver ROI',
  description:
    'Three tiers of AI engagement designed around business outcomes. From a focused AI Opportunity Audit to a full-stack AI Transformation Program. No pricing on this page -- book a strategy call.',
  path: '/solutions',
})

const offerTiers = [
  {
    label: 'ENTRY POINT',
    title: 'AI Opportunity Audit',
    tagline: 'Find the $500K you\'re leaving on the table.',
    description:
      'A structured workshop and data-backed report that maps your operations, quantifies waste, and ranks every AI opportunity by projected annual savings. You walk away knowing exactly where to invest and what to skip.',
    deliverables: [
      'AI Opportunity Report with quantified costs',
      'Executive Summary for board presentations',
      'Implementation Roadmap with timelines',
      'ROI Projections for top opportunities',
    ],
    cta: { text: 'Book Your Audit', href: '#contact' },
    timeline: '2-3 weeks',
  },
  {
    label: 'CORE OFFER',
    title: 'AI Operations Sprint',
    tagline: 'Deployed systems, measurable results, 60 days.',
    description:
      'You know the problem. We build the fix. A bundle of interconnected AI systems deployed into your production environment, integrated with your existing tools, and measured against a target business outcome you define upfront.',
    deliverables: [
      'Production AI Systems deployed and running',
      'Integration with your existing stack',
      'Team Training for daily operations',
      '30-Day Post-Launch Support',
    ],
    cta: { text: 'Start Your Sprint', href: '#contact' },
    timeline: '45-60 days',
    featured: true,
  },
  {
    label: 'ENTERPRISE',
    title: 'AI Transformation Program',
    tagline: 'Full-stack operational overhaul with P&L impact.',
    description:
      'For companies that don\'t have a single automation problem -- they have a systemic one. We rebuild the operational foundation across departments with phased delivery, executive dashboards, change management, and board-ready reporting.',
    deliverables: [
      'Multi-System Deployment across departments',
      'Change Management and team training',
      'Executive Reporting Dashboards',
      '30-Day Optimization Period',
    ],
    cta: { text: 'Discuss Your Transformation', href: '#contact' },
    timeline: '3-6 months',
  },
]

const processSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Diagnose',
    description:
      'We map your operations and identify AI opportunities with the highest ROI.',
  },
  {
    icon: PenLine,
    step: '02',
    title: 'Architect',
    description:
      'We design the system architecture, data flows, and integration points.',
  },
  {
    icon: Hammer,
    step: '03',
    title: 'Build',
    description:
      'Our engineering team builds and tests production-grade AI systems.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Deploy',
    description:
      'We deploy into your environment with zero disruption to operations.',
  },
  {
    icon: TrendingUp,
    step: '05',
    title: 'Optimize',
    description:
      'We monitor, measure, and optimize for continuous improvement.',
  },
]

const stats = [
  { number: '50+', label: 'AI Systems Deployed' },
  { number: '500+', label: 'Projects Shipped' },
  { number: '$2M+', label: 'Client ROI Generated' },
  { number: '60 Days', label: 'Average Launch Time' },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 lg:py-28">
        <Container className="max-w-4xl">
          <SectionLabel>Solutions</SectionLabel>
          <h1 className="text-3xl sm:text-4xl md:text-hero text-text-primary mt-6 mb-6">
            AI Systems Built for{' '}
            <span className="text-accent">Business Impact</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl">
            Three tiers of engagement designed around outcomes, not hours. We
            diagnose the opportunity, architect the solution, and deploy
            production-grade systems that deliver measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10">
            <Button href="#contact" size="lg" className="w-full sm:w-auto">
              Book a Strategy Call
            </Button>
            <Button
              href="/case-studies"
              variant="outlined"
              size="lg"
              className="w-full sm:w-auto"
            >
              View Case Studies
            </Button>
          </div>
        </Container>
      </section>

      {/* Logo Marquee */}
      <section className="border-y border-border">
        <Container>
          <LogoMarquee title="Trusted by teams at" />
        </Container>
      </section>

      {/* Stats Bar */}
      <Section>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-text-tertiary text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Offer Ladder */}
      <Section className="bg-bg-secondary/50">
        <Container>
          <SectionLabel>Choose Your Engagement</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            Three tiers. One outcome: measurable results.
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-3xl">
            Every engagement starts with a clear business problem and ends with
            deployed systems your team operates independently.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {offerTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative bg-bg-primary border rounded-card p-6 sm:p-8 flex flex-col transition-colors hover:border-accent/30 ${
                  tier.featured
                    ? 'border-accent/50 ring-1 ring-accent/20'
                    : 'border-border'
                }`}
              >
                {/* Label */}
                <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">
                  {tier.label}
                </span>

                {/* Title & Tagline */}
                <h3 className="text-h3 text-text-primary mb-2">{tier.title}</h3>
                <p className="text-accent/80 text-sm font-medium mb-4">
                  {tier.tagline}
                </p>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Timeline */}
                <div className="text-text-tertiary text-xs mb-4">
                  Timeline: {tier.timeline}
                </div>

                {/* Deliverables */}
                <div className="flex-1">
                  <p className="text-text-primary text-sm font-medium mb-3">
                    Key deliverables:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {tier.deliverables.map((d, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <CheckCircle
                          size={14}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  href={tier.cta.href}
                  variant={tier.featured ? 'filled' : 'outlined'}
                  className="w-full justify-center"
                >
                  {tier.cta.text}
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How We Work */}
      <Section>
        <Container>
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-12">
            Five steps from diagnosis to results.
          </h2>

          {/* Desktop: horizontal layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 mb-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="relative text-center group">
                  {/* Connecting line */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-6 left-[60%] w-[80%] h-px bg-border z-0" />
                  )}

                  {/* Icon circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-bg-secondary border border-border group-hover:border-accent/50 flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>

                  {/* Step number */}
                  <div className="text-accent/40 text-xs font-mono mb-1">
                    {step.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-text-primary font-semibold text-sm mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-tertiary text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Mobile: stacked layout */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-bg-secondary border border-border flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="text-accent/40 text-xs font-mono">
                      {step.step}
                    </div>
                    <h3 className="text-text-primary font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section className="bg-bg-secondary/50">
        <Container>
          <LogoMarquee title="Trusted by teams at" />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section id="contact">
        <Container className="max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-h1 text-text-primary mb-6">
              Ready to See What AI Can Do for Your Operations?
            </h2>
            <p className="text-text-secondary mb-2">
              Tell us about your situation. We&apos;ll review your submission
              and prepare a focused strategy call around your specific
              challenges.
            </p>
          </div>

          <PreQualificationForm />

          <p className="text-text-tertiary text-sm mt-6 text-center">
            Prefer to skip the form?{' '}
            <a
              href={siteConfig.links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Book directly on Calendly
            </a>
          </p>
        </Container>
      </Section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Saksham Solanki | AI Solutions',
            url: 'https://sakshamsolanki.com/solutions',
            description:
              'Three tiers of AI engagement designed around business outcomes. AI Opportunity Audit, AI Operations Sprint, and AI Transformation Program.',
            provider: {
              '@type': 'Person',
              name: 'Saksham Solanki',
              url: 'https://sakshamsolanki.com',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'AI Solutions',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Opportunity Audit',
                    description:
                      'A structured workshop and data-backed report that maps operations, quantifies waste, and ranks every AI opportunity by projected annual savings.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Operations Sprint',
                    description:
                      'Interconnected AI systems deployed into production, integrated with existing tools, and measured against a target business outcome in 45-60 days.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Transformation Program',
                    description:
                      'Full-stack operational overhaul across departments with phased delivery, executive dashboards, change management, and board-ready reporting.',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}
