import { HTTPError } from 'ky'
import { type FormEvent, useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/button'
import { usePost } from '@/contexts/post'

import { ButtonNewPost } from './button-new-post'

export function NewPost() {
  const { onCreatePost } = usePost()

  const [open, setOpen] = useState(false)
  const [content, setContent] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      const { result, message } = await onCreatePost({ content })

      if (result === 'success') {
        handleClose()
        toast.success(message)
      }
    } catch (error) {
      console.log(error)

      if (error instanceof HTTPError) {
        const { message } = await error.response.json()

        return { result: 'error', message }
      }
    }
  }

  return (
    <div>
      <ButtonNewPost onClick={handleOpen} />

      {open && (
        <div
          onClick={handleClose}
          className="absolute inset-0 z-10 flex justify-center bg-black/25 py-24"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[576px] h-96 rounded-lg bg-zinc-800"
          >
            <div className="bg-zinc-900 p-3 rounded-t-lg">
              <h1 className="text-zinc-300 text-sm font-semibold text-center">
                Criar nova publicação
              </h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="h-full flex flex-col justify-between bg-zinc-800 rounded-lg"
            >
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Sobre o que você quer falar?"
                className="
                  flex-1 
                  bg-transparent 
                  outline-0 
                  text-sm 
                  text-zinc-200 
                  border-b-[1px] 
                  border-zinc-700
                  p-3
                "
              ></textarea>

              <div className="flex justify-end py-4 px-3">
                <Button
                  className="bg-zinc-900 disabled:bg-zinc-700 disabled:cursor-not-allowed"
                  disabled={!content}
                >
                  Publicar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
