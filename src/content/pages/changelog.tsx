import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Callout } from '@/components/ui/Callout'

export const changelogHeadings = [
  { id: 'where', text: 'Where releases live', level: 2 as const },
  { id: 'docs', text: 'Docs site', level: 2 as const },
  { id: 'follow', text: 'Stay up to date', level: 2 as const },
]

export function ChangelogPage() {
  return (
    <DocPage
      title="Changelog"
      description="Release notes for Fishman and this documentation site."
      icon={getDocIcon('/changelog')}
    >
      <Heading id="where">Where releases live</Heading>
      <p>
        Product changelog and tagged releases are published on the main Fishman repository:
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/nkrider7/fishman/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/nkrider7/fishman/releases
          </a>
        </li>
        <li>
          Marketing highlights:{' '}
          <a
            href="https://nkrider7.github.io/fishman/#changelog"
            target="_blank"
            rel="noopener noreferrer"
          >
            nkrider7.github.io/fishman
          </a>
        </li>
      </ul>

      <Heading id="docs">Docs site</Heading>
      <ul>
        <li>
          <strong>2026-07</strong> — Initial standalone Fishman Docs site (GitHub Pages under{' '}
          <code>/fishman-docs/</code>) with Getting Started, Installation, Backend Scanner,
          Collections, CLI, and API Reference.
        </li>
      </ul>

      <Heading id="follow">Stay up to date</Heading>
      <Callout tone="tip">
        Watch{' '}
        <a href="https://github.com/nkrider7/fishman" target="_blank" rel="noopener noreferrer">
          nkrider7/fishman
        </a>{' '}
        for release notifications. Docs updates ship from{' '}
        <a href="https://github.com/nkrider7/fishman-docs" target="_blank" rel="noopener noreferrer">
          nkrider7/fishman-docs
        </a>
        .
      </Callout>
    </DocPage>
  )
}
