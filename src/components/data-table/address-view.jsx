import React from 'react'
import Icon from '@/components/icon'
import './address-view.scss'

export default function AddressView({ value }) {
  return (
    <div className="address-view">
      {value && <Icon name="MapPin" />}
      <strong>{value?.city}</strong>
      <span>{value?.address}</span>
    </div>
  )
}
