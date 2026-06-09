export const PROFILE_FIELDS = 'id, email, display_name, avatar_url, phone, country_code, updated_at'

export const AVATAR_MAX_BYTES = 2 * 1024 * 1024
export const AVATAR_ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
export const DISPLAY_NAME_MAX_LENGTH = 100

export function validateDisplayName(displayName) {
  const trimmed = displayName.trim()

  if (!trimmed) {
    return { valid: true, value: null }
  }

  if (trimmed.length > DISPLAY_NAME_MAX_LENGTH) {
    return {
      valid: false,
      error: `O nome deve ter no máximo ${DISPLAY_NAME_MAX_LENGTH} caracteres.`,
    }
  }

  return { valid: true, value: trimmed }
}

export function validateAvatarFile(file) {
  if (!AVATAR_ALLOWED_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: 'Formato inválido. Use JPEG, PNG ou WebP.',
    }
  }

  if (file.size > AVATAR_MAX_BYTES) {
    return {
      valid: false,
      error: 'A imagem deve ter no máximo 2 MB.',
    }
  }

  return { valid: true }
}

export function getAvatarStoragePath(userId, file) {
  const extension = file.type === 'image/png'
    ? 'png'
    : file.type === 'image/webp'
      ? 'webp'
      : 'jpg'

  return `${userId}/avatar.${extension}`
}
