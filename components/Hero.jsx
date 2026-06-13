'use client'

import Link from 'next/link'

const highlights = [
  {
    label: 'Módulos',
    value: '6',
    description: 'Áreas empresariais demonstrativas',
  },
  {
    label: 'Autenticação',
    value: 'Ativa',
    description: 'Acesso seguro com sessão persistente',
  },
  {
    label: 'Arquitetura',
    value: 'Full Stack',
    description: 'Next.js, Supabase e infraestrutura própria',
  },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 tracking-wide">
          Plataforma empresarial demonstrativa
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Painel Corporativo
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Uma experiência web moderna para centralizar operações, dados e fluxos
          empresariais em um ambiente seguro e autenticado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/login"
            className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
          >
            Acessar painel
          </Link>
          <a
            href="#modules"
            className="w-full sm:w-auto px-8 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Ver módulos
          </a>
        </div>

        <div className="mt-14 sm:mt-16">
          <div className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden text-left">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-2 flex-1 text-center text-xs sm:text-sm text-slate-300 font-mono truncate">
                painel.leandrosouza.info
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-slate-300 text-sm sm:text-base mb-6 text-center">
                Ambiente integrado para gestão, indicadores e operações — com
                identidade visual corporativa e base técnica escalável.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg bg-white/5 border border-white/10 p-4 sm:p-5 hover:bg-white/10 transition-colors"
                  >
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {item.value}
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
