import { Link } from 'react-router'
import {
  ArrowRight,
  Database,
  ExternalLink,
  ScanSearch,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'
import { GITHUB_URL, MARKETING_URL } from '@/content/navigation'
import { getDocIcon } from '@/lib/icons'
import { useSeo } from '@/hooks/useSeo'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/seo'
import { cn } from '@/lib/cn'

const previewCards = [
  {
    title: 'Getting Started',
    description: 'Install, run, and ship your first API workflow locally.',
    href: '/getting-started',
  },
  {
    title: 'Backend Scanner',
    description: 'Scan backend code into routes, request bodies, and collections.',
    href: '/backend-scanner',
  },
  {
    title: 'Collections',
    description: 'Organize requests with nested folders and fast replayable history.',
    href: '/collections',
  },
  {
    title: 'CLI',
    description: 'Coming soon — until then, use the app workflow.',
    href: '/cli',
  },
  {
    title: 'API Reference',
    description: 'Endpoints and request/response details.',
    href: '/api-reference',
  },
  {
    title: 'Installation',
    description: 'Prerequisites and production build commands.',
    href: '/installation',
  },
] as const

const highlights: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Zap,
    title: 'Native speed',
    body: 'Tauri + React desktop client — fast sends, low overhead.',
  },
  {
    icon: Database,
    title: 'Local-first',
    body: 'Collections, environments, and history live in SQLite on your machine.',
  },
  {
    icon: ScanSearch,
    title: 'Source → routes',
    body: 'Backend Scanner turns Express, Nest, Hono, and more into collections.',
  },
]

function DocCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  const Icon = getDocIcon(href)

  return (
    <Link
      to={href}
      className={cn(
        'group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 sm:p-7',
        'transition-[border-color,background-color,transform] duration-200',
        'hover:-translate-y-0.5 hover:border-[rgba(254,159,2,0.45)] hover:bg-elevated/50',
        'motion-reduce:hover:translate-y-0',
      )}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-elevated text-primary transition-colors group-hover:border-[rgba(254,159,2,0.35)] group-hover:bg-primary-muted">
          <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden />
        </span>
        <ArrowRight
          className="size-4 -translate-x-1 text-muted-soft opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100"
          strokeWidth={1.75}
          aria-hidden
        />
      </div>
      <h3 className="text-base font-bold tracking-tight text-ink transition-colors group-hover:text-primary">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-soft opacity-80 transition-opacity group-hover:opacity-100">
        Open guide
        <ArrowRight className="size-3.5" strokeWidth={2} aria-hidden />
      </span>
    </Link>
  )
}

export function HomePage() {
  useSeo({
    title: `${SITE_NAME} — Native Desktop API IDE Documentation`,
    description: SITE_TAGLINE,
    path: '/',
    type: 'website',
  })

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-12">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: 'rgba(254, 159, 2, 0.14)' }}
          aria-hidden
        />
        {/* <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden
        /> */}

        <div className="relative max-w-3xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-primary-soft">
            Fishman Docs
          </p>
          <h1 className="mt-4 text-[2.35rem] font-bold leading-[1.05] tracking-[-0.045em] text-ink sm:text-5xl sm:leading-[1.02] md:text-[3.25rem]">
            Build API workflows
            <br className="hidden sm:block" /> without the noise
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
            Native desktop API IDE — speed, privacy, flow. Local-first collections via SQLite.
            Built with Tauri v2 + React.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/getting-started"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
            >
              Get started
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-[rgba(254,159,2,0.85)] px-5 text-sm font-semibold text-[rgba(254,159,2,0.95)] transition-colors hover:bg-primary-muted"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={MARKETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-semibold text-body transition-colors hover:border-border-strong hover:text-ink"
            >
              Marketing site
              <ExternalLink className="size-3.5" strokeWidth={1.75} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        className="grid gap-4 border-b border-border pb-14 sm:grid-cols-3 sm:gap-6"
        aria-label="What Fishman is built for"
      >
        {highlights.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex gap-3.5 sm:block sm:gap-0">
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-primary sm:mb-4">
              <Icon className="size-4" strokeWidth={1.75} aria-hidden />
            </span>
            <div>
              <h2 className="text-sm font-semibold text-ink">{title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Documentation Preview */}
      <section className="py-14 sm:py-16" aria-labelledby="docs-preview-heading">
        <div className="mb-9 flex flex-col gap-3 sm:mb-11 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-soft">
              Guides
            </p>
            <h2
              id="docs-preview-heading"
              className="mt-2 text-3xl font-bold tracking-[-0.035em] text-ink sm:text-[2.35rem]"
            >
              Documentation Preview
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted lg:text-right">
            Quick entry points into setup, scanning, collections, and the workflows you&apos;ll use
            daily.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {previewCards.map((card) => (
            <DocCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </div>
  )
}
