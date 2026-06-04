'use client'

const features = [
  {
    id: 1,
    icon: '⚡',
    title: 'Rápido',
    description: 'Construído com Next.js para máximo desempenho e velocidade.'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Responsivo',
    description: 'Design totalmente responsivo que funciona em todos os dispositivos.'
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Moderno',
    description: 'Interface moderna e intuitiva com design contemporâneo.'
  },
  {
    id: 4,
    icon: '🔒',
    title: 'Seguro',
    description: 'Construído com as melhores práticas de segurança web.'
  },
  {
    id: 5,
    icon: '♿',
    title: 'Acessível',
    description: 'Totalmente acessível seguindo os padrões WCAG.'
  },
  {
    id: 6,
    icon: '📈',
    title: 'Escalável',
    description: 'Arquitetura escalável pronta para crescimento.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Recursos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra o que torna nossa plataforma especial
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
