import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Callout } from '@/components/ui/Callout'
import { InlineCode } from '@/components/ui/InlineCode'
import { Link } from 'react-router'

export const collectionsHeadings = [
  { id: 'overview', text: 'Overview', level: 2 as const },
  { id: 'folders', text: 'Nested folders', level: 2 as const },
  { id: 'history', text: 'History and replay', level: 2 as const },
  { id: 'organize', text: 'Organize workflows', level: 2 as const },
  { id: 'import-export', text: 'Import / export', level: 2 as const },
  { id: 'local-first', text: 'Local-first storage', level: 2 as const },
]

export function CollectionsPage() {
  return (
    <DocPage
      title="Collections"
      description="Organize requests with nested folders and fast replayable history — all local in SQLite."
      icon={getDocIcon('/collections')}
    >
      <Heading id="overview">Overview</Heading>
      <p>
        Collections group related HTTP requests so you can build, save, and replay API workflows
        without leaving the desktop app. Folders nest arbitrarily; each request keeps method, URL,
        headers, body, and environment bindings.
      </p>

      <Heading id="folders">Nested folders</Heading>
      <ul>
        <li>Create a collection, then add folders for domains or services.</li>
        <li>Nest folders further (e.g. <InlineCode>Billing → Invoices → Webhooks</InlineCode>).</li>
        <li>Drag or move requests between folders as your API surface grows.</li>
      </ul>
      <Callout tone="tip">
        Mirror your backend package layout when possible — it keeps Backend Scanner output and hand
        authoring aligned.
      </Callout>

      <Heading id="history">History and replay</Heading>
      <p>
        Every send can land in history with status, timing, and response metadata. Reopen a past
        call, tweak a header, and send again — useful for debugging flaky endpoints or comparing
        payloads across environments.
      </p>
      <ul>
        <li>Filter history by collection or status when hunting failures.</li>
        <li>Promote a successful history entry into a saved request when it becomes a fixture.</li>
      </ul>

      <Heading id="organize">Organize workflows</Heading>
      <ol>
        <li>
          <strong>Bootstrap</strong> — scan or import to seed routes.
        </li>
        <li>
          <strong>Stabilize</strong> — attach environments and auth once per collection.
        </li>
        <li>
          <strong>Iterate</strong> — use history to refine bodies and asserts mentally, then save.
        </li>
        <li>
          <strong>Share</strong> — export Fishman or Postman JSON for teammates.
        </li>
      </ol>

      <Heading id="import-export">Import / export</Heading>
      <p>
        Fishman supports Postman collections and native Fishman collection formats. Use import to
        bring existing API suites; use export for backups or CI fixtures once{' '}
        <Link to="/cli">CLI</Link> automation lands.
      </p>

      <Heading id="local-first">Local-first storage</Heading>
      <p>
        Collections, environments, and history persist in a local SQLite database on your machine.
        Nothing is synced to Fishman servers — privacy by default. Back up the app data directory if
        you need machine portability before cloud sync exists.
      </p>
      <Callout tone="note">
        Treat exported collection files like source code: they may contain URLs and header names, but
        keep secrets in environments / local OS keychains — not committed JSON.
      </Callout>
    </DocPage>
  )
}
