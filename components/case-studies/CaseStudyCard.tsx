import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { PostMeta } from '@/lib/mdx'

export function CaseStudyCard({ post }: { post: PostMeta }) {
  return (
    <a href={`/case-studies/${post.slug}`} className="group block h-full">
      <article className="bg-bg-secondary border border-border rounded-card p-6 h-full flex flex-col transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge>{post.category}</Badge>
          {post.industry && <Badge variant="dark">{post.industry}</Badge>}
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors line-clamp-3 leading-snug">
          {post.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-1">
          {post.description}
        </p>
        <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Read Case Study <ArrowRight size={14} />
        </span>
      </article>
    </a>
  )
}
