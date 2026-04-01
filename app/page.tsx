import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Products } from '@/components/Products'
import { TrackRecord } from '@/components/TrackRecord'
import { PricingPreview } from '@/components/PricingPreview'
import { Testimonial } from '@/components/Testimonial'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <TrackRecord />
        <PricingPreview />
        <Testimonial />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
