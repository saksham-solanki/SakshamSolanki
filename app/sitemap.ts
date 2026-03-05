import { MetadataRoute } from 'next'
import { getBlogPosts, getCaseStudies } from '@/lib/mdx'
import { siteConfig } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts().map(post => ({
    url: `${siteConfig.url}/blog/${post.meta.slug}`,
    lastModified: new Date(post.meta.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const caseStudies = getCaseStudies().map(cs => ({
    url: `${siteConfig.url}/case-studies/${cs.meta.slug}`,
    lastModified: new Date(cs.meta.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticPages = [
    { url: siteConfig.url, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/blog`, priority: 0.9, changeFrequency: 'daily' as const },
    { url: `${siteConfig.url}/ai-builders-club`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/consulting`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/case-studies`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/resources`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/about`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/newsletter`, priority: 0.5, changeFrequency: 'weekly' as const },
  ].map(page => ({
    ...page,
    lastModified: new Date(),
  }))

  return [...staticPages, ...blogPosts, ...caseStudies]
}
