'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { validatePasswordPair } from '@/lib/password'

const inputClassName =
  'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'

export default function ChangePasswordForm({ email }) {
  const supabase = createClient()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')

    const validation = validatePasswordPair(newPassword, confirmPassword)
    if (!validation.valid) {
      setError(validation.error)
      return
    }

    if (currentPassword === newPassword) {
      setError('A nova senha deve ser diferente da senha atual.')
      return
    }

    setLoading(true)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password: currentPassword,
    })

    if (signInError) {
      setLoading(false)
      setError('Senha atual incorreta.')
      return
    }

    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    })

    setLoading(false)

    if (updateError) {
      setError('Não foi possível alterar a senha. Tente novamente.')
      return
    }

    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setSuccess('Senha alterada com sucesso.')
  }

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h2 className="text-lg font-bold text-gray-900 mb-1">Segurança</h2>
      <p className="text-sm text-gray-600 mb-6">
        Altere sua senha informando a senha atual
      </p>

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Senha atual
          </label>
          <input
            id="currentPassword"
            type="password"
            autoComplete="current-password"
            required
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
            placeholder="••••••••"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Nova senha
          </label>
          <input
            id="newPassword"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            placeholder="••••••••"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirmar nova senha
          </label>
          <input
            id="confirmNewPassword"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="••••••••"
            className={inputClassName}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Alterando...' : 'Alterar senha'}
        </button>
      </form>
    </div>
  )
}
