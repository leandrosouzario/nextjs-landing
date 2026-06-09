'use client'

const highlights = [
  {
    icon: '⚡',
    title: 'Performance',
    value: '< 1s',
    description: 'Carregamento otimizado com Next.js',
  },
  {
    icon: '📱',
    title: 'Responsivo',
    value: '100%',
    description: 'Experiência fluida em qualquer tela',
  },
  {
    icon: '🔒',
    title: 'Autenticação',
    value: 'Supabase',
    description: 'Login seguro com perfil personalizado',
  },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Bem-vindo à sua Landing Page
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Uma página moderna e responsiva construída com Next.js e Tailwind CSS.
          Perfeita para apresentar seu projeto ou negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#cta"
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Começar Agora
          </a>
          <a
            href="#features"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Saiba Mais
          </a>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden text-left">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/10 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-400/90" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/90" />
              <span className="w-3 h-3 rounded-full bg-green-400/90" />
              <span className="ml-2 flex-1 text-center text-xs sm:text-sm text-white/70 font-mono truncate">
                pc.leandrosouza.info
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-white/80 text-sm sm:text-base mb-6 text-center">
                Plataforma pronta para crescer com você — do primeiro acesso ao perfil completo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg bg-white/10 border border-white/15 p-4 sm:p-5 hover:bg-white/15 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                      <span className="text-white font-semibold text-sm sm:text-base">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {item.value}
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
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
