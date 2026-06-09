'use client'

import { useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  getAvatarStoragePath,
  PROFILE_FIELDS,
  validateAvatarFile,
} from '@/lib/profile'

function getInitials(displayName, email) {
  if (displayName?.trim()) {
    return displayName.trim().charAt(0).toUpperCase()
  }

  return email?.charAt(0).toUpperCase() ?? '?'
}

export default function AvatarUpload({
  userId,
  email,
  displayName,
  avatarUrl,
  onAvatarChange,
}) {
  const supabase = createClient()
  const inputRef = useRef(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  async function handleFileChange(event) {
    const file = event.target.files?.[0]
    event.target.value = ''

    if (!file) {
      return
    }

    const validation = validateAvatarFile(file)
    if (!validation.valid) {
      setError(validation.error)
      return
    }

    setError('')
    setUploading(true)

    const filePath = getAvatarStoragePath(userId, file)

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, {
        upsert: true,
        contentType: file.type,
        cacheControl: '3600',
      })

    if (uploadError) {
      setUploading(false)
      setError('Não foi possível enviar a foto. Tente novamente.')
      return
    }

    const { data: publicData } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath)

    const nextAvatarUrl = `${publicData.publicUrl}?t=${Date.now()}`

    const { data: profile, error: updateError } = await supabase
      .from('profiles')
      .update({ avatar_url: nextAvatarUrl })
      .eq('id', userId)
      .select(PROFILE_FIELDS)
      .single()

    setUploading(false)

    if (updateError) {
      setError('Foto enviada, mas não foi possível atualizar o perfil.')
      return
    }

    onAvatarChange(profile.avatar_url)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <div className="h-24 w-24 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center border-2 border-blue-200 shrink-0">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt="Foto de perfil"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-3xl font-bold text-blue-600">
            {getInitials(displayName, email)}
          </span>
        )}
      </div>

      <div className="text-center sm:text-left">
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleFileChange}
          disabled={uploading}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium disabled:opacity-60"
        >
          {uploading ? 'Enviando...' : avatarUrl ? 'Alterar foto' : 'Adicionar foto'}
        </button>
        <p className="text-xs text-gray-500 mt-2">
          Opcional. JPEG, PNG ou WebP, até 2 MB.
        </p>
        {error && (
          <p className="text-xs text-red-600 mt-2">{error}</p>
        )}
      </div>
    </div>
  )
}
