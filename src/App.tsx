import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { AppShell } from '@/components/layout/AppShell'
import { HomePage } from '@/pages/HomePage'

/** Handles GitHub Pages 404.html redirect query (`?redirect=/path`). */
export function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const redirect = params.get('redirect')
    if (redirect && redirect.startsWith('/') && !redirect.startsWith('//')) {
      navigate(redirect + location.hash, { replace: true })
    }
  }, [location.search, location.hash, navigate])

  return <Outlet />
}

export function HomeRoute() {
  return (
    <AppShell
      showSidebar={false}
      showToc={false}
      showPrevNext={false}
      contentClassName="!py-0 sm:!py-2"
    >
      <HomePage />
    </AppShell>
  )
}
