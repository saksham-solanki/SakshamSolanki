import { Metadata } from 'next'
import { Users, Mail, Zap, BookOpen, MessageSquare, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { generateSEO, generateFAQSchema } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

const faqs = [
  {
    question: 'What is AI Builders Club?',
    answer: 'AI Builders Club is a community and newsletter for B2B operators implementing AI automation systems. It includes a free Skool community for discussions and a weekly newsletter delivered every Thursday with actionable AI automation insights.',
  },
  {
    question: 'Who is AI Builders Club for?',
    answer: 'AI Builders Club is for B2B operators, founders, and technical leaders at companies with 11-200 employees who are implementing or planning to implement AI systems. If you build things rather than just talk about them, you belong here.',
  },
  {
    question: 'Is AI Builders Club free?',
    answer: 'Yes. Both the Skool community and the weekly newsletter are completely free. No credit card required, no hidden fees.',
  },
  {
    question: 'How often is the newsletter sent?',
    answer: 'Every Thursday. One email per week with one actionable AI automation insight. No spam, no filler, no sales pitches.',
  },
  {
    question: 'What topics does AI Builders Club cover?',
    answer: 'Production AI systems, AI agent architectures, workflow automation, tool comparisons, implementation walkthroughs, and real case studies from deployed systems. Everything is based on what actually works in production.',
  },
]

export const metadata: Metadata = generateSEO({
  title: 'AI Builders Club — Community & Newsletter for AI Operators',
  description: 'Join 500+ B2B operators implementing AI systems. Free Skool community + weekly newsletter with actionable AI automation insights. No hype, just systems that work.',
  path: '/ai-builders-club',
})

export default function AIBuildersClubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      {/* Hero */}
      <section className="py-16 lg:py-28">
        <Container className="text-center max-w-3xl">
          <SectionLabel>Community + Newsletter</SectionLabel>
          <h1 className="text-hero text-text-primary mt-6 mb-6">
            AI Builders Club
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-10">
            The community and newsletter for B2B operators implementing AI systems.
            Join 500+ people who build, not theorize.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.links.skool} size="lg" external>
              Join Community on Skool
            </Button>
            <Button href={siteConfig.links.newsletter} variant="outlined" size="lg" external>
              Subscribe to Newsletter
            </Button>
          </div>
        </Container>
      </section>

      {/* Two columns: Community + Newsletter */}
      <Section className="bg-bg-secondary/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Community */}
            <div className="bg-bg-secondary border border-border rounded-card p-8 lg:p-10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Users size={24} className="text-accent" />
              </div>
              <h2 className="text-h2 text-text-primary mb-4">The Community</h2>
              <p className="text-text-secondary mb-8">
                A private group of B2B operators who are actively building and deploying
                AI systems. Not a place for hype or speculation — a workspace for people
                who ship.
              </p>

              <h3 className="text-text-primary font-semibold mb-4">What you get:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: MessageSquare, text: 'Architecture review threads — share your system design, get feedback from operators who have shipped similar systems' },
                  { icon: Calendar, text: 'Weekly live build sessions — watch real AI systems being built in real-time' },
                  { icon: BookOpen, text: 'Tool and vendor breakdowns — honest comparisons from people who actually use them' },
                  { icon: Zap, text: 'Implementation templates — proven architectures you can adapt to your business' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <item.icon size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Button href={siteConfig.links.skool} external className="w-full">
                Join Free on Skool
              </Button>
            </div>

            {/* Newsletter */}
            <div className="bg-bg-secondary border border-border rounded-card p-8 lg:p-10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Mail size={24} className="text-accent" />
              </div>
              <h2 className="text-h2 text-text-primary mb-4">The Newsletter</h2>
              <p className="text-text-secondary mb-8">
                Every Thursday, one email with one actionable AI automation insight.
                Written for operators who build. No fluff, no filler, no sales pitches.
              </p>

              <h3 className="text-text-primary font-semibold mb-4">Recent topics:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'How we cut support ticket resolution time by 73% with an AI triage agent',
                  'The 3-layer AI agent architecture that actually works in production',
                  'Why most AI chatbots fail (and the pattern that makes them useful)',
                  'Building a lead qualification system that books 2x more meetings',
                  'The real cost of AI implementation: what vendors won\'t tell you',
                ].map((topic, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent shrink-0">&#8226;</span>
                    <span className="text-text-secondary text-sm">{topic}</span>
                  </li>
                ))}
              </ul>

              <Button href={siteConfig.links.newsletter} external className="w-full">
                Subscribe Free — Every Thursday
              </Button>
              <p className="text-text-tertiary text-xs text-center mt-3">
                No spam. Unsubscribe anytime. 500+ operators already in.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section>
        <Container className="text-center">
          <SectionLabel>Why operators join</SectionLabel>
          <h2 className="text-h2 text-text-primary mt-4 mb-12">
            Built for people who ship
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '500+',
                label: 'Active members',
                detail: 'B2B operators, founders, and technical leaders',
              },
              {
                metric: '52',
                label: 'Issues published',
                detail: 'Actionable insights delivered every Thursday',
              },
              {
                metric: '40%',
                label: 'Open rate',
                detail: 'Because the content actually matters',
              },
            ].map((stat, i) => (
              <div key={i} className="bg-bg-secondary border border-border rounded-card p-8">
                <div className="text-4xl font-bold text-accent mb-2">{stat.metric}</div>
                <div className="text-text-primary font-semibold mb-2">{stat.label}</div>
                <div className="text-text-tertiary text-sm">{stat.detail}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-bg-secondary/50">
        <Container className="max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-h2 text-text-primary mt-4 mb-10">
            Common questions about AI Builders Club
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-bg-secondary border border-border rounded-card p-6">
                <h3 className="text-text-primary font-semibold mb-2">{faq.question}</h3>
                <p className="text-text-secondary text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container className="text-center max-w-2xl">
          <h2 className="text-h1 text-text-primary mb-6">
            Stop scrolling. Start building.
          </h2>
          <p className="text-text-secondary mb-8">
            AI Builders Club is where operators go to get unstuck,
            share what works, and build systems that actually ship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.links.skool} size="lg" external>
              Join the Community
            </Button>
            <Button href={siteConfig.links.newsletter} variant="outlined" size="lg" external>
              Get the Newsletter
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
