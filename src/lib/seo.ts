export const SITE_URL = 'https://nkrider7.github.io/fishman-docs'
export const SITE_NAME = 'Fishman Docs'
export const SITE_TAGLINE =
  'Official documentation for Fishman — open-source native desktop API IDE and REST client. Install, Backend Scanner, collections, and API workflows.'

export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo.png`

export const SEO_KEYWORDS = [
  'Fishman',
  'Fishman docs',
  'API client',
  'REST client',
  'desktop API IDE',
  'Tauri API client',
  'Postman alternative',
  'Backend Scanner',
  'API collections',
  'local-first API tool',
].join(', ')

export function absoluteUrl(path = '/'): string {
  const normalized = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export type SeoInput = {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  image?: string
}

export function pageTitle(title: string): string {
  if (title === SITE_NAME || title.includes('Fishman Docs')) return title
  if (title.includes('Fishman')) return title
  return `${title} · ${SITE_NAME}`
}
