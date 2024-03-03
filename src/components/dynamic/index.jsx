import React from 'react'

export function Dynamic({ component: Component, children, ...props }) {
  return <Component {...props}>{children}</Component>
}
