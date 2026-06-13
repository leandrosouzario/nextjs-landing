const technologies = [
  { name: 'Next.js', role: 'Frontend & SSR' },
  { name: 'Supabase Auth', role: 'Autenticação' },
  { name: 'PostgreSQL', role: 'Banco de dados' },
  { name: 'Supabase Storage', role: 'Arquivos' },
  { name: 'Docker', role: 'Containerização' },
  { name: 'Cloudflare Tunnel', role: 'Acesso seguro' },
]

export default function Technology() {
  return (
    <section id="technology" className="py-14 sm:py-16 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Base técnica
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Stack moderna, autogerenciada e preparada para crescimento modular
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700/50"
            >
              <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
              <p className="text-slate-500 text-xs">{tech.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
