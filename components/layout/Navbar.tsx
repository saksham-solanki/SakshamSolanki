'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="text-text-primary font-bold text-xl tracking-tight">
          Saksham<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href={siteConfig.links.calendly} size="sm" external>
            Book a Call
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-text-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-bg-primary border-t border-border">
          <div className="px-5 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base font-medium ${
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button href={siteConfig.links.calendly} size="md" external className="w-full">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
