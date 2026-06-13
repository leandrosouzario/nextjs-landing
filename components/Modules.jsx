'use client'

const modules = [
  {
    id: 'clients',
    icon: '👥',
    title: 'Gestão de Clientes',
    description:
      'Organização de contatos, perfis e relacionamentos em uma área centralizada.',
  },
  {
    id: 'operations',
    icon: '📋',
    title: 'Operações Comerciais',
    description:
      'Acompanhamento de processos, oportunidades e atividades operacionais.',
  },
  {
    id: 'finance',
    icon: '💼',
    title: 'Central Financeira',
    description:
      'Visualização conceitual de valores, simulações, indicadores e históricos financeiros.',
  },
  {
    id: 'documents',
    icon: '📁',
    title: 'Gestão de Documentos',
    description:
      'Espaço para armazenar, consultar e organizar arquivos vinculados a processos internos.',
  },
  {
    id: 'reports',
    icon: '📊',
    title: 'Relatórios e Indicadores',
    description:
      'Área preparada para dashboards, métricas e análises gerenciais.',
  },
  {
    id: 'admin',
    icon: '⚙️',
    title: 'Administração da Plataforma',
    description:
      'Configurações, preferências, perfis e controles administrativos da aplicação.',
  },
]

export default function Modules() {
  return (
    <section id="modules" className="py-16 sm:py-20 lg:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Módulos empresariais
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Áreas conceituais do painel — disponíveis para evolução futura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="relative bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <span className="absolute top-4 right-4 text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                Em breve
              </span>

              <div className="text-3xl mb-4 opacity-90" aria-hidden="true">
                {module.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2 pr-16">
                {module.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
