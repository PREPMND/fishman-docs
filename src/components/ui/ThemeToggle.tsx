import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/cn'

export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-full border border-border bg-elevated text-muted transition-colors hover:border-primary/40 hover:text-primary',
        className,
      )}
    >
      {isDark ? (
        <Moon className="size-4" strokeWidth={1.75} aria-hidden />
      ) : (
        <Sun className="size-4" strokeWidth={1.75} aria-hidden />
      )}
    </button>
  )
}
