import { api } from '../api-client'
import type { EnumTypeReaction } from './types'

export interface CreateCommentReactionRequest {
  commentId: string
  type: EnumTypeReaction
}

export interface CreateCommentReactionResponse {
  result: 'error' | 'success'
  message?: string
}

export async function createCommentReaction({
  commentId,
  type,
}: CreateCommentReactionRequest) {
  const response = await api
    .post(`reaction/comment/${commentId}`, {
      json: {
        type,
      },
    })
    .json<CreateCommentReactionResponse>()

  return response
}
