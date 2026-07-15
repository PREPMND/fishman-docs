import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

type CardProps = {
  title: string
  description: string
  href?: string
  external?: boolean
  icon?: LucideIcon
  className?: string
  children?: ReactNode
}

export function Card({
  title,
  description,
  href,
  external,
  icon: Icon,
  className,
  children,
}: CardProps) {
  const content = (
    <>
      <div className="mb-4 flex items-center justify-between gap-3">
        {Icon ? (
          <span className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-elevated text-primary transition-colors group-hover:border-primary/35 group-hover:bg-primary-muted">
            <Icon className="size-4" strokeWidth={1.75} aria-hidden />
          </span>
        ) : (
          <span className="h-px w-8 bg-primary-soft/80" aria-hidden="true" />
        )}
        {href ? (
          <ArrowUpRight
            className="size-4 text-muted-soft opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100"
            strokeWidth={1.75}
            aria-hidden
          />
        ) : null}
      </div>
      <h3 className="text-[15px] font-bold tracking-tight text-ink transition-colors group-hover:text-primary">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
      {children}
    </>
  )

  const classes = cn(
    'group block rounded-lg border border-border bg-card p-6 sm:p-7 transition-[border-color,background-color,transform] duration-200',
    href &&
      'hover:-translate-y-0.5 hover:border-primary/40 hover:bg-elevated/40 focus-visible:border-primary motion-reduce:hover:translate-y-0',
    className,
  )

  if (href && external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    )
  }

  return <div className={classes}>{content}</div>
}
