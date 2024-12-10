import { HTTPError } from 'ky'
import { toast } from 'sonner'

import { usePost } from '@/contexts/post'

import { ButtonOption } from './button-option'

interface OptionsProps {
  open: boolean
  setOpen(): void
  isOwner: boolean
  postId: string
}

export function Options({ postId, isOwner, open, setOpen }: OptionsProps) {
  const { onDeletePost } = usePost()

  async function handleDeletePost() {
    try {
      const { result, message } = await onDeletePost({ postId })

      if (result === 'success') toast.success(message)
    } catch (error) {
      console.log(error)

      if (error instanceof HTTPError) {
        const { message } = await error.response.json()

        toast.error(message)
      }
    }
  }

  return (
    open && (
      <div
        onClick={setOpen}
        className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 py-24"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[400px] rounded-lg bg-zinc-800"
        >
          {isOwner ? (
            <ButtonOption
              className="text-red-500 font-medium"
              onClick={handleDeletePost}
            >
              Excluir
            </ButtonOption>
          ) : (
            <>
              <ButtonOption
                className="text-red-500 font-medium"
                onClick={() => {
                  //
                }}
              >
                Denunciar
              </ButtonOption>

              <ButtonOption
                className="text-red-500 font-medium"
                onClick={() => {
                  //
                }}
              >
                Bloquear
              </ButtonOption>
            </>
          )}

          <ButtonOption
            className="text-zinc-300"
            onClick={() => {
              //
            }}
          >
            Adicionar como favorito
          </ButtonOption>

          <ButtonOption
            className="text-zinc-300"
            onClick={() => {
              //
            }}
          >
            Copiar link
          </ButtonOption>

          <ButtonOption className="text-zinc-300" onClick={setOpen}>
            Cancelar
          </ButtonOption>
        </div>
      </div>
    )
  )
}
