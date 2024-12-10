import { type ImgHTMLAttributes, useState } from 'react'

import { getInitialsName } from '@/utils/get-initials-name'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  name?: string
  className?: string
}

export function Avatar({ name = '', className = '', ...rest }: AvatarProps) {
  const [isImageValid, setIsImageValid] = useState(true)

  return isImageValid ? (
    <img
      {...rest}
      alt={name}
      className={`rounded-full ${className}`}
      onError={() => setIsImageValid(false)}
    />
  ) : (
    <div
      className={`flex items-center justify-center rounded-full ${className}`}
    >
      {getInitialsName(name)}
    </div>
  )
}
