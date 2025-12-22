import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Pratham from './components/Pratham'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Pratham />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App
