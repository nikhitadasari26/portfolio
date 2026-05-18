import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa'

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (y) => setScrolled(y > 60))
  }, [scrollY])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.25, rootMargin: '-70px 0px 0px 0px' }
    )
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(3,3,9,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('#hero')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 600,
              fontSize: '1.15rem',
              background: 'linear-gradient(135deg, #a78bfa, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            nikhita.dev
          </motion.button>

          {/* Desktop links */}
          <ul className="hide-mobile" style={{
            display: 'flex', gap: '0.25rem',
            listStyle: 'none', alignItems: 'center',
          }}>
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = active === href.slice(1)
              return (
                <li key={href}>
                  <motion.button
                    onClick={() => scrollTo(href)}
                    whileHover={{ scale: 1.03 }}
                    style={{
                      background: isActive ? 'rgba(139,92,246,0.12)' : 'transparent',
                      border: isActive ? '1px solid rgba(139,92,246,0.3)' : '1px solid transparent',
                      color: isActive ? '#a78bfa' : 'var(--text-secondary)',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 400,
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {label}
                  </motion.button>
                </li>
              )
            })}
          </ul>

          {/* CTA + socials */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="https://github.com/nikhitadasari26" target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                width: '34px', height: '34px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                borderRadius: '8px', color: 'var(--text-secondary)',
                textDecoration: 'none', fontSize: '1rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nikhita-dasari-310703291/" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '34px', height: '34px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                borderRadius: '8px', color: 'var(--text-secondary)',
                textDecoration: 'none', fontSize: '0.95rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0ea5e9'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <FaLinkedinIn />
            </a>
            <motion.a
              href="mailto:nikhitadasari1@gmail.com"
              whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.01em',
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Hamburger */}
          <motion.button
            className="show-mobile"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 998,
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: 0, right: 0, bottom: 0,
                width: '280px',
                background: 'rgba(8,8,24,0.98)',
                backdropFilter: 'blur(24px)',
                zIndex: 999,
                padding: '5rem 2rem 2rem',
                borderLeft: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => { scrollTo(href); setMenuOpen(false) }}
                  style={{
                    background: active === href.slice(1) ? 'rgba(139,92,246,0.12)' : 'transparent',
                    border: active === href.slice(1) ? '1px solid rgba(139,92,246,0.25)' : '1px solid transparent',
                    color: active === href.slice(1) ? '#a78bfa' : 'var(--text-secondary)',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                  }}
                >
                  {label}
                </motion.button>
              ))}
              <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a href="mailto:nikhitadasari1@gmail.com"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.85rem',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Hire Me →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
