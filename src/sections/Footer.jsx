import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaHeart, FaArrowUp } from 'react-icons/fa'

const NAV = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact']
const NAV_IDS = ['hero', 'about', 'skills', 'projects', 'achievements', 'contact']

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      {/* Gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: '20%', right: '20%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(236,72,153,0.4), transparent)',
      }} />

      {/* Main footer content */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '3rem 2rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem',
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 700,
            fontSize: '1.15rem',
            background: 'linear-gradient(135deg, #a78bfa, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.75rem',
          }}>
            nikhita.dev
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            Aspiring Software Development Engineer · Flutter · Firebase · DSA
          </p>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {[
              { icon: FaGithub, href: 'https://github.com/nikhitadasari26', label: 'GitHub' },
              { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/nikhita-dasari-310703291/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                style={{
                  width: '34px', height: '34px',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#a78bfa'
                  e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
          }}>
            Navigation
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {NAV.map((label, i) => (
              <button
                key={label}
                onClick={() => document.querySelector(`#${NAV_IDS[i]}`)?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  textAlign: 'left',
                  padding: '0.1rem 0',
                  transition: 'color 0.2s',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
          }}>
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="mailto:nikhitadasari1@gmail.com"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              nikhitadasari1@gmail.com
            </a>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
              📍 Andhra Pradesh, India
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
              🌐 Open to Remote
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        padding: '1.25rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.78rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}>
          © 2025 Sai Manasa Nikhita Dasari. Crafted with
          <FaHeart style={{ color: '#ec4899', fontSize: '0.7rem' }} />
          using React + Vite + Framer Motion
        </p>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.08, y: -2 }}
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '8px',
            padding: '0.4rem 0.85rem',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
            e.currentTarget.style.color = '#a78bfa'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.color = 'var(--text-muted)'
          }}
        >
          <FaArrowUp style={{ fontSize: '0.65rem' }} />
          Back to top
        </motion.button>
      </div>
    </footer>
  )
}
