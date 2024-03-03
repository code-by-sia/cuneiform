import React, { useCallback } from 'react'
import FormField from '@/components/form/form-field'
import FormBody from '@/components/form/form-body'
import objectOf from '@/services/objects'

export default function DynamicFormBody({
  className,
  value = {},
  onChange,
  fields = [],
}) {
  const createOnChange = useCallback(
    (name) => (newValue) => onChange(objectOf(value).set(name, newValue)),
    [value, onChange]
  )

  return (
    <FormBody className={className} tabable={true}>
      {fields.map(({ name, label, className, dataType, ...rest }) => (
        <FormField
          key={name}
          label={label}
          className={className}
          name={name}
          dataType={dataType}
          value={value[name]}
          onChange={createOnChange(name)}
          {...rest}
        />
      ))}
    </FormBody>
  )
}
