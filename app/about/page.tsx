import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { generateSEO, generatePersonSchema } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'About Saksham Solanki | AI Automation Systems Architect',
  description: 'AI automation systems architect helping B2B companies implement production-grade AI. 50+ systems deployed, $2M+ in client ROI generated.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />

      <Section>
        <Container className="max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 mb-12">
            {/* Left: text content */}
            <div className="flex-1">
              <SectionLabel>About</SectionLabel>
              <h1 className="text-3xl sm:text-4xl md:text-hero text-text-primary mt-6 mb-4">
                Saksham Solanki
              </h1>
              <p className="text-lg text-accent font-medium mb-4">AI Automation Systems Architect</p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-text-tertiary text-sm mb-8">
                <span>50+ AI systems deployed</span>
                <span aria-hidden="true">&middot;</span>
                <span>$2M+ in client ROI</span>
                <span aria-hidden="true">&middot;</span>
                <span>Building globally</span>
              </div>
            </div>
            {/* Right: portrait frame SVG */}
            <div className="hidden md:flex items-center justify-center shrink-0">
              <Image
                src="/images/about-portrait-frame.svg"
                alt="Saksham Solanki portrait frame"
                width={280}
                height={320}
                className="w-full max-w-[280px] h-auto opacity-80"
                priority
              />
            </div>
          </div>

          <div className="prose-dark space-y-6 text-body-lg">
            <p>
              I build AI systems for B2B companies. Not the kind that live in slide decks.
              The kind that run in production, process real data, and generate measurable results.
            </p>

            <p>
              My work sits at the intersection of AI architecture and business operations.
              I figure out where AI actually creates ROI in a company&apos;s workflow, then
              I build and deploy the system that captures it.
            </p>

            <p>
              Before this, I spent years in B2B growth, understanding what actually moves
              the needle for companies with 11 to 200 employees. That context matters.
              Most AI implementations fail not because the technology is wrong, but because
              the person building it doesn&apos;t understand the business problem.
            </p>

            <h2 className="text-h2 text-text-primary mt-12 mb-4 border-l-4 border-accent pl-4">
              How I work
            </h2>

            <p>
              I operate as a strategic partner, not a vendor. When you work with me,
              I personally architect every system. My technical team handles the build.
              a group of senior engineers who have shipped AI systems across dozens of industries.
            </p>

            <p>
              The process is simple: diagnose the opportunity, design the architecture,
              deploy the system. Most projects ship in 2-4 weeks.
            </p>

            <h2 className="text-h2 text-text-primary mt-12 mb-4 border-l-4 border-accent pl-4">
              AI Builders Club
            </h2>

            <p>
              I run <a href="/ai-builders-club" className="text-accent hover:text-accent-hover">AI Builders Club</a>,
              a community and newsletter for B2B operators implementing AI systems. Over 500 members.
              Weekly insights every Thursday. No hype, no fluff. Just what works in production.
            </p>

            <h2 className="text-h2 text-text-primary mt-12 mb-4 border-l-4 border-accent pl-4">
              What I believe
            </h2>

            <ul className="space-y-3">
              <li>AI is infrastructure, not magic. Treat it like you&apos;d treat any business system.</li>
              <li>The best AI implementation is the one that ships. Perfect architecture that never deploys is worthless.</li>
              <li>Most companies don&apos;t need cutting-edge models. They need well-designed systems around reliable ones.</li>
              <li>If you can&apos;t measure the ROI, you shouldn&apos;t build it.</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <Button href="/ai-builders-club">
              Join AI Builders Club
            </Button>
            <Button href="/consulting" variant="outlined">
              Work With Me
            </Button>
          </div>
        </Container>
      </Section>

      <NewsletterSignup />
    </>
  )
}
