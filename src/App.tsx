import { useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { useRevealOnScroll } from './hooks'

function App() {
  useRevealOnScroll()

  // Deep links like /#work: the section only exists after React renders.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  )
}

export default App
