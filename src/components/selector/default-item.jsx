import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Icon from '@/components/icon'

export default function DefaultSelectorItemView({
  id,
  icon,
  value,
  selectedId,
  tabIndex,
  onSelect,
}) {
  const selected = selectedId === id
  const ref = useRef()
  useEffect(() => {
    if (selected && ref?.current) {
      ref?.current?.scrollIntoView()
    }
  }, [selected, ref])

  return (
    <li
      ref={ref}
      onClick={(e) => onSelect && onSelect(id)}
      tabIndex={tabIndex}
      className={classNames({ selected })}
    >
      <Icon name={icon} />
      {value}
      {selected && <Icon className="selected-icon" name="Check" />}
    </li>
  )
}
