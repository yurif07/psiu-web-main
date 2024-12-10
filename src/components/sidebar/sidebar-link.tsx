import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface SidebarLinkProps {
  href: string
  children: ReactNode
}

export function SidebarLink({ href, children }: SidebarLinkProps) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(href)}
      className="w-full flex items-center gap-3 text-zinc-300 cursor-pointer rounded-md p-4 hover:bg-zinc-800 transition-colors"
    >
      {children}
    </button>
  )
}
