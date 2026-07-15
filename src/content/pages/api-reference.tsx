import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { InlineCode } from '@/components/ui/InlineCode'
import { Link } from 'react-router'

export const apiReferenceHeadings = [
  { id: 'request', text: 'Request model', level: 2 as const },
  { id: 'methods', text: 'Methods & URL', level: 2 as const },
  { id: 'headers', text: 'Headers', level: 2 as const },
  { id: 'body', text: 'Body', level: 2 as const },
  { id: 'auth', text: 'Auth placeholders', level: 2 as const },
  { id: 'environments', text: 'Environments', level: 2 as const },
  { id: 'response', text: 'Response', level: 2 as const },
]

export function ApiReferencePage() {
  return (
    <DocPage
      title="API Reference"
      description="Request/response concepts, headers, auth placeholders, and environments inside Fishman."
      icon={getDocIcon('/api-reference')}
    >
      <p>
        This page describes the concepts Fishman uses when you author and send HTTP requests. It is
        not a remote HTTP API for Fishman itself — the product is a local desktop client.
      </p>

      <Heading id="request">Request model</Heading>
      <p>A Fishman request typically includes:</p>
      <ul>
        <li>HTTP method</li>
        <li>URL (may include variables like <InlineCode>{`{{baseUrl}}`}</InlineCode>)</li>
        <li>Headers</li>
        <li>Optional body</li>
        <li>Optional auth configuration</li>
        <li>Collection / folder membership</li>
      </ul>

      <Heading id="methods">Methods & URL</Heading>
      <p>
        Common methods: <InlineCode>GET</InlineCode>, <InlineCode>POST</InlineCode>,{' '}
        <InlineCode>PUT</InlineCode>, <InlineCode>PATCH</InlineCode>, <InlineCode>DELETE</InlineCode>
        , <InlineCode>HEAD</InlineCode>, <InlineCode>OPTIONS</InlineCode>.
      </p>
      <CodeBlock
        language="text"
        code={`GET  {{baseUrl}}/users/{{userId}}
POST {{baseUrl}}/users`}
      />

      <Heading id="headers">Headers</Heading>
      <p>
        Header names are case-insensitive over the wire. Use environments for values that change per
        stage:
      </p>
      <CodeBlock
        language="http"
        code={`Content-Type: application/json
Accept: application/json
Authorization: Bearer {{token}}`}
      />

      <Heading id="body">Body</Heading>
      <p>
        JSON is the default for most API work. Raw text, form data, and empty bodies are also
        supported depending on the method.
      </p>
      <CodeBlock
        language="json"
        code={`{
  "email": "dev@example.com",
  "name": "Ada"
}`}
      />

      <Heading id="auth">Auth placeholders</Heading>
      <p>
        Prefer variables over hard-coded secrets. Typical patterns:
      </p>
      <ul>
        <li>
          <strong>Bearer</strong> — <InlineCode>{`Authorization: Bearer {{token}}`}</InlineCode>
        </li>
        <li>
          <strong>API key</strong> — custom header like <InlineCode>{`X-API-Key: {{apiKey}}`}</InlineCode>
        </li>
        <li>
          <strong>Basic</strong> — store credentials in the environment, not the shared collection file
        </li>
      </ul>
      <Callout tone="danger" title="Secrets">
        Never commit real tokens into exported collections. Rotate anything that was pasted into a
        shared file.
      </Callout>

      <Heading id="environments">Environments</Heading>
      <p>
        Environments map variable names to values (local, staging, production). Switch the active
        environment to retarget <InlineCode>{`{{baseUrl}}`}</InlineCode> and auth without editing
        every request.
      </p>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Example (local)</th>
            <th>Example (staging)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <InlineCode>baseUrl</InlineCode>
            </td>
            <td>
              <InlineCode>http://localhost:3000</InlineCode>
            </td>
            <td>
              <InlineCode>https://api.staging.example</InlineCode>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>token</InlineCode>
            </td>
            <td>dev token</td>
            <td>staging token</td>
          </tr>
        </tbody>
      </table>

      <Heading id="response">Response</Heading>
      <p>
        After Send, inspect status code, timing, headers, and body. Save interesting responses via{' '}
        <Link to="/collections">history</Link> for replay. For connectivity checks, use httpbin:
      </p>
      <CodeBlock
        language="bash"
        code={`# In the app:
# GET  https://httpbin.org/get
# POST https://httpbin.org/post  body: {"hello":"world"}`}
      />
    </DocPage>
  )
}
