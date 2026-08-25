import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { CornerDownLeft, FileText, Search } from 'lucide-react'
import { docsNavigation } from '@/content/navigation'
import { getDocIcon } from '@/lib/icons'
import { Kbd } from '@/components/ui/Kbd'
import { cn } from '@/lib/cn'

type SearchHit = {
  title: string
  href: string
  description: string
}

export function SearchPalette({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return docsNavigation as SearchHit[]
    return docsNavigation.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.section?.toLowerCase().includes(q),
    )
  }, [query])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setActive(0)
    const t = window.setTimeout(() => inputRef.current?.focus(), 10)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  function go(href: string) {
    navigate(href)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close search"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-[12vh] w-[min(36rem,92vw)] overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="size-4 shrink-0 text-muted" strokeWidth={1.75} aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActive(0)
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)))
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setActive((i) => Math.max(i - 1, 0))
              } else if (e.key === 'Enter' && results[active]) {
                e.preventDefault()
                go(results[active].href)
              }
            }}
            placeholder="Search docs…"
            className="h-12  w-full bg-transparent text-sm text-ink outline-none focus-visible:outline-none placeholder:text-muted"
            aria-label="Search documentation"
          />
          <Kbd>esc</Kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
          {results.length === 0 ? (
            <li className="flex flex-col items-center gap-2 px-3 py-8 text-center text-sm text-muted">
              <FileText className="size-5 text-muted-soft" strokeWidth={1.5} aria-hidden />
              No matches
            </li>
          ) : (
            results.map((item, index) => {
              const Icon = getDocIcon(item.href)
              return (
                <li key={item.href} role="option" aria-selected={index === active}>
                  <button
                    type="button"
                    className={cn(
                      'flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors',
                      index === active ? 'bg-elevated' : 'hover:bg-elevated/60',
                    )}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => go(item.href)}
                  >
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-card text-muted">
                      <Icon className="size-3.5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-ink">{item.title}</span>
                      <span className="block truncate text-xs text-muted">{item.description}</span>
                    </span>
                    {index === active ? (
                      <CornerDownLeft className="size-3.5 shrink-0 text-muted-soft" aria-hidden />
                    ) : null}
                  </button>
                </li>
              )
            })
          )}
        </ul>
      </div>
    </div>
  )
}
