import classNames from 'classnames'
import './avatar.scss'

export default function Avatar({ className, image, children }) {
  return (
    <div className={classNames('avatar', className)}>
      <img src={image} />
      {children}
    </div>
  )
}
