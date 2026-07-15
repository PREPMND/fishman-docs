import type { LucideIcon } from 'lucide-react'

export function DocHeader({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description?: string
  icon?: LucideIcon
}) {
  return (
    <header className="mb-10 border-b border-border pb-8">
      <div className="mb-5 flex items-center gap-3">
        {Icon ? (
          <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-elevated text-primary">
            <Icon className="size-5" strokeWidth={1.75} aria-hidden />
          </span>
        ) : (
          <span className="h-px w-10 bg-primary-soft" aria-hidden="true" />
        )}
      </div>
      <h1 className="text-3xl font-bold leading-[1.15] tracking-[-0.035em] text-ink sm:text-[2.5rem]">
        {title}
      </h1>
      {description ? (
        <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-muted">{description}</p>
      ) : null}
    </header>
  )
}
