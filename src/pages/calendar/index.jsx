import moment from 'moment'
import { useMemo } from 'react'
import Header from '@/components/header'
import Button from '@/components/button'
import Spacer from '@/components/spacer'
import ToggleSidebarButton from '@/components/side-bar/toggle-sidebar'
import { Link } from 'react-router-dom'
import List from '@/components/list'
import Day from '@/pages/calendar/day'

import './calendar.scss'

export default function CalendarPage() {
  const dates = useMemo(() => {
    const today = moment()
    const start = moment().startOf('year')
    return [...Array(1_000)]
      .map((_, i) => moment(start).add(i, 'day'))
      .map((it) => ({
        id: it,
        value: it,
        isSameDay: it.isSame(today, 'day'),
        isSameYear: it.isSame(today, 'year'),
      }))
  }, [])

  return (
    <div className="calendar-page">
      <Header>
        <ToggleSidebarButton />
        <h1>Calendar</h1>
        <Spacer />
        <Link to="./new">
          <Button className="toolbar" icon="PlusCircle" label="Add Event" />
        </Link>
        <a href="#today-date">
          <Button className="toolbar" icon="Clock" label="Today" />
        </a>
      </Header>
      <div className="contents">
        <List className="calendar-days" items={dates} view={Day} />
      </div>
    </div>
  )
}
