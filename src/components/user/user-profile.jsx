import UserAvatar from '@/components/user/avatar'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import './user-profile.scss'

export default function UserProfileMenu({ name, email }) {
  return (
    <div className="user-profile">
      <UserAvatar />
      <div className="info">
        <strong>{name}</strong>
        <small>{email}</small>
      </div>
      <EllipsisHorizontalIcon className="more icon" />
    </div>
  )
}
