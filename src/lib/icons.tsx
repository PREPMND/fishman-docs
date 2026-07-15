import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  Code2,
  FolderTree,
  GitPullRequest,
  HardDriveDownload,
  History,
  Rocket,
  ScanSearch,
  Terminal,
} from 'lucide-react'
import type { NavItem } from '@/content/navigation'

export const docIcons: Record<string, LucideIcon> = {
  '/getting-started': Rocket,
  '/installation': HardDriveDownload,
  '/backend-scanner': ScanSearch,
  '/collections': FolderTree,
  '/cli': Terminal,
  '/api-reference': Code2,
  '/changelog': History,
  '/contributing': GitPullRequest,
}

export function getDocIcon(href: string): LucideIcon {
  return docIcons[href] ?? BookOpen
}

export function iconForNavItem(item: Pick<NavItem, 'href'>): LucideIcon {
  return getDocIcon(item.href)
}
