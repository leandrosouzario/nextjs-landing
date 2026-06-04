'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              NextJS Landing
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Recursos
            </Link>
            <Link
              href="#cta"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Começar
            </Link>
            <Link
              href="#footer"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contato
            </Link>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Entrar
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
