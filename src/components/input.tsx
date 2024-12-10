import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={`
        rounded-md 
        bg-transparent 
        text-zinc-400 
        text-sm 
        border-2 
        border-zinc-600 
        outline-none 
        py-2
        px-3 
        focus:border-yellow-500 
        ${className}
      `}
    />
  )
}
