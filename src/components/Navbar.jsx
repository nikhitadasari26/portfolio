import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5,5,15,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 800,
            fontSize: '1.4rem',
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          &lt;Nikhita /&gt;
        </motion.a>

        {/* Desktop Nav */}
        <ul style={{
          display: 'flex',
          gap: '0.25rem',
          listStyle: 'none',
          alignItems: 'center',
        }}
          className="hidden-mobile"
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <motion.a
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href) }}
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: active === href.slice(1) ? '#fff' : 'var(--text-secondary)',
                  background: active === href.slice(1)
                    ? 'rgba(139,92,246,0.2)'
                    : 'transparent',
                  border: active === href.slice(1)
                    ? '1px solid rgba(139,92,246,0.4)'
                    : '1px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* CTA Button — desktop */}
        <motion.a
          href="mailto:nikhitadasari1@gmail.com"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="hidden-mobile"
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '0.5rem',
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Hire Me
        </motion.a>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '0.5rem',
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 0 ? 7 : menuOpen && i === 2 ? -7 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#fff',
                borderRadius: '2px',
                transformOrigin: 'center',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(5,5,15,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <ul style={{ listStyle: 'none', padding: '1rem 1.5rem 1.5rem' }}>
              {navLinks.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNav(href) }}
                    style={{
                      display: 'block',
                      padding: '0.75rem 0',
                      textDecoration: 'none',
                      color: active === href.slice(1) ? '#8b5cf6' : 'var(--text-secondary)',
                      fontWeight: 500,
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
