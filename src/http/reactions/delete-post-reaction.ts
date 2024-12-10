import { api } from '../api-client'

export interface DeletePostReactionRequest {
  reactionId: string
}

export interface DeletePostReactionResponse {
  result: 'success' | 'error'
  message?: string
}

export async function deletePostReaction({
  reactionId,
}: DeletePostReactionRequest) {
  const response = await api
    .delete(`reaction/post/${reactionId}`)
    .json<DeletePostReactionResponse>()

  return response
}
