import { Metadata } from 'next'
import { getBlogPosts } from '@/lib/mdx'
import { BlogCard } from '@/components/blog/BlogCard'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Blog',
  description: 'AI automation insights, implementation guides, and systems thinking for B2B operators. No fluff. Just what works.',
  path: '/blog',
})

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <>
      <Section>
        <Container>
          <h1 className="text-h1 text-text-primary mb-4">Production AI insights from the trenches</h1>
          <p className="text-text-secondary max-w-2xl mb-12">
            AI automation insights, implementation guides, and systems thinking.
            Written from building 50+ production AI systems for B2B companies.
            Want weekly insights? <a href="/ai-builders-club" className="text-accent hover:text-accent-hover">Join AI Builders Club</a>.
          </p>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <BlogCard key={post.meta.slug} post={post.meta} />
              ))}
            </div>
          ) : (
            <div className="bg-bg-secondary border border-border rounded-card p-12 text-center">
              <p className="text-text-tertiary text-lg mb-2">
                First posts dropping soon.
              </p>
              <p className="text-text-tertiary text-sm">
                Subscribe to the newsletter to get notified when new content goes live.
              </p>
            </div>
          )}
        </Container>
      </Section>
      <NewsletterSignup />
    </>
  )
}
