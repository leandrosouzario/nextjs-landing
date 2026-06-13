const securityPoints = [
  {
    title: 'Acesso autenticado',
    description: 'Todas as áreas sensíveis exigem identificação do usuário.',
  },
  {
    title: 'Magic link',
    description: 'Login sem senha via link seguro enviado por e-mail.',
  },
  {
    title: 'Sessões persistentes',
    description: 'Experiência contínua com renovação automática de sessão.',
  },
  {
    title: 'Infraestrutura própria',
    description: 'Hospedagem em ambiente controlado, sem exposição direta de portas.',
  },
  {
    title: 'Módulos separados',
    description: 'Arquitetura preparada para isolamento futuro por domínio de negócio.',
  },
]

export default function Security() {
  return (
    <section id="security" className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Segurança e governança
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Princípios que orientam o acesso e a evolução da plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPoints.map((point, index) => (
            <div
              key={point.title}
              className="p-6 rounded-xl border border-slate-200"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center text-sm font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
