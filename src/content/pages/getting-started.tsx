import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Step, Steps } from '@/components/docs/Steps'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { InlineCode } from '@/components/ui/InlineCode'
import { Link } from 'react-router'

export const gettingStartedHeadings = [
  { id: 'prerequisites', text: 'Prerequisites', level: 2 as const },
  { id: 'clone-and-install', text: 'Clone and install', level: 2 as const },
  { id: 'run-locally', text: 'Run locally', level: 2 as const },
  { id: 'first-request', text: 'Send your first request', level: 2 as const },
  { id: 'smoke-tests', text: 'Smoke tests', level: 2 as const },
  { id: 'production-build', text: 'Production build', level: 2 as const },
  { id: 'next-steps', text: 'Next steps', level: 2 as const },
]

export function GettingStartedPage() {
  return (
    <DocPage
      title="Getting Started"
      description="Install dependencies, run Fishman locally, and ship your first API workflow in minutes."
      icon={getDocIcon('/getting-started')}
    >
      <p>
        Fishman is a native desktop API IDE built with Tauri v2 + React. Collections, environments,
        and history stay local-first in SQLite — no account required to start.
      </p>

      <Heading id="prerequisites">Prerequisites</Heading>
      <ul>
        <li>
          <strong>Node.js 20+</strong> and npm
        </li>
        <li>
          <strong>Rust stable</strong> toolchain (<InlineCode>rustup</InlineCode>)
        </li>
        <li>Platform deps for Tauri (see <Link to="/installation">Installation</Link>)</li>
      </ul>

      <Heading id="clone-and-install">Clone and install</Heading>
      <Steps>
        <Step title="Clone the repository">
          <CodeBlock
            language="bash"
            code={`git clone https://github.com/nkrider7/fishman.git
cd fishman`}
          />
        </Step>
        <Step title="Install JavaScript dependencies">
          <CodeBlock language="bash" code="npm install" />
        </Step>
      </Steps>

      <Heading id="run-locally">Run locally</Heading>
      <p>
        Start the Vite frontend and the Tauri shell together:
      </p>
      <CodeBlock language="bash" code="npm run tauri dev" />
      <Callout tone="tip" title="What you should see">
        The Fishman desktop window opens with an empty (or sample) request editor. The Vite HMR
        server runs in the background for UI changes.
      </Callout>

      <Heading id="first-request">Send your first request</Heading>
      <ol>
        <li>Create a new request in the sidebar.</li>
        <li>
          Set method <InlineCode>GET</InlineCode> and URL{' '}
          <InlineCode>https://httpbin.org/get</InlineCode>.
        </li>
        <li>Hit Send and inspect status, headers, and body.</li>
      </ol>

      <Heading id="smoke-tests">Smoke tests</Heading>
      <p>Quick checks that your install can talk to the network:</p>
      <ul>
        <li>
          <strong>GET</strong> <InlineCode>https://httpbin.org/get</InlineCode> — expect{' '}
          <InlineCode>200</InlineCode> with a JSON body including your query string.
        </li>
        <li>
          <strong>POST</strong> <InlineCode>https://httpbin.org/post</InlineCode> with body{' '}
          <InlineCode>{`{"hello":"world"}`}</InlineCode> — expect the same payload echoed under{' '}
          <InlineCode>json</InlineCode>.
        </li>
      </ul>
      <CodeBlock
        language="json"
        code={`{
  "hello": "world"
}`}
      />
      <p>
        If you have a test script in the repo:
      </p>
      <CodeBlock language="bash" code="npm test" />

      <Heading id="production-build">Production build</Heading>
      <CodeBlock language="bash" code="npm run tauri build" />
      <p>
        Artifacts land under <InlineCode>src-tauri/target/release</InlineCode> (and platform
        installers depending on your OS). Full platform notes are on{' '}
        <Link to="/installation">Installation</Link>.
      </p>

      <Heading id="next-steps">Next steps</Heading>
      <ul>
        <li>
          <Link to="/backend-scanner">Backend Scanner</Link> — discover routes from source
        </li>
        <li>
          <Link to="/collections">Collections</Link> — nest folders and replay history
        </li>
        <li>
          <Link to="/api-reference">API Reference</Link> — requests, auth, environments
        </li>
      </ul>
    </DocPage>
  )
}
