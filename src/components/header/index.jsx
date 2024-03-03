import './header.scss'

export default function Header({ title, children }) {
  return (
    <header className="page-header">
      {title && <h1>{title}</h1>}
      {children}
    </header>
  )
}
