import { Dashboard } from '@/components/Dashboard'
import { SidebarDemo } from '@/components/SidebarDemo'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div
      className={cn(
        'rounded-md flex md:flex-row bg-background w-full h-[100vh] overflow-hidden',
      )}
    >
      <SidebarDemo />
      <main className="w-full h-full">
        <Dashboard />
      </main>
    </div>
  )
}
