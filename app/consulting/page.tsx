import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Bot,
  Rocket,
  Brain,
  Code2,
  CheckCircle,
  ArrowRight,
  Mic,
  MessageSquare,
  Workflow,
  Sparkles,
  Phone,
  Monitor,
  Smartphone,
  ShoppingCart,
  Palette,
  Settings,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FAQAccordion } from '@/components/consulting/FAQAccordion'
import { LogoMarquee } from '@/components/consulting/LogoMarquee'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'AI Consulting: AI Systems That Ship in Weeks',
  description:
    'AI automation consulting for B2B companies. 50+ AI systems deployed, 500+ projects shipped, $2M+ in client ROI. From voice agents to full MVPs in 60 days. Book a strategy call.',
  path: '/consulting',
})

const services = [
  {
    label: 'AI SOLUTIONS',
    icon: Bot,
    title: 'AI agents and automation systems that work while you sleep',
    description:
      'From voice agents handling 200+ calls/day to RAG chatbots deflecting 68% of support tickets, I design and deploy AI systems that operate autonomously in production. Not prototypes. Not demos. Systems your team relies on daily.',
    items: [
      {
        icon: Mic,
        name: 'Voice AI Agents',
        detail:
          'Natural-language phone agents built on Twilio that handle inbound/outbound calls, qualify leads, book appointments, and hand off to humans when needed. Multi-language support. Already handling 100+ calls/day in production.',
      },
      {
        icon: MessageSquare,
        name: 'RAG-Based Chatbots',
        detail:
          "Smart chatbots that answer questions using YOUR company's data: docs, help articles, wikis, product manuals. Zero hallucination architecture. Data stays on your infrastructure.",
      },
      {
        icon: Workflow,
        name: 'Autonomous Workflow Agents',
        detail:
          'AI agents that complete multi-step tasks: scheduling meetings, sending follow-ups, updating CRM records, processing approvals, generating reports. Built with LangChain and AutoGen.',
      },
      {
        icon: Sparkles,
        name: 'AI-Powered Marketing Tools',
        detail:
          'Product recommendation engines, AI quizzes, face analysis for personalization, content generation engines, and AI A/B testing systems that generate and test landing page variants automatically.',
      },
    ],
    idealFor:
      'B2B SaaS companies, real estate agencies, customer support teams, e-commerce brands, call centers, appointment-based businesses.',
    cta: { text: 'Book an AI Audit', href: siteConfig.links.calendly },
    ctaSubtext:
      "Tell me what you want to automate. I'll tell you if AI is the right solution, and exactly how to build it.",
  },
  {
    label: 'PRODUCT LAUNCH',
    icon: Rocket,
    title: 'From idea to production in 60 days. Not 6 months.',
    description:
      'You have the idea. I have 22+ battle-tested product architectures ready to deploy. Instead of building from zero, we assemble your MVP from proven components, custom-branded, integrated with your systems, and ready for real users.',
    steps: [
      {
        week: 'Week 1',
        name: 'Product Vision',
        detail:
          "We define your MVP scope together. What's essential for launch. What can wait. User flows, feature priority, technical architecture. All decided in 5 days.",
      },
      {
        week: 'Week 2-3',
        name: 'Design',
        detail:
          'UI/UX design focused on your users. Not generic templates. Custom interfaces built for your specific workflow and audience. Mobile-first, production-grade.',
      },
      {
        week: 'Week 3-7',
        name: 'Build',
        detail:
          "Production-grade software using proven architecture from 22+ existing products. We're not writing from scratch. We're assembling from battle-tested modules.",
      },
      {
        week: 'Week 7-8',
        name: 'Launch',
        detail:
          "Deployment, go-to-market strategy, and your first real users. We don't just hand you code. We help you get to revenue.",
      },
    ],
    deliverables: [
      'Fully functional MVP on production infrastructure',
      'Custom branding and UI',
      'API integrations with your existing tools',
      'Mobile app (iOS + Android) if needed',
      'Admin dashboard',
      '30 days of post-launch support',
      'Go-to-market playbook',
    ],
    idealFor:
      'Founders, startups, SaaS companies launching new products, enterprises building internal tools, agencies needing white-label solutions.',
    cta: { text: 'Apply for Moonship', href: siteConfig.links.calendly },
    ctaSubtext:
      'We take on 3 Moonship projects per month. Apply to see if your idea qualifies.',
  },
  {
    label: 'FRACTIONAL LEADERSHIP',
    icon: Brain,
    title: '10+ years of CTO experience. By the hour.',
    description:
      "You need a CTO but can't justify the $200K+ salary. I provide fractional CTO expertise for AI strategy, tech stack decisions, vendor evaluation, architecture reviews, and technical roadmap planning.",
    items: [
      {
        name: 'AI Strategy & Roadmap',
        detail:
          'Where should you invest in AI? What should you build vs. buy? I audit your operations, identify the highest-ROI automation opportunities, and build a 6-12 month AI roadmap.',
      },
      {
        name: 'Tech Stack Decisions',
        detail:
          "Choosing between tools, platforms, and vendors. I evaluate options based on your team's capabilities, budget, and scale requirements. No vendor bias.",
      },
      {
        name: 'Architecture Reviews',
        detail:
          'Already have a dev team? I review your system architecture, identify bottlenecks, security risks, and scalability issues. You get a written report with prioritized recommendations.',
      },
      {
        name: 'Vendor & Hire Evaluation',
        detail:
          'Evaluating agencies, contractors, or candidates for technical roles. I assess proposals, review code samples, and help you avoid expensive mistakes.',
      },
      {
        name: 'Ongoing Advisory',
        detail:
          "Weekly or bi-weekly calls to stay aligned on technical decisions. I'm in your Slack, reviewing PRs, and available for async questions.",
      },
    ],
    engagements: [
      {
        name: 'One-time AI Audit',
        detail: 'Deep-dive into your operations + written report. 1-2 weeks.',
      },
      {
        name: 'Monthly Retainer',
        detail:
          '10-20 hours/month of ongoing CTO advisory. Slack access + weekly calls.',
      },
      {
        name: 'Project-based',
        detail:
          'Scope a specific initiative with clear deliverables and timeline.',
      },
    ],
    idealFor:
      'Startups without a technical co-founder, SMBs evaluating AI investments, companies hiring dev teams and needing technical oversight.',
    cta: { text: 'Book a CTO Session', href: siteConfig.links.calendly },
    ctaSubtext:
      'One call to find out if your tech stack is helping you or holding you back.',
  },
  {
    label: 'CUSTOM DEVELOPMENT',
    icon: Code2,
    title: 'Custom software built for how your business actually works',
    description:
      'Off-the-shelf tools force you to change your processes to fit the software. I build software that fits your processes, integrated with your existing systems, designed for your team, and built to scale.',
    items: [
      {
        icon: Code2,
        name: 'SaaS Platform Development',
        detail:
          'Full-stack SaaS applications from database architecture to user-facing interface. Multi-tenant, subscription-ready, API-first.',
      },
      {
        icon: Smartphone,
        name: 'Mobile App Development',
        detail:
          'Native and cross-platform apps (iOS + Android). From consumer-facing apps to internal operations tools.',
      },
      {
        icon: Monitor,
        name: 'Web Application Development',
        detail:
          'Custom web applications, admin dashboards, customer portals, and internal tools. React, Next.js, Node.js stack.',
      },
      {
        icon: ShoppingCart,
        name: 'E-Commerce Development',
        detail:
          'Custom e-commerce platforms with AI-powered recommendations, inventory management, and analytics.',
      },
      {
        icon: Palette,
        name: 'UI/UX Design',
        detail:
          'User research, wireframing, prototyping, and production-ready design systems. Designed for conversion and usability.',
      },
      {
        icon: Settings,
        name: 'ERP & Workflow Systems',
        detail:
          'Custom ERP implementations, workflow automation platforms, and operational management systems tailored to your industry.',
      },
    ],
    industries:
      'Enterprise & Workplace, Hospitality & Travel, Logistics & Operations, Health & Wellness, Retail & E-Commerce, FinTech, Legal Tech, EdTech, Food & Beverage, Real Estate.',
    idealFor:
      'Companies that have outgrown off-the-shelf tools, enterprises needing custom integrations, businesses with unique operational workflows.',
    cta: { text: 'Discuss Your Project', href: siteConfig.links.calendly },
    ctaSubtext:
      "Tell me what you need built. I'll tell you how fast we can ship it.",
  },
]

const stats = [
  { number: '50+', label: 'AI Systems Deployed' },
  { number: '500+', label: 'Projects Shipped' },
  { number: '$2M+', label: 'Client ROI Generated' },
  { number: '60 Days', label: 'Average Launch Time' },
]

const faqItems = [
  {
    question: 'How much does it cost?',
    answer:
      'Every project is different. AI Audits start at $2,000. Moonship MVPs start at $15,000. CTO advisory retainers start at $3,000/month. Book a call and I\'ll give you a specific quote based on your needs.',
  },
  {
    question: 'How fast can you deliver?',
    answer:
      'MVPs in 60 days. AI agent deployments in 30-45 days. Workflow automations in 2-4 weeks. Enterprise systems in 3-6 months. Speed depends on scope and integrations.',
  },
  {
    question: 'Who actually builds the systems?',
    answer:
      'I lead the architecture and strategy. The development is powered by a senior engineering team with 20+ years of experience and 500+ shipped projects. I oversee every project personally.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer:
      "Yes, that's what Moonship is for. If you have an idea and need a production MVP fast, apply for Moonship. I take 3 projects per month.",
  },
  {
    question: 'What if I just need advice, not a full build?',
    answer:
      "That's what CTO-as-a-Service is for. Book a single session or set up a monthly retainer. No commitment to a full build required.",
  },
  {
    question: 'What industries do you work with?',
    answer:
      'SaaS, e-commerce, real estate, hospitality, logistics, healthcare, fintech, legal tech, education, retail, and manufacturing. If your business runs on processes that involve data, communication, or decision-making, AI can probably improve it.',
  },
  {
    question: "What's your tech stack?",
    answer:
      'Node.js, React, Next.js, Python, React Native for mobile. AI: OpenAI GPT-4, Claude, LangChain, AutoGen, Twilio for voice. Databases: PostgreSQL, Redis, Pinecone (vector). Infrastructure: AWS, Vercel. Automation: n8n, custom workflows.',
  },
]

const metricCards = [
  {
    number: '50+',
    label: 'AI Systems Deployed',
    context:
      'Voice agents, RAG chatbots, workflow automations. All running in production.',
  },
  {
    number: '500+',
    label: 'Projects Shipped',
    context: 'From MVPs to enterprise platforms. Across 10+ industries.',
  },
  {
    number: '$2M+',
    label: 'Client ROI Generated',
    context: 'Measured in cost savings, revenue gains, and hours reclaimed.',
  },
  {
    number: '60 Days',
    label: 'Average Launch Time',
    context: 'From kickoff to production. Not staging. Real users.',
  },
]

const resultCards = [
  {
    metric: '84% faster check-in',
    label: 'Enterprise visitor management system',
    href: '/case-studies/ai-visitor-management-system',
  },
  {
    metric: '200+ calls/day handled by AI',
    label: 'Voice agent for real estate',
    href: '/case-studies/ai-voice-agent-real-estate',
  },
  {
    metric: '68% support tickets deflected',
    label: 'RAG chatbot for SaaS',
    href: '/case-studies/rag-chatbot-saas-support',
  },
]

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 lg:py-28">
        <Container className="max-w-4xl">
          <SectionLabel>Consulting</SectionLabel>
          <h1 className="text-3xl sm:text-4xl md:text-hero text-text-primary mt-6 mb-6">
            AI systems that ship.{' '}
            <span className="text-accent">Not someday. In weeks.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl">
            I help B2B companies design, build, and deploy AI automation systems
            that reduce costs, accelerate operations, and compound over time.
            50+ systems deployed. 500+ projects behind me. 20+ years of
            production-grade engineering.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10">
            <Button href={siteConfig.links.calendly} size="lg" external className="w-full sm:w-auto">
              Book a Strategy Call
            </Button>
            <Button href="/case-studies" variant="outlined" size="lg" className="w-full sm:w-auto">
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

      {/* Service 1: AI Automation & Agents */}
      <Section className="bg-bg-secondary/50" id="ai-solutions">
        <Container>
          <SectionLabel>{services[0].label}</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            {services[0].title}
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-3xl">
            {services[0].description}
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {services[0].items!.map((item, i) => (
              <div
                key={i}
                className="bg-bg-primary border border-border rounded-card p-6 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  {'icon' in item && item.icon && (
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-accent" />
                    </div>
                  )}
                  <h3 className="text-text-primary font-semibold">
                    {item.name}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="text-text-tertiary text-sm mb-6">
            <span className="text-text-secondary font-medium">Ideal for:</span>{' '}
            {services[0].idealFor}
          </p>
          <div>
            <Button href={services[0].cta.href} external>
              {services[0].cta.text}
            </Button>
            <p className="text-text-tertiary text-sm mt-3">
              {services[0].ctaSubtext}
            </p>
          </div>
        </Container>
      </Section>

      {/* Service 2: Moonship MVP */}
      <Section id="moonship">
        <Container>
          <SectionLabel>{services[1].label}</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            {services[1].title}
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-3xl">
            {services[1].description}
          </p>

          {/* Timeline steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {services[1].steps!.map((step, i) => (
              <div
                key={i}
                className="relative bg-bg-secondary border border-border rounded-card p-6 hover:border-accent/30 transition-colors"
              >
                <Badge className="mb-3">{step.week}</Badge>
                <h3 className="text-text-primary font-semibold mb-2">
                  {step.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Deliverables */}
          <div className="bg-bg-secondary border border-border rounded-card p-8 mb-10">
            <h3 className="text-h3 text-text-primary mb-4">What you get</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {services[1].deliverables!.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-text-secondary text-sm"
                >
                  <CheckCircle size={14} className="text-accent shrink-0" />
                  {d}
                </div>
              ))}
            </div>
          </div>

          <p className="text-text-tertiary text-sm mb-6">
            <span className="text-text-secondary font-medium">Ideal for:</span>{' '}
            {services[1].idealFor}
          </p>
          <div>
            <Button href={services[1].cta.href} external>
              {services[1].cta.text}
            </Button>
            <p className="text-text-tertiary text-sm mt-3">
              {services[1].ctaSubtext}
            </p>
          </div>
        </Container>
      </Section>

      {/* Service 3: CTO-as-a-Service */}
      <Section className="bg-bg-secondary/50" id="cto">
        <Container>
          <SectionLabel>{services[2].label}</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            {services[2].title}
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-3xl">
            {services[2].description}
          </p>

          <div className="space-y-4 mb-10">
            {services[2].items!.map((item, i) => (
              <div
                key={i}
                className="bg-bg-primary border border-border rounded-card p-6 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-text-primary font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Engagement models */}
          <div className="bg-bg-primary border border-border rounded-card p-8 mb-10">
            <h3 className="text-h3 text-text-primary mb-4">
              Engagement models
            </h3>
            <div className="space-y-4">
              {services[2].engagements!.map((e, i) => (
                <div key={i} className="flex gap-3">
                  <ArrowRight
                    size={16}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="text-text-primary font-medium">
                      {e.name}:
                    </span>{' '}
                    <span className="text-text-secondary text-sm">
                      {e.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-text-tertiary text-sm mb-6">
            <span className="text-text-secondary font-medium">Ideal for:</span>{' '}
            {services[2].idealFor}
          </p>
          <div>
            <Button href={services[2].cta.href} external>
              {services[2].cta.text}
            </Button>
            <p className="text-text-tertiary text-sm mt-3">
              {services[2].ctaSubtext}
            </p>
          </div>
        </Container>
      </Section>

      {/* Service 4: Enterprise Software */}
      <Section id="enterprise">
        <Container>
          <SectionLabel>{services[3].label}</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            {services[3].title}
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-3xl">
            {services[3].description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services[3].items!.map((item, i) => (
              <div
                key={i}
                className="bg-bg-secondary border border-border rounded-card p-6 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  {'icon' in item && item.icon && (
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-accent" />
                    </div>
                  )}
                  <h3 className="text-text-primary font-semibold">
                    {item.name}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="text-text-tertiary text-sm mb-2">
            <span className="text-text-secondary font-medium">
              Industries served:
            </span>{' '}
            {services[3].industries}
          </p>
          <p className="text-text-tertiary text-sm mb-6">
            <span className="text-text-secondary font-medium">Ideal for:</span>{' '}
            {services[3].idealFor}
          </p>
          <div>
            <Button href={services[3].cta.href} external>
              {services[3].cta.text}
            </Button>
            <p className="text-text-tertiary text-sm mt-3">
              {services[3].ctaSubtext}
            </p>
          </div>
        </Container>
      </Section>

      {/* How I Work */}
      <Section className="bg-bg-secondary/50">
        <Container className="max-w-3xl">
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-8">
            The process is simple. The execution is rigorous.
          </h2>
          <div className="hidden md:flex justify-center mb-10">
            <Image
              src="/images/consulting-process.svg"
              alt="Consulting process: Diagnose, Architect, Deploy"
              width={800}
              height={200}
              className="w-full max-w-[700px] h-auto opacity-80"
            />
          </div>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Diagnose',
                description:
                  'We start with your business, not the technology. I audit your operations, map your workflows, and identify where AI or automation will create the highest ROI. This usually takes 1-2 weeks.',
              },
              {
                step: '02',
                title: 'Architect',
                description:
                  'I design the system architecture: what gets built, what tools to use, how it integrates with your existing stack, and what the timeline looks like. You see the full blueprint before we write a single line of code.',
              },
              {
                step: '03',
                title: 'Deploy',
                description:
                  'My team builds and deploys the system into production. Not a staging environment. Actual production serving real users. We train your team, monitor performance, and optimize for 30 days post-launch.',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-3xl font-bold text-accent/30 shrink-0 w-12">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-h3 text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Proof: Metrics */}
      <Section>
        <Container>
          <SectionLabel>Results</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-10">
            The numbers speak.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {metricCards.map((card, i) => (
              <div
                key={i}
                className="bg-bg-secondary border border-border rounded-card p-4 sm:p-6"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">
                  {card.number}
                </div>
                <div className="text-text-primary text-sm font-medium mb-1">
                  {card.label}
                </div>
                <p className="text-text-tertiary text-xs">{card.context}</p>
              </div>
            ))}
          </div>

          {/* Logo bar */}
          <LogoMarquee title="Trusted by teams at" />

          {/* Results Snapshot Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {resultCards.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="group bg-bg-secondary border border-border rounded-card p-6 hover:border-accent/30 transition-colors"
              >
                <div className="text-2xl font-bold text-accent mb-2">
                  {card.metric}
                </div>
                <p className="text-text-secondary text-sm mb-3">
                  {card.label}
                </p>
                <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Case Study <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-bg-secondary/50">
        <Container className="max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-10">
            Common questions
          </h2>
          <FAQAccordion items={faqItems} />
        </Container>
      </Section>

      {/* Final CTA */}
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

      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Saksham Solanki | AI Consulting',
            url: 'https://sakshamsolanki.com/consulting',
            description:
              'AI automation consulting for B2B companies. Design, build, and deploy AI systems that reduce costs and accelerate operations.',
            provider: {
              '@type': 'Person',
              name: 'Saksham Solanki',
              url: 'https://sakshamsolanki.com',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'AI Consulting Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Automation & Agents',
                    description:
                      'Voice AI agents, RAG chatbots, autonomous workflow agents, and AI-powered marketing tools.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Moonship MVP: Launch in 60 Days',
                    description:
                      'From idea to production MVP in 60 days using battle-tested product architectures.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'CTO-as-a-Service',
                    description:
                      'Fractional CTO expertise for AI strategy, tech stack decisions, vendor evaluation, and architecture reviews.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Enterprise Software Development',
                    description:
                      'Custom SaaS platforms, mobile apps, web applications, e-commerce, and ERP systems.',
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
