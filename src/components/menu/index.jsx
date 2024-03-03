import React, { useMemo } from 'react'
import List from '@/components/list'
import classNames from 'classnames'
import './menu.scss'

function MenuItem({ id, label, icon: Icon, active, onSelect }) {
  return (
    <li
      className={classNames({ active })}
      onClick={() => onSelect && onSelect(id)}
    >
      <Icon className="icon" />
      <span>{label}</span>
    </li>
  )
}

export default function ListMenu({ title, items, value, onChange }) {
  const listItems = useMemo(
    () => items.map((it) => ({ ...it, active: it.id === value })),
    [items, value]
  )
  return (
    <div className="menu">
      {title && <h3 className="title">{title}</h3>}
      <List view={MenuItem} items={listItems} onSelect={onChange} />
    </div>
  )
}
