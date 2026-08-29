import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { InlineCode } from '@/components/ui/InlineCode'

export const environmentsHeadings = [
  { id: 'overview', text: 'Overview', level: 2 as const },
  { id: 'variables', text: 'Variables', level: 2 as const },
  { id: 'using-variables', text: 'Using variables', level: 2 as const },
  { id: 'workflows', text: 'Environment workflows', level: 2 as const },
  { id: 'secrets', text: 'Keeping secrets safe', level: 2 as const },
]

export function EnvironmentsPage() {
  return (
    <DocPage
      title="Environments"
      description="Manage variables and switch between local, staging, and production API configurations in Fishman."
      icon={getDocIcon('/environments')}
    >
      <Heading id="overview">Overview</Heading>

      <p>
        Environments let you reuse values that change between different API
        setups. Instead of editing every request when moving from local
        development to staging or production, define variables once and switch
        environments when needed.
      </p>

      <CodeBlock
        language="text"
        code={`Local:      {{baseUrl}} → http://localhost:3000
Staging:    {{baseUrl}} → https://api.staging.example
Production: {{baseUrl}} → https://api.example`}
      />

      <Heading id="variables">Variables</Heading>

      <p>
        An environment stores values using a variable name. Common examples
        include API base URLs, tokens, API keys, and IDs used across multiple
        requests.
      </p>

      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Example value</th>
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
          </tr>
          <tr>
            <td>
              <InlineCode>token</InlineCode>
            </td>
            <td>Development access token</td>
          </tr>
          <tr>
            <td>
              <InlineCode>userId</InlineCode>
            </td>
            <td>
              <InlineCode>123</InlineCode>
            </td>
          </tr>
        </tbody>
      </table>

      <Heading id="using-variables">Using variables</Heading>

      <p>
        Reference an environment variable with double curly braces. Fishman can
        then substitute the value from the active environment when working with
        your requests.
      </p>

      <CodeBlock
        language="http"
        code={`GET {{baseUrl}}/users/{{userId}}

Authorization: Bearer {{token}}`}
      />

      <p>
        This keeps requests portable across environments without maintaining
        separate copies of the same request.
      </p>

      <Heading id="workflows">Environment workflows</Heading>

      <p>A typical workflow is to create separate environments for each stage:</p>

      <ul>
        <li>
          <strong>Local</strong> — for services running on your machine
        </li>
        <li>
          <strong>Staging</strong> — for testing changes before release
        </li>
        <li>
          <strong>Production</strong> — for working with live APIs
        </li>
      </ul>

      <p>
        Keep the same variable names across environments where possible. For
        example, every environment can define <InlineCode>baseUrl</InlineCode>,
        while each one provides its own value.
      </p>

      <Heading id="secrets">Keeping secrets safe</Heading>

      <Callout tone="danger" title="Don't share secrets">
        Avoid committing real API keys, passwords, or production tokens into
        exported collections or files shared with other people.
      </Callout>

      <p>
        Use variables for sensitive values and review what you share before
        exporting or committing collection data.
      </p>
    </DocPage>
  )
}