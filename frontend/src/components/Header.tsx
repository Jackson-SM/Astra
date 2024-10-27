import React from 'react'
import { Notifications } from './Notifications'
import { OpenCloseSidebar } from './OpenCloseSidebar'
import { Profile } from './Profile'

type HeaderProps = React.ComponentProps<'header'>

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className="bg-sidebar py-2 px-4 m-4 flex justify-between items-center">
      <div>
        <OpenCloseSidebar />
      </div>

      <div className="flex items-center gap-3">
        <Notifications />
        <Profile />
      </div>
    </header>
  )
}
