import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { DocHeader } from './DocHeader'

export function DocPage({
  title,
  description,
  icon,
  children,
}: {
  title: string
  description?: string
  icon?: LucideIcon
  children: ReactNode
}) {
  return (
    <article className="docs-prose mx-auto w-full">
      <DocHeader title={title} description={description} icon={icon} />
      {children}
    </article>
  )
}
