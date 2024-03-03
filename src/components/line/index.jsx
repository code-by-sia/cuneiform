import classNames from 'classnames'
import './line.scss'

export default function Line({ className = 'v' }) {
  return <i className={classNames('line', className)} />
}
