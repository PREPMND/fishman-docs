import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <kbd
      className={cn(
        'inline-flex min-w-[1.5rem] items-center justify-center rounded-sm border border-border bg-elevated px-1.5 py-0.5 font-mono text-[0.75rem] text-muted',
        className,
      )}
    >
      {children}
    </kbd>
  )
}
