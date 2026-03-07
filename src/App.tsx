import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { FeaturedDishes } from './components/FeaturedDishes'
import { MenuPreview } from './components/MenuPreview'
import { Gallery } from './components/Gallery'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ReservationSection } from './components/ReservationSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <FeaturedDishes />
        <MenuPreview />
        <Gallery />
        <TestimonialsSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
