import React from 'react'
import classNames from 'classnames'
import Icon from '@/components/icon'

export default function FormHeader({ title, subtitle, icon, className }) {
  return (
    <header className={classNames('form-header', className)}>
      <h1>
        <Icon className="icon" name={icon} /> {title}
      </h1>
      {subtitle && <span>{subtitle}</span>}
    </header>
  )
}
