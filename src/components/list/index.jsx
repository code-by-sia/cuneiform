import React from 'react'

function DefaultView({ value }) {
  return <li>{value}</li>
}

export default function List({
  className,
  title,
  items = [],
  view: View = DefaultView,
  children,
  tabIndex = 0,
  ...props
}) {
  return (
    <>
      {children}
      <ul className={className} tabIndex={tabIndex}>
        {title && <li className="header">{title}</li>}
        {items.map((it, index) => (
          <View
            key={it.id || it.code}
            id={it.id}
            tabIndex={tabIndex + index}
            {...it}
            {...props}
          />
        ))}
      </ul>
    </>
  )
}
