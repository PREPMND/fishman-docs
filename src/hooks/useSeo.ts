import { useEffect } from 'react'
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  pageTitle,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  type SeoInput,
} from '@/lib/seo'

function upsertMeta(
  selector: string,
  attrs: Record<string, string>,
  content?: string,
) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
    document.head.appendChild(el)
  }
  if (content !== undefined) el.setAttribute('content', content)
  return el
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  return el
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function useSeo({
  title,
  description,
  path = '/',
  type = 'website',
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
}: SeoInput) {
  useEffect(() => {
    const fullTitle = pageTitle(title)
    const url = absoluteUrl(path)
    const prevTitle = document.title

    document.title = fullTitle

    upsertMeta('meta[name="description"]', { name: 'description' }, description)
    upsertMeta('meta[name="keywords"]', { name: 'keywords' }, SEO_KEYWORDS)
    upsertMeta('meta[name="author"]', { name: 'author' }, 'Fishman')
    upsertMeta(
      'meta[name="robots"]',
      { name: 'robots' },
      noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    )
    upsertMeta(
      'meta[name="googlebot"]',
      { name: 'googlebot' },
      noIndex ? 'noindex, nofollow' : 'index, follow',
    )

    upsertLink('canonical', url)

    // Open Graph
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, type)
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, SITE_NAME)
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, fullTitle)
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description)
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, url)
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, image)
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, 'en_US')

    // Twitter
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, fullTitle)
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, image)

    const software = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Fishman',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Windows, macOS, Linux',
      description:
        'Open-source native desktop API IDE and REST client. Local-first collections, Backend Scanner, built with Tauri v2 + React.',
      url: 'https://nkrider7.github.io/fishman',
      downloadUrl: 'https://github.com/nkrider7/fishman/releases',
      softwareVersion: 'latest',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Person',
        name: 'nkrider7',
        url: 'https://github.com/nkrider7',
      },
    }

    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description:
        'Official Fishman documentation — Getting Started, Installation, Backend Scanner, Collections, and API Reference.',
      publisher: {
        '@type': 'Organization',
        name: 'Fishman',
        url: 'https://github.com/nkrider7/fishman',
        logo: DEFAULT_OG_IMAGE,
      },
    }

    const webpage = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'TechArticle' : 'WebPage',
      name: fullTitle,
      headline: fullTitle,
      description,
      url,
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
      about: {
        '@type': 'SoftwareApplication',
        name: 'Fishman',
      },
    }

    upsertJsonLd('fishman-ld-software', software)
    upsertJsonLd('fishman-ld-website', website)
    upsertJsonLd('fishman-ld-webpage', webpage)

    return () => {
      document.title = prevTitle
    }
  }, [title, description, path, type, noIndex, image])
}

/** @deprecated Prefer useSeo — kept for gradual migration */
export function useDocumentTitle(title: string, description?: string) {
  useSeo({
    title,
    description:
      description ??
      'Fishman documentation — native desktop API IDE guides and reference.',
    path: typeof window !== 'undefined' ? window.location.pathname : '/',
  })
}
