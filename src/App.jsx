import './App.css'
import { useTheme } from './hooks/useTheme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main className="portfolio">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
