import type { IReactionComment } from '../reactions/types'

export interface IComment {
  id: string
  postId: string
  isOwner: boolean
  content: string
  commentedAt: string
  updatedAt: string | null
  reactions: IReactionComment[]
}
