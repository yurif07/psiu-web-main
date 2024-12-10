import { LogIn } from 'lucide-react'

import { SignInForm } from './sign-in-form'

export function SignIn() {
  return (
    <div className="w-screen h-screen flex bg-zinc-900">
      <div className="relative h-full w-3/5 flex items-center border-r-[1px] border-zinc-800 bg-sign-in bg-cover bg-center px-16">
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <h1 className="text-zinc-50 text-6xl font-bold text-center">
          O ser humano é tudo aquilo que a educação faz dele!
        </h1>
      </div>

      <div className="h-full w-2/5 relative flex items-center justify-center p-12">
        <h1 className="absolute top-8 left-8 text-zinc-200 font-medium">
          psiuuu!
        </h1>

        <div className="w-full bg-zinc-800 py-12 px-20 rounded-md">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LogIn className="text-yellow-600" />
              <h1 className="text-2xl text-zinc-300">Faça seu login</h1>
            </div>

            <p className="text-sm text-zinc-400">
              Entre com suas informações de cadastro.
            </p>
          </div>

          <SignInForm />
        </div>
      </div>
    </div>
  )
}
