import React from 'react'
import classNames from 'classnames'
import Icon from '@/components/icon'

import './loading-view.scss'

export default function LoadingView({ className = '' }) {
  return (
    <div className={classNames('loading-view', className)}>
      <Icon name="ArrowPath" />
    </div>
  )
}
