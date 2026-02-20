import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Pratham from './components/Pratham'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

function App() {
  useEffect(() => {
    let scrollTimeout

    const setScrollingState = () => {
      document.body.classList.add('is-scrolling')
      document.documentElement.classList.add('is-scrolling')

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
        document.documentElement.classList.remove('is-scrolling')
      }, 180)
    }

    window.addEventListener('scroll', setScrollingState, { passive: true })

    return () => {
      clearTimeout(scrollTimeout)
      window.removeEventListener('scroll', setScrollingState)
      document.body.classList.remove('is-scrolling')
      document.documentElement.classList.remove('is-scrolling')
    }
  }, [])

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
