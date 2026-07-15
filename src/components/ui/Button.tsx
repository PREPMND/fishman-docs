import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'ghost' | 'outline' | 'soft'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-active border border-transparent shadow-none',
  soft: 'bg-primary-muted text-primary-soft border border-transparent hover:bg-primary-muted/80',
  ghost: 'bg-transparent text-body hover:text-ink hover:bg-elevated border border-transparent',
  outline:
    'bg-transparent text-primary-soft border border-primary-soft hover:bg-primary-muted',
}

export function Button({
  variant = 'primary',
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex h-10 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
