import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/constants'

export function InlineCTA() {
  return (
    <div className="my-10 bg-bg-secondary border border-accent/20 rounded-card p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-text-primary font-semibold text-lg">
            Join AI Builders Club
          </p>
          <p className="text-text-secondary text-sm mt-1">
            Weekly AI automation intel for operators. No fluff, just systems that work.
          </p>
        </div>
        <Button href="/ai-builders-club" size="sm" className="shrink-0">
          Subscribe Free
        </Button>
      </div>
    </div>
  )
}
