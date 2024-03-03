import Icon from '@/components/icon'
import './tag.scss'

export default function Tag({ icon, children }) {
  return (
    <div className="tag">
      <Icon name={icon} />
      {children}
    </div>
  )
}
