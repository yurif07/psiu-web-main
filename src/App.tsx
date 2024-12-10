import './main.css'

import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { AuthProvider } from './contexts/auth'
import { router } from './routes'

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" closeButton richColors theme="dark" />
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
