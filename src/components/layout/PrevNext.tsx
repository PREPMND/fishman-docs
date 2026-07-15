import { Link } from 'react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getPrevNext } from '@/content/navigation'
import { getDocIcon } from '@/lib/icons'

export function PrevNext({ pathname }: { pathname: string }) {
  const { prev, next } = getPrevNext(pathname)

  if (!prev && !next) return null

  return (
    <nav
      aria-label="Previous and next page"
      className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          to={prev.href}
          className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/35 hover:bg-elevated/40"
        >
          <ArrowLeft
            className="mt-0.5 size-4 shrink-0 text-muted transition-colors group-hover:text-primary"
            strokeWidth={1.75}
            aria-hidden
          />
          <span className="min-w-0">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
              Previous
            </span>
            <span className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-primary">
              {(() => {
                const Icon = getDocIcon(prev.href)
                return <Icon className="size-3.5 shrink-0 text-muted-soft" strokeWidth={1.75} aria-hidden />
              })()}
              {prev.title}
            </span>
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={next.href}
          className="group flex items-start justify-end gap-3 rounded-lg border border-border bg-card p-4 text-right transition-colors hover:border-primary/35 hover:bg-elevated/40"
        >
          <span className="min-w-0">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
              Next
            </span>
            <span className="mt-1.5 flex items-center justify-end gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-primary">
              {(() => {
                const Icon = getDocIcon(next.href)
                return <Icon className="size-3.5 shrink-0 text-muted-soft" strokeWidth={1.75} aria-hidden />
              })()}
              {next.title}
            </span>
          </span>
          <ArrowRight
            className="mt-0.5 size-4 shrink-0 text-muted transition-colors group-hover:text-primary"
            strokeWidth={1.75}
            aria-hidden
          />
        </Link>
      ) : null}
    </nav>
  )
}
