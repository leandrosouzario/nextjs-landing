import { isValidPhoneNumber } from 'libphonenumber-js'

export function isOptionalPhoneValid(phone) {
  if (!phone) {
    return true
  }

  return isValidPhoneNumber(phone)
}
