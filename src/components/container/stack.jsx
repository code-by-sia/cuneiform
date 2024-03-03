import classNames from 'classnames'
import './stack.scss'

export default function Stack({ className = 'h spaced', children, ...props }) {
  return (
    <div className={classNames('stack', className)} {...props}>
      {children}
    </div>
  )
}
