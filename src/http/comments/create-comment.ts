import { api } from '../api-client'

export interface CreateCommentRequest {
  postId: string
  content: string
}

export interface CreateCommentResponse {
  result: 'success' | 'error'
  message?: string
}

export async function createComment({ postId, content }: CreateCommentRequest) {
  const response = await api
    .post(`comment/${postId}`, {
      json: {
        content,
      },
    })
    .json<CreateCommentResponse>()

  return response
}
