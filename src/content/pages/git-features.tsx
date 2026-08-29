import { DocPage } from '@/components/docs/DocPage'

import { getDocIcon } from '@/lib/icons'

import { Heading } from '@/components/docs/Heading'

import { Callout } from '@/components/ui/Callout'

import { InlineCode } from '@/components/ui/InlineCode'

export const gitHeadings = [
  { id: 'overview', text: 'Git in Fishman', level: 2 as const },
  { id: 'changes', text: 'Changes and commits', level: 2 as const },
  { id: 'diffs', text: 'Reviewing changes', level: 2 as const },
  { id: 'history', text: 'Commit history', level: 2 as const },
  { id: 'branches', text: 'Branches', level: 2 as const },
  { id: 'sync', text: 'Fetch, pull, and push', level: 2 as const },
  { id: 'conflicts', text: 'Merge conflicts', level: 2 as const },
  { id: 'authentication', text: 'Remote authentication', level: 2 as const },
]

export function GitPage() {
  return (
    <DocPage
      title="Git"
      description="Review changes, manage branches, sync with remotes, and handle merge conflicts without leaving Fishman."
      icon={getDocIcon('/git')}
    >
      <Heading id="overview">Git in Fishman</Heading>
      <p>
        Fishman includes Git tools alongside your API workspace. You can review repository changes,
        work with branches, inspect commits and history, synchronize your local repository with a
        remote, and handle merge conflicts without leaving the app.
      </p>

      <Callout tone="tip">
        Git status stays connected to your current repository, so branch and synchronization
        information can be checked while you work.
      </Callout>

      <Heading id="changes">Changes and commits</Heading>

      <p>
        Use the Git changes view to review files that have changed in your repository and prepare
        your work for a commit.
      </p>

      <p>
        Changes are part of the normal Git workflow: review what changed, stage the files you want
        to include, and create a commit when the changes are ready.
      </p>

      <Callout tone="note">
        If Git reports a conflict, resolve it before committing the affected file.
      </Callout>

      <Heading id="diffs">Reviewing changes</Heading>

      <p>
        Select a changed file to inspect its diff and understand what was added, removed, or
        modified before committing.
      </p>

      <p>
        Reviewing changes before staging or committing helps you keep commits focused and catch
        unintended edits.
      </p>

      <Heading id="history">Commit history</Heading>

      <p>
        The commits view lets you browse your repository's commit history and inspect the work that
        has been recorded in previous commits.
      </p>

      <p>
        Use history alongside the changes view to understand both what is currently uncommitted and
        what has already happened in the repository.
      </p>

      <Heading id="branches">Branches</Heading>

      <p>
        The branch switcher lists local branches and shows the currently checked-out branch. Select
        another branch to switch to it, or create a new branch from your current commit.
      </p>

      <ul>
        <li>Switch between available local branches</li>
        <li>Create a new branch and switch to it</li>
        <li>See the current branch from the Git controls and status bar</li>
      </ul>

      <Callout tone="note" title="Repositories with no commits">
        Before the first commit, creating a branch renames the current branch because there is no
        commit history yet to keep separate branch references.
      </Callout>

      <Heading id="sync">Fetch, pull, and push</Heading>

      <p>
        Fishman provides <InlineCode>Fetch</InlineCode>, <InlineCode>Pull</InlineCode>, and{' '}
        <InlineCode>Push</InlineCode> actions for working with your configured remote.
      </p>

      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>What it does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Fetch</strong>
            </td>
            <td>Checks for changes from the remote</td>
          </tr>
          <tr>
            <td>
              <strong>Pull</strong>
            </td>
            <td>Brings remote changes into your current branch</td>
          </tr>
          <tr>
            <td>
              <strong>Push</strong>
            </td>
            <td>Sends local commits to the remote</td>
          </tr>
        </tbody>
      </table>

      <p>
        Ahead and behind counts show how your current branch compares with its upstream. This makes
        it easy to see when local commits need to be pushed or remote changes need attention.
      </p>

      <Heading id="conflicts">Merge conflicts</Heading>

      <p>
        Fishman detects conflicted paths and highlights them so they can be resolved before
        committing.
      </p>

      <p>For a conflicted file, you can:</p>

      <ul>
        <li>
          <strong>Accept ours</strong> to keep the current branch's version
        </li>
        <li>
          <strong>Accept theirs</strong> to keep the incoming version
        </li>
        <li>
          <strong>Mark resolved</strong> after editing the file yourself
        </li>
      </ul>

      <p>
        For <InlineCode>.fish</InlineCode> files, Fishman can also open the affected request in
        Fishman as part of the conflict workflow.
      </p>

      <Callout tone="warning" title="Resolve conflicts before committing">
        A conflicted file must be resolved before the merge can be completed and the changes can be
        committed normally.
      </Callout>

      <Heading id="authentication">Remote authentication</Heading>

      <p>
        For remotes that require authentication, Fishman supports saving Git credentials used for
        fetch, pull, and push operations.
      </p>

      <p>
        For GitHub HTTPS remotes, you can use your GitHub username (or{' '}
        <InlineCode>git</InlineCode>) together with a Personal Access Token as the password.
      </p>

      <Callout tone="warning" title="Protect your token">
        Treat Personal Access Tokens like passwords. Only use credentials you trust on the current
        machine and revoke tokens that are no longer needed.
      </Callout>
    </DocPage>
  )
}