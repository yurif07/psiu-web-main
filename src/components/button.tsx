import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export function Button({ children, className = '', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`
        flex 
        items-center 
        justify-center
        text-zinc-300 
        text-sm 
        py-3 
        px-4 
        rounded-md 
        ${className}
      `}
    >
      {children}
    </button>
  )
}
