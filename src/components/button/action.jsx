import Button from '@/components/button'
import Icon from '../icon'

export default function Action({
  label,
  className,
  icon,
  disabled,
  value,
  onClick,
}) {
  return (
    <Button
      className={className}
      disabled={disabled}
      onClick={() => onClick && onClick(value)}
    >
      <Icon name={icon} />
      {label}
    </Button>
  )
}
