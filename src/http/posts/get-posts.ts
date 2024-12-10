import { api } from '../api-client'
import type { IPost } from './types'

export interface GetPostsResponse {
  result: 'success' | 'error'
  message?: string
  data: IPost[]
}

export async function getPosts() {
  const response = api.get('post').json<GetPostsResponse>()

  return response
}
