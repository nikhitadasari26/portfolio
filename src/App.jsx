import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from './context/ThemeContext'
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
    <ThemeProvider>
      <ParallaxProvider>
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', position: 'relative', transition: 'background-color 0.3s ease' }}>
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
    </ThemeProvider>
  )
}

export default App
