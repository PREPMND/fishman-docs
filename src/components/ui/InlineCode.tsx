import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function InlineCode({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <code
      className={cn(
        'rounded-sm border border-border bg-elevated px-1.5 py-0.5 font-mono text-[0.85em] text-ink',
        className,
      )}
    >
      {children}
    </code>
  )
}
