'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { COUNTRIES, DEFAULT_COUNTRY_CODE } from '@/lib/countries'
import { isOptionalPhoneValid } from '@/lib/phone'
import {
  PROFILE_FIELDS,
  validateDisplayName,
} from '@/lib/profile'
import AvatarUpload from '@/components/profile/AvatarUpload'
import ChangePasswordForm from '@/components/profile/ChangePasswordForm'
import PhoneInput from '@/components/profile/PhoneInput'

const inputClassName =
  'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:text-gray-500'

export default function ProfileForm() {
  const supabase = useMemo(() => createClient(), [])

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [userId, setUserId] = useState('')
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE)

  useEffect(() => {
    let isMounted = true

    async function loadProfile() {
      setLoading(true)
      setError('')

      const { data: { user }, error: userError } = await supabase.auth.getUser()

      if (!isMounted) {
        return
      }

      if (userError || !user) {
        setError('Não foi possível carregar sua sessão.')
        setLoading(false)
        return
      }

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select(PROFILE_FIELDS)
        .eq('id', user.id)
        .single()

      if (!isMounted) {
        return
      }

      if (profileError || !profile) {
        setError('Perfil não encontrado. Execute a migration SQL no Supabase.')
        setLoading(false)
        return
      }

      setUserId(profile.id)
      setEmail(profile.email)
      setDisplayName(profile.display_name ?? '')
      setAvatarUrl(profile.avatar_url ?? '')
      setPhone(profile.phone ?? '')
      setCountryCode(profile.country_code ?? DEFAULT_COUNTRY_CODE)
      setLoading(false)
    }

    loadProfile()
  }, [supabase])

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')

    const nameValidation = validateDisplayName(displayName)
    if (!nameValidation.valid) {
      setError(nameValidation.error)
      return
    }

    if (!isOptionalPhoneValid(phone)) {
      setError('Informe um telefone válido no formato internacional.')
      return
    }

    setSaving(true)

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        display_name: nameValidation.value,
        phone: phone || null,
        country_code: countryCode || null,
      })
      .eq('id', userId)

    setSaving(false)

    if (updateError) {
      setError('Não foi possível salvar as alterações. Tente novamente.')
      return
    }

    setDisplayName(nameValidation.value ?? '')
    setSuccess('Perfil atualizado com sucesso.')
  }

  if (loading) {
    return (
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8 text-center text-gray-500">
        Carregando perfil...
      </div>
    )
  }

  if (error && !userId) {
    return (
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8">
        <p className="text-red-600 text-center mb-4">{error}</p>
        <p className="text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            Voltar para a página inicial
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
        Meu perfil
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Atualize seus dados cadastrais
      </p>

      <div className="mb-8 pb-8 border-b border-gray-200">
        <AvatarUpload
          userId={userId}
          email={email}
          displayName={displayName}
          avatarUrl={avatarUrl}
          onAvatarChange={setAvatarUrl}
        />
      </div>

      {error && userId && (
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            readOnly
            disabled
            className={inputClassName}
          />
          <p className="text-xs text-gray-500 mt-1">
            O e-mail é gerenciado pela autenticação e não pode ser alterado aqui.
          </p>
        </div>

        <div>
          <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
            Nome de exibição
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            placeholder="Como você quer ser chamado"
            maxLength={100}
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-1">
            País
          </label>
          <select
            id="countryCode"
            value={countryCode}
            onChange={(event) => setCountryCode(event.target.value)}
            className={inputClassName}
          >
            {COUNTRIES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone
          </label>
          <PhoneInput
            value={phone}
            onChange={(value) => setPhone(value ?? '')}
            country={countryCode}
            onCountryChange={setCountryCode}
            disabled={saving}
          />
          <p className="text-xs text-gray-500 mt-1">
            Opcional. O código do país é preenchido automaticamente.
          </p>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {saving ? 'Salvando...' : 'Salvar alterações'}
        </button>
      </form>

      <ChangePasswordForm email={email} />

      <p className="text-center mt-6 text-sm text-gray-600">
        <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
          Voltar para a página inicial
        </Link>
      </p>
    </div>
  )
}
