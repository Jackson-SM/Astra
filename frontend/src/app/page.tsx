import { Dashboard } from '@/components/Dashboard'
import { SidebarDemo } from '@/components/SidebarDemo'
import { SidebarProvider } from '@/components/ui/Sidebar'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div
      className={cn(
        'rounded-md flex md:flex-row bg-background w-full h-[100vh] overflow-hidden',
      )}
    >
      <SidebarProvider>
        <SidebarDemo />
        <main className="w-full h-full bg-background">
          <Dashboard />
        </main>
      </SidebarProvider>
    </div>
  )
}
