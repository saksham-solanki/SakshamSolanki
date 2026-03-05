interface Metric {
  value: string
  label: string
}

export function MetricsBar({ metrics }: { metrics?: Metric[] }) {
  if (!metrics || !Array.isArray(metrics)) return null
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {metrics.map((metric, i) => (
        <div key={i} className="text-center lg:text-left">
          <div className="text-3xl lg:text-4xl font-bold text-accent tracking-tight">
            {metric.value}
          </div>
          <div className="text-text-tertiary text-sm mt-1">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  )
}
