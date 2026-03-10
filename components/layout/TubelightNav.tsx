"use client"

import { useState, useEffect } from "react"
import {
  Home, FileText, Users, Briefcase, User, Layers,
  Menu, X, ArrowRight,
} from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { siteConfig } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Solutions", url: "/solutions", icon: Layers },
  { name: "AI Builders Club", url: "/ai-builders-club", icon: Users },
  { name: "Case Studies", url: "/case-studies", icon: Briefcase },
  { name: "Blog", url: "/blog", icon: FileText },
  { name: "About", url: "/about", icon: User },
]

const mobileNavLinks = [
  { name: "Home", url: "/", icon: Home },
  { name: "Solutions", url: "/solutions", icon: Layers },
  { name: "AI Builders Club", url: "/ai-builders-club", icon: Users },
  { name: "Case Studies", url: "/case-studies", icon: Briefcase },
  { name: "Blog", url: "/blog", icon: FileText },
  { name: "About", url: "/about", icon: User },
]

export function TubelightNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Fixed top bar: Logo left | Nav center | CTA right — desktop */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden sm:flex items-center justify-between px-6 h-[72px] pointer-events-none">
        <Link href="/" className="text-text-primary font-bold text-xl tracking-tight shrink-0 pointer-events-auto">
          Saksham<span className="text-accent">.</span>
        </Link>
        <div className="w-[120px]" />
      </div>

      {/* Tubelight NavBar — desktop only */}
      <div className="hidden sm:block">
        <NavBar items={navItems} />
      </div>

      {/* Floating Book a Call CTA — desktop only */}
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

      {/* ===== MOBILE NAV ===== */}
      {/* Mobile top bar: logo left, hamburger right */}
      <div className="fixed top-0 left-0 right-0 z-50 sm:hidden flex items-center justify-between px-5 h-14 bg-bg-primary/90 backdrop-blur-lg border-b border-border/50">
        <Link href="/" className="text-text-primary font-bold text-lg tracking-tight">
          Saksham<span className="text-accent">.</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center text-text-primary rounded-lg hover:bg-bg-hover transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile fullscreen menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 sm:hidden bg-bg-primary/98 backdrop-blur-xl pt-14"
          >
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex flex-col h-full px-6 pt-6 pb-8 overflow-y-auto"
            >
              {/* Nav links */}
              <div className="space-y-1 flex-1">
                {mobileNavLinks.map((link) => {
                  const Icon = link.icon
                  const isActive = pathname === link.url || (link.url !== "/" && pathname.startsWith(link.url))
                  return (
                    <Link
                      key={link.name}
                      href={link.url}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-colors ${
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"
                      }`}
                    >
                      <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                      <span className="text-base font-medium">{link.name}</span>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-border mt-6 space-y-3">
                <a
                  href={siteConfig.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-accent text-bg-primary font-semibold text-base transition-all hover:bg-accent-hover"
                >
                  Book a Call
                  <ArrowRight size={18} />
                </a>
                <Link
                  href="/ai-builders-club"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-accent text-accent font-semibold text-base transition-all hover:bg-accent hover:text-bg-primary"
                >
                  Join AI Builders Club
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
