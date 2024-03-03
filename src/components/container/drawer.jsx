import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function Drawer({
  className,
  closeText = 'Back',
  onClose,
  children,
}) {
  return (
    <aside className={className}>
      <header onClick={onClose}>
        <ArrowLeftIcon className="icon" />
        {closeText}
      </header>
      {children}
    </aside>
  )
}
