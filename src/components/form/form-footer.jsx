import classNames from 'classnames'

export default function FormFooter({ className, children, ...rest }) {
  return (
    <footer className={classNames('form-footer', className)} {...rest}>
      {children}
    </footer>
  )
}
