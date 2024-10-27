'use client'

import { IconLayoutSidebar } from '@tabler/icons-react'
import { useSidebar } from './ui/Sidebar'

export const OpenCloseSidebar = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      className="p-2 hover:bg-accent rounded-md flex text-sm items-center gap-1"
      onClick={toggleSidebar}
    >
      <IconLayoutSidebar />
      Open Sidebar
    </button>
  )
}
