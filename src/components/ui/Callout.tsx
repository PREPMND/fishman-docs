import type { ReactNode } from 'react'
import {
  AlertTriangle,
  Info,
  Lightbulb,
  OctagonAlert,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/cn'

type CalloutTone = 'note' | 'tip' | 'warning' | 'danger'

const styles: Record<
  CalloutTone,
  { label: string; className: string; iconClass: string; Icon: LucideIcon }
> = {
  note: {
    label: 'Note',
    className: 'border-info/40 bg-info/5 text-body',
    iconClass: 'text-info',
    Icon: Info,
  },
  tip: {
    label: 'Tip',
    className: 'border-success/40 bg-success/5 text-body',
    iconClass: 'text-success',
    Icon: Lightbulb,
  },
  warning: {
    label: 'Warning',
    className: 'border-warning/40 bg-warning/5 text-body',
    iconClass: 'text-warning',
    Icon: AlertTriangle,
  },
  danger: {
    label: 'Danger',
    className: 'border-danger/40 bg-danger/5 text-body',
    iconClass: 'text-danger',
    Icon: OctagonAlert,
  },
}

export function Callout({
  tone = 'note',
  title,
  children,
  className,
}: {
  tone?: CalloutTone
  title?: string
  children: ReactNode
  className?: string
}) {
  const config = styles[tone]
  const Icon = config.Icon

  return (
    <aside
      className={cn(
        'my-6 flex gap-3 rounded-lg border px-4 py-3.5 text-sm leading-relaxed',
        config.className,
        className,
      )}
      role="note"
    >
      <Icon className={cn('mt-0.5 size-4 shrink-0', config.iconClass)} strokeWidth={1.75} aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="mb-1 font-semibold text-ink">{title ?? config.label}</p>
        <div className="text-body [&_a]:text-primary-soft [&_a]:underline [&_code]:font-mono [&_code]:text-[0.85em]">
          {children}
        </div>
      </div>
    </aside>
  )
}
