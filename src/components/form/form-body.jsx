import React from 'react'
import classNames from 'classnames'

export default function FormBody({ className, children }) {
  return <div className={classNames('form-body', className)}>{children}</div>
}
