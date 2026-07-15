import { NavLink } from 'react-router'
import { getSections } from '@/content/navigation'
import { getDocIcon } from '@/lib/icons'
import { cn } from '@/lib/cn'

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const sections = getSections()

  return (
    <nav aria-label="Documentation" className="space-y-7">
      {sections.map(({ section, items }) => (
        <div key={section}>
          <p className="mb-2.5 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-soft">
            {section}
          </p>
          <ul className="space-y-0.5">
            {items.map((item) => {
              const Icon = getDocIcon(item.href)
              return (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      cn(
                        'relative flex items-center gap-2.5 rounded-md border-l-2 px-3 py-2 text-[13.5px] font-medium transition-colors',
                        isActive
                          ? 'border-primary bg-primary-muted text-primary'
                          : 'border-transparent text-muted hover:bg-elevated/70 hover:text-ink',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          className={cn('size-4 shrink-0', isActive ? 'text-primary' : 'text-muted-soft')}
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        <span>{item.title}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
