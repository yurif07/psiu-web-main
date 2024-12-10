import type { ReactNode } from 'react'

import type { Student } from '@/http/auth/authenticate-with-password'

export interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContextType {
  signed: boolean
  student: Student | null
  handleStudent(student: Student): void
  signOut(): void
}
