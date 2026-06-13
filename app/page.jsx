import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import Modules from '@/components/Modules'
import Technology from '@/components/Technology'
import Security from '@/components/Security'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Overview />
      <Modules />
      <Technology />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}
