import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react'
import { AvatarDemo } from './AvatarDemo'

export function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 hover:bg-accent p-2 rounded-md transition-colors duration-150">
          <AvatarDemo />
          <div className="flex items-center pointer-events-none">
            <span className="text-sm">Manu Aurora</span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconUser /> Conta
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconSettings /> Configurações
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuItem>
          <IconLogout /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
