import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import { TopNav } from './TopNav'
import { Sidebar } from './Sidebar'
import { MobileNav } from './MobileNav'
import { TableOfContents } from './TableOfContents'
import { DocsFooter } from './DocsFooter'
import { PrevNext } from './PrevNext'
import { SearchPalette } from './SearchPalette'
import type { TocHeading } from '@/hooks/useActiveHeading'
import { cn } from '@/lib/cn'

export function AppShell({
  children,
  headings = [],
  showSidebar = true,
  showToc = true,
  showPrevNext = true,
  contentClassName,
}: {
  children: ReactNode
  headings?: TocHeading[]
  showSidebar?: boolean
  showToc?: boolean
  showPrevNext?: boolean
  contentClassName?: string
}) {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const tag = target?.tagName
      const editable =
        tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable
      if (editable) return
      if (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen bg-bg text-body">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <TopNav
        showMobileMenuButton={showSidebar}
        onOpenMobileNav={() => setMobileOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />

      <div
        className={cn(
          'mx-auto grid max-w-[1440px] gap-6 px-4 sm:px-6 lg:gap-10 lg:px-8',
          showSidebar
            ? 'lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_220px]'
            : 'lg:grid-cols-1',
        )}
      >
        {showSidebar ? (
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] overflow-y-auto border-r border-border py-8 pr-4 lg:block">
            <Sidebar />
          </aside>
        ) : null}

        <main
          id="main-content"
          className={cn(
            'min-w-0 py-8 lg:py-10',
            showSidebar && 'lg:px-2',
            contentClassName,
          )}
        >
          {children}
          {showPrevNext ? <PrevNext pathname={location.pathname} /> : null}
          <DocsFooter />
        </main>

        {showSidebar && showToc ? (
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] overflow-y-auto py-8 pl-2 xl:block">
            <TableOfContents headings={headings} />
          </aside>
        ) : null}
      </div>
    </div>
  )
}
