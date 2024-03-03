import React from 'react'
import classNames from 'classnames'

import './form.scss'

export default function Form({ children, className, onSubmit, ...rest }) {
  return (
    <form
      className={classNames(className, 'form')}
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit && onSubmit()
      }}
      {...rest}
    >
      {children}
    </form>
  )
}
