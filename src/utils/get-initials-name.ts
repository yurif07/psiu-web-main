export function getInitialsName(name: string) {
  const parts = name.trim().split(' ')

  return parts
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}
