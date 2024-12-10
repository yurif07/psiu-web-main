/* eslint-disable prettier/prettier */
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'
import { useState } from 'react'

import { REACTION_LIST } from '@/constants/reactions'
import { TAILWIND_COLORS } from '@/constants/tailwind-colors'
import { useAuth } from '@/contexts/auth'
import type { IReactionComment, IReactionPost } from '@/http/reactions/types'
import { getRandomAdjective } from '@/utils/get-random-adjective'

import { Avatar } from '../avatar'

interface ReactionListProps {
  reactions: IReactionPost[] | IReactionComment[]
  open: boolean
  setOpen(): void
}

const tabs = [
  { id: 'all', title: 'tudo' },
  { id: '0', title: ' ❤️' },
  { id: '1', title: '🙌' },
  { id: '2', title: '💪' },
  { id: '3', title: '😢' },
  { id: '4', title: '🤝' },
]

export function ReactionList({ open, setOpen, reactions }: ReactionListProps) {
  const { student } = useAuth()

  const [activeTab, setActiveTab] = useState('all')

  const reactionsByTab =
    activeTab === 'all'
      ? reactions
      : reactions.filter((reaction) => reaction.type.toString() === activeTab)

  return (
    open && (
      <div
        onClick={setOpen}
        className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 py-24"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[500px] rounded-lg bg-zinc-800"
        >
          <div className="p-2 flex items-center justify-between">
            <div className="space-x-1">
              {tabs.map((tab) => {
                const amount =
                  tab.id === 'all'
                    ? reactions.length
                    : reactions.filter(
                      (reaction) => reaction.type.toString() === tab.id,
                    ).length

                return !!amount && (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                    px-4 
                    py-3 
                    text-sm 
                    font-semibold 
                    rounded-lg 
                    text-zinc-300 
                    transition-colors 
                    hover:bg-yellow-500 
                    ${activeTab === tab.id ? 'bg-yellow-500' : 'text-zinc-300'}`}
                  >
                    {tab.title} <span className='font-normal'>{amount}</span>
                  </button>
                )
              })}
            </div>

            <button onClick={setOpen} className="px-4 py-3">
              <X className="size-5 text-zinc-200" />
            </button>
          </div>
          <div className="p-4 h-[84vh] overflow-auto text-zinc-200 space-y-4">
            {reactionsByTab.map((reaction) => {
              const colors =
                TAILWIND_COLORS[Math.floor(Math.random() * TAILWIND_COLORS.length)]

              const adjective = getRandomAdjective()
              const avatar =
                `https://api.dicebear.com/9.x/adventurer/svg?seed=${adjective}`

              const isOwner = reaction.isOwner

              return (
                <div key={reaction.id} className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <Avatar src={avatar} className={`size-10 ${colors.bg_color}`} />
                    <h1 className='text-sm font-semibold'>{isOwner ? `${student?.name} (você)` : adjective}</h1>

                    {reaction && (
                      <span
                        className={`absolute -bottom-1.5 -left-1.5 text-[10px] p-[1px] px-0.5 rounded-full ${colors.bg_color}`}
                      >
                        {REACTION_LIST[reaction.type].icon}
                      </span>
                    )}
                  </div>

                  <time className='text-xs'>{formatDistanceToNow(reaction.reactedAt, {
                    locale: ptBR,
                    addSuffix: true
                  })}
                  </time>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  )
}
