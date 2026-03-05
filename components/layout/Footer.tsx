import Link from 'next/link'
import { Linkedin, Twitter, Youtube } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/constants'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-text-primary font-bold text-xl tracking-tight">
              Saksham<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-text-tertiary text-sm max-w-xs">
              AI automation systems architect. Building production-grade AI infrastructure for B2B companies.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-caption uppercase tracking-widest text-text-tertiary mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h4 className="text-caption uppercase tracking-widest text-text-tertiary mb-4">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
            <p className="text-text-tertiary text-sm">
              Weekly AI automation intel.{' '}
              <a
                href={siteConfig.links.newsletter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                Subscribe to the newsletter
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-text-tertiary text-sm">
            &copy; {new Date().getFullYear()} Saksham Solanki. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
