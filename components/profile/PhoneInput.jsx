'use client'

import 'react-phone-number-input/style.css'
import PhoneInputBase from 'react-phone-number-input'
import {
  DEFAULT_COUNTRY_CODE,
  PHONE_COUNTRY_CODES,
  PHONE_COUNTRY_LABELS,
} from '@/lib/countries'

export default function PhoneInput({
  value,
  onChange,
  country,
  onCountryChange,
  disabled = false,
}) {
  return (
    <PhoneInputBase
      international
      defaultCountry={DEFAULT_COUNTRY_CODE}
      country={country || DEFAULT_COUNTRY_CODE}
      value={value || undefined}
      onChange={onChange}
      onCountryChange={onCountryChange}
      disabled={disabled}
      labels={PHONE_COUNTRY_LABELS}
      countries={PHONE_COUNTRY_CODES}
      className="profile-phone-input"
      numberInputProps={{
        className: 'profile-phone-input__number',
        placeholder: 'Telefone',
      }}
    />
  )
}
