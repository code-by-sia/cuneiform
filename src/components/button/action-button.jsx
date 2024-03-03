import React, { useCallback } from 'react'
import Button from '@/components/button/index'

export default function ActionButton({
  label,
  icon,
  onAction,
  tabIndex = 0,
  value = null,
  postAction,
  className,
}) {
  const actionCallback = useCallback(() => {
    onAction && onAction(value)
    postAction && postAction()
  }, [value, postAction, onAction])

  return (
    <Button
      className={className}
      label={label}
      icon={icon}
      onClick={actionCallback}
      tabIndex={tabIndex}
    />
  )
}

export const SubmitActionButton = (props) => (
  <ActionButton
    tabIndex={0}
    className="primary"
    icon="Check"
    label="Submit"
    {...props}
  />
)

export const CancelActionButton = (props) => (
  <ActionButton
    icon="XMark"
    className="secondary"
    tabIndex={0}
    label="Cancel"
    {...props}
  />
)
