import Button from '@/components/button'
import Dialog from '@/components/dialog/index'

export default function DialogTrigger({
  isOpen,
  onToggle,
  className,
  label,
  icon,
  children,
}) {
  return (
    <>
      <Button
        className="toolbar"
        icon={icon}
        label={label}
        onClick={(_) => onToggle(true)}
      />
      <Dialog className={className} isOpen={isOpen} onClose={onToggle}>
        {children}
      </Dialog>
    </>
  )
}
