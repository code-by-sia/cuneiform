import Icon from '@/components/icon'
import classNames from 'classnames'
import './day.scss'

export default function Day({ value, isSameDay, isSameYear }) {
  return (
    <li
      className={classNames('date', {
        today: isSameDay,
        'another-year': !isSameYear,
      })}
    >
      <h1>{value.format('DD')}</h1>
      <div id={isSameDay ? 'today-date' : undefined}>
        <span>{value.format('dddd')}</span>
        <small>
          {value.format('MMMM')}
          &nbsp;
          {isSameYear ? '' : value.format('YYYY')}
        </small>
      </div>
      <Icon name="Plus" />
    </li>
  )
}
