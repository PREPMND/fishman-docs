import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { HomeRoute, RedirectHandler } from './App'
import { DocRoutePage } from './pages/DocRoutePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ThemeProvider } from './hooks/useTheme'
import './styles/index.css'

const router = createBrowserRouter(
  [
    {
      element: <RedirectHandler />,
      children: [
        { path: '/', element: <HomeRoute /> },
        { path: '/:slug', element: <DocRoutePage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
