import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { getBlogPosts, getPostBySlug } from '@/lib/mdx'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { InlineCTA } from '@/components/blog/InlineCTA'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { BlogCard } from '@/components/blog/BlogCard'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map(post => ({ slug: post.meta.slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug('blog', params.slug)
  if (!post) return {}
  return generateSEO({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${post.meta.slug}`,
    type: 'article',
    publishedTime: post.meta.date,
    category: post.meta.category,
  })
}

const mdxComponents = {
  InlineCTA,
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params
  const post = getPostBySlug('blog', params.slug)
  if (!post) notFound()

  const allPosts = getBlogPosts()
  const related = allPosts
    .filter(p => p.meta.slug !== params.slug && p.meta.category === post.meta.category)
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(post.meta)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.meta.title, url: `/blog/${post.meta.slug}` },
          ])),
        }}
      />

      {/* Hero */}
      <section className="py-10 sm:py-16 lg:py-24">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-tertiary text-sm hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <Badge className="mb-4">{post.meta.category}</Badge>
          <h1 className="text-h1 text-text-primary mb-4">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-3 text-text-tertiary text-sm">
            <span>By Saksham Solanki</span>
            <span aria-hidden="true">&middot;</span>
            <time>{post.meta.date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.meta.readingTime}</span>
          </div>
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

      {/* Newsletter CTA */}
      <NewsletterSignup />

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-10 sm:py-16 lg:py-24">
          <Container>
            <h2 className="text-h2 text-text-primary mb-8">Related posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(p => (
                <BlogCard key={p.meta.slug} post={p.meta} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
