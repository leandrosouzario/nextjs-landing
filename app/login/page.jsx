import Header from '@/components/Header'
import AuthPanel from '@/components/auth/AuthPanel'

export default async function LoginPage({ searchParams }) {
  const params = await searchParams
  const initialError =
    params?.error === 'auth_callback_error'
      ? 'Não foi possível concluir a autenticação. O link pode ter expirado — tente novamente.'
      : ''

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8 py-12">
        <AuthPanel initialError={initialError} />
      </main>
    </>
  )
}
