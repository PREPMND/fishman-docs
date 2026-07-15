import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Link } from 'react-router'

export const contributingHeadings = [
  { id: 'ways', text: 'Ways to contribute', level: 2 as const },
  { id: 'dev', text: 'Development setup', level: 2 as const },
  { id: 'docs', text: 'Improving docs', level: 2 as const },
  { id: 'conduct', text: 'Community', level: 2 as const },
]

export function ContributingPage() {
  return (
    <DocPage
      title="Contributing"
      description="Fishman is open source. Here’s how to help with the app or the docs."
      icon={getDocIcon('/contributing')}
    >
      <Heading id="ways">Ways to contribute</Heading>
      <ul>
        <li>
          Report bugs and request features on{' '}
          <a href="https://github.com/nkrider7/fishman/issues" target="_blank" rel="noopener noreferrer">
            GitHub Issues
          </a>
        </li>
        <li>Open pull requests against the app or scanner coverage</li>
        <li>Improve these docs (typos, clearer steps, new examples)</li>
      </ul>

      <Heading id="dev">Development setup</Heading>
      <CodeBlock
        language="bash"
        code={`git clone https://github.com/nkrider7/fishman.git
cd fishman
npm install
npm run tauri dev`}
      />
      <p>
        Full prerequisites are on the <Link to="/installation">Installation</Link> page.
      </p>

      <Heading id="docs">Improving docs</Heading>
      <ol>
        <li>
          Clone{' '}
          <a href="https://github.com/nkrider7/fishman-docs" target="_blank" rel="noopener noreferrer">
            fishman-docs
          </a>
        </li>
        <li>
          Add or edit a page under <code>src/content/pages/</code>
        </li>
        <li>
          Register it in <code>src/content/navigation.ts</code>
        </li>
        <li>
          Run <code>npm run dev</code> and open a PR
        </li>
      </ol>

      <Heading id="conduct">Community</Heading>
      <Callout tone="note">
        Be respectful, assume good intent, and keep discussions technical. License and contribution
        guidelines in the main Fishman repository take precedence when they differ.
      </Callout>
    </DocPage>
  )
}
