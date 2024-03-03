import React from 'react'
import classNames from 'classnames'
import Button from '@/components/button'

export default function DefaultSelectorTriggerView({
  className,
  icon,
  value,
  children,
  tabIndex = 0,
  onClick,
  ...rest
}) {
  return (
    <Button
      className={classNames('tigger', className)}
      label={value}
      icon={icon}
      onClick={onClick}
      tabIndex={tabIndex}
      {...rest}
    >
      {children}
    </Button>
  )
}
