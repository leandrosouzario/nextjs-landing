'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Bem-vindo à sua Landing Page
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Uma página moderna e responsiva construída com Next.js e Tailwind CSS. 
          Perfeita para apresentar seu projeto ou negócio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Começar Agora
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
            Saiba Mais
          </button>
        </div>

        {/* Decorative Image */}
        <div className="mt-12 sm:mt-16">
          <div className="w-full h-80 sm:h-96 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
            <svg className="w-32 h-32 text-white/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
