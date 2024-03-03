import { Link } from 'react-router-dom'
import Button from '.'

export default function LinkButton({ to, className = 'xl ghost', ...props }) {
  return (
    <Link to={to}>
      <Button className={className} {...props} />
    </Link>
  )
}
