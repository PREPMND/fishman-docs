import type { ReactNode } from 'react'

export function Steps({ children }: { children: ReactNode }) {
  return (
    <ol className="docs-steps my-6 list-none space-y-4 p-0 [counter-reset:docs-step]">
      {children}
    </ol>
  )
}

export function Step({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <li className="relative rounded-lg border border-border bg-card/50 p-4 pl-14 [counter-increment:docs-step] sm:p-5 sm:pl-14">
      <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-primary-muted font-mono text-xs font-bold text-primary before:content-[counter(docs-step)]" />
      <h3 className="!mt-0 text-base font-semibold tracking-tight text-ink">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-body [&_.my-4]:my-3 [&_.my-5]:my-3">
        {children}
      </div>
    </li>
  )
}
