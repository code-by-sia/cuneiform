import { useEffect, useRef } from 'react'
import './dialogs.scss'

export default function Dialog({
  title,
  className,
  isOpen,
  onClose,
  children,
}) {
  const ref = useRef()
  useEffect(() => {
    if (isOpen) {
      ref?.current?.showModal()
    } else {
      ref?.current?.close()
    }
  }, [ref, isOpen])
  return (
    <dialog className={className} ref={ref} onCancel={onClose}>
      {title && <h6>{title}</h6>}
      {children}
    </dialog>
  )
}
