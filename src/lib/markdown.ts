import { marked } from 'marked'

export function parseMarkdown(markdown: string | undefined): string {
  if (!markdown) return ''
  
  try {
    return marked(markdown) as string
  } catch (error) {
    console.error('Error parsing markdown:', error)
    return markdown
  }
}