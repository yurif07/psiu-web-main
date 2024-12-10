import { Post } from '@/components/post'
import { usePost } from '@/contexts/post'

import { NewPost } from './new-post'

export function Home() {
  const { posts } = usePost()

  return (
    <div className="h-screen w-full px-16 py-8 space-y-12 overflow-y-auto">
      <NewPost />

      <div className="flex flex-col items-center gap-12">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={{
              id: post.id,
              isOwner: post.isOwner,
              content: post.content,
              publishedAt: post.publishedAt,
              updatedAt: post.updatedAt,
              comments: post.comments,
              reactions: post.reactions,
            }}
          />
        ))}
      </div>
    </div>
  )
}
