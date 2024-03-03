import classNames from 'classnames'

import './input.scss'

export default function Input({ className, type, ...props }) {
  return (
    <input type={type} className={classNames('input', className)} {...props} />
  )
}

export function TextInput({
  type = 'text',
  className,
  value,
  onChange,
  ...props
}) {
  return (
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      {...props}
    />
  )
}

export function MultiLineTextInput({
  className,
  value,
  rows = 3,
  onChange,
  ...props
}) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={classNames('input', className)}
      {...props}
    />
  )
}

export function EmailInput({ className, value, onChange, ...props }) {
  return (
    <Input
      type="email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      {...props}
    />
  )
}

export function PasswordInput({ className, value, onChange, ...props }) {
  return (
    <Input
      type="password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      {...props}
    />
  )
}
