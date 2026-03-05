"use client"

import {
  Home, FileText, Users, Briefcase, User, Phone, Layers,
  Bot, MessageSquare, Mic, Workflow,
  BarChart3, PenTool, FlaskConical, CalendarCheck,
  Smartphone, Cloud, Globe, Palette, ShoppingCart, Building2,
  Rocket, UserCog, Lightbulb, Target,
  Sparkles, Megaphone, Mail, Share2, Presentation,
  Brain, Code2, Monitor, Settings,
} from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { siteConfig } from "@/lib/constants"
import Link from "next/link"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  {
    name: "Services",
    url: "/services",
    icon: Layers,
    megaMenu: [
      {
        category: "AI Solutions",
        url: "/services#ai-solutions",
        icon: Bot,
        services: [
          { name: "Voice Agents", url: "/services#ai-solutions", icon: Mic },
          { name: "Chat Agents", url: "/services#ai-solutions", icon: MessageSquare },
          { name: "Agent Architectures", url: "/services#ai-solutions", icon: Workflow },
          { name: "Autonomous Workflows", url: "/services#ai-solutions", icon: Bot },
        ],
      },
      {
        category: "AI for Marketing",
        url: "/services#ai-marketing",
        icon: BarChart3,
        services: [
          { name: "Lead Scoring", url: "/services#ai-marketing", icon: BarChart3 },
          { name: "Content Generation", url: "/services#ai-marketing", icon: PenTool },
          { name: "Campaign Optimization", url: "/services#ai-marketing", icon: FlaskConical },
          { name: "Event Automation", url: "/services#ai-marketing", icon: CalendarCheck },
        ],
      },
      {
        category: "Custom Software",
        url: "/services#software-development",
        icon: Globe,
        services: [
          { name: "Mobile Apps", url: "/services#software-development", icon: Smartphone },
          { name: "SaaS Platforms", url: "/services#software-development", icon: Cloud },
          { name: "Web Applications", url: "/services#software-development", icon: Globe },
          { name: "UI/UX Design", url: "/services#software-development", icon: Palette },
          { name: "E-Commerce", url: "/services#software-development", icon: ShoppingCart },
          { name: "Enterprise Software", url: "/services#software-development", icon: Building2 },
        ],
      },
      {
        category: "Product & Startups",
        url: "/services#startup-services",
        icon: Rocket,
        services: [
          { name: "Moonship MVP", url: "/services#startup-services", icon: Rocket },
          { name: "CTO as a Service", url: "/services#startup-services", icon: UserCog },
          { name: "Startup AI Toolkit", url: "/services#startup-services", icon: Lightbulb },
          { name: "Go-To-Market Strategy", url: "/services#startup-services", icon: Target },
        ],
      },
      {
        category: "Marketing",
        url: "/services#marketing-solutions",
        icon: Megaphone,
        services: [
          { name: "AI-Powered Marketing", url: "/services#marketing-solutions", icon: Sparkles },
          { name: "Advertising", url: "/services#marketing-solutions", icon: Megaphone },
          { name: "Email Campaigns", url: "/services#marketing-solutions", icon: Mail },
          { name: "Content & SEO", url: "/services#marketing-solutions", icon: FileText },
          { name: "Social Media", url: "/services#marketing-solutions", icon: Share2 },
          { name: "Webinars & Events", url: "/services#marketing-solutions", icon: Presentation },
        ],
      },
    ],
  },
  { name: "AI Builders Club", url: "/ai-builders-club", icon: Users },
  { name: "Case Studies", url: "/case-studies", icon: Briefcase },
  {
    name: "Consulting",
    url: "/consulting",
    icon: Phone,
    megaMenu: [
      {
        category: "AI Solutions",
        url: "/consulting#ai-solutions",
        icon: Bot,
        services: [],
      },
      {
        category: "Moonship MVP",
        url: "/consulting#moonship",
        icon: Rocket,
        services: [],
      },
      {
        category: "CTO as a Service",
        url: "/consulting#cto",
        icon: Brain,
        services: [],
      },
      {
        category: "Custom Development",
        url: "/consulting#enterprise",
        icon: Code2,
        services: [],
      },
    ],
  },
  { name: "Blog", url: "/blog", icon: FileText },
  { name: "About", url: "/about", icon: User },
]

export function TubelightNav() {
  return (
    <>
      {/* Fixed top bar: Logo left | Nav center | CTA right */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden sm:flex items-center justify-between px-6 h-[72px] pointer-events-none">
        {/* Logo — top left */}
        <Link href="/" className="text-text-primary font-bold text-xl tracking-tight shrink-0 pointer-events-auto">
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
