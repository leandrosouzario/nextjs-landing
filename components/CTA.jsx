import Link from 'next/link'

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Pronto para explorar o painel?
        </h2>

        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          Acesse com suas credenciais para visualizar o perfil, gerenciar sua
          conta e conhecer a base autenticada desta aplicação corporativa.
        </p>

        <Link
          href="/login"
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-slate-900 font-semibold text-lg rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
        >
          Acessar painel
        </Link>

        <p className="text-slate-400 mt-6 text-sm">
          Ambiente demonstrativo — módulos empresariais em desenvolvimento
        </p>
      </div>
    </section>
  )
}
