import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Check,
  FileDiff,
  GitBranch,
  GitCommit,
  GitMerge,
  History,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: FileDiff,
    title: "Review every change",
    description:
      "See your repository changes, inspect file-by-file diffs, and keep track of what is ready to commit.",
  },
  {
    icon: GitCommit,
    title: "Stage and commit",
    description:
      "Build commits from your changes without leaving your workspace, keeping your local Git workflow in one place.",
  },
  {
    icon: History,
    title: "Explore commit history",
    description:
      "Browse your repository's commit history and move through previous changes with context.",
  },
  {
    icon: GitBranch,
    title: "Work across branches",
    description:
      "Switch between local branches or create a new one directly from the current commit.",
  },
  {
    icon: RefreshCw,
    title: "Stay in sync",
    description:
      "Fetch remote changes and see exactly how far your branch is ahead of or behind its upstream.",
  },
  {
    icon: ArrowDownToLine,
    title: "Pull when you're behind",
    description:
      "Bring remote changes into your current branch without switching to a separate Git client.",
  },
  {
    icon: ArrowUpFromLine,
    title: "Push your work",
    description:
      "Send local commits to your remote and keep an eye on commits waiting to be pushed.",
  },
  {
    icon: GitMerge,
    title: "Handle merge conflicts",
    description:
      "Conflicted files are surfaced clearly, with options to accept ours, accept theirs, or mark an edited file as resolved.",
  },
  {
    icon: Check,
    title: "Know where you stand",
    description:
      "See your current branch and ahead/behind status at a glance while you work.",
  },
];

export function GitFeatures() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground">
            <GitBranch className="h-3.5 w-3.5" />
            Built-in Git
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Your code and your history,
            <br className="hidden sm:block" /> in the same workspace.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Review changes, manage branches, sync with your remote, and resolve
            conflicts without breaking your flow.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card/40 p-6 transition-colors hover:bg-card"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/50">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>

                <h3 className="mt-5 font-medium text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card/30 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
              <GitBranch className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-medium">Git that stays out of your way</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Branch information and sync status remain accessible while the
                deeper Git workflow is there when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}