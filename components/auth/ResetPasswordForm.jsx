'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { validatePasswordPair } from '@/lib/password'

const inputClassName =
  'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'

export default function ResetPasswordForm() {
  const router = useRouter()
  const supabase = useMemo(() => createClient(), [])

  const [checkingSession, setCheckingSession] = useState(true)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function checkSession() {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.replace('/login?next=/auth/redefinir-senha')
        return
      }

      setCheckingSession(false)
    }

    checkSession()
  }, [supabase, router])

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    const validation = validatePasswordPair(password, confirmPassword)
    if (!validation.valid) {
      setError(validation.error)
      return
    }

    setLoading(true)

    const { error: updateError } = await supabase.auth.updateUser({
      password,
    })

    setLoading(false)

    if (updateError) {
      setError('Não foi possível redefinir a senha. O link pode ter expirado — solicite um novo.')
      return
    }

    await supabase.auth.signOut()
    router.push('/login?success=senha-redefinida')
  }

  if (checkingSession) {
    return (
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 text-center text-gray-500">
        Verificando sessão...
      </div>
    )
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
        Redefinir senha
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Escolha uma nova senha para sua conta
      </p>

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Nova senha
          </label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirmar nova senha
          </label>
          <input
            id="confirmPassword"
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
          className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Salvando...' : 'Redefinir senha'}
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-gray-600">
        <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
          Voltar para o login
        </Link>
      </p>
    </div>
  )
}
