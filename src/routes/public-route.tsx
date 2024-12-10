import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/contexts/auth'

export const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { signed } = useAuth()

  if (signed) return <Navigate to="/" replace />

  return children
}
