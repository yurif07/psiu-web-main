import { api } from '../api-client'

export interface DeletePostRequest {
  postId: string
}

export interface DeletePostResponse {
  result: 'success' | 'error'
  message?: string
}

export async function deletePost({ postId }: DeletePostRequest) {
  const response = await api.delete(`post/${postId}`).json<DeletePostResponse>()

  return response
}
