import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Callout } from '@/components/ui/Callout'
import { Pill } from '@/components/ui/Pill'
import { Link } from 'react-router'

export const backendScannerHeadings = [
  { id: 'overview', text: 'How it works', level: 2 as const },
  { id: 'workflow', text: 'Source → routes → bodies → collections', level: 2 as const },
  { id: 'ast', text: 'AST scanning', level: 2 as const },
  { id: 'supported', text: 'Supported frameworks', level: 2 as const },
  { id: 'coming-soon', text: 'Coming soon', level: 2 as const },
  { id: 'tips', text: 'Practical tips', level: 2 as const },
]

export function BackendScannerPage() {
  return (
    <DocPage
      title="Backend Scanner"
      description="Point Fishman at backend source, discover routes, generate request bodies, and build collections."
      icon={getDocIcon('/backend-scanner')}
    >
      <Heading id="overview">How it works</Heading>
      <p>
        Backend Scanner walks your server project, finds HTTP handlers, and turns them into
        replayable Fishman requests. Instead of hand-typing every path and method, you import a
        working collection from code you already own.
      </p>

      <Heading id="workflow">Source → routes → bodies → collections</Heading>
      <ol>
        <li>
          <strong>Source</strong> — select a backend project directory in the app.
        </li>
        <li>
          <strong>Routes</strong> — Fishman detects method + path pairs from the framework’s router
          API.
        </li>
        <li>
          <strong>Bodies</strong> — where schemas or sample payloads exist, Fishman seeds a
          realistic request body.
        </li>
        <li>
          <strong>Collections</strong> — discovered endpoints land in a nested collection you can
          edit, env-bind, and replay.
        </li>
      </ol>
      <Callout tone="tip">
        After a scan, review auth headers and path params — scanners infer structure, not your
        secrets. Wire credentials through <Link to="/api-reference">Environments</Link>.
      </Callout>

      <Heading id="ast">AST scanning</Heading>
      <p>
        Fishman prefers <strong>AST-aware</strong> analysis over brittle regex. That means route
        detection understands nested routers, middleware chains, and framework-specific decorators
        when the parser supports them — not just string matches on <code>/api/</code>.
      </p>
      <p>
        Incomplete coverage is expected for dynamic route construction (
        <code>router[method](path)</code> at runtime). Prefer static route definitions when you need
        a complete collection dump.
      </p>

      <Heading id="supported">Supported frameworks</Heading>
      <p>Available today (JS / TS ecosystem):</p>
      <div className="my-4 flex flex-wrap gap-2">
        {[
          'Express',
          'Fastify',
          'Koa',
          'Hono',
          'Elysia',
          'NestJS',
          'Next.js',
          'Bun / Nitro',
        ].map((name) => (
          <Pill key={name}>{name}</Pill>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Framework</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Express / Fastify / Koa</td>
            <td>Classic Node routers; nested mounts supported when statically declared</td>
          </tr>
          <tr>
            <td>Hono / Elysia</td>
            <td>Edge-friendly APIs; method helpers detected</td>
          </tr>
          <tr>
            <td>NestJS</td>
            <td>Controller + method decorators</td>
          </tr>
          <tr>
            <td>Next.js / Bun Nitro</td>
            <td>File- or config-based API routes where detectable</td>
          </tr>
        </tbody>
      </table>

      <Heading id="coming-soon">Coming soon</Heading>
      <div className="my-4 flex flex-wrap gap-2">
        {[
          'Python',
          'Django',
          'Flask',
          'Go',
          'Rust',
          'Java Spring Boot',
          'Laravel',
          'ASP.NET',
        ].map((name) => (
          <Pill key={name} className="opacity-80">
            {name}
          </Pill>
        ))}
      </div>
      <Callout tone="note">
        Until multi-language scanners ship, import OpenAPI / Postman collections or author requests
        manually. Track progress on{' '}
        <a href="https://github.com/nkrider7/fishman" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </Callout>

      <Heading id="tips">Practical tips</Heading>
      <ul>
        <li>Scan the package that actually mounts your HTTP server, not a monorepo root alone.</li>
        <li>Commit generated collections only if your team wants shared fixtures — otherwise keep them local.</li>
        <li>
          Pair scans with <Link to="/collections">Collections</Link> folders by domain (auth, billing,
          admin).
        </li>
      </ul>
    </DocPage>
  )
}
