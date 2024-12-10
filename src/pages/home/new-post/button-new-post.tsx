import { Plus } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonNewPostProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function ButtonNewPost({ className, ...rest }: ButtonNewPostProps) {
  const avatar = 'https://api.dicebear.com/9.x/adventurer/svg?seed=natanfoleto'

  return (
    <button
      {...rest}
      className={`
        relative 
        size-16 
        border-2 
        border-zinc-950 
        ring-1 
        ring-zinc-200 
        rounded-full 
        cursor-pointer
        bg-zinc-200
        bg-[url('${avatar}')]
        ${className}
      `}
      style={{ backgroundImage: `url(${avatar})` }}
    >
      <div
        className="
          flex 
          items-center 
          justify-center 
          bg-zinc-200 
          rounded-full 
          absolute 
          -bottom-2.5 
          left-1/2 
          -translate-x-1/2 
          p-0.5
        "
      >
        <Plus className="size-4 text-zinc-700" />
      </div>
    </button>
  )
}
