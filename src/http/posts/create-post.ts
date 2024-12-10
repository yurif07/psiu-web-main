import { api } from '../api-client'

export interface CreatePostRequest {
  content: string
}

export interface CreatePostResponse {
  result: 'success' | 'error'
  message?: string
}

export async function createPost({ content }: CreatePostRequest) {
  const response = await api
    .post('post', {
      json: {
        content,
      },
    })
    .json<CreatePostResponse>()

  return response
}
