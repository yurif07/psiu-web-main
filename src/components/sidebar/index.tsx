import {
  Bell,
  CirclePlus,
  Compass,
  House,
  MessageCircleMore,
  Search,
} from 'lucide-react'

import { useAuth } from '@/contexts/auth'

import { Avatar } from '../avatar'
import { SidebarLink } from './sidebar-link'

export function Sidebar() {
  const { student } = useAuth()

  const avatar = 'https://api.dicebear.com/9.x/adventurer/svg?seed=natanfoleto'

  return (
    <div className="h-screen w-80 flex flex-col justify-between bg-zinc-900 px-6 py-8">
      <div className="space-y-12">
        <div className="px-4">
          <h1 className="text-zinc-300 text-xl font-medium">Psiuuu!</h1>
        </div>

        <nav className="space-y-2">
          <SidebarLink href="/">
            <House />
            Página inicial
          </SidebarLink>

          <SidebarLink href="/">
            <Search />
            Pesquisa
          </SidebarLink>

          <SidebarLink href="/">
            <Compass />
            Explorar
          </SidebarLink>

          <SidebarLink href="/">
            <MessageCircleMore />
            Mensagens
          </SidebarLink>

          <SidebarLink href="/">
            <Bell />
            Notificações
          </SidebarLink>

          <SidebarLink href="/">
            <CirclePlus />
            Criar
          </SidebarLink>
        </nav>
      </div>

      <div>
        <SidebarLink href="/profile">
          <Avatar
            src={avatar}
            name="Natan Foleto"
            className="size-8 bg-zinc-200"
            onError={(e) => console.log(e)}
          />

          {student?.name || 'Perfil'}
        </SidebarLink>
      </div>
    </div>
  )
}
