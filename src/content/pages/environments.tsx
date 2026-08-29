import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Callout } from '@/components/ui/Callout'
import { Pill } from '@/components/ui/Pill'
import { InlineCode } from '@/components/ui/InlineCode'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const environmentsHeadings = [
  { id: 'overview', text: 'What are environments?', level: 2 as const },
  { id: 'scopes', text: 'Global and collection environments', level: 2 as const },
  { id: 'variables', text: 'Variables', level: 2 as const },
  { id: 'using', text: 'Using variables in requests', level: 2 as const },
  { id: 'active', text: 'Active environments', level: 2 as const },
  { id: 'editing', text: 'Editing and saving', level: 2 as const },
  { id: 'tips', text: 'Practical tips', level: 2 as const },
]

export function EnvironmentsPage() {
  return (
    <DocPage
      title="Environments"
      description="Store reusable variables and switch API configuration without editing every request."
      icon={getDocIcon('/environments')}
    >
      <Heading id="overview">What are environments?</Heading>
      <p>
        Environments let you store values that change between API setups, such as base URLs, API
        keys, and tokens. Instead of editing every request when switching from local development to
        staging, update the active environment.
      </p>

      <div className="my-4 flex flex-wrap gap-2">
        <Pill>Local</Pill>
        <Pill>Development</Pill>
        <Pill>Staging</Pill>
        <Pill>Production</Pill>
      </div>

      <Callout tone="tip">
        Keep values that change between deployments in environments instead of hard-coding them
        directly into requests.
      </Callout>

      <Heading id="scopes">Global and collection environments</Heading>
      <p>Fishman supports two environment scopes:</p>

      <table>
        <thead>
          <tr>
            <th>Scope</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Global</strong>
            </td>
            <td>Variables you want available across your API work</td>
          </tr>
          <tr>
            <td>
              <strong>Collection</strong>
            </td>
            <td>Configuration specific to a particular collection</td>
          </tr>
        </tbody>
      </table>

      <p>
        Collection environments are useful when different projects have their own URLs or
        credentials. You can manage environments from the environment selector in the app.
      </p>

      <Heading id="variables">Variables</Heading>
      <p>
        An environment contains a list of variable and value pairs. Each variable can also be
        enabled or disabled without deleting it.
      </p>

      <CodeBlock
        language="text"
        code={`baseUrl    http://localhost:3000
token      your-token-here
userId     123`}
      />

      <Callout tone="note">
        Disabled variables stay in the environment but are not used until you enable them again.
        This is useful when temporarily testing different configurations.
      </Callout>

      <Heading id="using">Using variables in requests</Heading>
      <p>
        Reference an environment variable with the <InlineCode>{`{{variable}}`}</InlineCode> syntax
        in your requests.
      </p>

      <CodeBlock
        language="http"
        code={`GET {{baseUrl}}/users/{{userId}}

Authorization: Bearer {{token}}`}
      />

      <p>
        You can use the same approach wherever request values need to change, including URLs,
        headers, and request bodies.
      </p>

      <Heading id="active">Active environments</Heading>
      <p>
        Select an environment to make it active. Fishman lets you switch between global and
        collection environments from the environment selector, so you can change configuration
        without rewriting requests.
      </p>

      <Callout tone="tip">
        Use clearly named environments such as <InlineCode>Local</InlineCode>,{' '}
        <InlineCode>Staging</InlineCode>, and <InlineCode>Production</InlineCode> to make it easier
        to see which API setup you are currently using.
      </Callout>

      <Heading id="editing">Editing and saving</Heading>
      <p>
        Changes to environment variables preview live in your requests before you save them. This
        lets you check how a new value affects your requests while editing.
      </p>

      <ul>
        <li>Create new environments from the environment manager</li>
        <li>Rename environments and add or remove variables</li>
        <li>Duplicate an environment when creating a similar configuration</li>
        <li>Save changes when you're happy with them, or reset them while editing</li>
      </ul>

      <Callout tone="warning" title="Unsaved changes">
        Fishman warns you before closing the environment manager when there are unsaved changes, so
        you don't accidentally lose your edits.
      </Callout>

      <Heading id="tips">Practical tips</Heading>
      <ul>
        <li>Use one environment per deployment or API setup.</li>
        <li>Keep collection-specific configuration inside collection environments.</li>
        <li>Duplicate an existing environment instead of recreating similar variables manually.</li>
        <li>Avoid putting sensitive credentials directly into shared request definitions.</li>
      </ul>
    </DocPage>
  )
}