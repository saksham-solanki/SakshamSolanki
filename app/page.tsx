import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Mail, Bot, Target, Code, Rocket, Megaphone, Phone, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { BeehiivForm } from '@/components/ui/BeehiivForm'
import { BlogCard } from '@/components/blog/BlogCard'
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { LogoMarquee } from '@/components/ui/LogoMarquee'
import { HeroScroll } from '@/components/ui/hero-scroll'
import { getBlogPosts, getCaseStudies } from '@/lib/mdx'
import { siteConfig } from '@/lib/constants'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = {
  ...generateSEO({
    description: 'I build production-grade AI systems for B2B companies with 11-200 employees. 50+ systems deployed, $2M+ in client ROI generated. Book a free strategy call.',
    path: '/',
  }),
  title: {
    absolute: 'Saksham Solanki | AI Automation Consultant for B2B Companies',
  },
}

export default function HomePage() {
  const blogPosts = getBlogPosts().slice(0, 4)
  const caseStudies = getCaseStudies().slice(0, 3)

  return (
    <>
      {/* Hero Section with Scroll Animation */}
      <section className="relative">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10">
          <HeroScroll />
        </div>
      </section>

      {/* Client Logo Marquee */}
      <LogoMarquee />

      {/* AI Builders Club Section */}
      <Section className="bg-bg-primary">
        <Container>
          <SectionLabel>AI Builders Club</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            Where AI operators build together
          </h2>
          <p className="text-text-secondary max-w-2xl mb-10">
            The community and newsletter for B2B operators who implement AI systems.
            Not another hype group. A workspace for people who ship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Community Card */}
            <div className="bg-bg-secondary border border-border rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Users size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">Community</h3>
              <p className="text-text-secondary mb-6">
                A private group of B2B operators implementing AI systems.
                Share architectures, get feedback, find partners.
              </p>
              <ul className="space-y-2 mb-6 text-text-secondary text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-accent">&#10003;</span> Weekly live build sessions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">&#10003;</span> Architecture review threads
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">&#10003;</span> Tool and vendor breakdowns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">&#10003;</span> Direct access to operators
                </li>
              </ul>
              <Button href={siteConfig.links.skool} external>
                Join Free on Skool
              </Button>
            </div>

            {/* Newsletter Card */}
            <div className="bg-bg-secondary border border-border rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Mail size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">Newsletter</h3>
              <p className="text-text-secondary mb-6">
                Weekly AI automation intelligence. Every Thursday.
                One insight you can implement immediately.
              </p>
              <ul className="space-y-2 mb-6 text-text-secondary text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-accent">&#10003;</span> Production-tested strategies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">&#10003;</span> Real implementation walkthroughs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">&#10003;</span> Tool comparisons and reviews
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">&#10003;</span> No fluff, no filler
                </li>
              </ul>
              <BeehiivForm direction="col" buttonText="Subscribe Free" buttonClassName="w-full" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section className="bg-bg-secondary/50">
        <Container>
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            Full-stack AI and software. One team.
          </h2>
          <p className="text-text-secondary max-w-2xl mb-10">
            AI agents, custom software, MVP launches, and marketing systems.
            Everything you need to build and grow, without juggling vendors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/services#ai-solutions" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Bot size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">AI Solutions</h3>
              <p className="text-text-secondary text-sm mb-4">Voice agents, chat agents, autonomous workflows, and AI consulting. Systems that run in production.</p>
              <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={14} /></span>
            </a>

            <a href="/services#ai-marketing" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Target size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">AI for Marketing</h3>
              <p className="text-text-secondary text-sm mb-4">Lead scoring, content generation, campaign optimization, and event marketing automation.</p>
              <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={14} /></span>
            </a>

            <a href="/services#software-development" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Code size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">Custom Software</h3>
              <p className="text-text-secondary text-sm mb-4">Mobile apps, SaaS platforms, websites, e-commerce, and enterprise software. Built for scale.</p>
              <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={14} /></span>
            </a>

            <a href="/services#startup-services" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Rocket size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">Product &amp; Startups</h3>
              <p className="text-text-secondary text-sm mb-4">MVP in 60 days, fractional CTO, startup AI toolkit, and go-to-market strategy.</p>
              <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={14} /></span>
            </a>

            <a href="/services#marketing-solutions" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Megaphone size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">Marketing</h3>
              <p className="text-text-secondary text-sm mb-4">AI-powered marketing, paid ads, email campaigns, content, SEO, and social media management.</p>
              <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={14} /></span>
            </a>
          </div>
          <div className="mt-10 text-center">
            <Button href="/services">
              View All Services
            </Button>
          </div>
        </Container>
      </Section>

      {/* Featured Case Studies */}
      {caseStudies.length > 0 && (
        <Section>
          <Container>
            <SectionLabel>Case Studies</SectionLabel>
            <div className="flex items-end justify-between mt-4 mb-10">
              <h2 className="text-h1 text-text-primary">
                Systems that shipped
              </h2>
              <Link
                href="/case-studies"
                className="hidden sm:flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all"
              >
                View all <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map(cs => (
                <CaseStudyCard key={cs.meta.slug} post={cs.meta} />
              ))}
            </div>
            <Link
              href="/case-studies"
              className="flex sm:hidden items-center gap-1 text-accent text-sm font-medium mt-8 hover:gap-2 transition-all"
            >
              View all case studies <ArrowRight size={16} />
            </Link>
          </Container>
        </Section>
      )}

      {/* Consulting */}
      <Section className="bg-bg-secondary/50">
        <Container>
          <SectionLabel>Consulting</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            Talk to Saksham before implementing AI
          </h2>
          <p className="text-text-secondary max-w-2xl mb-10">
            Get a clear roadmap before you spend a dollar on AI.
            Strategy, architecture, and hands-on implementation from someone who&apos;s deployed 50+ systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/consulting#ai-solutions" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-6 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Bot size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">AI Solutions</h3>
              <p className="text-text-secondary text-sm">Audit your workflows, identify high-ROI automation opportunities, and build an implementation plan.</p>
            </a>

            <a href="/consulting#moonship" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-6 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Rocket size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Moonship MVP</h3>
              <p className="text-text-secondary text-sm">Go from idea to deployed product in 60 days. Validated, built, and launched.</p>
            </a>

            <a href="/consulting#cto" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-6 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <User size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">CTO as a Service</h3>
              <p className="text-text-secondary text-sm">Fractional technical leadership for startups that need senior engineering direction without a full-time hire.</p>
            </a>

            <a href="/consulting#enterprise" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-6 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Code size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Custom Development</h3>
              <p className="text-text-secondary text-sm">End-to-end software development for complex projects. Architecture, build, deploy, maintain.</p>
            </a>
          </div>
          <div className="mt-10 text-center">
            <Button href={siteConfig.links.calendly} external>
              Book a Free Strategy Call
            </Button>
          </div>
        </Container>
      </Section>

      {/* Latest Blog Posts */}
      {blogPosts.length > 0 && (
        <Section>
          <Container>
            <SectionLabel>From the Blog</SectionLabel>
            <div className="flex items-end justify-between mt-4 mb-10">
              <h2 className="text-h1 text-text-primary">
                What&apos;s working in AI right now
              </h2>
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all"
              >
                View all <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map(post => (
                <BlogCard key={post.meta.slug} post={post.meta} />
              ))}
            </div>
            <Link
              href="/blog"
              className="flex sm:hidden items-center gap-1 text-accent text-sm font-medium mt-8 hover:gap-2 transition-all"
            >
              View all posts <ArrowRight size={16} />
            </Link>
          </Container>
        </Section>
      )}

      {/* About */}
      <Section className="bg-bg-secondary/50">
        <Container>
          <SectionLabel>About</SectionLabel>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-4">
            <div>
              <h2 className="text-h1 text-text-primary mb-4">
                I&apos;m Saksham Solanki
              </h2>
              <p className="text-text-secondary mb-4">
                AI automation systems architect. I help companies implement production-grade AI systems that actually generate ROI.
              </p>
              <p className="text-text-secondary mb-6">
                50+ AI systems deployed. $2M+ in client ROI generated. I don&apos;t sell demos or slide decks. I build infrastructure that runs in production and compounds over time.
              </p>
              <div className="flex gap-4">
                <Button href="/about">
                  Read My Story
                </Button>
                <Button href={siteConfig.links.calendly} variant="outlined" external>
                  Book a Call
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-card bg-bg-tertiary border border-border flex items-center justify-center">
                <User size={64} className="text-text-tertiary" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <NewsletterSignup />
    </>
  )
}
