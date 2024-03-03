import React from 'react'
import classNames from 'classnames'
import Icon from '@/components/icon'

import './button.scss'

export default function Button({
  className,
  children,
  disabled,
  icon,
  postIcon,
  label = '',
  ...rest
}) {
  return (
    <button
      type="button"
      className={classNames('button', className, { disabled: !!disabled })}
      {...rest}
    >
      <Icon name={icon} />
      {label}
      <Icon name={postIcon} />
      {children}
    </button>
  )
}
