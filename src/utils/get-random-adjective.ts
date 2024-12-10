import { ADJECTIVES } from '@/constants/adjectives'

export function getRandomAdjective() {
  return ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
}
