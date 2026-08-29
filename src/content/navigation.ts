export type NavItem = {
  title: string
  href: string
  description: string
  section?: string
}

/** Ordered docs tree — single source of truth for sidebar, prev/next, and home cards. */
export const docsNavigation: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/getting-started',
    description: 'Install, run, and ship your first API workflow locally.',
    section: 'Guides',
  },
  {
    title: 'Installation',
    href: '/installation',
    description: 'Prerequisites and production build commands.',
    section: 'Guides',
  },
  {
    title: 'Backend Scanner',
    href: '/backend-scanner',
    description: 'Scan backend code into routes, request bodies, and collections.',
    section: 'Features',
  },
  {
    title: 'Collections',
    href: '/collections',
    description: 'Organize requests with nested folders and fast replayable history.',
    section: 'Features',
  },
  {
    title: 'CLI',
    href: '/cli',
    description: 'Coming soon — until then, use the app workflow.',
    section: 'Features',
  },
  {
    title: 'API Reference',
    href: '/api-reference',
    description: 'Endpoints and request/response details.',
    section: 'Reference',
  },
  {
    title: 'Changelog',
    href: '/changelog',
    description: 'Release notes and product updates.',
    section: 'Project',
  },
  {
    title: 'Contributing',
    href: '/contributing',
    description: 'How to contribute to Fishman open source.',
    section: 'Project',
  },
  {
    title: 'Environments',
    href: '/environments',
    description:
      'Manage variables and switch between local, staging, and production API configurations.',
    section: 'Features',
  },
  
]

export const marketingLinks = [
  { title: 'Why', href: 'https://nkrider7.github.io/fishman/#why' },
  { title: 'Features', href: 'https://nkrider7.github.io/fishman/#features' },
  { title: 'Docs', href: '/', internal: true },
  { title: 'Changelog', href: '/changelog', internal: true },
  { title: 'Roadmap', href: 'https://nkrider7.github.io/fishman/#roadmap' },
  { title: 'Download', href: 'https://nkrider7.github.io/fishman/#download' },
] as const

export const GITHUB_URL = 'https://github.com/nkrider7/fishman'
export const MARKETING_URL = 'https://nkrider7.github.io/fishman'
export const DOCS_REPO_URL = 'https://github.com/nkrider7/fishman-docs'

export function getNavItem(pathname: string): NavItem | undefined {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return docsNavigation.find((item) => item.href === normalized)
}

export function getPrevNext(pathname: string): {
  prev?: NavItem
  next?: NavItem
} {
  const normalized = pathname.replace(/\/$/, '') || '/'
  const index = docsNavigation.findIndex((item) => item.href === normalized)
  if (index === -1) return {}
  return {
    prev: docsNavigation[index - 1],
    next: docsNavigation[index + 1],
  }
}

export function getSections(): { section: string; items: NavItem[] }[] {
  const map = new Map<string, NavItem[]>()
  for (const item of docsNavigation) {
    const section = item.section ?? 'Docs'
    const list = map.get(section) ?? []
    list.push(item)
    map.set(section, list)
  }
  return Array.from(map.entries()).map(([section, items]) => ({ section, items }))
}
