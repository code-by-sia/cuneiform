import React from 'react'
import Selector from '@/components/selector'

import Countries from './countries.json'

export default function CountrySelector({ value, onChange, ...rest }) {
  return (
    <Selector value={value} onChange={onChange} options={Countries} {...rest} />
  )
}
