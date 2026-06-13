import Header from '@/components/Header'
import ProfileForm from '@/components/profile/ProfileForm'

export default function PerfilPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 sm:px-6 lg:px-8 py-12">
        <ProfileForm />
      </main>
    </>
  )
}
