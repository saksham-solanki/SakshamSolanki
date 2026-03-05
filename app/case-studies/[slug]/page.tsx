import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { getCaseStudies, getPostBySlug } from '@/lib/mdx'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { MetricsBar } from '@/components/case-studies/MetricsBar'
import { Button } from '@/components/ui/Button'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getCaseStudies()
  return posts.map(post => ({ slug: post.meta.slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug('case-studies', params.slug)
  if (!post) return {}
  return generateSEO({
    title: post.meta.title,
    description: post.meta.description,
    path: `/case-studies/${post.meta.slug}`,
    type: 'article',
  })
}

const mdxComponents = {
  MetricsBar,
}

export default async function CaseStudyPage(props: Props) {
  const params = await props.params
  const post = getPostBySlug('case-studies', params.slug)
  if (!post) notFound()

  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-text-tertiary text-sm hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>

          <Badge className="mb-4">{post.meta.category}</Badge>
          <h1 className="text-h1 text-text-primary mb-6">
            {post.meta.title}
          </h1>
          <p className="text-text-secondary text-lg">
            {post.meta.description}
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-16">
        <Container className="max-w-3xl">
          <article className="prose-dark">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </article>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-bg-secondary/50">
        <Container className="text-center max-w-2xl">
          <h2 className="text-h2 text-text-primary mb-4">
            Want results like these?
          </h2>
          <p className="text-text-secondary mb-8">
            Book a call to discuss how AI automation can generate measurable ROI for your business.
          </p>
          <Button href={siteConfig.links.calendly} size="lg" external>
            Book a Call
          </Button>
        </Container>
      </section>
    </>
  )
}
