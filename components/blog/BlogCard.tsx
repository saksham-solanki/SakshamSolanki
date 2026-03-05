import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import type { PostMeta } from '@/lib/mdx'

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-bg-secondary border border-border rounded-card p-6 h-full transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5">
        <Badge className="mb-4">{post.category}</Badge>
        <h3 className="text-h3 text-text-primary mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {post.description}
        </p>
        <div className="flex items-center gap-3 text-text-tertiary text-caption">
          <time>{post.date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime}</span>
        </div>
      </article>
    </Link>
  )
}
