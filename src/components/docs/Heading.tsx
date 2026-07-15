import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function Heading({
  id,
  level = 2,
  children,
  className,
}: {
  id: string
  level?: 2 | 3
  children: ReactNode
  className?: string
}) {
  const Tag = level === 2 ? 'h2' : 'h3'

  return (
    <Tag id={id} className={cn('group scroll-mt-24', className)}>
      <a
        href={`#${id}`}
        className="inline-flex items-baseline gap-2 no-underline transition-colors hover:text-primary"
      >
        <span>{children}</span>
        <span className="text-sm font-normal text-primary-soft opacity-0 transition-opacity group-hover:opacity-100">
          #
        </span>
      </a>
    </Tag>
  )
}
