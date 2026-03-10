"use client"

import { ArrowRight, Bot, Target, Code, Rocket, Megaphone } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const services: { id: string; icon: LucideIcon; title: string; description: string; href: string }[] = [
  {
    id: "ai-solutions",
    icon: Bot,
    title: "AI Solutions",
    description: "Voice agents, chat agents, autonomous workflows, and AI consulting. Systems that run in production.",
    href: "/solutions#ai-solutions",
  },
  {
    id: "ai-marketing",
    icon: Target,
    title: "AI for Marketing",
    description: "Lead scoring, content generation, campaign optimization, and event marketing automation.",
    href: "/solutions#ai-marketing",
  },
  {
    id: "software-development",
    icon: Code,
    title: "Custom Software",
    description: "Mobile apps, SaaS platforms, websites, e-commerce, and enterprise software. Built for scale.",
    href: "/solutions#software-development",
  },
  {
    id: "startup-services",
    icon: Rocket,
    title: "Product & Startups",
    description: "MVP in 60 days, fractional CTO, startup AI toolkit, and go-to-market strategy.",
    href: "/solutions#startup-services",
  },
  {
    id: "marketing-solutions",
    icon: Megaphone,
    title: "Marketing",
    description: "AI-powered marketing, paid ads, email campaigns, content, SEO, and social media management.",
    href: "/solutions#marketing-solutions",
  },
]

export function ServicesGrid() {
  const router = useRouter()

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => {
        const Icon = service.icon
        return (
          <div
            key={service.id}
            role="link"
            tabIndex={0}
            onClick={() => {
              window.location.href = service.href
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") window.location.href = service.href
            }}
            className="bg-bg-secondary border border-border rounded-card p-8 hover:border-accent/30 transition-colors group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <Icon size={20} className="text-accent" />
            </div>
            <h3 className="text-h3 text-text-primary mb-3">{service.title}</h3>
            <p className="text-text-secondary text-sm mb-4">{service.description}</p>
            <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore <ArrowRight size={14} />
            </span>
          </div>
        )
      })}
    </div>
  )
}
