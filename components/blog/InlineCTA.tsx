import { BeehiivForm } from '@/components/ui/BeehiivForm'

export function InlineCTA() {
  return (
    <div className="my-10 bg-bg-secondary border border-accent/20 rounded-card p-6 lg:p-8">
      <p className="text-text-primary font-semibold text-lg">
        Join AI Builders Club
      </p>
      <p className="text-text-secondary text-sm mt-1 mb-4">
        Weekly AI automation intel for operators. No fluff, just systems that work.
      </p>
      <BeehiivForm buttonText="Subscribe Free" />
    </div>
  )
}
