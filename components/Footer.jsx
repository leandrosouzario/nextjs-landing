export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white font-semibold text-lg mb-1">Leandro Souza</p>
        <p className="text-sm text-slate-500">
          Painel Corporativo • Aplicação Web Full Stack
        </p>
        <p className="text-xs text-slate-600 mt-4">
          &copy; {new Date().getFullYear()} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
