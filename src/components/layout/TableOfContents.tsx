import { ListTree } from 'lucide-react'
import { useActiveHeading, type TocHeading } from '@/hooks/useActiveHeading'
import { cn } from '@/lib/cn'

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const activeId = useActiveHeading(headings)

  if (!headings.length) return null

  return (
    <nav aria-label="On this page" className="space-y-3">
      <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-soft">
        <ListTree className="size-3.5" strokeWidth={1.75} aria-hidden />
        On this page
      </p>
      <ul className="space-y-0.5 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                'block border-l-2 py-1.5 text-[13px] leading-snug transition-colors',
                heading.level === 3 ? 'pl-5' : 'pl-3',
                activeId === heading.id
                  ? 'border-primary text-primary'
                  : '-ml-px border-transparent text-muted hover:text-ink',
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
