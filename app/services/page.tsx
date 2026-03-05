import { Metadata } from 'next'
import {
  Bot,
  MessageSquare,
  Mic,
  Workflow,
  BarChart3,
  PenTool,
  FlaskConical,
  CalendarCheck,
  Smartphone,
  Globe,
  Palette,
  ShoppingCart,
  Building2,
  Cloud,
  Rocket,
  UserCog,
  Lightbulb,
  Target,
  Megaphone,
  Mail,
  FileText,
  Share2,
  Presentation,
  Calendar,
  Puzzle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'Services — AI Solutions, Software Development & Marketing | Saksham Solanki',
  description: 'Full-stack AI solutions, custom software development, MVP launches, and AI-powered marketing. From strategy to deployed systems. Book a free consultation.',
  path: '/services',
})

const serviceCategories = [
  {
    id: 'ai-solutions',
    label: 'AI Solutions',
    headline: 'AI systems that actually run in production',
    description: 'Not demos. Not proofs of concept. Deployed AI infrastructure that handles real workloads, integrates with your stack, and generates measurable ROI.',
    services: [
      {
        icon: Mic,
        title: 'Voice Agents',
        description: 'Real-time voice AI for customer engagement, support, and sales qualification. Handles inbound and outbound calls with natural conversation flow.',
      },
      {
        icon: MessageSquare,
        title: 'Chat Agents',
        description: 'Context-aware AI chat systems using RAG and NLP. Trained on your data, integrated with your tools, deployed on your channels.',
      },
      {
        icon: Workflow,
        title: 'Agent Architectures',
        description: 'Autonomous multi-agent workflows powered by LangChain and AutoGen. Systems that coordinate, reason, and execute complex business processes.',
      },
      {
        icon: Bot,
        title: 'Autonomous Workflows',
        description: 'End-to-end task automation — meeting scheduling, follow-ups, data processing, reporting. Set it up once, let it run.',
      },
    ],
  },
  {
    id: 'ai-marketing',
    label: 'AI for Marketing',
    headline: 'Marketing that runs on intelligence, not headcount',
    description: 'AI-powered marketing systems that score leads, generate content, optimize campaigns, and orchestrate events — at a fraction of the manual effort.',
    services: [
      {
        icon: BarChart3,
        title: 'Lead Scoring & Segmentation',
        description: 'Rank prospects and target audiences across channels automatically. Your sales team talks to the right people, every time.',
      },
      {
        icon: PenTool,
        title: 'Content Generation Engine',
        description: 'Produce blog drafts, ad copy, and social posts at scale. Trained on your brand voice, integrated into your content pipeline.',
      },
      {
        icon: FlaskConical,
        title: 'Campaign Optimization & A/B Testing',
        description: 'Automate creative rotation, budget allocation, and performance optimization. AI that improves your campaigns while you sleep.',
      },
      {
        icon: CalendarCheck,
        title: 'Event Marketing Automation',
        description: 'End-to-end orchestration for conferences, webinars, and trade shows. From invite sequences to post-event follow-up, fully automated.',
      },
    ],
  },
  {
    id: 'software-development',
    label: 'Custom Software',
    headline: 'Software built for your business, not around it',
    description: 'Production-grade software development with 20+ years of collective experience. Mobile, web, SaaS, e-commerce — architected for scale from day one.',
    services: [
      {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps. iOS, Android, React Native, Flutter. From MVP to enterprise-grade.',
      },
      {
        icon: Cloud,
        title: 'SaaS Development',
        description: 'Multi-tenant SaaS platforms with authentication, billing, analytics, and API layers. Built to scale from 10 users to 10,000.',
      },
      {
        icon: Globe,
        title: 'Website Development',
        description: 'High-performance websites and web applications. Next.js, React, Node.js. Optimized for speed, SEO, and conversion.',
      },
      {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Research-driven design that converts. User flows, wireframes, prototypes, and design systems. Function over decoration.',
      },
      {
        icon: ShoppingCart,
        title: 'E-Commerce Development',
        description: 'Custom storefronts, marketplace platforms, and headless commerce. Shopify, WooCommerce, or fully custom builds.',
      },
      {
        icon: Building2,
        title: 'Enterprise Software',
        description: 'Scalable enterprise solutions with security, compliance, and integration layers. Systems that handle complexity without creating it.',
      },
    ],
  },
  {
    id: 'startup-services',
    label: 'Product & Startups',
    headline: 'From idea to launched product in 60 days',
    description: 'Startup-grade speed with enterprise-grade architecture. MVP development, fractional CTO leadership, AI toolkits, and go-to-market strategy.',
    services: [
      {
        icon: Rocket,
        title: 'Moonship MVP',
        description: 'Launch your product in 60 days. Rapid MVP development with validated architecture. Ship fast, learn fast, iterate fast.',
        highlight: true,
      },
      {
        icon: UserCog,
        title: 'CTO as a Service',
        description: '10+ years of CTO experience on an hourly basis. Technical leadership, architecture decisions, and team guidance without the full-time commitment.',
        highlight: true,
      },
      {
        icon: Lightbulb,
        title: 'Startup AI Toolkit',
        description: 'Everything a startup needs to ship with AI: product vision, design, production-grade software, and customer acquisition — in one package.',
      },
      {
        icon: Target,
        title: 'Go-To-Market Strategy',
        description: 'Data-driven launch and market penetration strategies. Positioning, channel selection, messaging, and execution playbooks.',
      },
    ],
  },
  {
    id: 'marketing-solutions',
    label: 'Marketing',
    headline: 'Growth systems, not random acts of marketing',
    description: 'Full-stack marketing execution powered by AI. From content and SEO to paid ads and email campaigns — everything connected, everything measured.',
    services: [
      {
        icon: Sparkles,
        title: 'AI-Powered Marketing',
        description: 'Marketing automation, predictive analytics, and AI-driven personalization. Systems that get smarter with every campaign.',
      },
      {
        icon: Megaphone,
        title: 'Advertising',
        description: 'Paid acquisition across Google, Meta, LinkedIn, and programmatic. AI-optimized bidding, creative, and audience targeting.',
      },
      {
        icon: Mail,
        title: 'Email Campaigns',
        description: 'Automated email sequences, nurture flows, and lifecycle campaigns. Personalized at scale, optimized for conversion.',
      },
      {
        icon: FileText,
        title: 'Content & SEO',
        description: 'Content strategy, production, and technical SEO. Build organic traffic that compounds over time.',
      },
      {
        icon: Share2,
        title: 'Social Media Management',
        description: 'Strategic social presence across LinkedIn, Twitter/X, and other platforms. Content planning, scheduling, and community engagement.',
      },
      {
        icon: Presentation,
        title: 'Webinars & Events',
        description: 'End-to-end webinar and event marketing. From promotion to execution to post-event nurture sequences.',
      },
    ],
  },
]

const metrics = [
  { value: '35%', label: 'More Revenue' },
  { value: '40%', label: 'Faster Launches' },
  { value: '50%', label: 'Less Admin Work' },
  { value: '3x', label: 'Better Decisions' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-28">
        <Container className="max-w-3xl">
          <SectionLabel>Services</SectionLabel>
          <h1 className="text-hero text-text-primary mt-6 mb-6">
            Everything you need to build with AI.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-8">
            From AI agents and automation to custom software and go-to-market execution.
            One team, full stack, no handoffs.
          </p>
          <Button href={siteConfig.links.calendly} size="lg" external>
            Book a Free Consultation
          </Button>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href="#ai-solutions" className="px-4 py-2 text-sm font-medium rounded-btn border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors">
              AI Solutions
            </a>
            <a href="#ai-marketing" className="px-4 py-2 text-sm font-medium rounded-btn border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors">
              AI for Marketing
            </a>
            <a href="#software-development" className="px-4 py-2 text-sm font-medium rounded-btn border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors">
              Custom Software
            </a>
            <a href="#startup-services" className="px-4 py-2 text-sm font-medium rounded-btn border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors">
              Product & Startups
            </a>
            <a href="#marketing-solutions" className="px-4 py-2 text-sm font-medium rounded-btn border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors">
              Marketing
            </a>
          </div>
        </Container>
      </section>

      {/* Metrics Bar */}
      <Section className="bg-bg-secondary/50 py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-text-tertiary uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <Section
          key={category.id}
          id={category.id}
          className={catIndex % 2 === 0 ? '' : 'bg-bg-secondary/50'}
        >
          <Container>
            <SectionLabel>{category.label}</SectionLabel>
            <h2 className="text-h1 text-text-primary mt-4 mb-4">
              {category.headline}
            </h2>
            <p className="text-text-secondary max-w-2xl mb-10">
              {category.description}
            </p>
            <div className={`grid gap-6 ${
              category.services.length <= 4
                ? 'md:grid-cols-2'
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {category.services.map((service, i) => (
                <div
                  key={i}
                  className={`bg-bg-secondary border rounded-card p-8 hover:border-accent/30 transition-colors ${
                    'highlight' in service && service.highlight
                      ? 'border-accent/20'
                      : 'border-border'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <service.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-h3 text-text-primary mb-3">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* How It Works */}
      <Section>
        <Container className="max-w-3xl">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-12">
            From conversation to deployed system
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We talk about your business, operations, and goals. I identify the highest-impact opportunities and recommend a path forward.',
              },
              {
                step: '02',
                title: 'Architecture & Scope',
                description: 'I design the system architecture — what to build, how it integrates, what results to expect. You approve before anything gets built.',
              },
              {
                step: '03',
                title: 'Build & Deploy',
                description: 'My team builds, tests, and deploys the system. You get production-ready infrastructure with documentation and ongoing support.',
              },
              {
                step: '04',
                title: 'Optimize & Scale',
                description: 'We monitor performance, optimize for results, and expand the system as your needs grow. Continuous improvement, not set-and-forget.',
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

      {/* Newsletter */}
      <NewsletterSignup />

      {/* CTA */}
      <Section>
        <Container className="text-center max-w-2xl">
          <h2 className="text-h1 text-text-primary mb-6">
            Talk to Saksham before implementing AI in your business.
          </h2>
          <p className="text-text-secondary mb-8">
            30-minute call. No pitch. Just an honest assessment of what we can build
            for your business and what ROI to expect.
          </p>
          <Button href={siteConfig.links.calendly} size="lg" external>
            Book Your Free Call
          </Button>
        </Container>
      </Section>
    </>
  )
}
