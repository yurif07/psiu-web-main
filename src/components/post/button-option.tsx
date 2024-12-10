import type { ReactNode } from 'react'

interface ButtonOptionProps {
  children: ReactNode
  onClick(): void
  className?: string
}

export function ButtonOption({
  children,
  onClick,
  className = '',
}: ButtonOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        py-4
        text-sm
        border-t-[1px]
        first:border-t-0
        border-zinc-700
        ${className}
      `}
    >
      {children}
    </button>
  )
}
