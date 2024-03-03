import image from '@/assets/img/me.jpeg'
import Avatar from '@/components/avatar'

export default function UserAvatar({ className }) {
  return (
    <Avatar image={image}>
      <span className="dot" />
    </Avatar>
  )
}
