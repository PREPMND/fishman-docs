import { DocPage } from '@/components/docs/DocPage'
import { getDocIcon } from '@/lib/icons'
import { Heading } from '@/components/docs/Heading'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { InlineCode } from '@/components/ui/InlineCode'
import { Link } from 'react-router'

export const installationHeadings = [
  { id: 'system-requirements', text: 'System requirements', level: 2 as const },
  { id: 'node', text: 'Node.js', level: 2 as const },
  { id: 'rust', text: 'Rust', level: 2 as const },
  { id: 'linux', text: 'Linux (Ubuntu / Debian)', level: 2 as const },
  { id: 'macos', text: 'macOS', level: 2 as const },
  { id: 'windows', text: 'Windows', level: 2 as const },
  { id: 'verify', text: 'Verify install', level: 2 as const },
  { id: 'build', text: 'Production build commands', level: 2 as const },
]

export function InstallationPage() {
  return (
    <DocPage
      title="Installation"
      description="Prerequisites and production build commands for Fishman’s Tauri + React stack."
      icon={getDocIcon('/installation')}
    >
      <p>
        Fishman targets desktop via Tauri v2. You need a modern Node toolchain, a Rust compiler,
        and OS-level WebView / UI libraries.
      </p>

      <Heading id="system-requirements">System requirements</Heading>
      <ul>
        <li>Node.js <strong>20+</strong> (LTS recommended)</li>
        <li>Rust <strong>stable</strong> via rustup</li>
        <li>npm (ships with Node) or a compatible package manager</li>
        <li>~2 GB free disk for toolchain + Rust target builds</li>
      </ul>

      <Heading id="node">Node.js</Heading>
      <CodeBlock
        language="bash"
        code={`# Check version
node -v   # v20.x or newer
npm -v`}
      />
      <p>
        Install from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a>{' '}
        or your OS package manager. Then:
      </p>
      <CodeBlock language="bash" code="npm install" />

      <Heading id="rust">Rust</Heading>
      <CodeBlock
        language="bash"
        code={`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustc --version
cargo --version`}
      />
      <Callout tone="note">
        After installing rustup, restart the shell (or source{' '}
        <InlineCode>$HOME/.cargo/env</InlineCode>) so <InlineCode>cargo</InlineCode> is on{' '}
        <InlineCode>PATH</InlineCode>.
      </Callout>

      <Heading id="linux">Linux (Ubuntu / Debian)</Heading>
      <p>Install WebKitGTK and build dependencies for Tauri:</p>
      <CodeBlock
        language="bash"
        code={`sudo apt update
sudo apt install libwebkit2gtk-4.1-dev build-essential curl wget file \\
  libssl-dev libayatana-appindicator3-dev librsvg2-dev`}
      />

      <Heading id="macos">macOS</Heading>
      <ul>
        <li>Install Xcode Command Line Tools: <InlineCode>xcode-select --install</InlineCode></li>
        <li>Node 20+ and Rust stable as above</li>
      </ul>

      <Heading id="windows">Windows</Heading>
      <ul>
        <li>Visual Studio Build Tools with the C++ workload</li>
        <li>WebView2 Runtime (usually present on modern Windows)</li>
        <li>Node 20+ and Rust stable</li>
      </ul>

      <Heading id="verify">Verify install</Heading>
      <CodeBlock
        language="bash"
        code={`npm install
npm run tauri dev`}
      />
      <p>
        If the app window opens, continue with{' '}
        <Link to="/getting-started">Getting Started</Link> smoke tests.
      </p>

      <Heading id="build">Production build commands</Heading>
      <CodeBlock
        language="bash"
        code={`npm install
npm run tauri build`}
      />
      <Callout tone="warning">
        First Rust builds can take several minutes. Subsequent builds are much faster thanks to
        incremental compilation.
      </Callout>
    </DocPage>
  )
}
