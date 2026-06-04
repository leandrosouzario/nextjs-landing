'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">NextJS Landing</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uma landing page moderna construída com Next.js e Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#cta" className="text-gray-400 hover:text-white transition-colors">
                  Começar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition-colors">
                  info@example.com
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="text-gray-400 hover:text-white transition-colors">
                  +55 (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.06 3.742 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.545 2.914 1.209.092-.937.35-1.545.636-1.9-2.22-.252-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.266.098-2.638 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.372.203 2.385.1 2.638.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.195 22 16.44 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2024 NextJS Landing Page. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
