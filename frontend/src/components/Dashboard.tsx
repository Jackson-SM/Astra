import {
  IconCalendarFilled,
  IconChartBar,
  IconClockShield,
  IconVocabulary,
} from '@tabler/icons-react'
import { CardInfoDashboard, InfoDashboard } from './dashboard/CardInfoDashboard'
import { Header } from './Header'
import { ScrollArea } from './ui/ScrollArea'

export const Dashboard = () => {
  const info: InfoDashboard[] = [
    {
      title: 'Vocabulário',
      value: 594,
      icon: <IconVocabulary className="w-7 h-7" />,
      color: 'bg-emerald-500',
    },
    {
      title: 'Dias Consecutivos',
      value: '19',
      icon: <IconClockShield className="w-7 h-7" />,
      color: 'bg-purple-500',
    },
    {
      title: 'XP Total',
      value: '2,450',
      icon: <IconCalendarFilled className="w-7 h-7" />,
      color: 'bg-rose-500',
    },
    {
      title: 'Nível Atual',
      value: 'Intermediário',
      icon: <IconChartBar className="w-7 h-7" />,
      color: 'bg-gray-500',
    },
  ]

  return (
    <ScrollArea className="h-full w-full">
      <Header />
      <div className="flex flex-1 h-full w-full">
        <div className="p-2 md:p-10 rounded-tl-2xl bg-background flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex gap-2">
            {info.map((item, idx) => (
              <CardInfoDashboard info={item} key={'info' + idx} />
            ))}
          </div>
          <div className="flex gap-2 flex-1">
            <div className="h-full w-full rounded-lg  bg-card animate-pulse flex-1"></div>
            <div className="flex gap-2 w-full flex-col flex-1">
              {[...new Array(2)].map((i) => (
                <div
                  key={'second' + i}
                  className="h-full w-full rounded-lg  bg-card animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
