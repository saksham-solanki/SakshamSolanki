import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Download } from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  format: string
  slug: string
}

export function ResourceCard({ title, description, format, slug }: ResourceCardProps) {
  return (
    <Link href={`/resources/${slug}`} className="group block">
      <article className="bg-bg-secondary border border-border rounded-card p-6 h-full transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="dark">{format}</Badge>
          <Download size={18} className="text-text-tertiary group-hover:text-accent transition-colors" />
        </div>
        <h3 className="text-h3 text-text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm">
          {description}
        </p>
      </article>
    </Link>
  )
}
