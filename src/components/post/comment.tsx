import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useMemo, useRef, useState } from 'react'

import { REACTION_LIST } from '@/constants/reactions'
import { TAILWIND_COLORS } from '@/constants/tailwind-colors'
import { usePost } from '@/contexts/post'
import type { IComment } from '@/http/comments/types'
import { getRandomAdjective } from '@/utils/get-random-adjective'

import { Avatar } from '../avatar'
import { Reaction } from './reaction'
import { ReactionList } from './reaction-list'

export interface CommentProps {
  comment: IComment
}

export function Comment({
  comment: { id, content, commentedAt, updatedAt, reactions },
}: CommentProps) {
  const { onDeleteCommentReaction } = usePost()

  const [modalReactionList, setModalReactionList] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)

  const paragraphRef = useRef<HTMLParagraphElement | null>(null)

  function handleToggleExpanded() {
    setIsExpanded(!isExpanded)
  }

  function handleModalReactionList() {
    setModalReactionList(!modalReactionList)
  }

  useEffect(() => {
    if (paragraphRef.current) {
      setIsOverflowing(paragraphRef.current.scrollHeight > 160)
    }
  }, [])

  const colors = useMemo(
    () => TAILWIND_COLORS[Math.floor(Math.random() * TAILWIND_COLORS.length)],
    [],
  )

  const adjective = useMemo(() => getRandomAdjective(), [])
  const avatar = useMemo(
    () => `https://api.dicebear.com/9.x/adventurer/svg?seed=${adjective}`,
    [adjective],
  )

  const reaction = reactions.find((reaction) => reaction.isOwner)

  return (
    <div className="grid grid-cols-12 items-center gap-3">
      <div className="col-span-11 flex items-start gap-3">
        <div className="relative">
          <Avatar src={avatar} className={`w-10 h-10 ${colors.bg_color}`} />
          {reaction && (
            <button
              onClick={() =>
                onDeleteCommentReaction({ reactionId: reaction.id })
              }
              className={`absolute -bottom-1.5 -left-1.5 text-[10px] p-[1px] px-0.5 rounded-full ${colors.bg_color}`}
            >
              {REACTION_LIST[reaction.type].icon}
            </button>
          )}
        </div>

        <div>
          <p
            ref={paragraphRef}
            className={`
              text-zinc-400 
              text-sm 
              overflow-hidden 
              ${isExpanded ? '' : isOverflowing ? 'h-40' : ''}
            `}
          >
            <span className="text-zinc-300 text-sm font-semibold mr-2">
              {adjective}
            </span>
            {content}
          </p>

          {isOverflowing && (
            <button
              onClick={handleToggleExpanded}
              className="
                  text-sm 
                  text-zinc-400 
                  cursor-pointer 
                  transition-colors 
                  hover:text-zinc-300
                "
            >
              {isExpanded ? 'ver menos...' : 'ver mais...'}
            </button>
          )}

          <div className="space-x-3 text-zinc-500 text-xs font-medium mt-2">
            <time>
              {formatDistanceToNow(updatedAt || commentedAt, {
                locale: ptBR,
              })}{' '}
              {updatedAt && '(editado)'}
            </time>

            <span
              onClick={reactions.length ? handleModalReactionList : undefined}
              className="cursor-pointer transition-colors hover:text-zinc-300"
            >
              {reactions.length} reações
            </span>
          </div>
        </div>
      </div>

      <Reaction
        commentId={id}
        position="left"
        className="size-4 text-zinc-400"
      />

      <ReactionList
        open={modalReactionList}
        setOpen={handleModalReactionList}
        reactions={reactions}
      />
    </div>
  )
}
