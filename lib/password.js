export const PASSWORD_MIN_LENGTH = 8

export function validatePasswordPair(password, confirmPassword) {
  if (password.length < PASSWORD_MIN_LENGTH) {
    return {
      valid: false,
      error: `A senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres.`,
    }
  }

  if (password !== confirmPassword) {
    return {
      valid: false,
      error: 'As senhas não coincidem.',
    }
  }

  return { valid: true }
}
