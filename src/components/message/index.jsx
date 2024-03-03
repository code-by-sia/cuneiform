import React from 'react'
import './message.scss'

export default function Message({ title, children }) {
  return (
    <div className="message">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}
