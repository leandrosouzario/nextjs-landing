import './globals.css'

export const metadata = {
  title: 'Painel Corporativo — Aplicação Web Full Stack',
  description:
    'Painel corporativo demonstrativo com autenticação, módulos empresariais e arquitetura web moderna.',
  keywords: 'painel corporativo, nextjs, supabase, full stack, dashboard',
  authors: [{ name: 'Leandro Souza' }],
  openGraph: {
    title: 'Painel Corporativo',
    description:
      'Experiência web moderna para centralizar operações e fluxos empresariais.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
