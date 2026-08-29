import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'
import { DOCS_REPO_URL, GITHUB_URL, MARKETING_URL } from '@/content/navigation'

export function DocsFooter() {
  return (
    <footer className="mt-8 border-t border-border py-8 text-sm text-muted sm:mt-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className='flex items-center'>
          Fishman Docs · {' '}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex  items-center gap-1.5 text-body transition-colors hover:text-primary"
          >
            <GitHubIcon className="size-3.5 ml-1" />
            Open source
          </a>
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={MARKETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            Marketing site
            <ExternalLink className="size-3" strokeWidth={1.75} aria-hidden />
          </a>
          <a
            href={DOCS_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            Docs repo
            <ExternalLink className="size-3" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
