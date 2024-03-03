import React from 'react'
import classNames from 'classnames'
import { TextInput } from '@/components/input/index'
import CountrySelector from '@/components/input/country-selector'
import './address-input.scss'

export default function AddressInput({
  className,
  value,
  onChange,
  tabIndex,
  ...rest
}) {
  return (
    <div className={classNames('address-input')} {...rest} tabIndex={tabIndex}>
      <div className="address">
        <TextInput
          value={value.address}
          placeholder="address line"
          tabIndex={tabIndex}
          onChange={(address) =>
            onChange(Object.assign({}, value, { address }))
          }
        />
        <TextInput
          placeholder="additional information"
          value={value.additional}
          tabIndex={tabIndex}
          onChange={(additional) =>
            onChange(Object.assign({}, value, { additional }))
          }
        />
      </div>
      <div className="zip-code">
        <CountrySelector
          value={value.country}
          tabIndex={tabIndex}
          onChange={(country) =>
            onChange(Object.assign({}, value, { country }))
          }
        />
        <TextInput
          placeholder="City"
          value={value.city}
          tabIndex={tabIndex}
          onChange={(city) => onChange(Object.assign({}, value, { city }))}
        />
        <TextInput
          placeholder="Postal code"
          value={value.zip}
          tabIndex={tabIndex}
          onChange={(zip) => onChange(Object.assign({}, value, { zip }))}
        />
      </div>
    </div>
  )
}
