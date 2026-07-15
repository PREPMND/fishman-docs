import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Callout } from '@/components/ui/Callout'
import { Badge } from '@/components/ui/Badge'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Link } from 'react-router'

export const cliHeadings = [
  { id: 'status', text: 'Status', level: 2 as const },
  { id: 'roadmap', text: 'Roadmap', level: 2 as const },
  { id: 'interim', text: 'Interim GUI workflow', level: 2 as const },
  { id: 'planned', text: 'Planned commands', level: 2 as const },
]

export function CliPage() {
  return (
    <DocPage
      title="CLI"
      description="Command-line automation for Fishman is coming soon. Until then, use the desktop app."
      icon={getDocIcon('/cli')}
    >
      <div className="mb-2">
        <Badge className="border-warning/40 text-warning">Coming soon</Badge>
      </div>

      <Heading id="status">Status</Heading>
      <p>
        A first-party Fishman CLI is on the roadmap. There is no published{' '}
        <code>fishman</code> npm binary yet for scripting collections in CI. This page documents
        what to expect and how to work in the meantime.
      </p>
      <Callout tone="warning">
        Do not rely on unofficial wrappers that claim Fishman CLI compatibility — stick to the
        official app and repo releases.
      </Callout>

      <Heading id="roadmap">Roadmap</Heading>
      <ul>
        <li>Run saved requests / collections headlessly</li>
        <li>Import / export collections from scripts</li>
        <li>Environment selection via flags</li>
        <li>Machine-readable exit codes for CI</li>
      </ul>
      <p>
        Track issues and discussions on{' '}
        <a href="https://github.com/nkrider7/fishman" target="_blank" rel="noopener noreferrer">
          github.com/nkrider7/fishman
        </a>
        .
      </p>

      <Heading id="interim">Interim GUI workflow</Heading>
      <ol>
        <li>
          Install and run via <Link to="/getting-started">Getting Started</Link> (
          <code>npm run tauri dev</code>).
        </li>
        <li>
          Build collections with <Link to="/backend-scanner">Backend Scanner</Link> or manual
          authoring.
        </li>
        <li>Replay suites from history before shipping a backend change.</li>
        <li>Export Postman / Fishman JSON if another tool needs the same fixtures.</li>
      </ol>
      <CodeBlock
        language="bash"
        code={`npm install
npm run tauri dev
# Build collections in the GUI, then export as needed`}
      />

      <Heading id="planned">Planned commands</Heading>
      <p>Illustrative — not available yet:</p>
      <CodeBlock
        language="bash"
        code={`# Planned shape (subject to change)
fishman run ./collections/auth.json --env staging
fishman import ./postman_collection.json
fishman export ./out --format fishman`}
      />
      <Callout tone="note">
        Prefer starring / watching the main repo for releases rather than pinning unofficial CLI
        package names.
      </Callout>
    </DocPage>
  )
}
