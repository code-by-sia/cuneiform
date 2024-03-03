import React from 'react'
import classNames from 'classnames'
import { DocumentTextIcon } from '@heroicons/react/16/solid'
import './logo.scss'

export default function Logo({ className }) {
  return (
    <h1 className={classNames('logo', className)}>
      <DocumentTextIcon className="icon" />
      <div>Cuneiform</div>
    </h1>
  )
}
