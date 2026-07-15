import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/cn'

export function CodeBlock({
  code,
  language = 'bash',
  className,
}: {
  code: string
  language?: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)
  const trimmed = code.replace(/^\n+|\n+$/g, '')

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(trimmed)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // clipboard may be unavailable
    }
  }

  return (
    <div
      className={cn(
        'group relative my-5 overflow-hidden rounded-lg border border-border bg-card',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-2">
        <span className="font-mono text-xs text-muted">{language}</span>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 rounded-sm px-2 py-1 text-xs font-medium text-muted transition-colors hover:bg-primary-muted hover:text-primary"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="size-3.5" strokeWidth={2} aria-hidden />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" strokeWidth={1.75} aria-hidden />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-body sm:text-sm">
        <code>{trimmed}</code>
      </pre>
    </div>
  )
}
