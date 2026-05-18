import { ParallaxProvider } from 'react-scroll-parallax'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <ParallaxProvider>
      <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', position: 'relative' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ParallaxProvider>
  )
}

export default App
