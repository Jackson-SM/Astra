import { cn } from '@/lib/utils'
import { IconArrowUp } from '@tabler/icons-react'
import { LittleChart } from './LittleChart'

export type InfoDashboard = {
  title: string
  value: number | string
  icon: JSX.Element
  color: string
}

type CardInfoDashboardProps = React.ComponentProps<'div'> & {
  info: InfoDashboard
}

export const CardInfoDashboard = ({
  info,
  className,
  ...props
}: CardInfoDashboardProps) => {
  return (
    <div
      className={cn(
        'h-48 w-full rounded-lg bg-card p-3 flex flex-col gap-2 justify-around',
        className,
      )}
      {...props}
    >
      <div className="flex justify-between">
        <div
          className={cn('p-4 w-min rounded-full bg-fuchsia-500', info.color)}
        >
          {info.icon}
        </div>
        <LittleChart />
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex flex-col justify-around gap-2">
          <span className="text-sm text-accent-foreground">{info.title}</span>
          <h3 className="text-2xl font-bold">{info.value}</h3>
        </div>
        <div className="flex justify-end items-end">
          <span className="flex gap-1 text-green-500 text-sm justify-center items-center">
            3.93% <IconArrowUp className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  )
}
