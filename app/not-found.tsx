import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <Container className="text-center max-w-xl">
        <div className="text-8xl font-black text-accent/20 mb-4">404</div>
        <h1 className="text-h1 text-text-primary mb-4">Page not found</h1>
        <p className="text-text-secondary mb-8">
          This page doesn&apos;t exist. It might have been moved, or you may have
          followed a broken link.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/">Go Home</Button>
          <Button href="/blog" variant="outlined">Read the Blog</Button>
        </div>
      </Container>
    </section>
  )
}
