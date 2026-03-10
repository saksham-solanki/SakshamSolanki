import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Mail, Bot, Target, Code, Rocket, Megaphone, Phone, User, Zap, TrendingUp, Clock, BarChart3, Search, Timer } from 'lucide-react'
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
    description: 'AI systems partner. 50+ production systems deployed, $2M+ in documented client ROI. We design, build, and deploy AI infrastructure that delivers measurable business results.',
    path: '/',
  }),
  title: {
    absolute: 'Saksham Solanki | AI Systems Partner',
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

      {/* Social Proof Metrics Bar */}
      <Section className="bg-bg-secondary/50 !py-8 sm:!py-12 lg:!py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-accent mb-2">50+</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wider">AI Systems Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-accent mb-2">16+</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wider">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-accent mb-2">10,000+</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wider">Hours of Manual Work Eliminated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-accent mb-2">$2M+</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wider">Documented Client ROI</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How We Work — Offer Ladder Preview */}
      <Section>
        <Container>
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            Three ways to work together
          </h2>
          <p className="text-text-secondary max-w-2xl mb-10">
            Every engagement starts with understanding your operations. We find the highest-impact opportunities and deploy systems that pay for themselves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/solutions" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Search size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">AI Opportunity Audit</h3>
              <p className="text-text-secondary text-sm mb-4">Find the $500K you&apos;re leaving on the table. A deep-dive analysis of your operations to identify the highest-ROI AI opportunities.</p>
              <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight size={14} /></span>
            </a>

            <a href="/solutions" className="bg-bg-secondary border border-accent/20 rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Timer size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">AI Operations Sprint</h3>
              <p className="text-text-secondary text-sm mb-4">Deployed systems, measurable results, 60 days. We build and ship production AI infrastructure on a fixed timeline.</p>
              <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight size={14} /></span>
            </a>

            <a href="/solutions" className="bg-bg-secondary border border-border rounded-card p-4 sm:p-8 hover:border-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <BarChart3 size={20} className="text-accent" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">AI Transformation Program</h3>
              <p className="text-text-secondary text-sm mb-4">Full-stack operational overhaul with P&amp;L impact. End-to-end AI integration across your entire business.</p>
              <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight size={14} /></span>
            </a>
          </div>
          <div className="mt-10 text-center">
            <Button href="/solutions">
              Explore Solutions
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

      {/* Strategy Call CTA */}
      <Section className="bg-bg-secondary/50">
        <Container className="text-center max-w-2xl">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-h1 text-text-primary mt-4 mb-4">
            Talk to Saksham before implementing AI
          </h2>
          <p className="text-text-secondary mb-8">
            30-minute strategy call. No pitch deck. Just an honest assessment of where AI can drive measurable results in your operations.
          </p>
          <Button href="/solutions#contact">
            Book a Strategy Call
          </Button>
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
