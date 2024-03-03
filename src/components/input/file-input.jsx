import { openTextFile } from '@/services/file-service'
import { useCallback } from 'react'
import { TextInput } from '.'
import Button from '../button'
import Stack from '../container/stack'

export default function FileInput({ value, onChange }) {
  const select = useCallback(async () => {
    const file = await openTextFile()
    onChange && onChange(file)
  }, [onChange])

  return (
    <Stack className="spaced">
      <TextInput
        value={value?.name}
        onChange={(name) => onChange({ ...value, name })}
      />
      <Button
        className="secondary"
        label="Upload a file"
        onClick={select}
        icon="ArrowUpTray"
      />
    </Stack>
  )
}
