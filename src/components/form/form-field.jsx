import { DataTypeInput } from '@/components/data-type'

export default function FormField({
  label,
  className,
  dataType = 'text',
  ...rest
}) {
  return (
    <label className={className}>
      <span>{label}</span>
      <DataTypeInput dataType={dataType} {...rest} />
    </label>
  )
}
