import './globals.css'

export const metadata = {
  title: 'Modern Landing Page - Next.js & Tailwind CSS',
  description: 'Uma landing page moderna, responsiva e otimizada construída com Next.js 14 e Tailwind CSS',
  keywords: 'nextjs, tailwindcss, landing page, webdesign',
  authors: [{ name: 'Leandro Souza' }],
  openGraph: {
    title: 'Modern Landing Page',
    description: 'Uma landing page moderna com Next.js e Tailwind CSS',
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
