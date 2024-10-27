import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar'

export const AvatarDemo = () => {
  return (
    <Avatar>
      <AvatarImage src="https://assets.aceternity.com/manu.png" alt="manu" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  )
}
