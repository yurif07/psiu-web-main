import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  createComment,
  type CreateCommentRequest,
  type CreateCommentResponse,
} from '@/http/comments/create-comment'
import {
  createPost,
  type CreatePostRequest,
  type CreatePostResponse,
} from '@/http/posts/create-post'
import {
  deletePost,
  type DeletePostRequest,
  type DeletePostResponse,
} from '@/http/posts/delete-post'
import { getPosts } from '@/http/posts/get-posts'
import type { IPost } from '@/http/posts/types'
import {
  createCommentReaction,
  type CreateCommentReactionRequest,
  type CreateCommentReactionResponse,
} from '@/http/reactions/create-comment-reaction'
import {
  createPostReaction,
  type CreatePostReactionRequest,
  type CreatePostReactionResponse,
} from '@/http/reactions/create-post-reaction'
import {
  deleteCommentReaction,
  type DeleteCommentReactionRequest,
  type DeleteCommentReactionResponse,
} from '@/http/reactions/delete-comment-reaction '
import {
  deletePostReaction,
  type DeletePostReactionRequest,
  type DeletePostReactionResponse,
} from '@/http/reactions/delete-post-reaction'

import type { PostContextType, PostProviderProps } from './types'

const PostContext = createContext<PostContextType>({} as PostContextType)

const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<IPost[]>([])

  const fetchPosts = useCallback(async () => {
    const { result, data } = await getPosts()

    if (result === 'success') {
      if (data) setPosts(data)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const onCreatePost = useCallback(
    async ({ content }: CreatePostRequest): Promise<CreatePostResponse> => {
      const { result, message } = await createPost({ content })

      if (result === 'success') {
        await fetchPosts()
      }

      return { result, message }
    },
    [fetchPosts],
  )

  const onDeletePost = useCallback(
    async ({ postId }: DeletePostRequest): Promise<DeletePostResponse> => {
      const { result, message } = await deletePost({ postId })

      if (result === 'success') {
        await fetchPosts()
      }

      return { result, message }
    },
    [fetchPosts],
  )

  const onCreateComment = useCallback(
    async ({
      postId,
      content,
    }: CreateCommentRequest): Promise<CreateCommentResponse> => {
      const { result, message } = await createComment({ postId, content })

      if (result === 'success') {
        await fetchPosts()
      }

      return { result, message }
    },
    [fetchPosts],
  )

  const onCreatePostReaction = useCallback(
    async ({
      postId,
      type,
    }: CreatePostReactionRequest): Promise<CreatePostReactionResponse> => {
      const { result, message } = await createPostReaction({ postId, type })

      if (result === 'success') {
        await fetchPosts()
      }

      return { result, message }
    },
    [fetchPosts],
  )

  const onDeletePostReaction = useCallback(
    async ({
      reactionId,
    }: DeletePostReactionRequest): Promise<DeletePostReactionResponse> => {
      const { result, message } = await deletePostReaction({ reactionId })

      if (result === 'success') {
        await fetchPosts()
      }

      return { result, message }
    },
    [fetchPosts],
  )

  const onCreateCommentReaction = useCallback(
    async ({
      commentId,
      type,
    }: CreateCommentReactionRequest): Promise<CreateCommentReactionResponse> => {
      const { result, message } = await createCommentReaction({
        commentId,
        type,
      })

      if (result === 'success') {
        await fetchPosts()
      }

      return { result, message }
    },
    [fetchPosts],
  )

  const onDeleteCommentReaction = useCallback(
    async ({
      reactionId,
    }: DeleteCommentReactionRequest): Promise<DeleteCommentReactionResponse> => {
      const { result, message } = await deleteCommentReaction({ reactionId })

      if (result === 'success') {
        await fetchPosts()
      }

      return { result, message }
    },
    [fetchPosts],
  )

  return (
    <PostContext.Provider
      value={{
        posts,
        onCreatePost,
        onDeletePost,
        onCreateComment,
        onCreatePostReaction,
        onDeletePostReaction,
        onCreateCommentReaction,
        onDeleteCommentReaction,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

function usePost(): PostContextType {
  return useContext(PostContext)
}

export { PostProvider, usePost }
