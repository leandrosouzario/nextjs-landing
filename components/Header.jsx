'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Header() {
  const router = useRouter()
  const supabase = useMemo(() => createClient(), [])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [signingOut, setSigningOut] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function loadSession() {
      const { data: { user: currentUser } } = await supabase.auth.getUser()

      if (isMounted) {
        setUser(currentUser)
        setLoading(false)
      }
    }

    loadSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (isMounted) {
          setUser(session?.user ?? null)
          setLoading(false)
        }
      }
    )

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [supabase])

  async function handleSignOut() {
    setSigningOut(true)
    await supabase.auth.signOut()
    setSigningOut(false)
    router.push('/')
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              NextJS Landing
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/#features"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Recursos
            </Link>
            <Link
              href="/#cta"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Começar
            </Link>
            <Link
              href="/#footer"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contato
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {loading ? (
              <span className="text-sm text-gray-400">...</span>
            ) : user ? (
              <>
                <span className="text-sm text-gray-600 max-w-[180px] truncate">
                  {user.email}
                </span>
                <button
                  type="button"
                  onClick={handleSignOut}
                  disabled={signingOut}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-60"
                >
                  {signingOut ? 'Saindo...' : 'Sair'}
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Entrar
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
            {!loading && !user && (
              <Link
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Entrar
              </Link>
            )}
            {!loading && user && (
              <button
                type="button"
                onClick={handleSignOut}
                disabled={signingOut}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium disabled:opacity-60"
              >
                {signingOut ? '...' : 'Sair'}
              </button>
            )}
            <button className="p-2 rounded-lg hover:bg-gray-100" type="button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
