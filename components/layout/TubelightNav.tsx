"use client"

import { Home, FileText, BookOpen, Users, Briefcase, User, Phone } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { siteConfig } from "@/lib/constants"
import Link from "next/link"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "AI Builders Club", url: "/ai-builders-club", icon: Users },
  { name: "Case Studies", url: "/case-studies", icon: Briefcase },
  { name: "Consulting", url: "/consulting", icon: Phone },
  { name: "Blog", url: "/blog", icon: FileText },
  { name: "About", url: "/about", icon: User },
]

export function TubelightNav() {
  return (
    <>
      {/* Fixed top bar: Logo left | Nav center | CTA right */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden sm:flex items-center justify-between px-6 h-[72px]">
        {/* Logo — top left */}
        <Link href="/" className="text-text-primary font-bold text-xl tracking-tight shrink-0">
          Saksham<span className="text-accent">.</span>
        </Link>

        {/* Spacer to balance CTA width on right */}
        <div className="w-[120px]" />
      </div>

      {/* Tubelight NavBar — bottom on mobile, centered top on desktop */}
      <NavBar items={navItems} />

      {/* Floating Book a Call CTA — top-right, desktop only */}
      <div className="fixed top-4 right-6 z-50 hidden sm:block">
        <a
          href={siteConfig.links.calendly}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InteractiveHoverButton
            text="Book a Call"
            className="w-36 text-sm border-accent"
          />
        </a>
      </div>

      {/* Mobile logo — top left, visible only on small screens */}
      <div className="fixed top-4 left-5 z-50 sm:hidden">
        <Link href="/" className="text-text-primary font-bold text-lg tracking-tight">
          Saksham<span className="text-accent">.</span>
        </Link>
      </div>
    </>
  )
}
