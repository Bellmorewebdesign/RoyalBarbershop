import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Reviews from './components/Reviews.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

export default function App() {
  // Wire up scroll-reveal animations for any [data-reveal] element.
  useScrollReveal()

  return (
    <div className="min-h-screen bg-charcoal-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
