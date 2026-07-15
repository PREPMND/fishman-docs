import { Link, useLocation } from 'react-router'
import { Menu, Search } from 'lucide-react'
import { GITHUB_URL, marketingLinks } from '@/content/navigation'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { GitHubIcon } from '@/components/ui/GitHubIcon'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/cn'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

type TopNavProps = {
  onOpenSearch?: () => void
  onOpenMobileNav?: () => void
  showMobileMenuButton?: boolean
}

export function TopNav({ onOpenSearch, onOpenMobileNav, showMobileMenuButton }: TopNavProps) {
  const { isDark } = useTheme()
  const location = useLocation()
  // Dark: white wordmark · Light: dark wordmark (txtlogodark.png)
  const logoSrc = asset(isDark ? 'assets/txtlogo.png' : 'assets/txtlogodark.png')

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          {showMobileMenuButton ? (
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-ink lg:hidden"
              aria-label="Open documentation menu"
              onClick={onOpenMobileNav}
            >
              <Menu className="size-4" strokeWidth={1.75} aria-hidden />
            </button>
          ) : null}

          <Link
            to="/"
            className="group flex min-w-0 items-center gap-2.5"
            aria-label="Fishman Docs home"
          >
            <img
              src={logoSrc}
              alt="Fishman"
              width={148}
              height={36}
              className="h-8 w-auto max-w-[148px] object-contain object-left transition-opacity group-hover:opacity-90 sm:h-9 sm:max-w-[168px]"
            />
            <span className="hidden rounded-pill border border-border bg-elevated px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted sm:inline-flex">
              Docs
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {marketingLinks.map((link) => {
            const external = link.href.startsWith('http')
            const isActive =
              'internal' in link && link.internal && link.href === '/'
                ? location.pathname === '/' || location.pathname === ''
                : 'internal' in link &&
                  link.internal &&
                  (location.pathname === link.href ||
                    location.pathname.startsWith(`${link.href}/`))

            const className = cn(
              'rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors',
              isActive ? 'text-primary' : 'text-muted hover:text-ink',
            )

            if ('internal' in link && link.internal) {
              return (
                <Link key={link.title} to={link.href} className={className}>
                  {link.title}
                </Link>
              )
            }

            return (
              <a
                key={link.title}
                href={link.href}
                className={className}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.title}
              </a>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          {onOpenSearch ? (
            <button
              type="button"
              onClick={onOpenSearch}
              className="hidden h-9 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm text-muted transition-colors hover:border-border-strong hover:text-ink md:inline-flex"
              aria-label="Search docs"
            >
              <Search className="size-3.5" strokeWidth={1.75} aria-hidden />
              <span>Search</span>
              <kbd className="rounded-sm border border-border bg-elevated px-1.5 font-mono text-[10px] text-muted-soft">
                /
              </kbd>
            </button>
          ) : null}

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[rgba(254,159,2,0.85)] px-3.5 text-sm font-semibold text-[rgba(254,159,2,0.95)] transition-colors hover:bg-primary-muted"
          >
            <GitHubIcon className="size-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
