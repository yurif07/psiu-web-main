import { createBrowserRouter } from 'react-router-dom'

import { PostProvider } from '@/contexts/post'
import { AuthLayout } from '@/pages/_layouts/auth'
import { Home } from '@/pages/home'
import { Profile } from '@/pages/profile'
import { SignIn } from '@/pages/sign-in'

import { ProtectedRoute } from './protected-route'
import { PublicRoute } from './public-route'

export const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: (
          <PostProvider>
            <Home />
          </PostProvider>
        ),
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
])
