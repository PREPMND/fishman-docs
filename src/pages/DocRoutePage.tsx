import { useEffect, useMemo, type ReactNode } from 'react'
import { useParams } from 'react-router'
import { AppShell } from '@/components/layout/AppShell'
import { useSeo } from '@/hooks/useSeo'
import {
  GettingStartedPage,
  gettingStartedHeadings,
} from '@/content/pages/getting-started'
import {
  InstallationPage,
  installationHeadings,
} from '@/content/pages/installation'
import {
  BackendScannerPage,
  backendScannerHeadings,
} from '@/content/pages/backend-scanner'
import { CollectionsPage, collectionsHeadings } from '@/content/pages/collections'
import { CliPage, cliHeadings } from '@/content/pages/cli'
import { ApiReferencePage, apiReferenceHeadings } from '@/content/pages/api-reference'
import { ChangelogPage, changelogHeadings } from '@/content/pages/changelog'
import { ContributingPage, contributingHeadings } from '@/content/pages/contributing'
import { NotFoundPage } from './NotFoundPage'
import type { TocHeading } from '@/hooks/useActiveHeading'

type DocDef = {
  title: string
  description: string
  headings: TocHeading[]
  Page: () => ReactNode
}

const docs: Record<string, DocDef> = {
  'getting-started': {
    title: 'Getting Started with Fishman',
    description:
      'How to install and run Fishman locally — npm install, tauri dev, first GET/POST requests, and smoke tests for the desktop API IDE.',
    headings: gettingStartedHeadings,
    Page: GettingStartedPage,
  },
  installation: {
    title: 'Install Fishman (Node, Rust, Tauri)',
    description:
      'Fishman installation guide: Node 20+, Rust stable, Ubuntu/Debian WebKit packages, macOS and Windows deps, and production tauri build commands.',
    headings: installationHeadings,
    Page: InstallationPage,
  },
  'backend-scanner': {
    title: 'Fishman Backend Scanner',
    description:
      'Scan backend source into HTTP routes, request bodies, and collections. Supports Express, Fastify, NestJS, Hono, Next.js, and more.',
    headings: backendScannerHeadings,
    Page: BackendScannerPage,
  },
  collections: {
    title: 'Fishman Collections & History',
    description:
      'Organize API requests with nested folders, replay history, and import/export Postman or Fishman collections — local-first SQLite storage.',
    headings: collectionsHeadings,
    Page: CollectionsPage,
  },
  cli: {
    title: 'Fishman CLI (Coming Soon)',
    description:
      'Fishman CLI roadmap for headless collection runs. Until release, use the desktop app workflow for API testing and collection export.',
    headings: cliHeadings,
    Page: CliPage,
  },
  'api-reference': {
    title: 'Fishman API Reference',
    description:
      'Fishman request and response model: methods, headers, JSON bodies, auth placeholders, and environments for local and staging APIs.',
    headings: apiReferenceHeadings,
    Page: ApiReferencePage,
  },
  changelog: {
    title: 'Fishman Changelog',
    description:
      'Fishman release notes and documentation updates. Follow GitHub releases for the open-source desktop API IDE.',
    headings: changelogHeadings,
    Page: ChangelogPage,
  },
  contributing: {
    title: 'Contribute to Fishman',
    description:
      'Contribute to Fishman open source — app development setup, docs PRs, and community guidelines for the Tauri + React API IDE.',
    headings: contributingHeadings,
    Page: ContributingPage,
  },
  environments: {
    title: 'Fishman Environments',
    description:
      'Manage API variables and switch between local, staging, and production configurations in Fishman.',
    headings: environmentsHeadings,
    Page: EnvironmentsPage,
  },
}

export function DocRoutePage() {
  const { slug } = useParams()
  const doc = slug ? docs[slug] : undefined
  const path = slug ? `/${slug}` : '/'
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])
  useSeo(
    doc
      ? {
        title: doc.title,
        description: doc.description,
        path,
        type: 'article',
      }
      : {
        title: 'Page not found',
        description: 'This Fishman Docs page does not exist.',
        path,
        noIndex: true,
      },
  )

  const headings = useMemo(() => doc?.headings ?? [], [doc])

  if (!doc) {
    return <NotFoundPage />
  }

  const { Page } = doc

  return (
    <AppShell headings={headings}>
      <Page />
    </AppShell>
  )
}
