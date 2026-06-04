'use client'

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para começar?
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de usuários que já estão aproveitando nossa plataforma.
          Não perca esta oportunidade!
        </p>

        {/* CTA Button */}
        <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
          Comece Grátis Agora
        </button>

        {/* Supporting Text */}
        <p className="text-white/70 mt-6 text-sm sm:text-base">
          Sem cartão de crédito necessário. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  )
}
