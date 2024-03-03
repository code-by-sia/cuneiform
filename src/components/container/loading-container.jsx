import { ArrowPathIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'

import './loading-container.scss'

export default function LoadingContainer({
  isLoading,
  text = 'Loading...',
  Icon = ArrowPathIcon,
  className,
  children,
}) {
  if (isLoading)
    return (
      <div className={classNames(className, 'loading-container')}>
        <span>{text}</span>
        <Icon className="icon" />
      </div>
    )
  return <>{children}</>
}
