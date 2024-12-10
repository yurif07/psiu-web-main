import { api } from '../api-client'

export interface DeleteCommentReactionRequest {
  reactionId: string
}

export interface DeleteCommentReactionResponse {
  result: 'success' | 'error'
  message?: string
}

export async function deleteCommentReaction({
  reactionId,
}: DeleteCommentReactionRequest) {
  const response = await api
    .delete(`reaction/comment/${reactionId}`)
    .json<DeleteCommentReactionResponse>()

  return response
}
