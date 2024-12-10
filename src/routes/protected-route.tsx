import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/contexts/auth'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { signed } = useAuth()

  if (!signed) return <Navigate to="/sign-in" replace />

  return children
}
