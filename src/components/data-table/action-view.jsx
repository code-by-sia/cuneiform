import React, { createContext } from 'react'
import Button from '@/components/button'
import classNames from 'classnames'

export const DeleteAction = { id: 'Delete', icon: 'Trash', className: 'delete' }
export const EditAction = { id: 'Edit', icon: 'Pencil', className: 'edit' }

export const DefaultActions = [DeleteAction, EditAction]

const notHanderFound = (name) => (payload) => {
  console.warn(`Handler **${name}** was not found! Payload:`, payload)
}

export function Action({ id, row, name, icon, className, label, ...rest }) {
  const handerName = `on${id}Action`
  const handler = rest[handerName] || notHanderFound(handerName)

  return (
    <Button
      icon={icon}
      label={label}
      className={classNames('toolbar', className)}
      onClick={(_) => handler(row)}
    />
  )
}

export function ActionsView({ actions = [], children, ...rest }) {
  return (
    <div className="actions">
      {actions.map((action) => (
        <Action key={action.id} {...action} {...rest} />
      ))}
      {children}
    </div>
  )
}
