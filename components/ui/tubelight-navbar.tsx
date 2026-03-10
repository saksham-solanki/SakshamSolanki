"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface DropdownService {
  name: string
  url: string
  icon?: LucideIcon
}

export interface DropdownGroup {
  category: string
  url: string
  icon?: LucideIcon
  services: DropdownService[]
}

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  megaMenu?: DropdownGroup[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(() => {
    const match = items.find(
      (item) => pathname === item.url || pathname.startsWith(item.url + "/"),
    )
    return match ? match.name : items[0].name
  })
  const [isMobile, setIsMobile] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const match = items.find(
      (item) => pathname === item.url || pathname.startsWith(item.url + "/"),
    )
    if (match) setActiveTab(match.name)
  }, [pathname, items])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 250)
  }

  const lampEffect = (
    <motion.div
      layoutId="lamp"
      className="absolute inset-0 w-full bg-accent/5 rounded-full -z-10"
      initial={false}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full">
        <div className="absolute w-12 h-6 bg-accent/20 rounded-full blur-md -top-2 -left-2" />
        <div className="absolute w-8 h-6 bg-accent/20 rounded-full blur-md -top-1" />
        <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2" />
      </div>
    </motion.div>
  )

  const itemClasses = (isActive: boolean) =>
    cn(
      "relative cursor-pointer text-sm font-semibold px-3 lg:px-5 py-2 rounded-full transition-colors whitespace-nowrap",
      "text-text-secondary hover:text-accent",
      isActive && "bg-bg-secondary text-accent",
    )

  return (
    <div
      ref={navRef}
      className={cn(
        "hidden sm:fixed sm:block bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
        className,
      )}
    >
      <div className="relative flex items-center gap-1 lg:gap-2 bg-bg-primary/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          const hasMegaMenu = item.megaMenu && item.megaMenu.length > 0

          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => hasMegaMenu && !isMobile && handleMouseEnter(item.name)}
              onMouseLeave={() => hasMegaMenu && !isMobile && handleMouseLeave()}
            >
              {hasMegaMenu ? (
                <button
                  onClick={() => {
                    if (isMobile) {
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    } else {
                      setOpenDropdown(null)
                      setActiveTab(item.name)
                      router.push(item.url)
                    }
                  }}
                  className={itemClasses(isActive)}
                >
                  <span className="hidden lg:inline">{item.name}</span>
                  <span className="lg:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && lampEffect}
                </button>
              ) : (
                <Link
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={itemClasses(isActive)}
                >
                  <span className="hidden lg:inline">{item.name}</span>
                  <span className="lg:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && lampEffect}
                </Link>
              )}

              {/* Mega Menu */}
              <AnimatePresence>
                {hasMegaMenu && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: isMobile ? 8 : -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: isMobile ? 8 : -8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      "absolute z-50",
                      isMobile
                        ? "bottom-full mb-3 left-1/2 -translate-x-1/2 w-[90vw] max-w-[360px]"
                        : "top-full mt-3 left-1/2 -translate-x-1/2",
                    )}
                    onMouseEnter={() => !isMobile && handleMouseEnter(item.name)}
                    onMouseLeave={() => !isMobile && handleMouseLeave()}
                  >
                    <div
                      className={cn(
                        "bg-bg-primary/95 border border-border backdrop-blur-xl rounded-card shadow-2xl",
                        isMobile
                          ? "p-3 max-h-[60vh] overflow-y-auto"
                          : "p-4",
                      )}
                    >
                      {/* All Services link */}
                      <Link
                        href={item.url}
                        onClick={() => {
                          setActiveTab(item.name)
                          setOpenDropdown(null)
                        }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-accent text-sm font-semibold hover:bg-bg-hover transition-colors mb-2"
                      >
                        <Icon size={16} />
                        View All Services
                      </Link>
                      <div className="h-px bg-border mb-3" />

                      {/* Categories grid */}
                      <div
                        className={cn(
                          isMobile
                            ? "space-y-4"
                            : "grid grid-cols-3 gap-4",
                          !isMobile && item.megaMenu!.length > 3 && "grid-cols-3",
                        )}
                        style={!isMobile ? { width: `${Math.min(item.megaMenu!.length, 3) * 220 + 32}px` } : undefined}
                      >
                        {item.megaMenu!.map((group) => {
                          const GroupIcon = group.icon
                          return (
                            <div key={group.category}>
                              {/* Category header */}
                              <Link
                                href={group.url}
                                onClick={() => {
                                  setActiveTab(item.name)
                                  setOpenDropdown(null)
                                }}
                                className="flex items-center gap-2 px-2 py-1.5 mb-1 group"
                              >
                                {GroupIcon && (
                                  <GroupIcon size={14} className="text-accent shrink-0" />
                                )}
                                <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider group-hover:text-accent transition-colors">
                                  {group.category}
                                </span>
                              </Link>

                              {/* Services in this category */}
                              <div className="space-y-0.5">
                                {group.services.map((service) => {
                                  const SvcIcon = service.icon
                                  return (
                                    <Link
                                      key={service.name}
                                      href={service.url}
                                      onClick={() => {
                                        setActiveTab(item.name)
                                        setOpenDropdown(null)
                                      }}
                                      className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
                                    >
                                      {SvcIcon && (
                                        <SvcIcon size={14} className="text-accent/60 shrink-0" />
                                      )}
                                      <span className="text-[13px]">{service.name}</span>
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* Consulting CTA */}
                      <div className="h-px bg-border mt-3 mb-2" />
                      <Link
                        href="/solutions"
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-bg-hover transition-colors group"
                      >
                        <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary">
                          Need help choosing?
                        </span>
                        <span className="text-xs font-semibold text-accent">
                          Book a Call &rarr;
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
