import { Link } from 'react-router'
import { FileQuestion, Home } from 'lucide-react'
import { AppShell } from '@/components/layout/AppShell'
import { useSeo } from '@/hooks/useSeo'

export function NotFoundPage() {
  useSeo({
    title: 'Page not found',
    description: 'This Fishman Docs page does not exist. Browse Getting Started or search the docs.',
    path: typeof window !== 'undefined' ? window.location.pathname : '/404',
    noIndex: true,
  })

  return (
    <AppShell showSidebar showToc={false} showPrevNext={false}>
      <div className="mx-auto max-w-lg py-16 text-center">
        <span className="mx-auto mb-5 inline-flex size-12 items-center justify-center rounded-lg border border-border bg-elevated text-primary">
          <FileQuestion className="size-6" strokeWidth={1.5} aria-hidden />
        </span>
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">Page not found</h1>
        <p className="mt-3 text-muted">
          That docs path does not exist. Try the index or search with{' '}
          <kbd className="rounded-sm border border-border bg-elevated px-1.5 font-mono text-xs">/</kbd>.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
        >
          <Home className="size-4" strokeWidth={1.75} aria-hidden />
          Back to docs home
        </Link>
      </div>
    </AppShell>
  )
}
