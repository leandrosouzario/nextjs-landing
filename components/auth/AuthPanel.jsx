'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { getAuthRedirectUrl } from '@/lib/supabase/auth-redirect'

const MODES = {
  signIn: 'signIn',
  signUp: 'signUp',
  magicLink: 'magicLink',
}

const MODE_LABELS = {
  [MODES.signIn]: 'Entrar',
  [MODES.signUp]: 'Criar conta',
  [MODES.magicLink]: 'Entrar sem senha',
}

const MODE_DESCRIPTIONS = {
  [MODES.signIn]: 'Acesse sua conta com e-mail e senha',
  [MODES.signUp]: 'Crie sua conta e confirme pelo e-mail enviado',
  [MODES.magicLink]: 'Receba um link no e-mail para entrar sem senha',
}

function getErrorMessage(error) {
  const message = error?.message?.toLowerCase() ?? ''

  if (message.includes('email not confirmed')) {
    return 'Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada.'
  }

  if (message.includes('invalid login credentials')) {
    return 'E-mail ou senha incorretos.'
  }

  if (message.includes('user already registered')) {
    return 'Este e-mail já está cadastrado. Tente entrar ou recuperar o acesso.'
  }

  if (message.includes('rate limit')) {
    return 'Muitas tentativas. Aguarde alguns minutos e tente novamente.'
  }

  return error?.message ?? 'Ocorreu um erro. Tente novamente.'
}

export default function AuthPanel({ initialError }) {
  const router = useRouter()
  const supabase = createClient()

  const [mode, setMode] = useState(MODES.signIn)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(initialError ?? '')
  const [success, setSuccess] = useState('')

  function resetFeedback() {
    setError('')
    setSuccess('')
  }

  function switchMode(nextMode) {
    setMode(nextMode)
    resetFeedback()
    setPassword('')
    setConfirmPassword('')
  }

  async function handleSignIn(event) {
    event.preventDefault()
    resetFeedback()
    setLoading(true)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (signInError) {
      setError(getErrorMessage(signInError))
      return
    }

    router.push('/')
    router.refresh()
  }

  async function handleSignUp(event) {
    event.preventDefault()
    resetFeedback()

    if (password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres.')
      return
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    setLoading(true)

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: getAuthRedirectUrl(),
      },
    })

    setLoading(false)

    if (signUpError) {
      setError(getErrorMessage(signUpError))
      return
    }

    setSuccess(
      'Conta criada! Enviamos um e-mail de confirmação. Clique no link para ativar seu cadastro.'
    )
    setPassword('')
    setConfirmPassword('')
  }

  async function handleMagicLink(event) {
    event.preventDefault()
    resetFeedback()
    setLoading(true)

    const { error: otpError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: getAuthRedirectUrl(),
        shouldCreateUser: false,
      },
    })

    setLoading(false)

    if (otpError) {
      setError(getErrorMessage(otpError))
      return
    }

    setSuccess('Enviamos um link de acesso para o seu e-mail. Clique nele para entrar.')
  }

  function handleSubmit(event) {
    if (mode === MODES.signIn) return handleSignIn(event)
    if (mode === MODES.signUp) return handleSignUp(event)
    return handleMagicLink(event)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
          {MODE_LABELS[mode]}
        </h1>
        <p className="text-gray-600 text-center mb-6">
          {MODE_DESCRIPTIONS[mode]}
        </p>

        <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
          {Object.values(MODES).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => switchMode(item)}
              className={`flex-1 rounded-md px-2 py-2 text-xs sm:text-sm font-medium transition-colors ${
                mode === item
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {MODE_LABELS[item]}
            </button>
          ))}
        </div>

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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
            />
          </div>

          {mode !== MODES.magicLink && (
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={mode === MODES.signUp ? 'new-password' : 'current-password'}
                required
                minLength={mode === MODES.signUp ? 8 : undefined}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
              />
            </div>
          )}

          {mode === MODES.signUp && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Aguarde...' : MODE_LABELS[mode]}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Voltar para a página inicial
          </Link>
        </p>
      </div>
    </div>
  )
}
