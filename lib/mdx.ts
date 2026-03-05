import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostMeta {
  title: string
  slug: string
  date: string
  category: string
  description: string
  readingTime: string
  featured: boolean
}

export interface Post {
  meta: PostMeta
  content: string
}

function getContentFromDir(dir: string): Post[] {
  const fullPath = path.join(contentDirectory, dir)
  if (!fs.existsSync(fullPath)) return []

  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.mdx'))

  return files.map(filename => {
    const filePath = path.join(fullPath, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      meta: {
        title: data.title || '',
        slug: data.slug || filename.replace('.mdx', ''),
        date: data.date || '',
        category: data.category || '',
        description: data.description || '',
        readingTime: data.readingTime || '5 min',
        featured: data.featured || false,
      },
      content,
    }
  }).sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
}

export function getBlogPosts(): Post[] {
  return getContentFromDir('blog')
}

export function getCaseStudies(): Post[] {
  return getContentFromDir('case-studies')
}

export function getResources(): Post[] {
  return getContentFromDir('resources')
}

export function getPostBySlug(dir: string, slug: string): Post | null {
  const posts = getContentFromDir(dir)
  return posts.find(p => p.meta.slug === slug) || null
}
