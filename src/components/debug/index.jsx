import React from 'react'
import './debug.scss'

export default function Debug({ value }) {
  return <pre>{JSON.stringify(value, null, 2)}</pre>
}
