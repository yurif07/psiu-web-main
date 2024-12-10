import ky, { BeforeRequestHook } from 'ky'

const prefixUrl = 'http://localhost:3333'

const beforeRequest: BeforeRequestHook = async (_request) => {
  const cookies: Record<string, string> = document.cookie.split(';').reduce(
    (acc, cookie) => {
      const [key, value] = cookie.trim().split('=')
      acc[key] = value
      return acc
    },
    {} as Record<string, string>,
  )

  const token = cookies.token || null

  if (token) _request.headers.set('Authorization', `Bearer ${token}`)
}

export const api = ky.create({
  prefixUrl,
  hooks: {
    beforeRequest: [beforeRequest],
  },
  credentials: 'include',
})
