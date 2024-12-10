import { createContext, useCallback, useContext } from 'react'

import { useStorage } from '@/hooks/use-storage'
import type { Student } from '@/http/auth/authenticate-with-password'

import type { AuthContextType, AuthProviderProps } from './types'

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [student, setStudent] = useStorage<Student | null>('student', null)

  const handleStudent = useCallback(
    ({ id, name, ra, birthdate, createdAt, updatedAt }: Student) => {
      setStudent({ id, name, ra, birthdate, createdAt, updatedAt })
    },
    [setStudent],
  )

  const signOut = () => {
    setStudent(null)
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!student,
        student,
        handleStudent,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextType {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }
