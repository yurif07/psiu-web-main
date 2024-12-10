import type { ReactNode } from 'react'

import type {
  CreateCommentRequest,
  CreateCommentResponse,
} from '@/http/comments/create-comment'
import type {
  CreatePostRequest,
  CreatePostResponse,
} from '@/http/posts/create-post'
import type {
  DeletePostRequest,
  DeletePostResponse,
} from '@/http/posts/delete-post'
import type { IPost } from '@/http/posts/types'
import type {
  CreateCommentReactionRequest,
  CreateCommentReactionResponse,
} from '@/http/reactions/create-comment-reaction'
import type {
  CreatePostReactionRequest,
  CreatePostReactionResponse,
} from '@/http/reactions/create-post-reaction'
import type {
  DeleteCommentReactionRequest,
  DeleteCommentReactionResponse,
} from '@/http/reactions/delete-comment-reaction '
import type {
  DeletePostReactionRequest,
  DeletePostReactionResponse,
} from '@/http/reactions/delete-post-reaction'

export interface PostProviderProps {
  children: ReactNode
}

export interface PostContextType {
  posts: IPost[]
  onCreatePost(post: CreatePostRequest): Promise<CreatePostResponse>
  onDeletePost(post: DeletePostRequest): Promise<DeletePostResponse>
  onCreateComment(comment: CreateCommentRequest): Promise<CreateCommentResponse>
  onCreatePostReaction(
    reaction: CreatePostReactionRequest,
  ): Promise<CreatePostReactionResponse>
  onDeletePostReaction(
    reaction: DeletePostReactionRequest,
  ): Promise<DeletePostReactionResponse>
  onCreateCommentReaction(
    reaction: CreateCommentReactionRequest,
  ): Promise<CreateCommentReactionResponse>

  onDeleteCommentReaction(
    reaction: DeleteCommentReactionRequest,
  ): Promise<DeleteCommentReactionResponse>
}
