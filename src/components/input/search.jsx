import React from 'react'
import { TextInput } from '@/components/input'
import Icon from '@/components/icon'

import './search-input.scss'

export default function SearchInput(props) {
  return (
    <div className="search-input">
      <TextInput {...props} autoComplete="off" />
      <Icon className="search-icon" name="MagnifyingGlass" />
    </div>
  )
}
